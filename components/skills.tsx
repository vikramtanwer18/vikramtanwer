"use client"
import React, { useEffect, useRef, useState } from 'react'

const skillCategories = [
    {
        category: "Generative & Agentic AI",
        items: [
            { name: "LangChain", primary: true },
            { name: "LlamaIndex", primary: true },
            { name: "OpenAI API", primary: true },
            { name: "Hugging Face", primary: false },
            { name: "RAG Platforms", primary: true },
            { name: "Agentic AI", primary: true }
        ]
    },
    {
        category: "Programming Languages",
        items: [
            { name: "TypeScript", primary: true },
            { name: "JavaScript ES6+", primary: true },
            { name: "Python", primary: true },
            { name: "HTML5", primary: false },
            { name: "CSS3", primary: false }
        ]
    },
    {
        category: "Frontend & Interactive UI",
        items: [
            { name: "React.js", primary: true },
            { name: "Next.js", primary: true },
            { name: "Redux", primary: true },
            { name: "Tailwind CSS", primary: true },
            { name: "GSAP", primary: false },
            { name: "Three.js", primary: false },
            { name: "React Query", primary: false },
            { name: "Context API", primary: false }
        ]
    },
    {
        category: "Backend & Databases",
        items: [
            { name: "Node.js", primary: true },
            { name: "Pyhton", primary: true },
            { name: "MongoDB", primary: true },
            { name: "PostgreSQL", primary: true },
            { name: "REST APIs", primary: false }
        ]
    },
    {
        category: "DevOps & Infrastructure",
        items: [
            { name: "Docker", primary: true },
            { name: "AWS", primary: true },
            { name: "GitHub Actions", primary: false },
            { name: "CI / CD", primary: true },
            { name: "Git / GitHub", primary: false },
            { name: "Linux / Shell", primary: false },
            { name: "Hostinger", primary: true }
        ]
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "VS Code", primary: true },
            { name: "Postman", primary: true },
            { name: "Chrome DevTools", primary: false },
            { name: "NPM", primary: false },
            { name: "Antigravity", primary: true }
        ]
    }
]

const StatCounter = ({ end, duration = 1500, label }: { end: number, duration?: number, label: string }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLDivElement>(null)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) observer.observe(countRef.current)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let startTime: number | null = null
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            const currentCount = Math.floor(percentage * end)

            setCount(currentCount)

            if (percentage < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [hasStarted, end, duration])

    return (
        <div ref={countRef} className="flex items-center gap-4 group/stat">
            <div className="text-3xl sm:text-4xl font-black text-black leading-none tabular-nums">
                {count < 10 ? `0${count}` : count}
                <span className="text-xl text-[#0fa368] font-bold ml-0.5">+</span>
            </div>
            <div className="flex flex-col">
                <span className="text-[12px] font-extrabold tracking-[0.2em] text-[#9ca3af] uppercase group-hover/stat:text-black transition-colors duration-300">
                    {label}
                </span>
                <span className="text-[10px] font-extrabold text-[#0fa368]/60 uppercase tracking-widest mt-0.5">Verified</span>
            </div>
        </div>
    )
}

