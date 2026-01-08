
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, GraduationCap, Briefcase, Users, Quote, CheckCircle2, Rocket, Eye, Award } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { successStories, serviceCategories, blogPosts as staticBlogPosts, services as staticServices } from '@/lib/data.tsx';
import { UniversitySlider } from '@/components/layout/university-slider';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, limit, orderBy } from 'firebase/firestore';
import { type BlogPost, type Service } from '@/lib/types';


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-students');
  const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-feature');
  
  const firestore = useFirestore();
  const servicesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "services"), limit(4))
  }, [firestore]);
  const { data: liveServices } = useCollection<Service>(servicesQuery);

  const postsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "blog_posts"), orderBy("publicationDate", "desc"), limit(3))
  }, [firestore]);
  const { data: blogPosts } = useCollection<BlogPost>(postsQuery);

  const services = liveServices && liveServices.length > 0 ? liveServices : staticServices.slice(0, 4);
  const postsToDisplay = blogPosts && blogPosts.length > 0 ? blogPosts : staticBlogPosts;

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] text-white">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
              Helping Students Achieve Their Dreams
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              Your trusted partner in navigating the journey to studying abroad.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Study Abroad Services Preview Section */}
        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Study Abroad Destinations</h2>
              <p className="mt-2 text-lg text-muted-foreground">Tailored guidance for every step of your academic journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services && services.map((service: any) => {
                return (
                  <Card key={service.id} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                     {service.imageUrl && (
                        <div className="relative h-40 w-full">
                            <Image src={service.imageUrl} alt={service.title} layout="fill" objectFit="cover" className='rounded-t-lg' />
                        </div>
                     )}
                    <CardHeader>
                      <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                      <p className="text-muted-foreground">{service.shortDescription}</p>
                    </CardContent>
                    <CardFooter>
                       <Button asChild variant="link">
                        <Link href={`/services/${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Destinations</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Services For Everyone</h2>
              <p className="mt-2 text-lg text-muted-foreground">No matter your academic level, we have a tailored solution for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <Card key={category.id} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button asChild variant="link">
                      <Link href={`/service-category/${category.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Choose Uni Help Consultants?</h2>
                <p className="mt-4 text-lg text-muted-foreground">We provide 360-degree support for your successful future, ensuring a smooth journey from start to finish.</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Expert Guidance</h3>
                      <p className="text-muted-foreground">Comprehensive support from application start to post-admission.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Personalized Counseling</h3>
                      <p className="text-muted-foreground">Tailored advice based on your unique goals, strengths, and aspirations.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Successful Track Record</h3>
                      <p className="text-muted-foreground">Proven strategies resulting in client acceptance into leading universities worldwide.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                    <Button asChild size="lg" variant="outline" className="bg-background">
                        <Link href="/why-us">Learn More About Our Approach</Link>
                    </Button>
                </div>
              </div>
              <div className="relative h-80 lg:h-full w-full rounded-lg overflow-hidden shadow-xl">
                 {whyUsImage && (
                    <Image
                        src={whyUsImage.imageUrl}
                        alt={whyUsImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={whyUsImage.imageHint}
                    />
                 )}
              </div>
            </div>
          </div>
        </section>

        {/* University Partners Slider */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-muted-foreground mb-8 font-headline">
              Our University Partners
            </h2>
            <UniversitySlider />
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
              <p className="mt-2 text-lg text-muted-foreground">Hear from students who made their dreams a reality with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.slice(0, 3).map((story) => {
                const storyImage = PlaceHolderImages.find(p => p.id === story.clientImageId);
                return (
                  <Card key={story.id} className="overflow-hidden">
                    {storyImage && (
                      <div className="relative h-56 w-full">
                        <Image src={storyImage.imageUrl} alt={story.name} layout="fill" objectFit="cover" data-ai-hint={storyImage.imageHint} />
                      </div>
                    )}
                    <CardHeader>
                      <Quote className="h-8 w-8 text-accent mb-2" />
                      <CardDescription>"{story.story}"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-bold font-headline">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.university}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/success-stories">More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Referral Program CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-headline">Join Our Referral Program</h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg">
              Know someone who could benefit from our services? Refer them and earn a 10% commission for every successful enrollment!
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/referral-program">Become a Referrer</Link>
            </Button>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">From Our Blog</h2>
              <p className="mt-2 text-lg text-muted-foreground">Latest news, tips, and insights on studying abroad.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {postsToDisplay.slice(0, 3).map((post: any) => {
                const publicationDate = post.publicationDate instanceof Date ? post.publicationDate : post.publicationDate.toDate();
                return (
                  <Card key={post.id} className="overflow-hidden flex flex-col">
                    {post.imageUrl && <div className="relative w-full h-48"><Image src={post.imageUrl} alt={post.title} fill className="object-cover" /></div>}
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                      <CardDescription>{publicationDate.toLocaleDateString()}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0">
                        <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/blog">
                        View All Posts
                    </Link>
                </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
