import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vikram-tanwer.vercel.app/"),
  title: {
    default: "Vikram Tanwer | Full-Stack & Generative AI Developer",
    template: "%s | Vikram Tanwer",
  },
  description: "Full-Stack & Generative AI Developer specializing in building Agentic AI solutions, RAG-based chat platforms, and scalable SaaS applications using modern web technologies.",
  keywords: [
    "Vikram Tanwer",
    "Portfolio",
    "Generative AI Developer",
    "Full-Stack Developer",
    "Agentic AI",
    "RAG platforms",
    "Next.js",
    "SaaS applications",
    "DevOps Engineer",
  ],
  authors: [{ name: "Vikram Tanwer" }],
  creator: "Vikram Tanwer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikram-tanwer.vercel.app/",
    siteName: "Vikram Tanwer Portfolio",
    title: "Vikram Tanwer | Full-Stack & Generative AI Developer",
    description: "Full-Stack & Generative AI Developer specializing in building Agentic AI solutions, RAG-based chat platforms, and scalable SaaS applications using modern web technologies.",
    images: [
      {
        url: "https://vikram-tanwer.vercel.app/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Vikram Tanwer | Full-Stack & Generative AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Tanwer | Full-Stack & Generative AI Developer",
    description: "Full-Stack & Generative AI Developer specializing in building Agentic AI solutions, RAG-based chat platforms, and scalable SaaS applications using modern web technologies.",
    images: ["https://vikram-tanwer.vercel.app/og-banner.png"],
    creator: "@vikramtanwer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
