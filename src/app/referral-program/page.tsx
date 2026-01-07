import { ReferralForm } from "@/components/forms/referral-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Gift, UserPlus } from "lucide-react";

export default function ReferralProgramPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Our Referral Program
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Share the opportunity of quality education guidance and get rewarded. It's a win-win!
          </p>
        </header>

        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <Card className="border-none shadow-none">
                    <CardHeader>
                        <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                            <UserPlus className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">1. Refer a Friend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Submit the contact details of a potential client who could benefit from our services.</p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-none">
                    <CardHeader>
                        <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                            <Gift className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">2. They Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We'll get in touch with your referral. If they sign up for one of our service packages, you're eligible for a reward.</p>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-none">
                    <CardHeader>
                        <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                            <DollarSign className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline mt-4">3. You Get Paid</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">You'll earn a generous 10% commission for every student you refer who successfully enrolls with us.</p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">Become a Referrer</CardTitle>
                <p className="text-muted-foreground pt-2">Fill out the form below to start referring and earning.</p>
              </CardHeader>
              <CardContent>
                <ReferralForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
