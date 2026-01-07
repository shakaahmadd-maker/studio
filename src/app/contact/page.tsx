import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Mail className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For general inquiries, please email us at:</p>
                <a href="mailto:contact@unihelpconsultants.com" className="text-primary font-semibold hover:underline">
                  contact@unihelpconsultants.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Phone className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Speak to one of our counselors directly:</p>
                <a href="tel:+923417548178" className="text-primary font-semibold hover:underline">
                  +92 341 7548178
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                    123 Education Lane, <br/>
                    Knowledge City, 12345
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
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
