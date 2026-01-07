import { PlaceHolderImages } from '@/lib/placeholder-images';
import { europeScholarships, ukScholarshipsData, globalScholarships, whyChooseUsData } from '@/lib/data.tsx';
import Image from 'next/image';
import { Award, BookOpenText, Mountain, Medal, Trophy, Star, HandCoins, FlaskRound, CheckCircle, Wallet, Plane, Briefcase, Search, Home, SendHorizontal, DollarSign, HeartPulse, XCircle, Lightbulb, FileSignature, Gem, LifeBuoy, Route } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { OtherEuropeSlider } from '@/components/layout/other-europe-slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CountryFlagSlider } from '@/components/layout/country-flag-slider';

const iconMap: { [key: string]: React.ReactNode } = {
  award: <Award />,
  'book-open-text': <BookOpenText />,
  mountain: <Mountain />,
  medal: <Medal />,
  trophy: <Trophy />,
  star: <Star />,
  'hand-coins': <HandCoins />,
  'flask-round': <FlaskRound />,
  'check-circle': <CheckCircle size={16} className="mr-1" />,
  'x-circle': <XCircle size={16} className="mr-1" />,
  wallet: <Wallet size={16} className="mr-1" />,
  plane: <Plane size={16} className="mr-1" />,
  briefcase: <Briefcase size={16} className="mr-1" />,
  search: <Search size={16} className="mr-1" />,
  home: <Home size={16} className="mr-1" />,
  'dollar-sign': <DollarSign size={16} className="mr-1" />,
  'heart-pulse': <HeartPulse size={16} className="mr-1" />,
};

const badgeColors: { [key: string]: string } = {
  green: 'bg-green-100 text-green-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-gray-100 text-gray-700',
};


export default function ScholarshipsPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'scholarship-hero');

  return (
    <div className="bg-slate-50">

       <header className="relative bg-indigo-800 text-white p-8 sm:p-12 text-center rounded-t-xl overflow-hidden">
            {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="absolute inset-0 object-cover w-full h-full opacity-20"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="relative">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                    Unlock Your Future with Uni Help Consultants
                </h1>
                <p className="text-indigo-200 text-lg sm:text-xl font-medium max-w-3xl mx-auto">
                    Guiding you through the process of securing prestigious scholarships for studying abroad.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base font-semibold">
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">Europe</span>
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">USA</span>
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">Canada</span>
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">Australia</span>
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">New Zealand</span>
                    <span className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full shadow-md">China</span>
                </div>
            </div>
        </header>

        <main className="p-6 sm:p-10 bg-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-4">
                Why Choose Uni Help Consultants for Scholarship Guidance?
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto">
                Our tailored approach ensures your application stands out in a competitive global landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {whyChooseUsData.map((item, index) => (
                    <div key={index} className="p-6 rounded-xl border-t-4 border-amber-400 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4 mb-4">
                            {item.icon}
                            <span className="text-2xl font-extrabold text-indigo-800">0{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-indigo-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </main>


        <div className="max-w-7xl mx-auto p-4 md:p-8">

            <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-muted-foreground mb-8 font-headline">
                        Scholarships Available In
                    </h2>
                    <CountryFlagSlider />
                </div>
            </div>
            
            <div id="scholarship-container" className="space-y-16">

                {/* SCHOLARSHIPS IN EUROPE SECTION */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-primary/20 pb-3">
                        🇪🇺 Scholarships in Europe: EU-Wide & National
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {europeScholarships.major.map((scholarship, index) => (
                            <Card key={index} className={`p-6 flex flex-col justify-between border-t-4 ${scholarship.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                                <div>
                                    <div className={`text-2xl font-bold ${scholarship.titleColor} mb-2 flex items-center`}>
                                        <div className="mr-2">{iconMap[scholarship.icon]}</div> {scholarship.title}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-sm font-semibold text-foreground">Level: <span className="font-normal">{scholarship.level}</span></p>
                                        <p className="text-sm font-semibold text-foreground">Ideal For: <span className={`font-normal ${scholarship.focusColor}`}>{scholarship.focus}</span></p>
                                    </div>
                                    <div className="flex flex-wrap">
                                        {scholarship.coverage.map((item, i) => (
                                            <span key={i} className={`inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full ${badgeColors[item.color]}`}>
                                                {iconMap[item.icon]}
                                                {item.text}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-700 mt-12 mb-6 border-b pb-2">National Government & University Funding</h3>
                    <OtherEuropeSlider scholarships={europeScholarships.national} />
                </section>

                {/* SCHOLARSHIPS IN THE UK SECTION */}
                 <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-pink-200 pb-3">
                        🇬🇧 Scholarships in the UK: By Funding Type
                    </h2>
                     <Accordion type="single" collapsible className="w-full space-y-4">
                        {ukScholarshipsData.map((scholarship, index) => (
                           <AccordionItem value={scholarship.title} key={index} className="border rounded-lg bg-white shadow-sm">
                                <AccordionTrigger className="p-6 hover:no-underline">
                                    <div className="text-left flex items-center gap-4">
                                        <div className={`text-2xl ${scholarship.titleColor}`}>{iconMap[scholarship.icon]}</div>
                                        <div>
                                            <h3 className={`font-headline text-xl ${scholarship.titleColor}`}>{scholarship.title}</h3>
                                            <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-6 pt-0">
                                    <h4 className="font-semibold mb-2">Key Examples:</h4>
                                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                        {scholarship.examples.map((example, i) => (
                                            <li key={i}>{example}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                {/* GLOBAL PROGRAMS SECTION */}
                <section>
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-yellow-200 pb-3">
                        🇺🇸 🇨🇦 🇦🇺 🇳🇿 🇨🇳 Global Programs: USA, Canada & APAC
                    </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {globalScholarships.map((scholarship, index) => (
                            <Card key={index} className={`p-6 border-t-4 ${scholarship.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                                <div className={`text-xl font-bold ${scholarship.titleColor} mb-2`}>
                                    {scholarship.title}
                                </div>
                                <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                                <div className="mt-3">
                                    {scholarship.coverage.map((item, i) => (
                                        <span key={i} className={`inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full ${badgeColors[item.color]}`}>
                                            {iconMap[item.icon]}
                                            {item.text}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

            </div>

             <footer className="mt-12 pt-8 border-t border-indigo-200 text-center">
                <p className="text-lg font-semibold text-indigo-800">
                    Your dream of studying abroad is closer than you think. Let Uni Help Consultants map your path to success.
                </p>
                <div className="mt-4">
                    <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold shadow-lg hover:shadow-xl">
                        <Link href="/contact">
                            <SendHorizontal className="mr-2 h-5 w-5" />
                            Start Your Application Today
                        </Link>
                    </Button>
                </div>
            </footer>
        </div>
    </div>
  );
}
