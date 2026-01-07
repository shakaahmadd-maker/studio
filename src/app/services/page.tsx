import Link from "next/link";
import { services } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ServicesPage() {
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
            {services.map((service) => {
                const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
                return (
                    <Card key={service.id} className="flex flex-col">
                        {serviceImage && (
                            <div className="relative h-48 w-full">
                                <Image 
                                    src={serviceImage.imageUrl} 
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={serviceImage.imageHint}
                                />
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="font-headline">{service.title}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <ul className="space-y-2 text-sm text-muted-foreground">
                                {service.details.offerings.slice(0,3).map((item, index) => (
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
