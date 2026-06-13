import React from 'react'

const experienceData = [
    {
        id: 1,
        company: "Fonix Technologies",
        role: "Full Stack & GenAI Developer",
        duration: "05/2024 – Present",
        location: "Jaipur",
        accomplishments: [
            "Engineered an autonomous Lead Qualification Engine using OpenAI that processed 1,000+ leads with a 99% accuracy rate in identifying high-value prospects.",
            "Engineered a high-performance Retrieval-Augmented Generation (RAG) system using LangGraph for complex agentic workflows and ChromaDB as a vector store for efficient similarity search and context-aware data retrieval.",
            "Integrated and managed secure, real-time transaction processing using Stripe and Razorpay gateways.",
            "Architected secure, multi-provider authentication workflows using NextAuth.js, integrating Google OAuth, Facebook, and custom JWT-based authentication systems.",
            "Orchestrated application deployment on Hostinger VPS using Docker and Nginx, managing domain configurations via Amazon Route 53 to ensure 99.9% system availability."
        ],
        tools: "AGENTIC AI, RAG ORCHESTRATOR, LANGCHAIN, LANGGRAPH,VECTOR DB,JAVASCRIPT, PYTHON, NEXTAUTH.JS, DOCKER, NGINX, HOSTINGER VPS, AWS ROUTE 53, NEXT.JS, TYPESCRIPT"
    },
    {
        id: 2,
        company: "3 Handshake PVT LTD",
        role: "Software Developer Intern",
        duration: "06/2024 – 12/2024",
        location: "Jaipur",
        accomplishments: [
            "Engineered an automated backup verification system using Bash scripting to validate data integrity across 300+ daily system backups, improving reliability and reducing potential data corruption risks.",
            "Boosted frontend performance and reduced initial load latency by implementing dynamic code splitting and lazy loading strategies in React applications.",
            "Optimized frontend–backend API interactions, improving application responsiveness and ensuring efficient real-time data rendering."
        ],
        tools: "JAVASCRIPT, PYTHON,TYPESCRIPT, REACT.JS, NEXT.JS FRONTEND OPTIMIZATION, API INTEGRATION, GIT, GITHUB"
    }
];

const BotanicalCorner = ({ className }: { className?: string }) => (
    <svg className={className} width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 C40 0 60 10 75 40 C85 60 80 85 65 95 C55 102 40 95 45 80 C48 70 60 70 65 80 C68 85 65 90 60 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M20 5 C45 5 55 25 50 45 C45 60 30 65 25 55 C20 45 35 40 40 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M25 0 C35 -5 45 5 25 15Z" fill="currentColor" opacity="0.3" />
        <path d="M45 15 C60 10 65 25 45 35Z" fill="currentColor" opacity="0.3" />
        <path d="M65 40 C80 35 85 50 65 60Z" fill="currentColor" opacity="0.3" />
        <path d="M35 25 C45 20 50 30 35 40Z" fill="currentColor" opacity="0.2" />
        <circle cx="35" cy="10" r="2" fill="currentColor" />
        <circle cx="60" cy="25" r="1.5" fill="currentColor" />
        <circle cx="85" cy="55" r="2" fill="currentColor" />
        <circle cx="75" cy="75" r="1" fill="currentColor" />
    </svg>
);

const Experience = () => {
    return (
        <section id="experience" className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden ">

            {/* Header */}
            <div className="flex flex-col mb-12 md:mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Experience</span>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter whitespace-nowrap">
                    <span className="text-black">Work & </span>
                    <span className="text-gray-400">Impact</span>
                    <span className="text-gray-300">...</span>
                </h2>
            </div>

            {/* Experience List */}
            <div className="flex flex-col max-w-6xl w-full mx-auto pb-10">
                {experienceData.map((exp, index) => (
                    <React.Fragment key={exp.id}>
                        <div
                            className="relative w-full flex flex-col md:flex-row bg-white p-8 sm:p-10 md:p-14 group border border-gray-100 transition-all duration-300"
                        >
                            {/* Botanical Corner Decorations */}
                            <BotanicalCorner className="absolute top-0 left-0 text-gray-500 drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute top-0 right-0 text-gray-500 scale-x-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute bottom-0 left-0 text-gray-500 scale-y-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />
                            <BotanicalCorner className="absolute bottom-0 right-0 text-gray-500 scale-y-[-1] scale-x-[-1] drop-shadow-sm transition-colors group-hover:text-gray-300" />

                            {/* Meta Data Left Column */}
                            <div className="relative z-10 w-full md:w-[25%] lg:w-[22%] flex flex-col gap-5 md:gap-6 mb-6 md:mb-0 shrink-0 md:pr-6">
                                {/* Duration */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                                        Duration
                                    </span>
                                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#111827]">
                                        {exp.duration}
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] text-gray-400 uppercase">
                                        Location
                                    </span>
                                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#111827]">
                                        {exp.location}
                                    </span>
                                </div>
                            </div>

                            {/* Content Right Column */}
                            <div className="relative z-10 w-full md:w-[75%] lg:w-[78%] flex flex-col pt-6 md:pt-0 md:pl-6 lg:pl-10">

                                {/* Aesthetic Gradient Divider */}
                                <div className="absolute top-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent md:hidden" />
                                <div className="hidden md:block absolute left-0 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-gray-200 to-transparent" />

                                {/* Role Header */}
                                <div className="flex flex-col gap-1 mb-5 md:mb-6">
                                    <h3 className="text-[22px] sm:text-2xl md:text-[26px] font-black text-black uppercase tracking-tight">
                                        {exp.company}
                                    </h3>
                                    <span className="text-[11px] font-bold tracking-[0.15em] text-[#0fa368] uppercase font-mono">
                                        {exp.role}
                                    </span>
                                </div>

                                {/* Accomplishments */}
                                <ul className="flex flex-col gap-2.5 mb-6 md:mb-8">
                                    {exp.accomplishments.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-gray-300 mt-[5.5px] text-[18px] leading-none shrink-0">•</span>
                                            <span className="text-[16px] sm:text-[14.5px] font-normal text-[#4b5563] leading-[1.6]">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tools Footer */}
                                <div className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] uppercase font-mono mt-auto">
                                    <span className="font-extrabold tracking-[0.2em] text-black">
                                        Tools <span className="font-normal mx-0.5">:</span>
                                    </span>
                                    <span className="font-bold tracking-[0.15em] text-gray-500">
                                        {exp.tools}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Timeline Connector Line */}
                        {index !== experienceData.length - 1 && (
                            <div className="flex justify-center w-full ">
                                <div className="h-16 sm:h-24 w-[2.5px] bg-linear-to-t from-transparent via-[#0fa368]/40 to-transparent"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </section>
    )
}

export default Experience