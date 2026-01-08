
'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { faqs as staticFaqs, successStories as staticStories, services as staticServices } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { doc } from "firebase/firestore";
import { useDoc, useFirestore, useMemoFirebase } from "@/firebase";
import { type Service } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";


type ServicePageProps = {
  params: {
    id: string;
  };
};

const SuccessStoryCard = ({ story }: { story: (typeof staticStories)[0] }) => {
    const storyImage = PlaceHolderImages.find(p => p.id === story.clientImageId);
    return (
        <Card className="overflow-hidden">
            {storyImage && (
                <div className="relative h-48 w-full">
                <Image src={storyImage.imageUrl} alt={story.name} layout="fill" objectFit="cover" data-ai-hint={storyImage.imageHint} />
                </div>
            )}
            <CardHeader>
                <Quote className="h-6 w-6 text-accent mb-2" />
                <CardDescription>"{story.story}"</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="font-bold font-headline">{story.name}</p>
                <p className="text-sm text-muted-foreground">{story.university}</p>
            </CardContent>
        </Card>
    )
}

export default function ServicePage({ params }: ServicePageProps) {
  const firestore = useFirestore();
  const serviceDocRef = useMemoFirebase(() => {
    if (!firestore || !params.id) return null;
    return doc(firestore, 'services', params.id);
  }, [firestore, params.id]);

  const { data: liveService, isLoading } = useDoc<Service>(serviceDocRef);
  
  let service = liveService;
  if (!liveService && !isLoading) {
    service = staticServices.find(s => s.id === params.id) || null;
  }

  const relevantFaqs = staticFaqs.filter(f => f.category === 'general' || f.category === service?.id);
  const relevantStories = staticStories.slice(0,2);

  if (isLoading) {
      return (
          <div className="bg-background py-16 md:py-24">
              <div className="container mx-auto px-4 max-w-5xl">
                   <Skeleton className="h-8 w-32 mb-8" />
                   <div className="text-center mb-12">
                        <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
                        <Skeleton className="h-6 w-1/2 mx-auto" />
                   </div>
                    <Skeleton className="h-96 w-full mb-12" />
                    <Skeleton className="h-40 w-full" />
              </div>
          </div>
      )
  }

  if (!service) {
    notFound();
  }

  const offerings = service.offerings || [];
  const process = service.process || [];
  const benefits = service.benefits || [];
  const longDescription = service.longDescription || "";

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
            </Link>
        </Button>

        <article>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-4">
              {service.title}
            </h1>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{service.shortDescription}</p>
          </header>

          {service.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mb-16 text-foreground/80"
             dangerouslySetInnerHTML={{ __html: longDescription }}
        />

        <div className="grid md:grid-cols-3 gap-12 mb-20 p-8 bg-muted/30 rounded-lg">
            <div>
                <h3 className="font-semibold text-xl font-headline text-primary mb-4">What We Offer</h3>
                <ul className="space-y-2">
                {offerings.map((item, index) => (
                    <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-xl font-headline text-primary mb-4">Our Process</h3>
                <ul className="space-y-2">
                {process.map((item, index) => (
                    <li key={index} className="flex items-start">
                    <span className="font-bold text-primary mr-3 text-lg">{index + 1}.</span>
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-xl font-headline text-primary mb-4">Benefits</h3>
                <ul className="space-y-2">
                {benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>

        {/* FAQs Section */}
        {relevantFaqs.length > 0 && (
            <section className="mb-20">
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {relevantFaqs.map(faq => (
                        <AccordionItem value={faq.id} key={faq.id}>
                            <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        )}

        {/* Success Stories Section */}
         {relevantStories.length > 0 && (
            <section>
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Related Success Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                   {relevantStories.map(story => (
                       <SuccessStoryCard key={story.id} story={story} />
                   ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/success-stories">View More Stories</Link>
                    </Button>
                </div>
            </section>
        )}
        </article>
      </div>
    </div>
  );
}
