
import { LocationForm } from "@/components/forms/location-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewLocationPage() {
  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/locations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Locations
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Add a New Location</CardTitle>
            <CardDescription>Enter the details for the new office or contact point.</CardDescription>
          </CardHeader>
          <CardContent>
            <LocationForm />
          </CardContent>
        </Card>
    </div>
  );
}
