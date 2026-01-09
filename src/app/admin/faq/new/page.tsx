
import { FaqForm } from "@/components/forms/faq-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewFaqPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/faq">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to FAQs
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Add a New FAQ</CardTitle>
            <CardDescription>Enter the question and answer for the new FAQ.</CardDescription>
          </CardHeader>
          <CardContent>
            <FaqForm />
          </CardContent>
        </Card>
    </div>
  );
}
