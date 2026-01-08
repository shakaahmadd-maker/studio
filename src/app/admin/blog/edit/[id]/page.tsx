
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import { getSdks } from "@/firebase/server";
import { BlogPostForm } from "@/components/forms/blog-post-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { type BlogPost } from "@/lib/types";

async function getPost(id: string): Promise<BlogPost | null> {
  const { firestore } = getSdks();
  const postDoc = await getDoc(doc(firestore, "blog_posts", id));
  if (!postDoc.exists()) {
    return null;
  }
  // Convert Firestore Timestamp to Date, then to ISO string for serialization
  const data = postDoc.data();
  const post: BlogPost = { 
    id: postDoc.id, 
    ...data,
    publicationDate: data.publicationDate.toDate() 
  } as unknown as BlogPost; // a bit of a hack for types
  
  return post;
}

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-4">
              <Link href="/admin/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog Posts
              </Link>
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Edit Blog Post</CardTitle>
            <CardDescription>Update the details for this blog post.</CardDescription>
          </CardHeader>
          <CardContent>
            <BlogPostForm post={post} />
          </CardContent>
        </Card>
    </div>
  );
}
