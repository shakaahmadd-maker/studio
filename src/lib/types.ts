
import type { Timestamp } from "firebase/firestore";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  longDescription: string;
  offerings: string[];
  process: string[];
  benefits: string[];
  createdAt: Timestamp;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  details: {
    longDescription: string;
    offerings: string[];
    steps: string[];
    benefits: string[];
  };
}

export interface SuccessStory {
  id: string;
  name: string;
  university: string;
  story: string;
  clientImageUrl: string;
  visaImageUrl: string;
  createdAt: Timestamp;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publicationDate: Timestamp;
}

export interface TeamMember {
  id:string;
  name: string;
  title: string;
  imageId: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface JobOpening {
    id: string;
    title: string;
    location: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract";
    description: string;
    createdAt: Timestamp;
}

export interface University {
    name: string;
    logoUrl?: string;
}

export interface UKScholarship {
  icon: string;
  title: string;
  description: string;
  examples: string[];
  borderColor: string;
  titleColor: string;
}

export interface OtherEuropeScholarship {
    country: string;
    icon: React.ReactNode;
}

export interface GlobalScholarship {
    title: string;
    description: string;
    borderColor: string;
    titleColor: string;
    coverage: {
        text: string;
        icon: string;
        color: string;
    }[];
}

export interface WhyChooseUsItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Referral {
    id: string;
    referrerName: string;
    referrerEmail: string;
    refereeName: string;
    refereeEmail: string;
    refereePhone: string;
    status: 'Pending' | 'Contacted' | 'Enrolled';
    createdAt: Timestamp;
}
