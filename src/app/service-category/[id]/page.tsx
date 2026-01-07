import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories, faqs, successStories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type ServiceCategoryPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    id: category.id,
  }));
}

const SuccessStoryCard = ({ story }: { story: (typeof successStories)[0] }) => {
    const storyImage = PlaceHolderImages.find(p => p.id === story.imageId);
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

export default function ServiceCategoryPage({ params }: ServiceCategoryPageProps) {
  const category = serviceCategories.find((s) => s.id === params.id);

  if (!category) {
    notFound();
  }

  const relevantFaqs = faqs.filter(f => f.category === 'general');
  const relevantStories = successStories.slice(0,2); 

  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
            </Link>
        </Button>

        <article>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-4">
              {category.title}
            </h1>
             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
          </header>

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mb-16 text-foreground/80">
            <p>{category.details.longDescription}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div>
                <h3 className="font-semibold text-xl font-headline text-primary mb-4">What We Offer</h3>
                <ul className="space-y-2">
                {category.details.offerings.map((item, index) => (
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
                {category.details.steps.map((item, index) => (
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
                {category.details.benefits.map((item, index) => (
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
                <h2 className="text-3xl font-bold font-headline text-center mb-8">Student Success Stories</h2>
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
