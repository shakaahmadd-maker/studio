import type { Service, SuccessStory, BlogPost, TeamMember, FAQ, ServiceCategory, JobOpening, University } from './types';

export const services: Service[] = [
  {
    id: 'germany',
    title: 'Study in Germany',
    description: 'World-class education with low or no tuition fees.',
    imageId: 'service-germany',
    details: {
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
</ul>
<h3>📚 Our A-to-Z Services for Studying in Germany</h3>
<p>Our full suite of services is designed to guide you from your first thought of studying abroad to settling into your new life in Germany:</p>
<table>
<thead>
<tr>
<th>Stage</th>
<th>Service Detail</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Admission</strong></td>
<td>Profile evaluation, shortlisting universities, application submission, SOP/motivation letter guidance, and follow-up with universities.</td>
</tr>
<tr>
<td><strong>Blocked Account & Insurance</strong></td>
<td>Assistance in setting up the mandatory German Blocked Account and securing approved health insurance coverage.</td>
</tr>
<tr>
<td><strong>Counseling</strong></td>
<td>Personalized one-on-one sessions for course and university selection based on your field of study, test scores, and career vision.</td>
</tr>
<tr>
<td><strong>Documentation</strong></td>
<td>Thorough review, compilation, and preparation of all necessary academic and personal documents for university and visa applications.</td>
</tr>
<tr>
<td><strong>Embassy & Visa</strong></td>
<td>Expert support with visa application form filling, appointment scheduling, and comprehensive mock interview preparation.</td>
</tr>
<tr>
<td><strong>Flight & Pre-Departure</strong></td>
<td>Guidance on travel arrangements, required documentation for travel, and a detailed pre-departure orientation.</td>
</tr>
<tr>
<td><strong>German Language Training</strong></td>
<td>Specialized teaching for A1, A2, B1, and B2 German levels to meet university entry and visa requirements.</td>
</tr>
<tr>
<td><strong>Housing/Accommodation</strong></td>
<td>Assistance in finding suitable and safe accommodation (student dormitories, shared flats, etc.) near your university.</td>
</tr>
<tr>
<td><strong>Internship & Job Guidance</strong></td>
<td>Advice and resources for finding part-time student jobs and professional internships (including post-study job search).</td>
</tr>
<tr>
<td><strong>Zealous Support</strong></td>
<td>Continuous support and connection with our team until you are successfully settled and studying in Germany!</td>
</tr>
</tbody>
</table>
<h3>🌟 The Benefits and Outcomes of Studying in Germany</h3>
<p>Germany consistently ranks as a top study destination for international students due to its unique combination of academic excellence and career prospects.</p>
<h4>Top Benefits of a German Degree</h4>
<ul>
    <li><strong>World-Class, Often Tuition-Free Education:</strong> Many public universities offer programs with little to no tuition fees for both domestic and international students. You generally only pay a small semester contribution (€100-€350 per semester).</li>
    <li><strong>Globally Recognized Qualifications:</strong> German universities are renowned for their high-quality, research-intensive, and practical-oriented education, especially in Engineering, IT, and Business. A German degree is a powerful asset in the global job market.</li>
    <li><strong>Strong, Stable Economy:</strong> As Europe's largest economy, Germany offers a booming job market with high demand for skilled, international graduates.</li>
    <li><strong>Multicultural Environment and High Quality of Life:</strong> Live in a safe, modern, and diverse country with excellent infrastructure, transport, and a rich cultural scene.</li>
</ul>
<h3>Key Outcomes and Career Pathways</h3>
<h4>1. Working While Studying</h4>
<ul>
    <li><strong>Working Hours:</strong> Non-EU/EEA international students are generally allowed to work 140 full days or 280 half days per year. A 'half day' is a working day of up to 4 hours.</li>
    <li><strong>Earning Potential:</strong> The national minimum wage in Germany is €12.82 per hour (as of Jan 2025). Depending on your job type (e.g., student assistant/Werkstudent in your field vs. a 'Mini-Job'), you can earn more, often up to €15+ per hour.</li>
    <li><strong>Note:</strong> For a Minijob (earning up to €538/month), you are generally tax-exempt. Earning more may require paying taxes and social security contributions.</li>
</ul>
<h4>2. Post-Study Work (PSW) Opportunities</h4>
<ul>
    <li><strong>Job-Seeking Residence Permit (PSW Visa):</strong> Upon successful graduation from a German university, you can apply for an 18-month residence permit to search for a qualified job that is related to your degree.</li>
    <li><strong>Work Rights:</strong> During this 18-month period, you are permitted to take up any form of employment to support yourself while you search for a professional position.</li>
</ul>
<h4>3. Pathway to Permanent Residency (PR) and Citizenship</h4>
<p>Securing a qualified job after your studies opens up clear avenues for long-term settlement:</p>
<ul>
    <li><strong>Switch to a Work Permit or EU Blue Card:</strong> Once you secure a qualified job, your residence permit can be converted into a standard work permit or the highly sought-after EU Blue Card (for highly-skilled workers meeting a certain salary threshold).</li>
    <li><strong>Permanent Residency (Settlement Permit):</strong> As an EU Blue Card holder, you can apply for PR after just 21 months (with B1 German language skills) or 33 months (with A1 German language skills). As a general Work Permit holder, you can typically apply for PR after 4 years of qualified employment.</li>
    <li><strong>German Citizenship/Passport:</strong> Under the new naturalization laws (as of June 2024), you can apply for German citizenship after legally residing in Germany for a minimum of five years (down from eight). This period can be shortened to three years for those with outstanding integration achievements (e.g., exceptional German language skills and professional performance).</li>
</ul>
<table>
<thead>
<tr>
<th>Requirement</th>
<th>Time Frame</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Post-Study Work Search</strong></td>
<td>18 Months</td>
</tr>
<tr>
<td><strong>Permanent Residency (PR)</strong></td>
<td>21-48 Months after securing qualified employment (depending on visa type and language skills).</td>
</tr>
<tr>
<td><strong>German Citizenship</strong></td>
<td>Minimum 3 to 5 years of legal residence in Germany (excluding study period) after securing a long-term residency permit.</td>
</tr>
</tbody>
</table>
<p>This clear pathway to PR and citizenship underscores the exceptional long-term career and life prospects Germany offers to international graduates.</p>`,
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


export const successStories: SuccessStory[] = [
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
  { name: 'University of Stuttgart' },
  { name: 'University of Tübingen' },
  { name: 'University of Mannheim' },
  { name: 'University of Leipzig' },
  { name: 'University of Freiburg' },
  { name: 'University of Würzburg' },
  { name: 'University of Erlangen-Nuremberg' },
  { name: 'University of Bielefeld' },
  { name: 'University of Marburg' },
  { name: 'Université Paris-Saclay' },
  { name: 'Sorbonne University' },
  { name: 'University of Strasbourg' },
  { name: 'University of Bordeaux' },
  { name: 'University of Lyon' },
  { name: 'Université Grenoble Alpes' },
  { name: 'Université Toulouse III - Paul Sabatier' },
  { name: 'University of Montpellier' },
  { name: 'University of Lille' },
  { name: 'Aix-Marseille University' },
  { name: 'University of Bologna' },
  { name: 'University of Milan' },
  { name: 'Sapienza University of Rome' },
  { name: 'University of Padua' },
  { name: 'University of Florence' },
  { name: 'University of Pisa' },
  { name: 'University of Turin' },
  { name: 'University of Naples Federico II' },
  { name: 'Ca\' Foscari University of Venice' },
  { name: 'University of Siena' },
  { name: 'University of Oxford' },
  { name: 'University of Cambridge' },
  { name: 'University College London' },
  { name: 'University of Edinburgh' },
  { name: 'University of Manchester' },
  { name: 'University of Glasgow' },
  { name: 'University of Birmingham' },
  { name: 'University of Bristol' },
  { name: 'University of Warwick' },
  { name: 'University of Leeds' },
  { name: 'University of California, Berkeley' },
  { name: 'University of California, Los Angeles' },
  { name: 'University of Michigan, Ann Arbor' },
  { name: 'University of California, San Diego' },
  { name: 'University of California, San Francisco' },
  { name: 'University of Virginia' },
  { name: 'University of North Carolina at Chapel Hill' },
  { name: 'University of Illinois Urbana-Champaign' },
  { name: 'University of Washington, Seattle' },
  { name: 'University of California, Santa Barbara' },
];
