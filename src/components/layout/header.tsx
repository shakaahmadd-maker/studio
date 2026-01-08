

'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { serviceCategories } from "@/lib/data.tsx";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ConsultationForm } from "../forms/consultation-form";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-us", label: "Why Us"},
  { href: "/scholarships", label: "Scholarships" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/referral-program", label: "Referrals" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 mr-6 flex-shrink-0" aria-label="Uni Help Consultants Home">
    <GraduationCap className="h-7 w-7 text-primary" />
    <span className="text-xl font-bold font-headline text-foreground">
      Uni Help Consultants
    </span>
  </Link>
);

const ServiceCategoryDropdown = ({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) => {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        <span className="text-lg font-semibold text-primary">Programmes</span>
        {serviceCategories.map((category) => (
          <Link
            key={category.id}
            href={`/service-category/${category.id}`}
            className={cn(
              "text-lg transition-colors hover:text-primary pl-4",
              pathname === `/service-category/${category.id}` ? "text-primary font-semibold" : "text-muted-foreground"
            )}
            onClick={onLinkClick}
          >
            {category.title}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary p-0 h-auto">
          Programmes
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {serviceCategories.map((category) => (
          <DropdownMenuItem key={category.id} asChild>
            <Link href={`/service-category/${category.id}`}>{category.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


const StudyAbroadDropdown = ({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) => {
  const pathname = usePathname();
  const firestore = useFirestore();
  const servicesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "services"), orderBy("createdAt", "asc"));
  }, [firestore]);
  const { data: services } = useCollection(servicesQuery);


  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4">
        <span className="text-lg font-semibold text-primary">Study Abroad</span>
        {services && services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className={cn(
              "text-lg transition-colors hover:text-primary pl-4",
              pathname === `/services/${service.id}` ? "text-primary font-semibold" : "text-muted-foreground"
            )}
            onClick={onLinkClick}
          >
            {service.title}
          </Link>
        ))}
         <Link
            href="/services"
            className={cn(
              "text-lg transition-colors hover:text-primary pl-4",
              pathname === "/services" ? "text-primary font-semibold" : "text-muted-foreground"
            )}
            onClick={onLinkClick}
          >
            View All Destinations
          </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary p-0 h-auto">
          Study Abroad
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {services && services.map((service) => (
          <DropdownMenuItem key={service.id} asChild>
            <Link href={`/services/${service.id}`}>{service.title}</Link>
          </DropdownMenuItem>
        ))}
         <DropdownMenuItem asChild>
            <Link href="/services">View All Destinations</Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ConsultationButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Free Consultation</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">Request a Free Consultation</DialogTitle>
                    <DialogDescription>Fill out the form below, and one of our expert counselors will get in touch with you shortly.</DialogDescription>
                </DialogHeader>
                <ConsultationForm />
            </DialogContent>
        </Dialog>
    )
}

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden lg:flex items-center gap-4 text-sm font-medium">
          <Link
              href="/"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
          <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              )}
            >
              About Us
            </Link>
             <Link
              href="/why-us"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/why-us" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Why Us
            </Link>
          <ServiceCategoryDropdown />
          <StudyAbroadDropdown />
           <Link
              href="/scholarships"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/scholarships" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Scholarships
            </Link>
          <Link
              href="/success-stories"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/success-stories" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Success Stories
            </Link>
             <Link
              href="/blog"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/blog" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>
             <Link
              href="/referral-program"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/referral-program" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Referrals
            </Link>
            <Link
              href="/career"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/career" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Career
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <div className="hidden lg:block">
            <ConsultationButton />
          </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden ml-4">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b p-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex-grow overflow-y-auto p-4">
                    <nav className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                        key={label}
                        href={href}
                        className={cn(
                            "text-lg transition-colors hover:text-primary",
                            pathname === href ? "text-primary font-semibold" : "text-muted-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                        >
                        {label}
                        </Link>
                    ))}
                    <div className="space-y-4 pt-4 border-t">
                        <ServiceCategoryDropdown isMobile={true} onLinkClick={() => setMobileMenuOpen(false)}/>
                    </div>
                    <div className="space-y-4 pt-4 border-t">
                        <StudyAbroadDropdown isMobile={true} onLinkClick={() => setMobileMenuOpen(false)}/>
                    </div>
                    </nav>
                </div>
                <div className="p-4 border-t">
                    <ConsultationButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
