import React from 'react';

export const blogPosts = [
  {
    id: 1,
    category: "Generative AI",
    readTime: "6 min read",
    date: "April 24, 2026",
    title: "Architecting Stateful Agentic RAG Workflows with LangGraph",
    excerpt: "How to build a self-correcting, state-driven multi-agent system using LangGraph and ChromaDB to solve the limitations of standard linear RAG pipelines.",
    tags: ["LangGraph", "Agentic AI", "ChromaDB"],
    detailTags: ["Stateful RAG", "Agent Workflows", "Self-Correction", "OpenAI"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700 font-sans">
        <section className="space-y-4">
          <p className="text-lg font-bold text-black font-mono tracking-tight">Beyond Naive RAG: The Rise of Stateful Agents</p>
          <p>
            Traditional Retrieval-Augmented Generation (RAG) is linear: a query is embedded, similar documents are retrieved from a vector store, and a response is synthesized by an LLM. While effective for simple question-answering, this naive approach fails when dealing with complex, ambiguous, or multi-step questions. It has no feedback loops—if the retriever fetches irrelevant data, the generator produces hallucinated results.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">The LangGraph Solution</h2>
          <p>
            By modeling agentic workflows as stateful, cyclic graphs, we can implement **Self-Correction loops**. With LangGraph, we define nodes for separate functions (e.g., retrieving documents, grading documents, generating answers, and rewriting queries) and direct the execution path using conditional edges.
          </p>
          <p>
            If a grading node determines that the retrieved documents do not meet a threshold score in **ChromaDB**, the graph routes the state back to a query rewriter rather than outputting garbage. This ensures that the generated answer is context-aware and highly accurate.
          </p>
        </section>

        <section className="space-y-4 border-l-3 border-[#0fa368] pl-6 italic font-mono text-[14px] text-gray-600 bg-gray-50/50 py-3 pr-4 rounded-r-xl">
          "Agentic RAG shifts the paradigm from simple string generation to rigorous, iterative execution graphs where LLMs evaluate their own output before final delivery."
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">Key Architectural Components</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li><strong>State Definition:</strong> Maintaining an updated system state that tracks query history, retrieved documents, grade evaluations, and attempts.</li>
            <li><strong>ChromaDB Vector Store:</strong> Performing semantic similarity searches with custom distance metrics for hyper-relevant retrieval.</li>
            <li><strong>Fallback Router:</strong> Programmatically switching to web search or custom fallback engines if the vector database contains insufficient matches.</li>
          </ul>
        </section>
      </div>
    )
  },
  {
    id: 2,
    category: "DevOps",
    readTime: "5 min read",
    date: "May 10, 2026",
    title: "Production-Grade VPS Deployment with Docker & Nginx",
    excerpt: "A masterclass in running containerized full-stack applications on Hostinger VPS, setting up Nginx as an SSL-enabled reverse proxy, and managing Route 53 DNS routing.",
    tags: ["Docker", "Nginx", "VPS"],
    detailTags: ["VPS Hosting", "SSL / TLS", "Route 53", "Containerization"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700 font-sans">
        <section className="space-y-4">
          <p className="text-lg font-bold text-black font-mono tracking-tight">The Modern Deployment Blueprint</p>
          <p>
            Deploying a production application directly on bare metal is risky. It leads to configuration drift and makes scale-outs highly manual. Containerizing the application using **Docker** ensures that the development, staging, and production environments are 100% identical.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">Reverse Proxying with Nginx</h2>
          <p>
            Instead of exposing the Next.js node application container directly to port 80/443, we place **Nginx** in front. Nginx acts as a high-performance reverse proxy that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Handles SSL termination securely using Certbot certificates.</li>
            <li>Buffers slow clients to prevent resource starvation in our Node app.</li>
            <li>Provides robust request logging and rate limiting.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">DNS and Zero-Downtime Pipeline</h2>
          <p>
            To achieve 99.9% uptime, we manage host domains via **Amazon Route 53**, providing fast, globally-distributed DNS routing. When pushes hit our main branch, a clean Docker compose build executes on our **Hostinger VPS**, swapping container ports seamlessly to ensure that visitors never experience downtime during deployments.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0fa368]"></div>
          <p className="text-sm font-bold tracking-widest text-[#0fa368] uppercase font-mono">Infrastructure as code ensures bulletproof stability.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    category: "Performance",
    readTime: "4 min read",
    date: "May 18, 2026",
    title: "Next-Level Performance: Bundle Optimization & Code Splitting",
    excerpt: "Techniques to slash initial load latency and bundle sizes by implementing dynamic imports, boundary lazy-loading, and optimizing frontend-backend API interaction cycles.",
    tags: ["React.js", "Optimization", "Next.js"],
    detailTags: ["Bundle Analysis", "Lazy Loading", "API Performance", "UX Engineering"],
    content: (
      <div className="space-y-8 text-[15px] leading-loose text-gray-700 font-sans">
        <section className="space-y-4">
          <p className="text-lg font-bold text-black font-mono tracking-tight">Slashing the JavaScript Overhead</p>
          <p>
            Modern React and Next.js platforms often suffer from bundle bloat. When users visit your landing page, they shouldn't download heavyweight components (like complex interactive code terminals, charting systems, or rich modal controllers) before they even interact with them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">Dynamic Imports and Suspense</h2>
          <p>
            By leveraging React's **dynamic imports** and **Suspense**, we can split our bundle into modular chunks. Heavy components are only loaded when they enter the viewport or are actively triggered by user events.
          </p>
          <p>
            Additionally, lazy loading non-critical images and utilizing modern SVG representations prevents layout shifts (CLS), resulting in a lightning-fast Lighthouse performance score of 98+.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-extrabold text-black uppercase tracking-tight">Optimized API Cycles</h2>
          <p>
            Optimizing frontend-backend communication is just as vital. By setting up strict caching headers, compressing API responses via Gzip/Brotli, and batching layout renders, we ensure real-time applications remain responsive and highly engaging.
          </p>
        </section>

        <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
          <p className="italic text-gray-500 font-serif">A stunning UI is only as premium as its performance. Speed is a vital core feature.</p>
        </div>
      </div>
    )
  },
];
