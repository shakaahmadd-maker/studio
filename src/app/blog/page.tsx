
'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { type BlogPost } from "@/lib/types";
import { blogPosts as staticBlogPosts } from "@/lib/data.tsx";


export default function BlogPage() {
  const firestore = useFirestore();
  const postsQuery = useMemoFirebase(() => query(collection(firestore, "blog_posts"), orderBy("publicationDate", "desc")), [firestore]);
  const { data: blogPosts, isLoading } = useCollection<BlogPost>(postsQuery);

  const postsToDisplay = blogPosts && blogPosts.length > 0 ? blogPosts : staticBlogPosts;

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
          </div>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading && Array.from({length: 3}).map((_,i) => (
                <Card key={i}>
                    <Skeleton className="w-full h-48 object-cover rounded-t-lg" />
                     <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2 mt-2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-full" />
                         <Skeleton className="h-4 w-full mt-2" />
                    </CardContent>
                    <CardFooter>
                        <Skeleton className="h-6 w-24" />
                    </CardFooter>
                </Card>
            ))}
            {postsToDisplay.map((post: any) => {
              const publicationDate = post.publicationDate instanceof Date ? post.publicationDate : post.publicationDate.toDate();
              return (
                <Card key={post.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                  {post.imageUrl && (
                    <Link href={`/blog/${post.slug}`} className="block relative h-48 w-full">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl leading-snug">
                       <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
                    </CardTitle>
                    <CardDescription>
                      {publicationDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {post.author}
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
