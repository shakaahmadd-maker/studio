import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, GraduationCap, Briefcase, Users, Quote } from 'lucide-react';
import { PlaceHolderImages as placeholderImages } from '@/lib/placeholder-images';
import { services, successStories, blogPosts } from '@/lib/data';

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-students');

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

        {/* Services Preview Section */}
        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="mt-2 text-lg text-muted-foreground">Tailored guidance for every step of your academic journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map((service) => {
                const serviceImage = placeholderImages.find(p => p.id === service.imageId);
                return (
                  <Card key={service.id} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto bg-secondary p-4 rounded-full">
                        {service.id === 'bachelor' && <GraduationCap className="h-8 w-8 text-primary" />}
                        {service.id === 'master' && <BookOpen className="h-8 w-8 text-primary" />}
                        {service.id === 'phd' && <Briefcase className="h-8 w-8 text-primary" />}
                        {service.id === 'diploma' && <Users className="h-8 w-8 text-primary" />}
                      </div>
                      <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description.substring(0,100)}...</p>
                    </CardContent>
                    <CardFooter>
                       <Button asChild variant="link">
                        <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Success Stories</h2>
              <p className="mt-2 text-lg text-muted-foreground">Hear from students who made their dreams a reality with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.slice(0, 3).map((story) => {
                const storyImage = placeholderImages.find(p => p.id === story.imageId);
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
              {blogPosts.slice(0, 3).map(post => {
                const postImage = placeholderImages.find(p => p.id === post.imageId);
                return (
                  <Card key={post.slug} className="overflow-hidden flex flex-col">
                    {postImage && <Image src={postImage.imageUrl} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={postImage.imageHint} />}
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                      <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link">
                        <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
