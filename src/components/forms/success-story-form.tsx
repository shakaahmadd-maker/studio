"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  university: z.string().min(5, { message: "University name is required." }),
  story: z.string().min(50, { message: "The success story must be at least 50 characters." }),
  clientImage: z.any()
    .refine((files) => files?.length === 1, "Client image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  visaImage: z.any()
    .refine((files) => files?.length === 1, "Visa image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
});

export function SuccessStoryForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      university: "",
      story: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Success Story Added!",
      description: `The story for ${values.name} has been added.`,
    });
    form.reset();
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
              <FormLabel>Success Story</FormLabel>
              <FormControl>
                <Textarea placeholder="Share the student's journey and success..." {...field} rows={6} />
              </FormControl>
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
        <Button type="submit" className="w-full">Add Success Story</Button>
      </form>
    </Form>
  );
}
