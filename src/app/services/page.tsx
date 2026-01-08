
'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesPage() {
  const firestore = useFirestore();
  const servicesQuery = useMemoFirebase(() => query(collection(firestore, "services"), orderBy("createdAt", "asc")), [firestore]);
  const { data: services, isLoading } = useCollection(servicesQuery);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive range of services to support you at every stage of your journey to studying abroad.
          </p>
        </header>

        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading && Array.from({length: 6}).map((_, i) => (
                <Card key={i}>
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full mt-2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/6 mt-2" />
                        <Skeleton className="h-4 w-5/6 mt-2" />
                    </CardContent>
                    <CardFooter>
                        <Skeleton className="h-6 w-24" />
                    </CardFooter>
                </Card>
            ))}
            {services && services.map((service) => {
                return (
                    <Card key={service.id} className="flex flex-col">
                        {service.imageUrl && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={service.imageUrl} 
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="font-headline">{service.title}</CardTitle>
                            <CardDescription>{service.shortDescription}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <ul className="space-y-2 text-sm text-muted-foreground">
                                {service.offerings.slice(0,3).map((item, index) => (
                                    <li key={index} className="flex items-center">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                    <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="p-0">
                                <Link href={`/services/${service.id}`}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                )
            })}
        </main>
      </div>
    </div>
  );
}
