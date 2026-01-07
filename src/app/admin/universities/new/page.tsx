import { UniversityForm } from "@/components/forms/university-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewUniversityPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/universities">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universities
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Add a New University Partner</CardTitle>
            <CardDescription>Enter the university's name and upload their logo.</CardDescription>
          </CardHeader>
          <CardContent>
            <UniversityForm />
          </CardContent>
        </Card>
    </div>
  );
}
