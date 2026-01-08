
import { BlogPostForm } from "@/components/forms/blog-post-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewBlogPostPage() {
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
            <CardTitle className="font-headline text-3xl">Create a New Blog Post</CardTitle>
            <CardDescription>Share your story or insights with our community.</CardDescription>
          </CardHeader>
          <CardContent>
            <BlogPostForm />
          </CardContent>
        </Card>
    </div>
  );
}
