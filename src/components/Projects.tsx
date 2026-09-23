"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { projects, profile, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight, GithubIcon } from "./Icons";
import { ease } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.links.map((link) => {
        const isLive = link.label.toLowerCase() === "live";
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — ${isLive ? "live demo" : `${link.label} repository`}`}
            className={cn(
              "group/link inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all",
              isLive
                ? "bg-accent text-accent-fg hover:opacity-85"
                : "border border-fg/20 text-fg/80 hover:border-fg/50 hover:text-fg",
            )}
          >
            {!isLive && <GithubIcon className="h-3.5 w-3.5" />}
            {isLive ? "Live demo" : link.label}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        );
      })}
    </div>
  );
}

type StackCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

/**
 * Each card sticks a little lower than the one before it, so while scrolling
 * the next card slides up over the previous one and the covered cards shrink back.
 */
function StackCard({ project, index, total, progress }: StackCardProps) {
  const reduce = useReducedMotion();
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className="[@media(min-height:640px)]:sticky"
      style={{ top: `calc(6rem + ${index * 1.5}rem)` }}
    >
      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 0.8, ease }}
        style={{ scale: reduce ? 1 : scale, transformOrigin: "50% 0%" }}
        className="group relative overflow-hidden rounded-[1.75rem] border border-fg/10 bg-surface p-6 shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-accent-text/40 sm:p-9"
      >
        {/* Oversized index number */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-fg/[0.05] sm:text-[10rem]"
        >
          {number}
        </span>

        <div className="relative grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-10">
          <div className="flex flex-col">
            <p className="font-mono text-xs tracking-wider text-fg/50">
              <span className="text-accent-text">{number}</span> / {String(total).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-fg/70">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-fg/15 bg-fg/[0.04] px-2.5 py-1 font-mono text-xs text-fg/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:border-l md:border-fg/10 md:pl-10">
            <ul className="space-y-2.5">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-fg/70">
                  <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-fg/50" />
                  {point}
                </li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function Projects() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title={
            <>
              Selected work, <span className="text-gradient">shipped</span> and live.
            </>
          }
          description="Full stack products spanning research collaboration, AI-assisted commerce and multi-role platforms."
        />

        <div ref={stackRef} className="relative flex flex-col gap-8 sm:gap-[8vh]">
          {projects.map((project, i) => (
            <StackCard
              key={project.title}
              project={project}
              index={i}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center"
        >
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fg/70 underline-offset-4 transition-colors hover:text-accent-text hover:underline"
          >
            <GithubIcon className="h-4 w-4" />
            More on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
