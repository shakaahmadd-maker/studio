
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp, doc, setDoc, updateDoc } from "firebase/firestore";
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
import { type Service } from "@/lib/types";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  shortDescription: z.string().min(20, { message: "Short description must be at least 20 characters." }).max(200, { message: "Short description must be less than 200 characters." }),
  longDescription: z.string().min(100, { message: "Detailed description must be at least 100 characters." }),
  image: z.any()
    .refine((files) => files?.length === 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .or(z.string()),
  offerings: z.string().min(1, {message: "Please list at least one offering."}),
  process: z.string().min(1, {message: "Please list at least one process step."}),
  benefits: z.string().min(1, {message: "Please list at least one benefit."}),
});

type ServiceFormValues = z.infer<typeof formSchema>;

interface ServiceFormProps {
    service?: Service;
}

export function ServiceForm({ service }: ServiceFormProps) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const storage = getStorage();

  const defaultValues = service ? {
      title: service.title,
      shortDescription: service.shortDescription,
      longDescription: service.longDescription,
      image: service.imageUrl,
      offerings: service.offerings.join('\n'),
      process: service.process.join('\n'),
      benefits: service.benefits.join('\n'),
  } : {
      title: "",
      shortDescription: "",
      longDescription: "",
      offerings: "",
      process: "",
      benefits: "",
  }

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const uploadImage = async (imageFile: File): Promise<string> => {
    const storageRef = ref(storage, `services/${uuidv4()}-${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  async function onSubmit(values: ServiceFormValues) {
    if (!firestore) return;

    try {
      let imageUrl = service?.imageUrl || '';
      if (values.image && typeof values.image !== 'string') {
        imageUrl = await uploadImage(values.image[0]);
      }
      
      const slug = createSlug(values.title);

      const serviceData = {
        ...values,
        slug,
        imageUrl,
        offerings: values.offerings.split('\n').filter(s => s.trim() !== ''),
        process: values.process.split('\n').filter(s => s.trim() !== ''),
        benefits: values.benefits.split('\n').filter(s => s.trim() !== ''),
        createdAt: serverTimestamp(),
      };
      
      // @ts-ignore
      delete serviceData.image;

      if (service) {
        // Update existing service
        const serviceRef = doc(firestore, "services", service.id);
        await updateDoc(serviceRef, serviceData);
        toast({
          title: "Service Updated!",
          description: "The service has been updated successfully.",
        });
      } else {
        // Create new service
        await addDoc(collection(firestore, 'services'), serviceData);
        toast({
          title: "Service Created!",
          description: "The new service has been added successfully.",
        });
      }

      router.push("/admin/services");
      router.refresh();
    } catch (error) {
      console.error("Error saving service:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Study in Germany" {...field} />
              </FormControl>
              <FormDescription>This will be the main heading for the service.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Header Image</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={(event) => onChange(event.target.files)}
                />
              </FormControl>
               <FormDescription>The main image for the service page.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shortDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea placeholder="A brief, catchy description for service preview cards..." {...field} rows={3} />
              </FormControl>
               <FormDescription>This appears on the main services listing page.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="longDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detailed Description (HTML supported)</FormLabel>
              <FormControl>
                <Textarea placeholder="Provide a full, detailed description. You can use HTML tags like <h3>, <p>, <ul>, <li>, and <strong> for formatting." {...field} rows={10} />
              </FormControl>
               <FormDescription>This is the main content for the individual service page. Supports HTML for rich formatting.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FormField
            control={form.control}
            name="offerings"
            render={({ field }) => (
                <FormItem>
                <FormLabel>What We Offer</FormLabel>
                <FormControl>
                    <Textarea placeholder="List each offering on a new line." {...field} rows={6} />
                </FormControl>
                <FormDescription>Each line will become a bullet point.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="process"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Our Process</FormLabel>
                <FormControl>
                    <Textarea placeholder="List each step on a new line." {...field} rows={6} />
                </FormControl>
                 <FormDescription>Each line will become a numbered step.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="benefits"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Benefits</FormLabel>
                <FormControl>
                    <Textarea placeholder="List each benefit on a new line." {...field} rows={6} />
                </FormControl>
                 <FormDescription>Each line will become a bullet point.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Saving..." : "Save Service"}
        </Button>
      </form>
    </Form>
  );
}
