
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp, doc, updateDoc, Timestamp } from "firebase/firestore";
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
import { type BlogPost } from "@/lib/types";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  author: z.string().min(2, { message: "Author name must be at least 2 characters." }),
  excerpt: z.string().min(20, { message: "Excerpt must be at least 20 characters." }).max(200, { message: "Excerpt must be less than 200 characters." }),
  content: z.string().min(100, { message: "Content must be at least 100 characters." }),
  image: z.any()
    .refine((files) => (files?.[0] || typeof files === 'string'), "Image is required.")
    .refine((files) => typeof files === 'string' || files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => typeof files === 'string' || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
});

type BlogPostFormValues = z.infer<typeof formSchema>;

interface BlogPostFormProps {
    post?: BlogPost;
}

export function BlogPostForm({ post }: BlogPostFormProps) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();
  const storage = getStorage();

  const defaultValues = post ? {
      title: post.title,
      author: post.author,
      excerpt: post.excerpt,
      content: post.content,
      image: post.imageUrl,
  } : {
      title: "",
      author: "",
      excerpt: "",
      content: "",
      image: undefined,
  }

  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const uploadImage = async (imageFile: File): Promise<string> => {
    const storageRef = ref(storage, `blog/${uuidv4()}-${imageFile.name}`);
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

  async function onSubmit(values: BlogPostFormValues) {
    if (!firestore) return;

    try {
      let imageUrl = post?.imageUrl || '';
      if (values.image && typeof values.image !== 'string') {
        imageUrl = await uploadImage(values.image[0]);
      }
      
      const slug = createSlug(values.title);

      if (post) {
        const postData = {
            ...values,
            slug,
            imageUrl,
        };
        // @ts-ignore
        delete postData.image;
        const postRef = doc(firestore, "blog_posts", post.id);
        await updateDoc(postRef, postData);
        toast({
          title: "Post Updated!",
          description: "The blog post has been updated successfully.",
        });
      } else {
        const postData = {
            ...values,
            slug,
            imageUrl,
            publicationDate: serverTimestamp(),
        };
        // @ts-ignore
        delete postData.image;
        await addDoc(collection(firestore, 'blog_posts'), postData);
        toast({
          title: "Post Created!",
          description: "The new blog post has been added successfully.",
        });
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      console.error("Error saving post:", error);
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Title</FormLabel>
              <FormControl>
                <Input placeholder="An amazing blog post title" {...field} />
              </FormControl>
               <FormDescription>This is the main headline of the blog post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="image"
            render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Feature Image</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={(event) => onChange(event.target.files)}
                />
              </FormControl>
              <FormDescription>The main image that appears at the top of the post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea placeholder="A short, catchy summary of the post..." {...field} rows={3} />
              </FormControl>
              <FormDescription>This summary appears on the main blog listing page.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content (HTML supported)</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your blog post here. Use HTML tags like <h3>, <p>, <ul>, <li>, and <strong> for formatting." {...field} rows={10} />
              </FormControl>
              <FormDescription>The full content of the blog post. Supports HTML for rich text formatting.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving..." : (post ? "Update Post" : "Create Post")}
        </Button>
      </form>
    </Form>
  );
}
