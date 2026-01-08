
'use client';

import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import type { OfficeLocation } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { locations as staticLocations } from "@/lib/data.tsx";

export default function ContactPage() {
  const firestore = useFirestore();
  const locationsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "locations"), orderBy("createdAt", "asc"));
  }, [firestore]);
  const { data: liveLocations, isLoading } = useCollection<OfficeLocation>(locationsQuery);

  const locationsToDisplay = liveLocations && liveLocations.length > 0 ? liveLocations : staticLocations;

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help you with your study abroad journey. Reach out to us with your questions, and we'll be happy to assist you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {isLoading && Array.from({ length: 2 }).map((_, i) => (
                <Card key={i}>
                    <CardHeader className="flex-row items-center gap-4">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent>
                       <Skeleton className="h-4 w-full mb-2" />
                       <Skeleton className="h-5 w-48" />
                    </CardContent>
                </Card>
            ))}
            {locationsToDisplay && locationsToDisplay.map((location: any) => (
                <Card key={location.id}>
                    <CardHeader className="flex-row items-start gap-4">
                        <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <CardTitle className="font-headline">{location.name}</CardTitle>
                             <p className="text-muted-foreground pt-1">{location.address}</p>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex items-center gap-4">
                             <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                             <a href={`mailto:${location.email}`} className="text-primary font-semibold hover:underline">
                                {location.email}
                            </a>
                        </div>
                         <div className="flex items-center gap-4">
                             <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-primary font-semibold hover:underline">
                                {location.phone}
                            </a>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
                <CardDescription>Have a question? Fill out the form and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
