export default function WhyUsPage() {
    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl tracking-tight font-headline">
                        Why Choose Uni Help Consultants?
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-4xl mx-auto">
                        We offer 360-degree support—from tailored university selection and scholarship guidance to post-admission career planning—ensuring a successful future.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                                <line x1="9" y1="3" x2="9" y2="18"></line>
                                <line x1="15" y1="6" x2="15" y2="21"></line>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Expert Guidance</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Comprehensive support from application start to post-admission.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 flex-shrink-0">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Personalized Counseling</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Tailored advice based on your unique goals, strengths, and aspirations.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500">
                        <div className="flex items-center space-x-2 mb-3">
                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 flex-shrink-0">
                                <path d="m16 16 3 3 3-3-3-3"></path>
                                <path d="M6 16l-3 3-3-3 3-3"></path>
                                <path d="m12 2 3 3-3 3-3-3z"></path>
                                <path d="m2 12 3 3-3 3-3-3z"></path>
                                <path d="M22 12l-3-3 3-3 3 3z"></path>
                                <path d="M16 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"></path>
                                <path d="M6 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Ethical & Transparent</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Prioritizing honesty and clarity in all processes and advice.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 flex-shrink-0">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Global University Network</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Access to prestigious universities worldwide for best-fit program selection.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                        <div className="flex items-center space-x-2 mb-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                                <circle cx="12" cy="8" r="6"></circle>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Financial Aid Expertise</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Expert advice on scholarships and funding to reduce your financial burden.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 flex-shrink-0">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Dedicated Application Support</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Help crafting standout essays and ensuring all paperwork is in perfect order.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 flex-shrink-0">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.5a3.5 3.5 0 0 0 4 0"></path>
                                <path d="M8 22V9"></path>
                                <path d="M16 22V9"></path>
                                <path d="M9 9h6"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Successful Track Record</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Proven strategies resulting in client acceptance into leading universities worldwide.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 flex-shrink-0">
                                <path d="m5 8 6 6"></path>
                                <path d="m4 14 6-6 2-3"></path>
                                <path d="M2 5h12"></path>
                                <path d="M7 2h1"></path>
                                <path d="m22 22-5-10-5 10"></path>
                                <path d="M14 18h6"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Multilingual Services</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Seamless communication with students from diverse backgrounds.</p>
                    </div>
                    
                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
                        <div className="flex items-center space-x-2 mb-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Beyond Admission Support</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Includes visa assistance, accommodation advice, and post-arrival guidance.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-teal-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 flex-shrink-0">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 1.05-4.5 2.5C10.5 4.05 9.24 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Student-Centered Approach</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Your needs are our priority, turning all academic dreams into reality with care.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-orange-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 flex-shrink-0">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Career & Internship Planning</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Guidance on career opportunities and professional success post-graduation.</p>
                    </div>

                    <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 flex-shrink-0">
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                <path d="m9 14 2 2 4-4"></path>
                            </svg>
                            <h3 className="text-lg font-bold text-foreground leading-tight">Comprehensive Test Prep</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Resources and guidance for standardized tests (IELTS, TOEFL, GRE, GMAT, etc.).</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
