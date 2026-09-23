"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/data/portfolio";
import { ease } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const allSkills = skillGroups.flatMap((g) => g.items);

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x group flex overflow-hidden">
      <div
        className="flex w-max shrink-0 animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-fg/10 bg-surface px-5 py-2.5 font-display text-sm text-fg/80 sm:text-base"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const half = Math.ceil(allSkills.length / 2);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fg/[0.03] to-transparent" />
      <div className="container-x relative">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="A toolkit for the whole stack — and the model behind it."
        />
      </div>

      <div aria-hidden className="relative mb-14 flex flex-col gap-3">
        <Marquee items={allSkills.slice(0, half)} />
        <Marquee items={allSkills.slice(half)} reverse />
      </div>

      <div className="container-x relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.7, delay: (gi % 3) * 0.1, ease }}
            className="card group p-6 transition-colors duration-300 hover:border-accent-text/35"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-fg">{group.title}</h3>
              <span className="font-mono text-xs text-fg/40">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease }}
                  className="rounded-lg bg-fg/[0.06] px-3 py-1.5 text-sm text-fg/80 transition-colors hover:bg-accent hover:text-accent-fg"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
