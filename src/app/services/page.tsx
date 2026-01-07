import { services } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive range of services to support you at every stage of your journey to studying abroad.
          </p>
        </header>

        <main>
          <Tabs defaultValue={services[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id}>{service.title}</TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-base pt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-semibold text-lg font-headline text-primary mb-4">What We Offer</h3>
                        <ul className="space-y-2">
                          {service.details.offerings.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg font-headline text-primary mb-4">Our Process</h3>
                        <ul className="space-y-2">
                          {service.details.steps.map((item, index) => (
                             <li key={index} className="flex items-start">
                              <span className="font-bold text-primary mr-2">{index + 1}.</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg font-headline text-primary mb-4">Benefits</h3>
                        <ul className="space-y-2">
                          {service.details.benefits.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </div>
    </div>
  );
}
