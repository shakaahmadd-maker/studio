import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data.tsx";
import { PlaceHolderImages as placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-16">
          <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary">
                Our Blog
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Insights, tips, and updates on navigating the world of international education.
              </p>
              <Button asChild size="lg" className="mt-8">
                  <Link href="/blog/new">
                      <PlusCircle className="mr-2 h-5 w-5" />
                      Write a Post
                  </Link>
              </Button>
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = placeholderImages.find(p => p.id === post.imageId);
              return (
                <Card key={post.slug} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                  {postImage && (
                    <Link href={`/blog/${post.slug}`} className="block">
                      <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={postImage.imageHint}
                      />
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl leading-snug">
                       <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </CardTitle>
                    <CardDescription>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
