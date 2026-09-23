import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
