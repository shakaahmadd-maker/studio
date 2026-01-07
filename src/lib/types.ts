export interface Service {
  id: string;
  title: string;
  description: string;
  imageId: string;
  details: {
    longDescription: string;
    offerings: string[];
    steps: string[];
    benefits: string[];
  };
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
  clientImageId: string;
  visaImageId: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageId: string;
}

export interface TeamMember {
  id: string;
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
    title: string;
    location: string;
    type: "Full-time" | "Part-time" | "Internship" | "Contract";
    description: string;
}

export interface University {
    name: string;
    logoUrl?: string;
}

export interface Scholarship {
    title: string;
    level: string;
    coverage: string[];
    notes: string;
    icon: JSX.Element;
}

export interface OtherEuropeScholarship {
    country: string;
    icon: JSX.Element;
    note: string;
}

export interface UKScholarship {
  title: string;
  description: string;
  examples: string[];
  idealFor: string;
}
