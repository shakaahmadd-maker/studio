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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_CV_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  lookingFor: z.enum(["bachelor", "master", "phd", "diploma"]),
  cv: z.any()
    .refine((files) => files?.length === 1, "CV is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_CV_TYPES.includes(files?.[0]?.type),
      ".pdf, .doc, and .docx files are accepted."
    ),
  transcripts: z.any().optional(),
  englishCertificate: z.enum(["ielts", "toefl", "pte", "duolingo", "proficiency_certificate"]),
  budget: z.string().optional(),
  referral: z.string().optional(),
});

export function ConsultationForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      budget: "",
      referral: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend.
    console.log(values);
    toast({
      title: "Consultation Request Sent!",
      description: "Thank you for your request. Our team will review it and get back to you soon.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                    <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <FormField
          control={form.control}
          name="lookingFor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Looking for*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bachelor">Bachelor</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
                control={form.control}
                name="cv"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                <FormLabel>Upload CV*</FormLabel>
                <FormControl>
                    <Input
                    {...fieldProps}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) => onChange(event.target.files)}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="transcripts"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                <FormLabel>Transcripts</FormLabel>
                <FormControl>
                    <Input
                    {...fieldProps}
                    type="file"
                    accept=".pdf,.zip,.rar"
                    onChange={(event) => onChange(event.target.files)}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="englishCertificate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>English Certificate*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your English certificate" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ielts">IELTS</SelectItem>
                  <SelectItem value="toefl">TOEFL</SelectItem>
                  <SelectItem value="pte">PTE</SelectItem>
                  <SelectItem value="duolingo">Duolingo</SelectItem>
                  <SelectItem value="proficiency_certificate">English Proficiency Certificate</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Your Budget</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., $15,000 USD" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Referral (if any)</FormLabel>
                <FormControl>
                    <Input placeholder="Referred by..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
