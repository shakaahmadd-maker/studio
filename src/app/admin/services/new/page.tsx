import { ServiceForm } from "@/components/forms/service-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewServicePage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Create a New Service</CardTitle>
            <CardDescription>Enter the details for the new service.</CardDescription>
          </CardHeader>
          <CardContent>
            <ServiceForm />
          </CardContent>
        </Card>
    </div>
  );
}
