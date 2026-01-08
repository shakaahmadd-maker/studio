
'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, where, limit } from "firebase/firestore";
import { type BlogPost } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { blogPosts as staticBlogPosts } from "@/lib/data.tsx";


type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const firestore = useFirestore();
  const postQuery = useMemoFirebase(() => {
    if (!firestore || !params.slug) return null;
    return query(collection(firestore, 'blog_posts'), where('slug', '==', params.slug), limit(1));
  }, [firestore, params.slug]);

  const { data: posts, isLoading } = useCollection<BlogPost>(postQuery);
  
  let post = posts?.[0];
  if (!post && !isLoading) {
    post = staticBlogPosts.find(p => p.slug === params.slug);
  }
  
  const publicationDate = post?.publicationDate ? (post.publicationDate instanceof Date ? post.publicationDate : post.publicationDate.toDate()) : new Date();

  if (isLoading) {
    return (
      <div className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Skeleton className="h-8 w-32 mb-8" />
           <header className="mb-8">
            <Skeleton className="h-12 w-3/4 mb-4" />
            <div className="flex gap-4">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-5 w-32" />
            </div>
           </header>
           <Skeleton className="h-96 w-full mb-8" />
           <div className="space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
           </div>
        </div>
      </div>
    )
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <article>
          <header className="mb-8">
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={publicationDate.toISOString()}>
                        {publicationDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:text-primary 
                       prose-p:text-foreground/80 prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
