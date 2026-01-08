import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { getSdks } from "@/firebase/server";
import { ServiceForm } from "@/components/forms/service-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type Service } from "@/lib/types";

async function getService(id: string): Promise<Service | null> {
  const { firestore } = getSdks();
  const serviceDoc = await getDoc(doc(firestore, "services", id));
  if (!serviceDoc.exists()) {
    return null;
  }
  return { id: serviceDoc.id, ...serviceDoc.data() } as Service;
}

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const service = await getService(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Edit Service</CardTitle>
            <CardDescription>Update the details for this service.</CardDescription>
          </CardHeader>
          <CardContent>
            <ServiceForm service={service} />
          </CardContent>
        </Card>
    </div>
  );
}
