"use client";

import { motion } from "motion/react";
import { publications } from "@/data/portfolio";
import { ArrowUpRight, BookIcon } from "./Icons";
import { ease } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const myName = /(K\.(?: S\.)? Nawal)/;

function Authors({ text }: { text: string }) {
  return (
    <>
      {text.split(myName).map((part, i) =>
        myName.test(part) ? (
          <strong key={i} className="font-semibold text-fg">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function Publications() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="Research"
          title="Published research."
          description="Peer-reviewed IEEE conference papers across healthcare AI, computer vision and LLM-assisted design."
        />

        <ol className="border-t border-fg/10">
          {publications.map((pub, i) => (
            <motion.li
              key={pub.doi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="border-b border-fg/10"
            >
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid gap-4 py-8 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:gap-8 sm:py-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-xl bg-gradient-to-r from-fg/[0.05] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2 sm:pl-4">
                  <span className="font-display text-2xl font-semibold text-accent-text sm:text-3xl">{pub.year}</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent-text">
                    {pub.venue}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-accent-text sm:text-xl">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-fg/55">
                    <Authors text={pub.authors} />
                  </p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg/45">
                    <span className="flex items-center gap-1.5">
                      <BookIcon className="h-3.5 w-3.5" /> {pub.pages}
                    </span>
                    <span className="break-all">DOI: {pub.doi}</span>
                  </p>
                </div>
                <span className="hidden h-11 w-11 place-items-center self-center rounded-full border border-fg/15 text-fg/70 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg sm:mr-4 sm:grid">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
