
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { getSdks } from "@/firebase/server";
import { SuccessStoryForm } from "@/components/forms/success-story-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type SuccessStory } from "@/lib/types";

async function getStory(id: string): Promise<SuccessStory | null> {
  const { firestore } = getSdks();
  const storyDoc = await getDoc(doc(firestore, "success_stories", id));
  if (!storyDoc.exists()) {
    return null;
  }
  return { id: storyDoc.id, ...storyDoc.data() } as SuccessStory;
}

export default async function EditStoryPage({ params }: { params: { id: string } }) {
  const story = await getStory(params.id);

  if (!story) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/stories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Edit Success Story</CardTitle>
            <CardDescription>Update the details for this success story.</CardDescription>
          </CardHeader>
          <CardContent>
            <SuccessStoryForm story={story} />
          </CardContent>
        </Card>
    </div>
  );
}
