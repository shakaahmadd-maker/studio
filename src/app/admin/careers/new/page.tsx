import { JobOpeningForm } from "@/components/forms/job-opening-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewJobOpeningPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/careers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Openings
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Create a New Job Opening</CardTitle>
            <CardDescription>Enter the details for the new vacancy.</CardDescription>
          </CardHeader>
          <CardContent>
            <JobOpeningForm />
          </CardContent>
        </Card>
    </div>
  );
}
