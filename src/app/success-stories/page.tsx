import Image from "next/image";
import Link from "next/link";
import { successStories } from "@/lib/data";
import { PlaceHolderImages as placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Facebook, Twitter, Linkedin } from "lucide-react";

const SocialShare = ({ storyUrl }: { storyUrl: string }) => {
    const text = "Check out this success story from EduVision Consulting!";
    return (
        <div className="flex items-center gap-2 mt-4">
            <span className="text-sm font-semibold">Share:</span>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${storyUrl}`} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://twitter.com/intent/tweet?url=${storyUrl}&text=${text}`} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${storyUrl}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                </a>
            </Button>
        </div>
    )
}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => {
              const storyImage = placeholderImages.find(p => p.id === story.imageId);
              const storyUrl = `https://eduvision.com/success-stories#${story.id}`;
              
              return (
                <Card key={story.id} className="overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    {storyImage && (
                      <div className="relative mx-auto mb-4 w-32 h-32">
                         <Image
                            src={storyImage.imageUrl}
                            alt={`Portrait of ${story.name}`}
                            width={128}
                            height={128}
                            className="rounded-full object-cover border-4 border-accent"
                            data-ai-hint={storyImage.imageHint}
                         />
                         <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-white font-bold text-xs font-headline tracking-widest uppercase">EduVision</span>
                         </div>
                      </div>
                    )}
                    <Quote className="h-8 w-8 text-accent mx-auto mb-2" />
                    <blockquote className="italic text-muted-foreground mb-4">
                      "{story.story}"
                    </blockquote>
                    <p className="font-bold text-lg font-headline">{story.name}</p>
                    <p className="text-sm text-primary">{story.university}</p>
                    <SocialShare storyUrl={storyUrl} />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
