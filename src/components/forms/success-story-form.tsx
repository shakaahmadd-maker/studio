
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFirestore } from "@/firebase";
import { type SuccessStory } from "@/lib/types";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const imageSchema = z.any()
    .refine((files) => (files?.[0] || typeof files === 'string'), "Image is required.")
    .refine((files) => typeof files === 'string' || files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => typeof files === 'string' || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    );

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  university: z.string().min(5, { message: "University name is required." }),
  story: z.string().min(50, { message: "The success story must be at least 50 characters." }),
  clientImage: imageSchema,
  visaImage: imageSchema,
});

type SuccessStoryFormValues = z.infer<typeof formSchema>;

interface SuccessStoryFormProps {
    story?: SuccessStory;
}

export function SuccessStoryForm({ story: existingStory }: SuccessStoryFormProps) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const storage = getStorage();

  const defaultValues = existingStory ? {
      name: existingStory.name,
      university: existingStory.university,
      story: existingStory.story,
      clientImage: existingStory.clientImageUrl,
      visaImage: existingStory.visaImageUrl,
  } : {
      name: "",
      university: "",
      story: "",
      clientImage: undefined,
      visaImage: undefined,
  }

  const form = useForm<SuccessStoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const uploadImage = async (imageFile: File, path: string): Promise<string> => {
    const storageRef = ref(storage, `${path}/${uuidv4()}-${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  async function onSubmit(values: SuccessStoryFormValues) {
    if (!firestore) return;

    try {
        let clientImageUrl = existingStory?.clientImageUrl || '';
        if (values.clientImage && typeof values.clientImage !== 'string') {
            clientImageUrl = await uploadImage(values.clientImage[0], 'success-stories/clients');
        }

        let visaImageUrl = existingStory?.visaImageUrl || '';
        if (values.visaImage && typeof values.visaImage !== 'string') {
            visaImageUrl = await uploadImage(values.visaImage[0], 'success-stories/visas');
        }

      const storyData = {
        name: values.name,
        university: values.university,
        story: values.story,
        clientImageUrl,
        visaImageUrl,
      };
      
      if (existingStory) {
        const storyRef = doc(firestore, "success_stories", existingStory.id);
        await updateDoc(storyRef, storyData);
        toast({
          title: "Success Story Updated!",
          description: "The story has been updated successfully.",
        });
      } else {
        await addDoc(collection(firestore, 'success_stories'), {
            ...storyData,
            createdAt: serverTimestamp()
        });
        toast({
          title: "Success Story Added!",
          description: `The story for ${values.name} has been added.`,
        });
      }

      router.push("/admin/stories");
      router.refresh();

    } catch (error) {
      console.error("Error saving story:", error);
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
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University & Country</FormLabel>
              <FormControl>
                <Input placeholder="e.g., University of Toronto, Canada" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Success Story (Quote)</FormLabel>
              <FormControl>
                <Textarea placeholder="Share the student's journey and success in a short quote..." {...field} rows={4} />
              </FormControl>
               <FormDescription>This will be displayed as a quote on the success story card.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
                control={form.control}
                name="clientImage"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                <FormLabel>Student's Photo</FormLabel>
                <FormControl>
                    <Input
                    {...fieldProps}
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={(event) => onChange(event.target.files)}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="visaImage"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                <FormLabel>Visa Copy Photo</FormLabel>
                <FormControl>
                    <Input
                    {...fieldProps}
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={(event) => onChange(event.target.files)}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving..." : "Save Success Story"}
        </Button>
      </form>
    </Form>
  );
}
