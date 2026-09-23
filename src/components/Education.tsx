"use client";

import { motion } from "motion/react";
import { certifications, education } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { AwardIcon } from "./Icons";
import { ease, Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Education"
          title={
            <>
              Educational <span className="text-gradient">journey</span>.
            </>
          }
          description="From school in Dhaka to specializing in software development and artificial intelligence."
        />

        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Connecting line: vertical on mobile, horizontal from md up */}
          <div aria-hidden className="absolute bottom-4 left-[7px] top-2 w-px bg-fg/10 md:hidden" />
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1.4, ease }}
            className="absolute bottom-4 left-[7px] top-2 w-px origin-top bg-accent/60 md:hidden"
          />
          <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-fg/10 md:block" />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1.4, ease }}
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-accent/60 md:block"
          />

          {education.map((step, i) => (
            <li key={step.level} className="relative pl-9 md:pl-0 md:pt-10">
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.3 + i * 0.35 }}
                className={cn(
                  "absolute left-0 top-0.5 h-[15px] w-[15px] rounded-full border-2 md:top-0",
                  step.highlight ? "border-accent bg-accent" : "border-accent bg-bg",
                )}
              >
              </motion.span>

              <Reveal delay={0.2 + i * 0.25} className="h-full">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[1.25rem] border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7",
                    step.highlight
                      ? "border-fg/10 bg-panel text-panel-fg"
                      : "card",
                  )}
                >
                  <div className="flex flex-col items-start gap-3">
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider",
                        step.highlight ? "bg-panel-fg/10 text-panel-accent" : "bg-accent/15 text-accent-text",
                      )}
                    >
                      {step.level}
                    </span>
                    <span
                      className={cn(
                        "font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-2xl lg:text-3xl",
                        step.highlight ? "text-panel-fg" : "text-fg",
                      )}
                    >
                      {step.period}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-5 font-display text-lg font-semibold leading-snug",
                      step.highlight ? "text-panel-fg" : "text-fg",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className={cn("mt-1", step.highlight ? "text-panel-fg/75" : "text-fg/65")}>{step.school}</p>
                  {step.note && (
                    <p className={cn("mt-3 text-sm leading-relaxed", step.highlight ? "text-panel-fg/65" : "text-fg/60")}>
                      {step.note}
                    </p>
                  )}

                  <div aria-hidden className="min-h-6 flex-1" />
                  <span
                    className={cn(
                      "w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                      step.highlight ? "bg-panel-fg text-panel" : "border border-fg/15 text-fg/70",
                    )}
                  >
                    {step.status}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14">
          <div className="mb-5 flex items-center gap-3 text-fg/70">
            <AwardIcon className="h-5 w-5 text-accent-text" />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Certifications</span>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="card flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="font-medium text-fg">{cert.name}</p>
                  <p className="text-sm text-fg/60">{cert.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-fg/55">{cert.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
