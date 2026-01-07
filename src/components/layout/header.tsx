"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/about", label: "About Us" },
  { href: "/referral-program", label: "Referral Program" },
  { href: "/contact", label: "Contact Us" },
];

const Logo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="EduVision Consulting Home">
    <GraduationCap className="h-7 w-7 text-primary" />
    <span className="text-xl font-bold font-headline text-foreground">
      EduVision Consulting
    </span>
  </Link>
);

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 ml-auto text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex md:hidden items-center ml-auto">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4 mt-8">
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
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
