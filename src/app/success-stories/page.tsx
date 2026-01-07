import Image from "next/image";
import { successStories } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Facebook, Twitter, Linkedin, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SocialShare = ({ storyUrl, text }: { storyUrl: string, text: string }) => {
    return (
        <div className="flex items-center gap-2 mt-4">
            <span className="text-sm font-semibold">Share:</span>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${storyUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <Facebook className="h-4 w-4" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://twitter.com/intent/tweet?url=${storyUrl}&text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                    <Twitter className="h-4 w-4" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${storyUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    <Linkedin className="h-4 w-4" />
                </a>
            </Button>
        </div>
    )
}

const SuccessStoryCard = ({ story }: { story: (typeof successStories)[0] }) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unihelpconsultants.com";
    const clientImage = PlaceHolderImages.find(p => p.id === story.clientImageId);
    const visaImage = PlaceHolderImages.find(p => p.id === story.visaImageId);
    const storyUrl = `${siteUrl}/success-stories#${story.id}`;
    const shareText = `Check out this success story from Uni Help Consultants: ${story.name} at ${story.university}!`;

    return (
        <Card id={story.id} className="overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300 scroll-mt-20">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    {clientImage && (
                        <div className="relative mx-auto md:mx-0 w-32 h-32 flex-shrink-0">
                            <Image
                                src={clientImage.imageUrl}
                                alt={`Portrait of ${story.name}`}
                                width={128}
                                height={128}
                                className="rounded-full object-cover border-4 border-accent"
                                data-ai-hint={clientImage.imageHint}
                            />
                            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-card">
                                <CheckCircle className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    )}
                    <div className="flex-grow">
                        <p className="font-bold text-lg font-headline">{story.name}</p>
                        <p className="text-sm text-primary">{story.university}</p>
                        <blockquote className="italic text-muted-foreground mt-2 text-sm">
                            "{story.story}"
                        </blockquote>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 border-t pt-4">
                    {visaImage && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm">View Visa</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                                <DialogHeader>
                                    <DialogTitle>{story.name}'s Visa</DialogTitle>
                                </DialogHeader>
                                <div className="relative mt-4 w-full aspect-[4/2.5]">
                                    <Image
                                        src={visaImage.imageUrl}
                                        alt={`Visa copy for ${story.name}`}
                                        fill
                                        className="rounded-md object-contain"
                                        data-ai-hint={visaImage.imageHint}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                    <SocialShare storyUrl={storyUrl} text={shareText} />
                </div>
            </CardContent>
        </Card>
    );
};


export default function SuccessStoriesPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
            Success Stories
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Be inspired by the journeys of students who, with our help, are now studying at their dream universities worldwide.
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
