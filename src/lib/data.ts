import type { Service, SuccessStory, BlogPost, TeamMember, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'germany',
    title: 'Study in Germany',
    description: 'World-class education with low or no tuition fees.',
    imageId: 'service-germany',
    details: {
      longDescription: 'Germany consistently ranks as a top study destination for international students due to its unique combination of academic excellence and career prospects. At Uni Help Consultants, we have been providing expert guidance since 2014, with a proven track record of successful student placements in Germany. Our highly-trained specialists are committed to assisting you in all aspects of your journey, from personalized university selection to comprehensive visa and pre-departure facilitation. We even offer specialized German language training from A1 to B2 to ensure you have the necessary skills for success.',
      offerings: [
        'Profile evaluation and university shortlisting',
        'SOP/motivation letter guidance',
        'Assistance with German Blocked Account and health insurance',
        'Expert support for visa application and mock interviews',
        'Guidance on travel and pre-departure orientation',
        'Specialized German language training (A1-B2)',
        'Assistance in finding suitable accommodation',
        'Advice for finding part-time jobs and internships'
      ],
      steps: [
        'Profile evaluation & university shortlisting',
        'Application submission & follow-up',
        'Blocked Account & Insurance setup',
        'Visa documentation & interview prep',
        'Pre-departure briefing & travel arrangements'
      ],
      benefits: [
        'Access to world-class, often tuition-free education',
        'Globally recognized qualifications enhancing job prospects',
        '18-month post-study work visa to find a qualified job',
        'Clear pathway to Permanent Residency (PR) and citizenship',
        'Right to work part-time while studying (140 full days/year)',
        'Live in a safe, multicultural country with a high quality of life'
      ]
    },
  },
  {
    id: 'france',
    title: 'Study in France',
    description: 'Experience rich culture and prestigious universities.',
    imageId: 'service-france',
    details: {
      longDescription: 'France is renowned for its rich history, art, and intellectual tradition. Studying in France offers a chance to immerse yourself in a new culture while receiving a top-tier education from globally recognized institutions, especially in fields like luxury brand management, fashion, and culinary arts.',
      offerings: ['Grandes Écoles & University Applications', 'Campus France Procedure', 'Accommodation Support', 'French Language Integration'],
      steps: ['Initial Counseling', 'Program Selection', 'Application Process', 'Pre-departure Briefing'],
      benefits: ['Affordable tuition fees', 'Rich cultural experience', 'Strong industry connections', 'Learn the language of diplomacy'],
    },
  },
  {
    id: 'italy',
    title: 'Study in Italy',
    description: 'Combine historic landmarks with modern education.',
    imageId: 'service-italy',
    details: {
      longDescription: 'From ancient Rome to the Renaissance, Italy is a country steeped in history and art. Its universities are among the oldest in the world, offering a wide range of programs in English, particularly in design, architecture, and humanities. Enjoy the beautiful landscapes, delicious food, and passionate culture.',
      offerings: ['University Pre-enrollment', 'Declaration of Value (DOV)', 'Scholarship Guidance (DSU)', 'Visa & Residence Permit Help'],
      steps: ['Evaluation & Shortlisting', 'Document Preparation', 'Application Submission', 'Post-arrival Support'],
      benefits: ['Affordable living costs', 'Access to historical and artistic treasures', 'Globally recognized degrees', 'Vibrant student life'],
    },
  },
  {
    id: 'malta',
    title: 'Study in Malta',
    description: 'English-speaking Mediterranean destination for studies.',
    imageId: 'service-malta',
    details: {
      longDescription: 'Malta is a sunny Mediterranean archipelago offering a safe and welcoming environment for international students. With English as an official language, it\'s an easy place to adapt to. The country is a growing hub for iGaming, finance, and tourism, providing unique career opportunities.',
      offerings: ['Course & University Selection', 'Application Processing', 'Student Visa Guidance', 'Part-time Work Permit Info'],
      steps: ['Consultation', 'Application', 'Offer Letter & Fee Payment', 'Visa Application'],
      benefits: ['English-speaking country', 'Safe and stable environment', 'Schengen Area member', 'Growing job market'],
    },
  },
  {
    id: 'ireland',
    title: 'Study in Ireland',
    description: 'The "Silicon Valley of Europe" with top tech universities.',
    imageId: 'service-ireland',
    details: {
      longDescription: 'Known as the Emerald Isle, Ireland is a friendly and innovative country. It is home to the European headquarters of many tech giants, making it a prime location for students in IT, computer science, and business. Irish universities are known for their research excellence and close ties to industry.',
      offerings: ['University & College Applications', 'Irish Visa Application Support', 'Guidance on IRP Card', 'Career & Internship Advice'],
      steps: ['Profile Analysis', 'University Selection', 'Application & SOP', 'Visa & Pre-departure'],
      benefits: ['1-2 year post-study work visa', 'Hub for major tech companies', 'High-quality education system', 'Welcoming and friendly culture'],
    },
  },
  {
    id: 'uk',
    title: 'Study in the UK',
    description: 'Home to some of the world\'s most prestigious universities.',
    imageId: 'service-uk',
    details: {
      longDescription: 'The United Kingdom has a long and storied tradition of academic excellence. With institutions like Oxford, Cambridge, and many others, the UK offers a diverse range of high-quality courses. Experience a multicultural society and a gateway to Europe.',
      offerings: ['UCAS Application for Undergraduates', 'Postgraduate Application Support', 'Student Route Visa Guidance', 'Credibility Interview Preparation'],
      steps: ['Initial Assessment', 'Course & University Selection', 'Application Crafting', 'Visa & CAS Support'],
      benefits: ['World-renowned universities', 'Graduate Route post-study work visa', 'Diverse and multicultural environment', 'Shorter course durations'],
    },
  },
  {
    id: 'usa',
    title: 'Study in the USA',
    description: 'Diverse opportunities in the land of innovation.',
    imageId: 'service-usa',
    details: {
      longDescription: 'The United States offers a vast and diverse higher education system, from liberal arts colleges to large research universities. It is a leader in technology, research, and innovation, providing students with cutting-edge resources and opportunities for practical training (OPT/CPT).',
      offerings: ['University Shortlisting (incl. Ivy League)', 'SOP/Essay Editing', 'F-1 Visa Interview Training', 'Scholarship & Assistantship Help'],
      steps: ['Strategy Session', 'Test Preparation Guidance', 'Application Management', 'Visa Mock Interviews'],
      benefits: ['Flexible education system', 'Optional Practical Training (OPT)', 'Global leadership in research', 'Cultural diversity'],
    },
  },
  {
    id: 'australia',
    title: 'Study in Australia',
    description: 'Enjoy a high standard of living and excellent education.',
    imageId: 'service-australia',
    details: {
      longDescription: 'Australia is known for its stunning landscapes, vibrant cities, and laid-back lifestyle. Its universities are internationally respected, with a strong focus on research and student welfare. The country offers generous post-study work rights, making it an attractive destination.',
      offerings: ['University & TAFE Applications', 'Genuine Temporary Entrant (GTE) Guidance', 'Student Visa (Subclass 500) Support', 'Post-Study Work Visa (Subclass 485) Info'],
      steps: ['Initial Consultation', 'Application Lodgement', 'Offer Acceptance', 'Visa Filing'],
      benefits: ['Excellent quality of life', 'Generous post-study work rights', 'Focus on student support services', 'Multicultural and welcoming society'],
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
    { id: '1', question: 'What are the first steps to study abroad?', answer: 'The first step is a free consultation with our counselors to evaluate your profile and discuss your goals. We\'ll create a personalized roadmap for you.', category: 'general' },
    { id: '2', question: 'Do you help with student visa applications?', answer: 'Yes, we provide comprehensive visa guidance for all countries we service, including document preparation and mock interview sessions to build your confidence.', category: 'general' },
    { id: '3', question: 'How much does your service cost?', answer: 'Our initial consultation is completely free. Service fees vary depending on the country and the extent of services required. We offer transparent pricing with no hidden costs.', category: 'general' },
    { id: '4', question: 'Can you help with scholarships?', answer: 'Absolutely. We actively help students find and apply for a wide range of scholarships, including university-specific, government-funded, and private awards to make education more affordable.', category: 'general' },
    { id: '5', question: 'Why are there no tuition fees in German public universities?', answer: 'In Germany, education is considered a public good. Most public universities are funded by the state, so they do not charge tuition fees for both domestic and international students for most Bachelor\'s and Master\'s programs.', category: 'germany' },
];
