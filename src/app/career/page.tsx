import { CareerForm } from "@/components/forms/career-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";

const jobOpenings = [
    {
        title: "Senior Education Counselor",
        location: "Remote",
        type: "Full-time"
    },
    {
        title: "Visa Processing Officer",
        location: "On-site",
        type: "Full-time"
    },
    {
        title: "Digital Marketing Intern",
        location: "Remote",
        type: "Internship"
    }
];

export default function CareerPage() {
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
                <div className="space-y-6">
                    {jobOpenings.map(job => (
                        <Card key={job.title}>
                            <CardHeader>
                                <CardTitle className="font-headline">{job.title}</CardTitle>
                                <CardDescription className="flex items-center gap-4 pt-2">
                                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
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
