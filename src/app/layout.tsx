import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const description =
  "Kazi Samin Nawal — Full Stack (MERN / Next.js) developer and AI engineer building scalable web apps, chatbots, AI agents and RAG pipelines.";

export const metadata: Metadata = {
  title: `${profile.name} — Full Stack & AI Developer`,
  description,
  keywords: [
    "Kazi Samin Nawal",
    "Full Stack Developer",
    "MERN",
    "Next.js",
    "AI Engineer",
    "LLM",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Full Stack & AI Developer`,
    description,
    type: "website",
  },
  twitter: { card: "summary", title: profile.name, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffe3" },
    { media: "(prefers-color-scheme: dark)", color: "#131213" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Runs before paint so the saved / system theme applies without a flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">{children}</body>
    </html>
  );
}
