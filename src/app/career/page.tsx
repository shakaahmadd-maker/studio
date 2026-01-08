
'use client';

import { CareerForm } from "@/components/forms/career-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { type JobOpening } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function CareerPage() {
  const firestore = useFirestore();
  const jobsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "job_openings"), orderBy("createdAt", "desc"));
  }, [firestore]);
  const { data: jobOpenings, isLoading } = useCollection<JobOpening>(jobsQuery);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Join Our Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Be a part of a dynamic team dedicated to shaping students' futures. We're looking for passionate individuals to help us grow.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-12">
            <main className="lg:col-span-3">
                <h2 className="text-3xl font-bold font-headline mb-8">Current Openings</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {isLoading && Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="p-6">
                            <Skeleton className="h-6 w-3/4 mb-4" />
                            <div className="flex gap-4">
                                <Skeleton className="h-5 w-24" />
                                <Skeleton className="h-5 w-24" />
                            </div>
                        </Card>
                    ))}
                    {jobOpenings && jobOpenings.map(job => (
                       <AccordionItem value={job.id} key={job.id} id={job.id} className="border rounded-lg scroll-mt-20">
                            <AccordionTrigger className="p-6 hover:no-underline">
                                <div className="text-left">
                                    <h3 className="font-headline text-xl">{job.title}</h3>
                                    <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-6 pt-0">
                                <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    {!isLoading && (!jobOpenings || jobOpenings.length === 0) && (
                        <div className="text-center text-muted-foreground py-12">
                            <p>There are no current openings. Please check back later or submit a general application.</p>
                        </div>
                    )}
                </Accordion>
            </main>
            <aside className="lg:col-span-2">
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline">Apply Now</CardTitle>
                        <CardDescription>Can't find a suitable role? Submit a general application, and we'll get in touch if a fitting opportunity arises.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <CareerForm />
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
