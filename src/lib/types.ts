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

export interface SuccessStory {
  id: string;
  name: string;
  university: string;
  story: string;
  imageId: string;
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
