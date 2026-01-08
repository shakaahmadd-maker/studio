
import type { Service, SuccessStory, TeamMember, FAQ, ServiceCategory, JobOpening, University, UKScholarship, OtherEuropeScholarship, GlobalScholarship, WhyChooseUsItem } from './types';
import { Award, Briefcase, Landmark, Lightbulb, FileSignature, Trophy, Gem, LifeBuoy, Route, SendHorizontal } from 'lucide-react';
import React from 'react';

export const services: any[] = [
  {
    id: 'germany',
    slug: 'germany',
    title: 'Study in Germany',
    shortDescription: 'World-class education with low or no tuition fees.',
    imageUrl: "https://images.unsplash.com/photo-1679254205082-ba0b1d469ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxnZXJtYW55JTIwbGFuZG1hcmt8ZW58MHx8fHwxNzY3Nzg1ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: `<h3>🇩🇪 Your Gateway to German Excellence: Study in Germany with Uni Help Consultants</h3>
<p>Planning your future starts with choosing the right study destination, and Germany, a land of innovation and academic distinction, offers unparalleled opportunities. At Uni Help Consultants, we are dedicated to making your dream of studying in Germany a smooth, successful, and enriching reality.</p>
<h3>Why Choose Uni Help Consultants?</h3>
<p><strong>A Decade of Expertise:</strong> We have been in the market since 2014, providing expert guidance and a proven track record of successful student placements in Germany. Our experience translates directly into your success.</p>
<p><strong>Dedicated & Excellent Team:</strong> Our team consists of highly-trained specialists committed to assisting you in all aspects of your study in Germany journey. From initial counseling to post-arrival support, we offer personalized, end-to-end service.</p>
<p><strong>Specialized German Language Training:</strong> We help you prepare for the language requirements! Our team includes experts who specialize in teaching German from A1 to B2 level, ensuring you have the necessary language skills for university applications and integration into German life.</p>
<p><strong>Personalized University Selection:</strong> We understand that every profile is unique. We provide in-depth counseling to help you choose the right university and program that perfectly aligns with your academic background, career goals, and personal aspirations.</p>
<p><strong>Comprehensive Visa & Pre-Departure Facilitation:</strong> We take the stress out of the complex visa process, assisting you with:</p>
<ul>
    <li>Visa appointment booking.</li>
    <li>Thorough document preparation and verification.</li>
    <li>Interview coaching for the German Embassy/Consulate.</li>
    <li>Blocked Account and Health Insurance support (essential for the visa).</li>
    <li>Full pre-departure briefing and support to ensure a smooth journey and arrival.</li>
</ul>`,
      offerings: [
        'Profile evaluation and university shortlisting',
        'SOP/motivation letter guidance',
        'Assistance with German Blocked Account and health insurance',
        'Expert support for visa application and mock interviews',
      ],
      process: [
        'Profile evaluation & university shortlisting',
        'Application submission & follow-up',
        'Blocked Account & Insurance setup',
        'Visa documentation & interview prep',
      ],
      benefits: [
        'Access to world-class, often tuition-free education',
        'Globally recognized qualifications enhancing job prospects',
        '18-month post-study work visa to find a qualified job',
        'Clear pathway to Permanent Residency (PR) and citizenship',
      ]
  },
  {
    id: 'france',
    slug: 'france',
    title: 'Study in France',
    shortDescription: 'Experience rich culture and prestigious universities.',
    imageUrl: "https://images.unsplash.com/photo-1627654065786-bd0375235c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZnJhbmNlJTIwbGFuZG1hcmt8ZW58MHx8fHwxNzY3Nzg1ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'France is renowned for its rich history, art, and intellectual tradition. Studying in France offers a chance to immerse yourself in a new culture while receiving a top-tier education from globally recognized institutions, especially in fields like luxury brand management, fashion, and culinary arts.',
      offerings: ['Grandes Écoles & University Applications', 'Campus France Procedure', 'Accommodation Support', 'French Language Integration'],
      process: ['Initial Counseling', 'Program Selection', 'Application Process', 'Pre-departure Briefing'],
      benefits: ['Affordable tuition fees', 'Rich cultural experience', 'Strong industry connections', 'Learn the language of diplomacy'],
  },
  {
    id: 'italy',
    slug: 'italy',
    title: 'Study in Italy',
    shortDescription: 'Combine historic landmarks with modern education.',
    imageUrl: "https://images.unsplash.com/photo-1540757496893-b9e77b0ec802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpdGFseSUyMGxhbmRtYXJrfGVufDB8fHx8MTc2Nzc4NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'From ancient Rome to the Renaissance, Italy is a country steeped in history and art. Its universities are among the oldest in the world, offering a wide range of programs in English, particularly in design, architecture, and humanities. Enjoy the beautiful landscapes, delicious food, and passionate culture.',
      offerings: ['University Pre-enrollment', 'Declaration of Value (DOV)', 'Scholarship Guidance (DSU)', 'Visa & Residence Permit Help'],
      process: ['Evaluation & Shortlisting', 'Document Preparation', 'Application Submission', 'Post-arrival Support'],
      benefits: ['Affordable living costs', 'Access to historical and artistic treasures', 'Globally recognized degrees', 'Vibrant student life'],
  },
  {
    id: 'malta',
    slug: 'malta',
    title: 'Study in Malta',
    shortDescription: 'English-speaking Mediterranean destination for studies.',
    imageUrl: "https://images.unsplash.com/photo-1687033722810-08b7072236c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtYWx0YSUyMGNpdHl8ZW58MHx8fHwxNzY3Nzg1ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'Malta is a sunny Mediterranean archipelago offering a safe and welcoming environment for international students. With English as an official language, it\'s an easy place to adapt to. The country is a growing hub for iGaming, finance, and tourism, providing unique career opportunities.',
      offerings: ['Course & University Selection', 'Application Processing', 'Student Visa Guidance', 'Part-time Work Permit Info'],
      process: ['Consultation', 'Application', 'Offer Letter & Fee Payment', 'Visa Application'],
      benefits: ['English-speaking country', 'Safe and stable environment', 'Schengen Area member', 'Growing job market'],
  },
  {
    id: 'ireland',
    slug: 'ireland',
    title: 'Study in Ireland',
    shortDescription: 'The "Silicon Valley of Europe" with top tech universities.',
    imageUrl: "https://images.unsplash.com/photo-1693342563508-75ff43f43198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxpcmVsYW5kJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc2Nzc4NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'Known as the Emerald Isle, Ireland is a friendly and innovative country. It is home to the European headquarters of many tech giants, making it a prime location for students in IT, computer science, and business. Irish universities are known for their research excellence and close ties to industry.',
      offerings: ['University & College Applications', 'Irish Visa Application Support', 'Guidance on IRP Card', 'Career & Internship Advice'],
      process: ['Profile Analysis', 'University Selection', 'Application & SOP', 'Visa & Pre-departure'],
      benefits: ['1-2 year post-study work visa', 'Hub for major tech companies', 'High-quality education system', 'Welcoming and friendly culture'],
  },
  {
    id: 'uk',
    slug: 'uk',
    title: 'Study in the UK',
    shortDescription: 'Home to some of the world\'s most prestigious universities.',
    imageUrl: "https://images.unsplash.com/photo-1723126906313-bcbbe80947cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx1ayUyMGxhbmRtYXJrfGVufDB8fHx8MTc2Nzc4NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'The United Kingdom has a long and storied tradition of academic excellence. With institutions like Oxford, Cambridge, and many others, the UK offers a diverse range of high-quality courses. Experience a multicultural society and a gateway to Europe.',
      offerings: ['UCAS Application for Undergraduates', 'Postgraduate Application Support', 'Student Route Visa Guidance', 'Credibility Interview Preparation'],
      process: ['Initial Assessment', 'Course & University Selection', 'Application Crafting', 'Visa & CAS Support'],
      benefits: ['World-renowned universities', 'Graduate Route post-study work visa', 'Diverse and multicultural environment', 'Shorter course durations'],
  },
  {
    id: 'usa',
    slug: 'usa',
    title: 'Study in the USA',
    shortDescription: 'Diverse opportunities in the land of innovation.',
    imageUrl: "https://images.unsplash.com/photo-1719585891737-99eae89beee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx1c2ElMjBsYW5kbWFya3xlbnwwfHx8fDE3Njc3ODU4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'The United States offers a vast and diverse higher education system, from liberal arts colleges to large research universities. It is a leader in technology, research, and innovation, providing students with cutting-edge resources and opportunities for practical training (OPT/CPT).',
      offerings: ['University Shortlisting (incl. Ivy League)', 'SOP/Essay Editing', 'F-1 Visa Interview Training', 'Scholarship & Assistantship Help'],
      process: ['Strategy Session', 'Test Preparation Guidance', 'Application Management', 'Visa Mock Interviews'],
      benefits: ['Flexible education system', 'Optional Practical Training (OPT)', 'Global leadership in research', 'Cultural diversity'],
  },
  {
    id: 'australia',
    slug: 'australia',
    title: 'Study in Australia',
    shortDescription: 'Enjoy a high standard of living and excellent education.',
    imageUrl: "https://images.unsplash.com/photo-1767259120555-268a31275b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhdXN0cmFsaWElMjBsYW5kbWFya3xlbnwwfHx8fDE3Njc3ODU4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    longDescription: 'Australia is known for its stunning landscapes, vibrant cities, and laid-back lifestyle. Its universities are internationally respected, with a strong focus on research and student welfare. The country offers generous post-study work rights, making it an attractive destination.',
      offerings: ['University & TAFE Applications', 'Genuine Temporary Entrant (GTE) Guidance', 'Student Visa (Subclass 500) Support', 'Post-Study Work Visa (Subclass 485) Info'],
      process: ['Initial Consultation', 'Application Lodgement', 'Offer Acceptance', 'Visa Filing'],
      benefits: ['Excellent quality of life', 'Generous post-study work rights', 'Focus on student support services', 'Multicultural and welcoming society'],
  },
];


export const serviceCategories: ServiceCategory[] = [
    {
      id: 'bachelor',
      title: 'Bachelor Programs',
      description: 'Comprehensive guidance for your undergraduate journey abroad.',
      details: {
        longDescription: 'Starting your undergraduate degree abroad is a life-changing decision. We provide end-to-end support to ensure you find the right university and program to kickstart your academic and professional career.',
        offerings: ['University & Program Shortlisting', 'Application & Essay Guidance', 'Standardized Test Preparation (SAT, ACT)', 'Student Visa Support'],
        steps: ['Profile Assessment', 'Application Strategy', 'Document Preparation', 'Pre-Departure Orientation'],
        benefits: ['Build a strong academic foundation', 'Gain international exposure early', 'Develop cross-cultural communication skills', 'Enhance future career prospects']
      }
    },
    {
      id: 'master',
      title: 'Master Programs',
      description: 'Expert advice to advance your education and career with a Master\'s degree.',
      details: {
        longDescription: 'A Master\'s degree from a top international university can significantly boost your career. We specialize in helping you navigate the competitive application process for graduate programs.',
        offerings: ['Advanced Program & University Matching', 'Statement of Purpose (SOP) & Resume Building', 'GRE/GMAT Preparation Strategy', 'Scholarship & Funding Assistance'],
        steps: ['Career Goal Alignment', 'Application Timeline Management', 'Visa & Financial Documentation', 'Networking & Alumni Connections'],
        benefits: ['Specialize in your field of interest', 'Access to advanced research opportunities', 'Higher earning potential', 'Global professional network']
      }
    },
    {
      id: 'phd',
      title: 'PhD Programs',
      description: 'Specialized support for aspiring researchers and academics.',
      details: {
        longDescription: 'Pursuing a PhD is a significant commitment. Our expert counselors, many with research backgrounds, guide you in finding the right supervisor and research environment to match your academic ambitions.',
        offerings: ['Finding Potential Supervisors', 'Crafting a Compelling Research Proposal', 'PhD Funding & Stipend Applications', 'Interview Preparation for Academic Positions'],
        steps: ['Research Interest Evaluation', 'Supervisor Outreach', 'Application Package Review', 'Post-acceptance Formalities'],
        benefits: ['Contribute to cutting-edge research', 'Become an expert in your field', 'Opportunities for academic careers', 'Full funding and stipends often available']
      }
    },
    {
        id: 'diploma',
        title: 'Diploma Programs',
        description: 'Fast-track your career with specialized diploma programs.',
        details: {
        longDescription: 'One-year diploma programs are an excellent way to gain practical skills and enter the job market quickly. We help you find accredited programs that offer strong career outcomes.',
        offerings: ['Vocational & Technical Program Selection', 'Co-op & Internship Placement Assistance', 'Direct Pathway to Work Visas', 'Industry-Specific Career Counseling'],
        steps: ['Career & Skills Assessment', 'Program Research & Application', 'Visa Process for Vocational Studies', 'Job Market Integration'],
        benefits: ['Quicker entry into the workforce', 'Lower tuition and living costs', 'Practical, hands-on training', 'Strong connections with local employers']
      }
      },
    {
      id: 'languages',
      title: 'Language Programs',
      description: 'Master a new language to unlock your study and career goals.',
      details: {
        longDescription: 'Language proficiency is often the key to unlocking educational opportunities. We offer guidance on and enrollment in top language schools abroad, including pathway programs that lead to university admission.',
        offerings: ['German, French, Spanish, IELTS & TOEFL', 'Pathway Program Guidance', 'Language Test Preparation', 'Short-term Study Visas'],
        steps: ['Language Goal Assessment', 'School & Program Selection', 'Enrollment & Visa Application', 'Cultural Immersion Planning'],
        benefits: ['Achieve fluency through immersion', 'Meet university language requirements', 'Enhance your global communication skills', 'Experience a new culture firsthand']
      }
    }
  ];


export const successStories: any[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    university: 'University of Toronto, Canada',
    story: 'Uni Help Consultants made my dream of studying computer science in Canada a reality. Their guidance was invaluable!',
    clientImageId: 'success-1',
    visaImageId: 'visa-1',
  },
  {
    id: '2',
    name: 'Rohan Mehta',
    university: 'New York University, USA',
    story: 'The team was incredibly supportive throughout the entire application and visa process. Highly recommended!',
    clientImageId: 'success-2',
    visaImageId: 'visa-2',
  },
  {
    id: '3',
    name: 'Priya Singh',
    university: 'University of Melbourne, Australia',
    story: 'From shortlisting universities to my visa interview, Uni Help Consultants was there for me every step of the way.',
    clientImageId: 'success-3',
    visaImageId: 'visa-3',
  },
  {
    id: '4',
    name: 'Amit Patel',
    university: 'Technical University of Munich, Germany',
    story: 'Their expertise in European universities helped me secure a position in a top engineering program.',
    clientImageId: 'success-4',
    visaImageId: 'visa-4',
  },
];

export const blogPosts: any[] = [
    {
        id: '1',
        slug: 'choosing-the-right-course',
        title: 'How to Choose the Right Course for Your Career',
        publicationDate: new Date('2024-07-15'),
        author: 'Admin',
        excerpt: 'Choosing the right course is a pivotal decision. Here are some key factors to consider to ensure you make the best choice for your future.',
        content: '<p>Choosing the right course is a pivotal decision that can shape your entire career. It\'s not just about what you enjoy, but also about future prospects, skills, and personal growth. Here are some key factors to consider to ensure you make the best choice for your future.</p><h3>1. Self-Assessment</h3><p>Before you even start looking at brochures, look at yourself. What are your interests, passions, and strengths? What subjects do you excel at? Answering these questions can provide a great starting point.</p><h3>2. Career Goals</h3><p>Think about where you want to be in 5 or 10 years. Research careers that align with your interests and see what qualifications are required. This will help you narrow down your course options.</p><h3>3. University & Location</h3><p>The university and its location can greatly impact your experience. Consider factors like campus culture, city life, cost of living, and networking opportunities.</p>',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1572455039929-2760c4f1ab1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d3JpdGluZyUyMG5vdGVib29rfGVufDB8fHx8MTc2Nzc2NDAxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: '2',
        slug: 'scholarship-guide',
        title: 'A Comprehensive Guide to Finding Scholarships',
        publicationDate: new Date('2024-07-10'),
        author: 'Admin',
        excerpt: 'Funding your education abroad can be challenging. This guide provides a comprehensive overview of how to find and apply for scholarships.',
        content: '<p>Funding your education abroad can be challenging, but with the right strategy, you can secure scholarships to ease the financial burden. This guide provides a comprehensive overview of how to find and apply for scholarships.</p><h3>1. Start Early</h3><p>The scholarship application process can be lengthy. Start your research at least a year before you plan to begin your studies.</p><h3>2. Where to Look</h3><p>Explore university websites, government scholarship portals, and private foundation databases. Don\'t forget to check for country-specific and subject-specific scholarships.</p><h3>3. Craft a Strong Application</h3><p>Your application is your chance to shine. Tailor your personal statement to each scholarship, highlight your achievements, and get strong letters of recommendation.</p>',
        imageUrl: 'https://images.unsplash.com/photo-1713098965471-d324f294a71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3b3JsZCUyMG1hcHxlbnwwfHx8fDE3Njc3MjE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: '3',
        slug: 'visa-interview-tips',
        title: 'Top 10 Tips for a Successful Visa Interview',
        publicationDate: new Date('2024-07-05'),
        author: 'Admin',
        excerpt: 'The visa interview is often the final hurdle. Being well-prepared is key. Here are our top 10 tips to help you succeed.',
        content: '<p>The visa interview is often the final hurdle in your study abroad journey. Being well-prepared is key to making a positive impression. Here are our top 10 tips to help you succeed.</p><h3>1. Be Clear About Your Intentions</h3><p>Clearly state that your primary purpose is to study and that you intend to return to your home country after completing your education.</p><h3>2. Know Your Program and University</h3><p>Be prepared to discuss why you chose your specific program and university. This shows you are a genuine student.</p><h3>3. Financial Stability</h3><p>Have all your financial documents in order and be ready to explain how you will fund your education and living expenses.</p>',
        imageUrl: 'https://images.unsplash.com/photo-1596123068611-c89d922a0f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxib29rcyUyMGRlc2t8ZW58MHx8fHwxNzY3Nzc2OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
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

export const jobOpenings: JobOpening[] = [
    {
        title: "Senior Education Counselor",
        location: "Remote",
        type: "Full-time",
        description: "<p>We are seeking an experienced Senior Education Counselor to join our remote team. The ideal candidate will have a passion for helping students achieve their dreams of studying abroad and a deep understanding of international education systems.</p><h3>Responsibilities:</h3><ul><li>Provide expert counseling to students on university and course selection.</li><li>Guide students through the entire application and admission process.</li><li>Stay up-to-date with changes in visa policies and admission requirements.</li></ul>"
    },
    {
        title: "Visa Processing Officer",
        location: "On-site",
        type: "Full-time",
        description: "<p>We are looking for a meticulous and organized Visa Processing Officer to handle all aspects of student visa applications. This is an on-site position requiring great attention to detail.</p><h3>Responsibilities:</h3><ul><li>Manage the end-to-end visa application process for multiple countries.</li><li>Ensure all documentation is accurate and complete.</li><li>Prepare students for visa interviews.</li></ul>"
    },
    {
        title: "Digital Marketing Intern",
        location: "Remote",
        type: "Internship",
        description: "<p>This is an exciting opportunity for a creative individual to gain hands-on experience in digital marketing within the education sector. This is a remote internship role.</p><h3>Responsibilities:</h3><ul><li>Assist in creating and managing social media content.</li><li>Support SEO/SEM campaigns.</li><li>Help analyze marketing data and prepare reports.</li></ul>"
    }
];

export const universities: University[] = [
  { name: 'Technical University of Munich', logoUrl: 'https://logo.clearbit.com/tum.de' },
  { name: 'LMU Munich', logoUrl: 'https://logo.clearbit.com/lmu.de' },
  { name: 'Heidelberg University', logoUrl: 'https://logo.clearbit.com/uni-heidelberg.de' },
  { name: 'Free University of Berlin', logoUrl: 'https://logo.clearbit.com/fu-berlin.de' },
  { name: 'Humboldt University of Berlin', logoUrl: 'https://logo.clearbit.com/hu-berlin.de' },
  { name: 'RWTH Aachen University', logoUrl: 'https://logo.clearbit.com/rwth-aachen.de' },
  { name: 'Karlsruhe Institute of Technology', logoUrl: 'https://logo.clearbit.com/kit.edu' },
  { name: 'University of Hamburg', logoUrl: 'https://logo.clearbit.com/uni-hamburg.de' },
  { name: 'University of Cologne', logoUrl: 'https://logo.clearbit.com/uni-koeln.de' },
  { name: 'University of Göttingen', logoUrl: 'https://logo.clearbit.com/uni-goettingen.de' },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
    {
        icon: <Lightbulb />,
        title: "Expert Scholarship Guidance",
        description: "We offer personalized guidance based on your unique academic background, career aspirations, and financial needs, identifying the right merit-based, need-based, or research opportunities for you."
    },
    {
        icon: <FileSignature />,
        title: "Comprehensive Application Support",
        description: "Receive step-by-step support for writing compelling personal statements, crafting standout essays, and ensuring all necessary documentation is perfectly in order to highlight your strengths."
    },
    {
        icon: <Trophy />,
        title: "Maximize Your Chances of Winning",
        description: "Our deep understanding of scholarship panels gives you a competitive edge. We ensure your application reflects the leadership, academic excellence, and passion they look for in highly competitive programs."
    },
    {
        icon: <Gem />,
        title: "Access to Exclusive Scholarships",
        description: "Benefit from our wide network of universities and private organizations, granting you awareness of hidden gems and fully funded opportunities not available through conventional channels."
    },
    {
        icon: <LifeBuoy />,
        title: "Ongoing Support and Mentorship",
        description: "Our support doesn't end with the award. We assist with visa applications, accommodation, and transition to ensure a smooth and successful start to your academic life abroad."
    },
    {
        icon: <Route />,
        title: "Tailored Scholarship Strategy for Every Student",
        description: "At Uni Help Consultants, we craft a personalized scholarship strategy based on your goals and background, ensuring your applications align with your strengths and aspirations."
    }
]

export const europeScholarships = {
  major: [
    {
      icon: 'award',
      title: 'Erasmus+ / Erasmus Mundus (EU)',
      description: "Highly competitive, joint Master's programs across Europe.",
      level: 'Bachelor’s / Master’s / PhD',
      focus: 'Studying across multiple European countries.',
      borderColor: 'border-blue-600',
      titleColor: 'text-blue-600',
      focusColor: 'text-blue-500',
      coverage: [
        { text: 'Full Tuition', icon: 'check-circle', color: 'green' },
        { text: 'Monthly Stipend', icon: 'wallet', color: 'green' },
        { text: 'Travel & Internship Support', icon: 'plane', color: 'green' },
      ],
    },
    {
      icon: 'book-open-text',
      title: 'DAAD Scholarships (🇩🇪 Germany)',
      description: 'German Academic Exchange Service.',
      level: 'Master’s, PhD, Research Grants',
      focus: 'Research-focused, extensive graduate coverage.',
      borderColor: 'border-black',
      titleColor: 'text-gray-800',
      focusColor: 'text-red-500',
      coverage: [
        { text: 'Full Tuition/Fees', icon: 'dollar-sign', color: 'yellow' },
        { text: 'Health Insurance', icon: 'heart-pulse', color: 'yellow' },
        { text: 'Travel Allowance', icon: 'plane', color: 'yellow' },
      ],
    },
    {
      icon: 'mountain',
      title: 'Swiss Excellence (🇨🇭 Switzerland)',
      description: 'Promoting academic exchange, open worldwide.',
      level: 'Master’s / PhD / Research',
      focus: 'Advanced research (Science, Engineering, Humanities).',
      borderColor: 'border-red-600',
      titleColor: 'text-red-600',
      focusColor: 'text-red-500',
      coverage: [
        { text: 'Full Tuition', icon: 'check-circle', color: 'purple' },
        { text: 'Monthly Stipend', icon: 'wallet', color: 'purple' },
      ],
    },
    {
        icon: 'medal',
        title: 'Emile Boutmy (🇫🇷 France)',
        description: 'Exclusive for non-EU students at Sciences Po University.',
        level: 'Bachelor’s / Master’s',
        focus: 'Social Sciences, Law, Political Science.',
        borderColor: 'border-blue-500',
        titleColor: 'text-blue-700',
        focusColor: 'text-blue-600',
        coverage: [
            { text: 'Up to $21k/year', icon: 'check-circle', color: 'blue' },
            { text: 'Partial Living Costs', icon: 'wallet', color: 'blue' },
        ],
    },
    {
        icon: 'trophy',
        title: 'Eiffel Excellence (🇫🇷 France)',
        description: 'Administered through French institutions to attract talent.',
        level: 'Master’s / PhD',
        focus: 'Science, Engineering, Economics, Law.',
        borderColor: 'border-red-500',
        titleColor: 'text-red-700',
        focusColor: 'text-red-600',
        coverage: [
            { text: 'Monthly Allowance', icon: 'wallet', color: 'red' },
            { text: 'Travel Costs', icon: 'plane', color: 'red' },
            { text: 'No Tuition Coverage', icon: 'x-circle', color: 'gray' },
        ],
    },
  ],
  national: [
    { country: 'Belgium', icon: '🇧🇪'},
    { country: 'Sweden', icon: '🇸🇪'},
    { country: 'Ireland', icon: '🇮🇪'},
    { country: 'Netherlands', icon: '🇳🇱'},
    { country: 'Finland', icon: '🇫🇮'},
    { country: 'Denmark', icon: '🇩🇰'},
    { country: 'Norway', icon: '🇳🇴'},
  ] as OtherEuropeScholarship[],
};

export const ukScholarshipsData: UKScholarship[] = [
  {
    icon: 'star',
    title: 'Fully Funded Scholarships',
    description: 'Covers all expenses: tuition, living costs, travel, and insurance.',
    examples: ['Rhodes Scholarship (Oxford)', 'Gates Cambridge Scholarship (Cambridge)', 'Chevening Scholarship (UK Government)'],
    borderColor: 'border-pink-600',
    titleColor: 'text-pink-600',
  },
  {
    icon: 'award',
    title: 'Merit-Based Scholarships',
    description: 'Awarded for academic excellence and leadership potential.',
    examples: ['Clarendon Scholarship (Oxford)', 'Dean’s Excellence Scholarship (Westminster)'],
    borderColor: 'border-indigo-600',
    titleColor: 'text-indigo-600',
  },
  {
    icon: 'hand-coins',
    title: 'Partial & Need-Based',
    description: 'Assistance for specific costs or financial constraints.',
    examples: ['Commonwealth Scholarship (Partial)', 'The Great Scholarship (Need-Based, Partial)', 'University-Specific Partial Funding'],
    borderColor: 'border-green-600',
    titleColor: 'text-green-600',
  },
  {
    icon: 'flask-round',
    title: 'Research & STEM',
    description: 'For PhD/MPhil programs and specific fields like technology.',
    examples: ['UK Research and Innovation (UKRI)', 'Research Excellence Scholarship (Birmingham)', 'Women in Engineering Scholarship (Cambridge)'],
    borderColor: 'border-red-600',
    titleColor: 'text-red-600',
  },
];

export const globalScholarships: GlobalScholarship[] = [
  {
    title: '🇺🇸 Fulbright Foreign Student Program',
    description: 'U.S. government exchange program (Master’s / PhD).',
    borderColor: 'border-blue-800',
    titleColor: 'text-blue-800',
    coverage: [
      { text: 'Full Funding', icon: 'check-circle', color: 'blue' },
      { text: 'Airfare & Health Insurance', icon: 'plane', color: 'blue' },
    ],
  },
  {
    title: '🇺🇸 Knight-Hennessy (Stanford)',
    description: 'For global leaders and innovators (Graduate Level).',
    borderColor: 'border-red-800',
    titleColor: 'text-red-800',
    coverage: [
      { text: 'Full Tuition & Stipend', icon: 'star', color: 'red' },
      { text: 'Leadership Training', icon: 'briefcase', color: 'red' },
    ],
  },
  {
    title: '🇨🇦 Canadian Gov & University Programs',
    description: 'Programs like UoT National and UBC Doctoral Fellowships.',
    borderColor: 'border-red-600',
    titleColor: 'text-red-600',
    coverage: [
      { text: 'Full/Partial Tuition', icon: 'dollar-sign', color: 'red' },
      { text: 'Research Funding', icon: 'search', color: 'red' },
    ],
  },
  {
    title: '🇦🇺 Australia Awards & RTP',
    description: 'Government-funded awards and Research Training Program for graduate students.',
    borderColor: 'border-green-800',
    titleColor: 'text-green-800',
    coverage: [
        { text: 'Full Tuition & Stipend', icon: 'check-circle', color: 'green' },
        { text: 'Travel & Health', icon: 'plane', color: 'green' },
    ],
  },
  {
    title: '🇳🇿 Manaaki New Zealand Scholarships',
    description: 'For students from developing countries focusing on sustainable development.',
    borderColor: 'border-black',
    titleColor: 'text-gray-800',
    coverage: [
      { text: 'Full Tuition & Stipend', icon: 'check-circle', color: 'gray' },
      { text: 'Travel & Health', icon: 'plane', color: 'gray' },
    ],
  },
  {
    title: '🇨🇳 China Scholarship Council (CSC)',
    description: 'Prominent government funding for international students at Chinese universities.',
    borderColor: 'border-red-500',
    titleColor: 'text-red-500',
    coverage: [
      { text: 'Full Funding', icon: 'check-circle', color: 'red' },
      { text: 'Accommodation Covered', icon: 'home', color: 'red' },
    ],
  },
  {
    title: '🇺🇸 Elite University Need-Based Aid',
    description: 'e.g., Harvard, Yale, Princeton.',
    borderColor: 'border-yellow-500',
    titleColor: 'text-yellow-700',
    coverage: [
        { text: '100% Need Met', icon: 'dollar-sign', color: 'yellow' },
        { text: 'Full Tuition & Living', icon: 'wallet', color: 'yellow' },
    ],
  },
];
