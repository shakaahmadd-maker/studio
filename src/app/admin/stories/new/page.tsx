import { SuccessStoryForm } from "@/components/forms/success-story-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewSuccessStoryPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/stories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Add a New Success Story</CardTitle>
            <CardDescription>Enter the details of the student's success to feature them on the website.</CardDescription>
          </CardHeader>
          <CardContent>
            <SuccessStoryForm />
          </CardContent>
        </Card>
    </div>
  );
}
