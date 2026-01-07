
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { europeScholarships, ukScholarshipsData, globalScholarships } from '@/lib/data.tsx';
import Image from 'next/image';
import { Award, BookOpenText, Mountain, Medal, Trophy, Star, HandCoins, FlaskRound, CheckCircle, Wallet, Plane, Briefcase, Search, Home, SendHorizontal } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
  wallet: <Wallet size={16} className="mr-1" />,
  plane: <Plane size={16} className="mr-1" />,
  briefcase: <Briefcase size={16} className="mr-1" />,
  search: <Search size={16} className="mr-1" />,
  home: <Home size={16} className="mr-1" />,
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
    <div className="bg-background">
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
                    <span className="text-accent">Global Scholarship Guide</span>
                </h1>
                <p className="text-xl sm:text-2xl mb-8 font-light max-w-3xl mx-auto text-white/90">
                    Your Pathway to Fully Funded Study Abroad
                </p>
            </div>
        </section>

        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div id="scholarship-container" className="space-y-16">

                {/* SCHOLARSHIPS IN EUROPE SECTION */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-primary/20 pb-3">
                        🇪🇺 Scholarships in Europe: EU-Wide & National
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {europeScholarships.major.map((scholarship, index) => (
                            <Card key={index} className={`p-6 flex flex-col justify-between border-t-4 ${scholarship.borderColor}`}>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {europeScholarships.national.map((scholarship, index) => (
                             <div key={index} className={`p-4 rounded-lg border-l-4 ${scholarship.bgColor} ${scholarship.borderColor}`}>
                                <p className={`font-bold text-lg ${scholarship.textColor}`}>{scholarship.country}</p>
                                <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                                <span className={`text-xs font-medium ${scholarship.textColor}`}>{scholarship.funding}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SCHOLARSHIPS IN THE UK SECTION */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-pink-200 pb-3">
                        🇬🇧 Scholarships in the UK: By Funding Type
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {ukScholarshipsData.map((scholarship, index) => (
                            <Card key={index} className={`p-6 border-t-4 ${scholarship.borderColor}`}>
                                <div className={`text-2xl font-bold ${scholarship.titleColor} mb-3 flex items-center`}>
                                   <div className="mr-2">{iconMap[scholarship.icon]}</div> {scholarship.title}
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>
                                <ul className="list-disc list-inside space-y-1 text-sm font-semibold">
                                    {scholarship.examples.map((example, i) => (
                                        <li key={i} className={scholarship.titleColor}>{example}</li>
                                    ))}
                                </ul>
                            </Card>
                         ))}
                    </div>
                </section>

                {/* GLOBAL PROGRAMS SECTION */}
                <section>
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-4 border-yellow-200 pb-3">
                        🇺🇸 🇨🇦 🇳🇿 🇨🇳 Global Programs: USA, Canada & APAC
                    </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {globalScholarships.map((scholarship, index) => (
                            <Card key={index} className={`p-6 border-t-4 ${scholarship.borderColor}`}>
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

             <footer className="mt-16 text-center p-8 bg-card rounded-xl shadow-lg border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Journey?</h3>
                <p className="text-lg text-muted-foreground mb-4">
                    These prestigious scholarships offer financial support, career advancement, and personal growth.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">
                         <SendHorizontal className="mr-2" /> Contact Uni Help Consultants Today
                    </Link>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">Note: Apply early and tailor your application for the best chance of success!</p>
            </footer>
        </div>
    </div>
  );
}