const Skills = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [frontendTheme, setFrontendTheme] = useState<'emerald' | 'violet' | 'amber'>('emerald')

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden bg-white"
        >
            {/* Elegant Grid Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col">

                {/* Header */}
                <div className={`flex flex-col mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-gray-500 w-max bg-white self-start mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0fa368] animate-pulse"></span>
                        INVENTORY
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter">
                        <span className="text-black">Tech </span>
                        <span className="text-gray-400">Stack ...</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1280px] mx-auto">
                    
                    {/* CARD 1: Generative & Agentic AI (Col span 2 on lg) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden lg:col-span-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                {skillCategories[0].category}
                            </h3>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full flex-1">
                            {/* Left Column: Text & Tech Badges */}
                            <div className="flex-1">
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                                    Architecting advanced autonomous agent systems, semantic database integrations, and intelligent LLM automation tools.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {skillCategories[0].items.map((item, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                                item.primary
                                                    ? "bg-black text-white border-black hover:bg-gray-800"
                                                    : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: AI Agent trace console */}
                            <div className="w-full md:w-[320px] bg-slate-50 border border-slate-100 rounded-2xl p-4 font-mono text-[10px] leading-relaxed text-slate-700 hover:bg-white hover:border-slate-200 transition-all duration-500">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[8px] font-extrabold text-gray-400 uppercase tracking-widest">Agent Execution Trace</span>
                                    <span className="flex h-1.5 w-1.5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                    </span>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="text-emerald-600 font-semibold">&gt; Initializing Vikram-Agent...</div>
                                    <div className="flex gap-2">
                                        <span className="text-gray-400 font-extrabold">[THOUGHT]</span>
                                        <span className="text-slate-800">Scan vector database for query</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-gray-400 font-extrabold">[RAG]</span>
                                        <span className="text-indigo-600">Retrieved chunks (Conf: 98.4%)</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-gray-400 font-extrabold">[ACTION]</span>
                                        <span className="text-amber-600">Executing scraping tools</span>
                                    </div>
                                    <div className="text-emerald-600 font-semibold">&gt; Goal Achieved. Response sent.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Programming Languages (Col span 1) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                {skillCategories[1].category}
                            </h3>
                        </div>

                        {/* Sleek Mini-IDE mockup */}
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-mono text-[10px] leading-relaxed text-slate-700 mb-6 relative overflow-hidden group-hover:bg-white group-hover:border-slate-300 transition-all duration-500">
                            <div className="flex gap-1.5 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
                            </div>
                            <div className="text-emerald-600 font-semibold"> &#47;&#47; Developer details</div>
                            <div>
                                <span className="text-blue-600">const</span> developer = {"{"}
                            </div>
                            <div className="pl-4">
                                name: <span className="text-amber-600">&apos;Vikram Tanwer&apos;</span>,
                            </div>
                            <div className="pl-4">
                                role: <span className="text-amber-600">&apos;Agentic &amp; Full Stack&apos;</span>
                            </div>
                            <div>{"};"}</div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {skillCategories[1].items.map((item, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                        item.primary
                                            ? "bg-black text-white border-black hover:bg-gray-800"
                                            : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CARD 3: Frontend & Interactive UI (Row span 2 on lg) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden lg:row-span-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                Frontend
                            </h3>
                        </div>

                        {/* Interactive UI Widget Mockup */}
                        <div className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50/50 mb-6 group-hover:bg-white group-hover:border-slate-200 transition-all duration-500">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interactive Sandbox</span>
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                            </div>
                            
                            <div className={`w-full rounded-xl p-3 border text-center transition-all duration-500 ${
                                frontendTheme === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
                                frontendTheme === 'violet' ? 'bg-violet-50 border-violet-200 text-violet-700' :
                                'bg-amber-50 border-amber-200 text-amber-700'
                            }`}>
                                <div className="text-[11px] font-bold">Vikram Tanwer UI Engine</div>
                                <div className="text-[9px] opacity-80 mt-0.5">Click pills below to change state!</div>
                            </div>

                            <div className="flex gap-2 justify-center mt-3.5">
                                <button
                                    onClick={() => setFrontendTheme('emerald')}
                                    className={`px-2.5 py-1 rounded-md text-[9px] font-bold transition-all duration-300 ${frontendTheme === 'emerald' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'}`}
                                >
                                    Emerald
                                </button>
                                <button
                                    onClick={() => setFrontendTheme('violet')}
                                    className={`px-2.5 py-1 rounded-md text-[9px] font-bold transition-all duration-300 ${frontendTheme === 'violet' ? 'bg-violet-600 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'}`}
                                >
                                    Violet
                                </button>
                                <button
                                    onClick={() => setFrontendTheme('amber')}
                                    className={`px-2.5 py-1 rounded-md text-[9px] font-bold transition-all duration-300 ${frontendTheme === 'amber' ? 'bg-amber-600 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400'}`}
                                >
                                    Amber
                                </button>
                            </div>
                        </div>

                        {/* Performance & UX Metrics Mockup */}
                        <div className="w-full border border-gray-100 rounded-2xl p-4 bg-gray-50/50 mb-6 group-hover:bg-white group-hover:border-slate-200 transition-all duration-500">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Performance &amp; UX Metrics</span>
                                <span className="text-[10px] font-extrabold text-emerald-500">99% OPTIMAL</span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono">
                                <div className="p-2.5 rounded-xl border border-slate-100/80 bg-white/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                                    <span className="text-gray-400 font-extrabold">LCP</span>
                                    <span className="text-[13px] font-black text-black mt-1">0.8s</span>
                                    <span className="text-[8px] font-extrabold text-emerald-500 uppercase tracking-widest mt-0.5">✔ Fast</span>
                                </div>
                                <div className="p-2.5 rounded-xl border border-slate-100/80 bg-white/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                                    <span className="text-gray-400 font-extrabold">FID</span>
                                    <span className="text-[13px] font-black text-black mt-1">11ms</span>
                                    <span className="text-[8px] font-extrabold text-emerald-500 uppercase tracking-widest mt-0.5">✔ Smooth</span>
                                </div>
                                <div className="p-2.5 rounded-xl border border-slate-100/80 bg-white/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                                    <span className="text-gray-400 font-extrabold">CLS</span>
                                    <span className="text-[13px] font-black text-black mt-1">0.01</span>
                                    <span className="text-[8px] font-extrabold text-emerald-500 uppercase tracking-widest mt-0.5">✔ Stable</span>
                                </div>
                                <div className="p-2.5 rounded-xl border border-slate-100/80 bg-white/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                                    <span className="text-gray-400 font-extrabold">SEO</span>
                                    <span className="text-[13px] font-black text-black mt-1">100%</span>
                                    <span className="text-[8px] font-extrabold text-emerald-500 uppercase tracking-widest mt-0.5">✔ Ranked</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {skillCategories[2].items.map((item, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                        item.primary
                                            ? "bg-black text-white border-black hover:bg-gray-800"
                                            : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CARD 4: Backend & Databases (Col span 1) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                {skillCategories[3].category}
                            </h3>
                        </div>

                        {/* Elegant Server connection simulator */}
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 group-hover:bg-white group-hover:border-slate-300 transition-all duration-500">
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                                    <span>POST /api/v1/query</span>
                                </div>
                                <span className="text-emerald-500">200 OK</span>
                            </div>
                            <div className="h-px bg-slate-100 my-2.5"></div>
                            <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                <span>DB: MongoDB</span>
                                <span className="font-mono">14ms latency</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {skillCategories[3].items.map((item, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                        item.primary
                                            ? "bg-black text-white border-black hover:bg-gray-800"
                                            : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CARD 5: DevOps & Infrastructure (Col span 1) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M17 17l5-2.5-5-2.5-5 2.5 5 2.5z" />
                                    <path d="M2 17l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                {skillCategories[4].category}
                            </h3>
                        </div>

                        {/* Pipeline mockup */}
                        <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 font-mono text-[9px] text-slate-500 mb-6 group-hover:bg-white group-hover:border-slate-300 transition-all duration-500">
                            <div className="flex justify-between items-center text-[10px] text-slate-800 font-extrabold mb-1">
                                <span>CI/CD PIPELINE</span>
                                <span className="text-emerald-500">✔ SUCCESS</span>
                            </div>
                            <div>$ docker build -t portfolio-app .</div>
                            <div className="text-emerald-600">✔ Build success [4.2s]</div>
                            <div className="text-indigo-600">🚀 Deploying to AWS... Active!</div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {skillCategories[4].items.map((item, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                        item.primary
                                            ? "bg-black text-white border-black hover:bg-gray-800"
                                            : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                    }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CARD 6: Tools & Platforms (Col span 2 on lg) */}
                    <div
                        className={`group relative flex flex-col p-8 rounded-[2.5rem] border border-gray-100 bg-white hover:border-black transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden lg:col-span-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        {/* Background SVG diagram: Git Branches */}
                        <div className="absolute right-8 bottom-6 w-[200px] h-[120px] opacity-30 group-hover:opacity-45 transition-opacity duration-500 hidden sm:block">
                            <svg className="w-full h-full text-indigo-500" viewBox="0 0 200 120" fill="none">
                                <path d="M20 60 H180" stroke="currentColor" strokeWidth="2.5" />
                                <path d="M40 60 C80 60, 90 20, 130 20 H170" stroke="#a855f7" strokeWidth="2.5" />
                                <circle cx="40" cy="60" r="5" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
                                <circle cx="90" cy="40" r="5" fill="#a855f7" stroke="white" strokeWidth="1.5" />
                                <circle cx="130" cy="20" r="5" fill="#a855f7" stroke="white" strokeWidth="1.5" />
                                <circle cx="140" cy="60" r="5" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
                                <text x="90" y="55" fontSize="8" fontFamily="monospace" fill="gray" fontWeight="bold">commit</text>
                            </svg>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-black transition-colors duration-500">
                                {skillCategories[5].category}
                            </h3>
                        </div>

                        <div className="flex-1 pr-0 sm:pr-[220px]">
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                                Operating modern software ecosystems and AI execution sandboxes with absolute precision and efficiency.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skillCategories[5].items.map((item, i) => (
                                    <span
                                        key={i}
                                        className={`px-3 py-1.5 rounded-xl text-[12px] font-bold border transition-all duration-300 ${
                                            item.primary
                                                ? "bg-black text-white border-black hover:bg-gray-800"
                                                : "bg-white text-gray-600 border-gray-100 hover:border-gray-900 hover:text-black"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Tools Area & Seamless Loop Marquee */}
                <div className={`w-full flex flex-col mt-16 pt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 40s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    {/* Faint Keyword list Marquee */}
                    <div className="w-full relative overflow-hidden flex mb-16 select-none opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex w-max animate-marquee">
                            {/* Original Set */}
                            <div className="flex items-center gap-12 text-[16px] font-bold tracking-[0.3em] text-[#9ca3af] uppercase px-6">
                                {skillCategories.flatMap(c => c.items.map(s => s.name)).map((skill, index) => (
                                    <React.Fragment key={index}>
                                        <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">{skill}</span>
                                        <span className="text-gray-400">•</span>
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* Duplicated Set for Seamless Loop */}
                            <div className="flex items-center gap-12 text-[16px] font-bold tracking-[0.3em] text-[#9ca3af] uppercase px-6">
                                {skillCategories.flatMap(c => c.items.map(s => s.name)).map((skill, index) => (
                                    <React.Fragment key={'dup-' + index}>
                                        <span className="whitespace-nowrap hover:text-black transition-colors duration-300 cursor-default">{skill}</span>
                                        <span className="text-gray-400">•</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Faded edges for the marquee */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent pointer-events-none z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent pointer-events-none z-10"></div>
                    </div>

                    {/* System Info Bar (Stats) */}
                    <div className="flex flex-wrap items-center gap-x-12 gap-y-8 w-full max-w-6xl">
                        <StatCounter end={33} label="Technologies" />
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <StatCounter end={6} label="Categories" />
                        <div className="hidden sm:block h-10 w-px bg-gray-100"></div>
                        <StatCounter end={2} label="Years Coding" />

                        {/* Live Status Indicator */}
                        <div className="ml-auto hidden xl:flex items-center gap-3 px-4 py-2 bg-[#f8f9fa] border border-gray-100 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0fa368]/40 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0fa368]"></span>
                            </span>
                            <span className="text-[9px] font-black tracking-widest text-[#9ca3af] uppercase">Active Session</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills