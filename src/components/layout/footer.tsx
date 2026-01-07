import Link from "next/link";
import { GraduationCap, Linkedin, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/career", label: "Careers" },
  { href: "/referral-program", label: "Referral Program" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">
                EduVision
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Helping Students Achieve Their Dreams of Studying Abroad.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold font-headline tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold font-headline tracking-wider uppercase mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Education Lane, Knowledge City, 12345</p>
              <p>Email: <a href="mailto:contact@eduvision.com" className="hover:text-primary">contact@eduvision.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduVision Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
