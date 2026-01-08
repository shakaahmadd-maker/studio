
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
import { type OfficeLocation } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(2, { message: "Location name must be at least 2 characters." }),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

type LocationFormValues = z.infer<typeof formSchema>;

interface LocationFormProps {
    location?: OfficeLocation;
}

export function LocationForm({ location }: LocationFormProps) {
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();

  const form = useForm<LocationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: location || {
      name: "",
      address: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: LocationFormValues) {
    if (!firestore) return;

    try {
      if (location) {
        const docRef = doc(firestore, "locations", location.id);
        await updateDoc(docRef, values);
        toast({
          title: "Location Updated!",
          description: "The location details have been updated successfully.",
        });
      } else {
        await addDoc(collection(firestore, 'locations'), {
          ...values,
          createdAt: serverTimestamp(),
        });
        toast({
          title: "Location Added!",
          description: "The new location has been added successfully.",
        });
      }

      router.push("/admin/locations");
      router.refresh();

    } catch (error) {
      console.error("Error saving location:", error);
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
              <FormLabel>Location Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Lahore Head Office" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Address</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter the full street address..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="lahore.office@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+92 123 4567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Saving..." : (location ? "Update Location" : "Add Location")}
        </Button>
      </form>
    </Form>
  );
}
