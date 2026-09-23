"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fg/[0.03] to-transparent" />
      <div className="container-x relative">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've been building & learning."
          description="From teaching web fundamentals to shipping AI products and research at the University of Dhaka."
        />

        <ol ref={listRef} className="relative ml-2 sm:ml-4">
          {/* Timeline rail */}
          <div aria-hidden className="absolute bottom-2 left-0 top-2 w-px bg-fg/10" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-accent/30"
          />

          {experience.map((job, i) => (
            <li key={`${job.role}-${job.period}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -120px 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="absolute -left-[7px] top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-bg bg-accent ring-1 ring-accent/50"
              />
              <Reveal delay={i * 0.05}>
                <div className="card p-6 transition-colors duration-300 hover:border-accent-text/30 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{job.role}</h3>
                      <p className="mt-1 text-accent-text">{job.org}</p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full border border-fg/15 bg-bg/50 px-3.5 py-1 font-mono text-xs text-fg/70 sm:text-sm">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-fg/70">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-fg/[0.07] px-2.5 py-1 font-mono text-xs text-fg/85">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
