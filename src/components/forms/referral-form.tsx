
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
import { Separator } from "@/components/ui/separator";
import { useFirestore } from "@/firebase";

const formSchema = z.object({
  referrerName: z.string().min(2, { message: "Your name must be at least 2 characters." }),
  referrerEmail: z.string().email({ message: "Please enter a valid email address." }),
  refereeName: z.string().min(2, { message: "Referral's name must be at least 2 characters." }),
  refereeEmail: z.string().email({ message: "Please enter a valid email for your referral." }),
  refereePhone: z.string().min(10, { message: "Please enter a valid phone number for your referral." }),
});

export function ReferralForm() {
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
      refereePhone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) return;

    try {
        await addDoc(collection(firestore, "referrals"), {
            ...values,
            createdAt: serverTimestamp(),
            status: "Pending", // Add a default status
        });
        toast({
            title: "Referral Submitted!",
            description: "Thank you for the referral. We will get in touch with them shortly.",
        });
        form.reset();
    } catch (error) {
        console.error("Error submitting referral:", error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem submitting your referral. Please try again later.",
        });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-lg font-semibold font-headline">Your Information</h3>
        <FormField
          control={form.control}
          name="referrerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referrerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Separator className="my-8" />
        
        <h3 className="text-lg font-semibold font-headline">Your Referral's Information</h3>
        <FormField
          control={form.control}
          name="refereeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referral's Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="refereeEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referral's Email</FormLabel>
              <FormControl>
                <Input placeholder="jane.smith@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="refereePhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referral's Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1 (987) 654-3210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Submitting..." : "Submit Referral"}
        </Button>
      </form>
    </Form>
  );
}
