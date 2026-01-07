import type { Service, SuccessStory, BlogPost, TeamMember, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'bachelor',
    title: 'Bachelor Students',
    description: 'Comprehensive guidance for your undergraduate studies abroad.',
    imageId: 'service-bachelor',
    details: {
      offerings: ['University Selection', 'Application Assistance', 'Visa Guidance'],
      steps: ['Initial Consultation', 'Document Preparation', 'Submission', 'Follow-up'],
      benefits: ['Access to top universities', 'Stress-free process', 'Higher admission chances'],
    },
  },
  {
    id: 'master',
    title: 'Master Students',
    description: 'Expert support for pursuing your postgraduate education.',
    imageId: 'service-master',
    details: {
      offerings: ['Course Matching', 'SOP/LOR Crafting', 'Scholarship Assistance'],
      steps: ['Profile Evaluation', 'Application Strategy', 'Visa Interview Prep'],
      benefits: ['Personalized roadmap', 'Stronger application', 'Financial aid opportunities'],
    },
  },
  {
    id: 'phd',
    title: 'PhD Students',
    description: 'Specialized assistance for your doctoral research journey.',
    imageId: 'service-phd',
    details: {
      offerings: ['Research Proposal Writing', 'Supervisor Connect', 'Interview Preparation'],
      steps: ['Research Area Identification', 'Proposal Development', 'University Outreach'],
      benefits: ['Connect with leading researchers', 'Well-defined research plan', 'Enhanced acceptance rate'],
    },
  },
  {
    id: 'diploma',
    title: '1-Year Diplomas',
    description: 'Fast-track your career with specialized diploma programs.',
    imageId: 'service-diploma',
    details: {
      offerings: ['College Selection', 'Co-op Program Guidance', 'Work Permit Info'],
      steps: ['Career Goal Analysis', 'Program Search', 'Application & Visa'],
      benefits: ['Industry-relevant skills', 'Quicker path to employment', 'Practical experience'],
    },
  },
  {
    id: 'language',
    title: 'Language Classes',
    description: 'Prepare for language proficiency tests like IELTS, TOEFL, and more.',
    imageId: 'service-language',
    details: {
      offerings: ['IELTS Preparation', 'TOEFL iBT Courses', 'PTE Academic Training'],
      steps: ['Diagnostic Test', 'Customized Study Plan', 'Mock Tests & Feedback'],
      benefits: ['Achieve your target score', 'Expert instructors', 'Flexible schedules'],
    },
  },
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    university: 'University of Toronto, Canada',
    story: 'EduVision made my dream of studying computer science in Canada a reality. Their guidance was invaluable!',
    imageId: 'success-1',
  },
  {
    id: '2',
    name: 'Rohan Mehta',
    university: 'New York University, USA',
    story: 'The team was incredibly supportive throughout the entire application and visa process. Highly recommended!',
    imageId: 'success-2',
  },
  {
    id: '3',
    name: 'Priya Singh',
    university: 'University of Melbourne, Australia',
    story: 'From shortlisting universities to my visa interview, EduVision was there for me every step of the way.',
    imageId: 'success-3',
  },
  {
    id: '4',
    name: 'Amit Patel',
    university: 'Technical University of Munich, Germany',
    story: 'Their expertise in European universities helped me secure a position in a top engineering program.',
    imageId: 'success-4',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-course',
    title: 'How to Choose the Right Course for Your Career',
    date: '2024-07-15',
    author: 'Admin',
    excerpt: 'Choosing the right course is a pivotal decision. Here are some key factors to consider to ensure you make the best choice for your future.',
    content: '<p>Choosing the right course is a pivotal decision that can shape your entire career. It\'s not just about what you enjoy, but also about future prospects, skills, and personal growth. Here are some key factors to consider to ensure you make the best choice for your future.</p><h3>1. Self-Assessment</h3><p>Before you even start looking at brochures, look at yourself. What are your interests, passions, and strengths? What subjects do you excel at? Answering these questions can provide a great starting point.</p><h3>2. Career Goals</h3><p>Think about where you want to be in 5 or 10 years. Research careers that align with your interests and see what qualifications are required. This will help you narrow down your course options.</p><h3>3. University & Location</h3><p>The university and its location can greatly impact your experience. Consider factors like campus culture, city life, cost of living, and networking opportunities.</p>',
    imageId: 'blog-1',
  },
  {
    slug: 'scholarship-guide',
    title: 'A Comprehensive Guide to Finding Scholarships',
    date: '2024-07-10',
    author: 'Admin',
    excerpt: 'Funding your education abroad can be challenging. This guide provides a comprehensive overview of how to find and apply for scholarships.',
    content: '<p>Funding your education abroad can be challenging, but with the right strategy, you can secure scholarships to ease the financial burden. This guide provides a comprehensive overview of how to find and apply for scholarships.</p><h3>1. Start Early</h3><p>The scholarship application process can be lengthy. Start your research at least a year before you plan to begin your studies.</p><h3>2. Where to Look</h3><p>Explore university websites, government scholarship portals, and private foundation databases. Don\'t forget to check for country-specific and subject-specific scholarships.</p><h3>3. Craft a Strong Application</h3><p>Your application is your chance to shine. Tailor your personal statement to each scholarship, highlight your achievements, and get strong letters of recommendation.</p>',
    imageId: 'blog-2',
  },
  {
    slug: 'visa-interview-tips',
    title: 'Top 10 Tips for a Successful Visa Interview',
    date: '2024-07-05',
    author: 'Admin',
    excerpt: 'The visa interview is often the final hurdle. Being well-prepared is key. Here are our top 10 tips to help you succeed.',
    content: '<p>The visa interview is often the final hurdle in your study abroad journey. Being well-prepared is key to making a positive impression. Here are our top 10 tips to help you succeed.</p><h3>1. Be Clear About Your Intentions</h3><p>Clearly state that your primary purpose is to study and that you intend to return to your home country after completing your education.</p><h3>2. Know Your Program and University</h3><p>Be prepared to discuss why you chose your specific program and university. This shows you are a genuine student.</p><h3>3. Financial Stability</h3><p>Have all your financial documents in order and be ready to explain how you will fund your education and living expenses.</p>',
    imageId: 'blog-3',
  },
];

export const team: TeamMember[] = [
    { id: '1', name: 'Alina Rai', title: 'Founder & CEO', imageId: 'team-1' },
    { id: '2', name: 'Ben Carter', title: 'Lead Counselor', imageId: 'team-2' },
    { id: '3', name: 'Chloe Das', title: 'Visa & Admissions Head', imageId: 'team-3' },
];

export const faqs: FAQ[] = [
    { id: '1', question: 'What are the first steps?', answer: 'The first step is a free consultation with our counselors to evaluate your profile and discuss your goals.', category: 'general' },
    { id: '2', question: 'Do you help with visa applications?', answer: 'Yes, we provide comprehensive visa guidance, including document preparation and mock interview sessions.', category: 'general' },
    { id: '3', question: 'How do I choose a university for my Bachelor\'s?', answer: 'We help you choose a university based on your academic profile, budget, career goals, and preferred location.', category: 'bachelor' },
    { id: '4', question: 'Can you help me write my Statement of Purpose (SOP) for a Master\'s program?', answer: 'Absolutely. Our team helps you craft a compelling SOP that highlights your strengths and aspirations.', category: 'master' },
    { id: '5', question: 'How do I find a research supervisor for my PhD?', answer: 'We assist you in identifying and connecting with potential supervisors whose research aligns with your interests.', category: 'phd' },
];
