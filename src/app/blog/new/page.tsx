import { BlogPostForm } from "@/components/forms/blog-post-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewBlogPostPage() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
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
    </div>
  );
}
