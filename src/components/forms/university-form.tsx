
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg+xml"];

const formSchema = z.object({
  name: z.string().min(2, { message: "University name is required." }),
  logo: z.any()
    .refine((files) => files?.length === 1, "Logo image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 2MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png, .webp, and .svg files are accepted."
    ),
});

type UniversityFormValues = z.infer<typeof formSchema>;

export function UniversityForm() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const storage = getStorage();
  const router = useRouter();

  const form = useForm<UniversityFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const uploadLogo = async (logoFile: File): Promise<string> => {
    const storageRef = ref(storage, `universities/${uuidv4()}-${logoFile.name}`);
    await uploadBytes(storageRef, logoFile);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  async function onSubmit(values: UniversityFormValues) {
    if (!firestore) return;

    try {
      const logoUrl = await uploadLogo(values.logo[0]);
      
      await addDoc(collection(firestore, 'universities'), {
        name: values.name,
        logoUrl: logoUrl,
        createdAt: serverTimestamp(),
      });

      toast({
        title: "University Added!",
        description: `${values.name} has been added to the list of partners.`,
      });
      
      router.push("/admin/universities");
      router.refresh();

    } catch (error) {
      console.error("Error adding university:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Technical University of Munich" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="logo"
            render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>University Logo</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/svg+xml"
                  onChange={(event) => onChange(event.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Adding...' : 'Add University'}
        </Button>
      </form>
    </Form>
  );
}
