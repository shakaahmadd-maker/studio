
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";

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
import { useFirestore } from "@/firebase";
import { type FAQ } from "@/lib/types";

const formSchema = z.object({
  question: z.string().min(10, { message: "Question must be at least 10 characters." }),
  answer: z.string().min(20, { message: "Answer must be at least 20 characters." }),
  category: z.string().min(2, { message: "Category is required." }),
});

type FaqFormValues = z.infer<typeof formSchema>;

interface FaqFormProps {
    faq?: FAQ;
}

export function FaqForm({ faq }: FaqFormProps) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();

  const form = useForm<FaqFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: faq || {
      question: "",
      answer: "",
      category: "general",
    },
  });

  async function onSubmit(values: FaqFormValues) {
    if (!firestore) return;

    try {
      if (faq) {
        const docRef = doc(firestore, "faqs", faq.id);
        await updateDoc(docRef, values);
        toast({
          title: "FAQ Updated!",
          description: "The FAQ has been updated successfully.",
        });
      } else {
        await addDoc(collection(firestore, 'faqs'), {
          ...values,
          createdAt: serverTimestamp(),
        });
        toast({
          title: "FAQ Added!",
          description: "The new FAQ has been added successfully.",
        });
      }

      router.push("/admin/faq");
      router.refresh();

    } catch (error) {
      console.error("Error saving FAQ:", error);
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
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input placeholder="e.g., What documents are required?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Textarea placeholder="Provide a clear and concise answer..." {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="e.g., general, germany, visa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving..." : (faq ? "Update FAQ" : "Add FAQ")}
        </Button>
      </form>
    </Form>
  );
}
