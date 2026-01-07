

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Briefcase, BookOpen, User, Star, Landmark } from 'lucide-react';
import Image from 'next/image';
import { OtherEuropeSlider } from '@/components/layout/other-europe-slider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { scholarshipData } from '@/lib/data.tsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ScholarshipCard = ({ scholarship }: { scholarship: (typeof scholarshipData.europe)[0] }) => (
  <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <CardHeader className="flex flex-row items-start gap-4 pb-4">
      <div className="flex-shrink-0">{scholarship.icon}</div>
      <div className="flex-grow">
        <CardTitle className="text-lg font-headline leading-tight">{scholarship.title}</CardTitle>
        <CardDescription className="text-sm font-semibold text-primary">{scholarship.level}</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="mb-3 text-sm text-muted-foreground">{scholarship.notes}</p>
      <h4 className="mb-2 text-sm font-semibold">Coverage:</h4>
      <ul className="space-y-1">
        {scholarship.coverage.map((item, index) => (
          <li key={index} className="flex items-center text-xs text-muted-foreground">
            <CheckCircle className="mr-2 h-3 w-3 flex-shrink-0 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const RegionSection = ({ title, scholarships }: { title: string; scholarships: any[] }) => (
  <section className="mb-16">
    <h2 className="mb-8 text-3xl font-bold text-center font-headline text-primary">{title}</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.title} scholarship={scholarship} />
      ))}
    </div>
  </section>
);

const whyChooseUsFeatures = [
    {
      title: 'Expert Scholarship Guidance',
      description: 'We offer personalized advice on the best scholarships suited to your academic background, career goals, and financial needs. Our experienced consultants will help you identify perfect opportunities, ensuring you don’t miss out.',
    },
    {
      title: 'Comprehensive Application Support',
      description: 'We provide step-by-step assistance with scholarship applications, from writing compelling personal statements and essays to gathering necessary documents. We help you prepare a winning application that stands out.',
    },
    {
      title: 'Maximize Your Chances of Winning',
      description: 'With a deep understanding of the scholarship landscape, we know exactly what panels look for. Whether it’s for the Rhodes Scholarship, Erasmus+, or DAAD, our experts highlight your strengths and achievements.',
    },
    {
      title: 'Access to Exclusive Scholarships',
      description: 'Through our network and partnerships, we provide access to a wide range of exclusive scholarships that you might not find through traditional channels. We bring you opportunities from top universities and governments.',
    },
    {
      title: 'Ongoing Support and Mentorship',
      description: 'Securing a scholarship is just the beginning. We continue to provide guidance even after you\'ve been awarded a scholarship, offering support with visa applications, accommodation, and settling in.',
    },
    {
      title: 'Tailored Scholarship Strategy for Every Student',
      description: 'At Uni Help Consultants, we craft a personalized scholarship strategy based on your goals and background, ensuring your applications align with your strengths and aspirations.',
    },
];

export default function ScholarshipsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'scholarship-hero');
  return (
    <div className="bg-background text-primary-foreground">
       
        <section className="relative bg-brand-blue text-white shadow-xl py-20 lg:py-32">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt="Students celebrating graduation"
                fill
                className="absolute inset-0 object-cover w-full h-full opacity-20"
                data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight text-white">
                    Unlock Your Future with <span className="text-accent">Uni Help Consultants</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 font-light max-w-3xl mx-auto text-white/90">
                    We are dedicated to helping you achieve your academic dreams by guiding you through the process of securing prestigious scholarships for studying abroad.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="text-lg font-semibold bg-white text-primary rounded-full px-5 py-2 shadow-lg">Europe</span>
                    <span className="text-lg font-semibold bg-white text-primary rounded-full px-5 py-2 shadow-lg">USA</span>
                    <span className="text-lg font-semibold bg-white text-primary rounded-full px-5 py-2 shadow-lg">Canada</span>
                    <span className="text-lg font-semibold bg-white text-primary rounded-full px-5 py-2 shadow-lg">Australia & NZ</span>
                    <span className="text-lg font-semibold bg-white text-primary rounded-full px-5 py-2 shadow-lg">China</span>
                </div>
            </div>
        </section>

      <div className="container mx-auto px-4 py-16 md:py-24 text-primary">
       
       <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
                    Why Choose Uni Help Consultants for Scholarship Guidance?
                </h2>
                <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Our tailored approach ensures your application stands out in a competitive global landscape.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {whyChooseUsFeatures.map((feature, index) => (
                        <Card key={index} className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 border-t-4 border-accent">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="text-4xl font-extrabold text-accent">{index + 1}.</span>
                                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto text-center">
             <h2 className="mb-4 text-3xl font-bold font-headline text-primary">How We Can Help</h2>
            <p className="text-muted-foreground">
                Our team at Uni Help Consultants provides comprehensive scholarship guidance, including personalized advice, expert application support, and access to exclusive scholarship opportunities. Let’s explore the key scholarships that we can help you secure.
            </p>
        </section>

        <RegionSection title="Scholarships in Europe" scholarships={scholarshipData.europe} />
        
        <section className="mb-16">
            <h3 className="text-2xl font-bold text-center font-headline text-primary/80 mb-8">More Government &amp; University Scholarships Across Europe</h3>
            <OtherEuropeSlider scholarships={scholarshipData.otherEurope} />
            <p className="text-center text-muted-foreground mt-6 max-w-3xl mx-auto">
                Many European governments and universities offer a wide range of scholarships. At Uni Help Consultants, we specialize in helping students find and apply for these prestigious opportunities.
            </p>
        </section>

        <RegionSection title="Scholarships in the USA" scholarships={scholarshipData.usa} />
        <RegionSection title="Scholarships in Canada" scholarships={scholarshipData.canada} />
        <RegionSection title="Scholarships in Australia" scholarships={scholarshipData.australia} />
        <RegionSection title="Scholarships in New Zealand" scholarships={scholarshipData.newZealand} />
        <RegionSection title="Scholarships in China" scholarships={scholarshipData.china} />

        <section className="mt-16 text-center bg-secondary py-12 rounded-lg">
            <h2 className="text-3xl font-bold font-headline text-primary">Ready to Start Your Journey?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
               Let Uni Help Consultants help you unlock prestigious scholarships and pave your way to academic success. Contact us today to begin your scholarship journey!
            </p>
        </section>

      </div>
    </div>
  );
}
