
'use client';

import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M14.05 2.9A10 10 0 0 1 22 11.56M14.05 6.4A6 6 0 0 1 20 11.56" transform="rotate(0)"></path>
  </svg>
);


interface WhatsAppButtonProps {
    phoneNumber: string;
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}`;

    return (
        <Button
            asChild
            className="fixed bottom-4 right-4 z-50 rounded-full h-16 w-16 shadow-lg bg-green-500 hover:bg-green-600 text-white"
        >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <WhatsAppIcon />
            </a>
        </Button>
    )
}

// A more accurate SVG for WhatsApp if needed in the future, but lucide-react doesn't have it.
const RealWhatsAppIcon = () => (
    <svg 
        height="32px" 
        width="32px" 
        viewBox="0 0 128 128" 
        fill="currentColor">
        <path d="M112.33 115.35c-2.31-2.9-4.32-5.3-6-7.25a25.32 25.32 0 01-1.39-1.22c-2.1-1.92-3.48-3.1-4.1-3.62-1.29-1.07-2.61-2-4.1-2.93a40.7 40.7 0 01-10.74-5.23 60.36 60.36 0 01-14.82-12.24 59.81 59.81 0 01-12.24-14.82 40.7 40.7 0 01-5.23-10.74c-1-1.48-1.85-2.81-2.93-4.1-1.2-1.48-2.67-3.26-3.62-4.1-1-1-2-1.74-3-2.58-.2-.2-.36-.45-.58-.72l-.7-.8c-1.95-1.72-4.35-3.73-7.25-6L17.7 29.13a6.41 6.41 0 00-4.66-1.57 6.2 6.2 0 00-4.47 2.3 22.84 22.84 0 00-4.1 8.28 22.88 22.88 0 00.36 12.36 40.4 40.4 0 005.23 10.74 61.2 61.2 0 0012.28 14.82 61.2 61.2 0 0014.82 12.28 40.4 40.4 0 0010.74 5.23 22.88 22.88 0 0012.36.36 22.84 22.84 0 008.28-4.1 6.2 6.2 0 002.3-4.47A6.41 6.41 0 00112.33 115.35z"></path>
    </svg>
);
