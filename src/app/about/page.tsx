import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import { PlaceHolderImages as placeholderImages } from "@/lib/placeholder-images";
import { Award, Eye, Rocket } from "lucide-react";

const TeamMemberCard = ({ member }: { member: (typeof team)[0] }) => {
  const image = placeholderImages.find((p) => p.id === member.imageId);
  return (
    <Card className="text-center">
      <CardContent className="p-6">
        {image && (
          <Image
            src={image.imageUrl}
            alt={`Portrait of ${member.name}`}
            width={128}
            height={128}
            className="rounded-full mx-auto mb-4 border-4 border-primary"
            data-ai-hint={image.imageHint}
          />
        )}
        <h3 className="text-xl font-bold font-headline">{member.name}</h3>
        <p className="text-primary">{member.title}</p>
      </CardContent>
    </Card>
  );
};

export default function AboutUsPage() {
    const officeImage = placeholderImages.find(p => p.id === 'about-office');
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">About Uni Help Consultants</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a dedicated team of education enthusiasts committed to helping students navigate their path to international education.
          </p>
        </header>

        {/* Mission, Vision, Values Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <Card>
            <CardHeader>
                <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                </div>
              <CardTitle className="font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To empower students with the knowledge and guidance to achieve their international education dreams and unlock their full potential.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Eye className="h-8 w-8 text-primary" />
                </div>
              <CardTitle className="font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">To be the most trusted and student-centric overseas education consultancy, recognized for our integrity, expertise, and personalized approach.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Award className="h-8 w-8 text-primary" />
                </div>
              <CardTitle className="font-headline">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Integrity, Excellence, Empathy, and Collaboration form the bedrock of everything we do. We prioritize our students' success above all.</p>
            </CardContent>
          </Card>
        </section>

        {/* Office Image */}
        {officeImage && (
            <section className="mb-20">
                 <Image
                    src={officeImage.imageUrl}
                    alt={officeImage.description}
                    width={1200}
                    height={800}
                    className="rounded-lg mx-auto shadow-lg"
                    data-ai-hint={officeImage.imageHint}
                />
            </section>
        )}

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
            <p className="mt-2 text-lg text-muted-foreground">The passionate experts behind your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
