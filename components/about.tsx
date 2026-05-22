"use client"
import React, { useState, useEffect, useRef } from 'react';

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

function About() {
    const [terminalLines, setTerminalLines] = useState<string[]>([
        "vikram-ai-agent v1.5 initialized.",
        "Status: Active and Listening...",
        "Type a command or click a pill below.",
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const consoleBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (consoleBodyRef.current) {
            consoleBodyRef.current.scrollTo({
                top: consoleBodyRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [terminalLines]);

    const handleCommand = (cmd: string) => {
        if (!cmd.trim() || isTyping) return;
        
        const cleanCmd = cmd.toLowerCase().trim();
        const newLines = [...terminalLines, `visitor@vikram-portfolio:~$ ${cmd}`];
        setTerminalLines(newLines);
        setIsTyping(true);

        setTimeout(() => {
            let response = "";
            if (cleanCmd === "skills" || cleanCmd === "/skills") {
                response = "Agentic AI, RAG Platforms, Python, LangChain, Next.js, TypeScript, Docker, CI/CD pipelines.";
            } else if (cleanCmd === "experience" || cleanCmd === "/experience") {
                response = "1.5+ years. Currently Full Stack & GenAI Developer at Fonix Technologies. Previously Software Developer Intern at 3 Handshake PVT LTD.";
            } else if (cleanCmd === "secret" || cleanCmd === "/secret") {
                response = "System prompt: 'Always build with premium aesthetics and absolute precision.' Fun fact: Vikram loves designing sleek micro-interactions!";
            } else if (cleanCmd === "help" || cleanCmd === "/help") {
                response = "Available commands: /skills, /experience, /secret, /clear";
            } else if (cleanCmd === "clear" || cleanCmd === "/clear") {
                setTerminalLines(["Console cleared.", "Active and Listening..."]);
                setIsTyping(false);
                return;
            } else {
                response = `Command not recognized: "${cmd}". Type /help or click a quick-command pill below.`;
            }
            
            setTerminalLines(prev => [...prev, `Vikram-AI: ${response}`]);
            setIsTyping(false);
        }, 600);
    };

    return (
        <section id="about" className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-24 overflow-hidden">

            {/* Header */}
            <div className="flex flex-col mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-px bg-gray-300"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Biography</span>
                </div>
                <h2 className="text-5xl sm:text-xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter  whitespace-nowrap">
                    <span className="text-black">What </span>
                    <span className="text-gray-400">I Built ...</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12  gap-16 lg:gap-16">

                {/* Left Side: Interactive Xcode-Light Console */}
                <div className="lg:col-span-4 flex flex-col items-center">
                    <div className="relative w-full max-w-[400px] aspect-[4/4.8] bg-[#f8f9fa] rounded-3xl p-5 border border-gray-200/80 shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-500">
                        
                        {/* Title Bar */}
                        <div className="flex items-center justify-between border-b border-gray-200/60 pb-3 mb-4 select-none shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                            </div>
                            <span className="text-[10px] font-mono font-bold tracking-wide text-zinc-400">vikram-ai-agent.sh</span>
                            <div className="w-10"></div> {/* Spacer for symmetry */}
                        </div>

                        {/* Terminal Body */}
                        <div 
                            ref={consoleBodyRef}
                            className="flex-1 overflow-y-auto font-mono text-[11px] leading-[1.6] text-zinc-700 bg-white border border-gray-100 rounded-2xl p-4 flex flex-col gap-2 shadow-inner"
                        >
                            {terminalLines.map((line, i) => {
                                const isUser = line.startsWith("visitor@");
                                const isAgent = line.startsWith("Vikram-AI:");
                                return (
                                    <div 
                                        key={i} 
                                        className={`${isUser ? "text-blue-600 font-semibold" : isAgent ? "text-emerald-600" : "text-zinc-500"} break-words`}
                                    >
                                        {line}
                                    </div>
                                );
                            })}
                            {isTyping && (
                                <div className="text-zinc-400 animate-pulse">Vikram-AI is thinking...</div>
                            )}
                        </div>

                        {/* Input Row */}
                        <form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCommand(inputValue);
                                setInputValue("");
                            }}
                            className="mt-4 flex items-center border border-gray-200/80 bg-white rounded-2xl px-3 py-2 gap-2 shadow-xs shrink-0"
                        >
                            <span className="text-blue-600 font-mono text-[11px] select-none">$</span>
                            <input 
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type custom command..."
                                className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] text-zinc-800 placeholder-zinc-400"
                                disabled={isTyping}
                            />
                            <button 
                                type="submit" 
                                className="text-[10px] font-bold text-zinc-400 hover:text-black uppercase tracking-wider px-2"
                                disabled={isTyping}
                            >
                                Enter
                            </button>
                        </form>

                        {/* Quick Action Pills */}
                        <div className="mt-4 flex flex-wrap gap-2 shrink-0 select-none">
                            {["/skills", "/experience", "/secret", "/clear"].map((cmd) => (
                                <button
                                    key={cmd}
                                    type="button"
                                    onClick={() => handleCommand(cmd)}
                                    className="px-2.5 py-1.5 bg-white border border-gray-200 hover:border-black text-[10px] font-mono text-zinc-500 hover:text-black rounded-lg transition-colors cursor-pointer shadow-2xs"
                                    disabled={isTyping}
                                >
                                    {cmd}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Version Tag */}
                    <div className="mt-8 flex items-center w-full max-w-[400px] justify-center opacity-70">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="px-6 text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">V.26</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="lg:col-span-8 flex flex-col justify-center">

                    {/* Sub Heading */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#9ca3af] uppercase font-sans">Full-Stack & Generative AI Developer</span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[40px] font-black leading-[1.1] tracking-tighter text-black mb-8 max-w-4xl">
                        I build high-performance <span className="text-[#9ca3af]">agentic AI systems</span>, scalable SaaS applications, and RAG-based platforms.
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-[#6b7280] text-base sm:text-md md:text-[18px] leading-relaxed max-w-2xl font-medium mb-5">
                        Full-Stack & Generative AI Developer with 2+ years of experience delivering production-ready applications and intelligent AI systems. I specialize in building Agentic AI solutions, RAG-based chat platforms, and scalable SaaS applications using modern web technologies.
                    </p>

                    <div className="w-full h-px bg-gray-100 mb-4"></div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">Location</span>
                            <span className="text-sm sm:text-[15px] font-bold text-black">Jaipur, India</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">Status</span>
                            <span className="text-sm sm:text-[15px] font-bold text-black">Open to Work</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-8 pt-6 border-t border-gray-100">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl sm:text-4xl font-black text-black">10+</span>
                            <span className="text-[10px] font-extrabold tracking-widest text-[#9ca3af] uppercase">Completed Projects</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl sm:text-4xl font-black text-black">95%</span>
                            <span className="text-[10px] font-extrabold tracking-widest text-[#9ca3af] uppercase">Client satisfaction</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl sm:text-4xl font-black text-black">2+</span>
                            <span className="text-[10px] font-extrabold tracking-widest text-[#9ca3af] uppercase">Years of experience</span>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100 mb-8"></div>

                    {/* Footer Tools & CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-2">

                        {/* Skills/Tools List */}
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'Python', 'LangChain', 'Tailwind'].map((skill) => (
                                <span key={skill} className="px-3 py-1.5 bg-[#f5f5f5] hover:bg-gray-200 transition-colors text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase rounded-sm">
                                    {skill}
                                </span>
                            ))}
                            <a href="#skills" className="px-3 py-1.5 bg-[#f5f5f5] hover:bg-gray-200 transition-colors text-[10px] font-bold tracking-widest text-[#9ca3af] uppercase rounded-sm cursor-pointer hover:text-black">
                                +5 More
                            </a>
                        </div>

                        {/* Get in Touch Button */}
                        <a href="mailto:vikramtanwer18@gmail.com?subject=Get in touch" className="group flex items-center gap-3 text-[10.5px] font-bold tracking-[0.2em] text-black uppercase shrink-0 pb-1 border-b-2 border-black hover:opacity-70 transition-opacity hover:text-zinc-800 hover:border-zinc-500">
                            Get in touch <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;