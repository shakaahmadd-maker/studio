
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { getSdks } from "@/firebase/server";
import { LocationForm } from "@/components/forms/location-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type OfficeLocation } from "@/lib/types";

async function getLocation(id: string): Promise<OfficeLocation | null> {
  const { firestore } = getSdks();
  const locDoc = await getDoc(doc(firestore, "locations", id));
  if (!locDoc.exists()) {
    return null;
  }
  return { id: locDoc.id, ...locDoc.data() } as OfficeLocation;
}

export default async function EditLocationPage({ params }: { params: { id: string } }) {
  const location = await getLocation(params.id);

  if (!location) {
    notFound();
  }

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
            <CardTitle className="font-headline text-3xl">Edit Location</CardTitle>
            <CardDescription>Update the details for this office location.</CardDescription>
          </CardHeader>
          <CardContent>
            <LocationForm location={location} />
          </CardContent>
        </Card>
    </div>
  );
}
