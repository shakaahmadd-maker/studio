

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Award, Briefcase, BookOpen, User, Star } from 'lucide-react';
import Image from 'next/image';
import { OtherEuropeSlider } from '@/components/layout/other-europe-slider';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const scholarshipData = {
  europe: [
    {
      title: 'Erasmus+ / Erasmus Mundus Joint Master Degrees (EU)',
      level: 'Bachelor’s / Master’s / PhD',
      coverage: [
        'Full tuition coverage',
        'Monthly stipend for living costs',
        'Travel allowance',
        'Internship/Work opportunities',
      ],
      notes: 'Highly competitive scholarships for international students to study in prestigious universities across Europe, fostering academic exchange and a global experience.',
      icon: <Image src="/flags/eu.svg" alt="EU Flag" width={48} height={48} className="rounded-full" />,
    },
    {
      title: 'DAAD Scholarships (Germany)',
      level: 'Master’s, PhD, Research Grants',
      coverage: [
        'Full coverage of university fees',
        'Monthly stipend',
        'Travel & health insurance',
      ],
      notes: 'One of the most generous government-funded scholarships in Europe, ideal for students in research, technology, and international relations.',
      icon: <Image src="/flags/de.svg" alt="Germany Flag" width={48} height={48} className="rounded-full" />,
    },
    {
        title: 'Swiss Government Excellence Scholarships (Switzerland)',
        level: 'Master’s / PhD / Research',
        coverage: ['Full tuition coverage', 'Monthly living allowance', 'Travel allowances'],
        notes: 'Administered by the Swiss government for international students to conduct research or study at Swiss universities, particularly in STEM fields.',
        icon: <Image src="/flags/ch.svg" alt="Switzerland Flag" width={48} height={48} className="rounded-full" />,
    },
    {
        title: 'Emile Boutmy Scholarship (France)',
        level: 'Bachelor’s / Master’s',
        coverage: ['Up to $21,000 per year for tuition and living expenses.'],
        notes: 'Exclusively for non-EU students applying to Sciences Po in France, aiming to attract top global talent.',
        icon: <Image src="/flags/fr.svg" alt="France Flag" width={48} height={48} className="rounded-full" />,
    },
    {
        title: 'Eiffel Excellence Scholarship (France)',
        level: 'Master’s / PhD',
        coverage: ['Monthly living allowance', 'Covers travel expenses'],
        notes: 'A prestigious scholarship administered through French universities for top international talent in science, law, engineering, and social sciences.',
        icon: <Image src="/flags/fr.svg" alt="France Flag" width={48} height={48} className="rounded-full" />,
    }
  ],
  otherEurope: [
    {
        country: 'Belgium',
        icon: <Image src="/flags/be.svg" alt="Belgium Flag" width={32} height={32} />,
        note: 'Scholarships focus on developing human resources in developing countries for Master\'s and PhD programs.'
    },
    {
        country: 'Sweden',
        icon: <Image src="/flags/se.svg" alt="Sweden Flag" width={32} height={32} />,
        note: 'Promotes global sustainability, innovation, and leadership through academic exchange, mainly for Master\'s programs.'
    },
    {
        country: 'Ireland',
        icon: <Image src="/flags/ie.svg" alt="Ireland Flag" width={32} height={32} />,
        note: 'Open to all disciplines for non-EU/EEA students pursuing a Master\'s or PhD, enhancing global research partnerships.'
    },
    {
        country: 'Netherlands',
        icon: <Image src="/flags/nl.svg" alt="Netherlands Flag" width={32} height={32} />,
        note: 'Includes the Holland Scholarship and Orange Tulip Scholarship, focusing on innovation and strengthening educational ties.'
    },
    {
        country: 'Finland',
        icon: <Image src="/flags/fi.svg" alt="Finland Flag" width={32} height={32} />,
        note: 'Targeted at highly talented non-EU/EEA students, primarily for research or doctoral programs in STEM and social sciences.'
    },
    {
        country: 'Denmark',
        icon: <Image src="/flags/dk.svg" alt="Denmark Flag" width={32} height={32} />,
        note: 'Aimed at strengthening academic cooperation with developing countries, funding Master’s or PhD studies.'
    },
     {
        country: 'Norway',
        icon: <Image src="/flags/no.svg" alt="Norway Flag" width={32} height={32} />,
        note: 'Tuition is often free, but scholarships provide living stipends, especially for students from developing countries.'
    },
  ],
  usa: [
    {
      title: 'Fulbright Foreign Student Program',
      level: 'Master’s / PhD',
      coverage: ['Full tuition', 'Living stipend', 'Airfare & health insurance'],
      notes: 'One of the most prestigious U.S. government scholarships designed to promote cultural exchange and graduate-level studies.',
      icon: <Image src="/flags/us.svg" alt="USA Flag" width={48} height={48} className="rounded-full" />,
    },
    {
      title: 'Knight-Hennessy Scholarships (Stanford)',
      level: 'Graduate',
      coverage: ['Full tuition', 'Living stipend', 'Travel allowance'],
      notes: 'For exceptional international graduate students at Stanford University, covering all expenses and including leadership development programs.',
      icon: <Star className="h-10 w-10 text-yellow-500" />,
    },
     {
      title: 'University Aid & Endowments (Harvard, Yale, etc.)',
      level: 'Undergraduate / Graduate',
      coverage: ['Full funding for tuition, living expenses, and travel.'],
      notes: 'Top U.S. universities offer generous need-based financial aid to international students based on academic excellence and financial need.',
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
     {
      title: 'Harkness Fellowship',
      level: 'Postgraduate professional exchange',
      coverage: ['Covers tuition fees and living costs for the program duration.'],
      notes: 'Offers international students the chance to engage in research focused on healthcare policy in the U.S.',
      icon: <Briefcase className="h-10 w-10 text-teal-500" />,
    },
  ],
  canada: [
    {
      title: 'Government & University Scholarships',
      level: 'Varies',
      coverage: ['Full tuition coverage', 'Living stipends'],
      notes: 'Canada offers numerous scholarships, particularly for graduate and research programs at top universities like Toronto and UBC.',
      icon: <Image src="/flags/ca.svg" alt="Canada Flag" width={48} height={48} className="rounded-full" />,
    },
  ],
  australia: [
    {
      title: 'Australia Awards Scholarships',
      level: 'Bachelor’s / Master’s / PhD',
      coverage: ['Full tuition fees', 'Travel allowance', 'Living stipend', 'Health coverage'],
      notes: 'Offered by the Australian government to support students from developing countries to study at top Australian universities.',
       icon: <Image src="/flags/au.svg" alt="Australia Flag" width={48} height={48} className="rounded-full" />,
    },
     {
      title: 'RTP Research Scholarships (e.g., Monash)',
      level: 'Master’s by Research / PhD',
      coverage: ['Full tuition fees', 'Research funding', 'Stipend for living costs'],
      notes: 'The Research Training Program (RTP) is a highly competitive opportunity for research-focused students across Australia.',
       icon: <Image src="/flags/au.svg" alt="Australia Flag" width={48} height={48} className="rounded-full" />,
    },
  ],
  newZealand: [
    {
      title: 'Manaaki New Zealand Scholarships',
      level: 'Bachelor’s / Master’s / PhD',
      coverage: ['Full tuition fees', 'Living allowance', 'Travel and insurance'],
      notes: 'Full-funding scholarships for students from developing countries, focusing on sustainable development.',
      icon: <Image src="/flags/nz.svg" alt="New Zealand Flag" width={48} height={48} className="rounded-full" />,
    },
  ],
  china: [
    {
      title: 'Confucius Institute Scholarship',
      level: 'All levels + Language Programs',
      coverage: ['Full tuition, stipends, accommodation, and travel.'],
      notes: 'An excellent opportunity for students wishing to study Chinese language and culture, offered through Confucius Institutes worldwide.',
      icon: <Image src="/flags/cn.svg" alt="China Flag" width={48} height={48} className="rounded-full" />,
    },
     {
      title: 'China Scholarship Council (CSC) Scholarships',
      level: 'Bachelor’s / Master’s / PhD',
      coverage: ['Full tuition, monthly stipend, accommodation, and medical insurance.'],
      notes: 'Provides full funding for international students to pursue degrees at Chinese universities, administered by the CSC.',
      icon: <Image src="/flags/cn.svg" alt="China Flag" width={48} height={48} className="rounded-full" />,
    },
  ],
};


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
];

export default function ScholarshipsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-students');
  return (
    <div className="bg-background text-primary">
       
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
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
                    Unlock Your Future with <span className="text-accent">Uni Help Consultants</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 font-light max-w-3xl mx-auto">
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

      <div className="container mx-auto px-4 py-16 md:py-24">
       
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

    

