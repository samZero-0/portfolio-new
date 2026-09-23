"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import { ArrowUpRight, CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const channels = [
    { label: "LinkedIn", value: "in/kazi-samin-nawal", href: profile.socials.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", value: "@samZero-0", href: profile.socials.github, Icon: GithubIcon },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, Icon: PhoneIcon },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-panel text-panel-fg px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="grid-bg absolute inset-0 opacity-60 [--grid-color:var(--panel-fg)]" />
              <div className="absolute -right-24 -top-24 h-80 w-80 animate-drift rounded-full bg-panel-accent/20 blur-[90px]" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-black/20 blur-[90px]" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-panel-accent sm:text-sm">
                  <span>07</span>
                  <span className="h-px w-10 bg-panel-accent/60" />
                  <span>Contact</span>
                </p>
                <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-panel-fg sm:text-5xl lg:text-6xl">
                  Let&apos;s build something <span className="text-panel-accent">great</span> together.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-panel-fg/75 sm:text-lg">
                  Have a role, a project or a research idea in mind? My inbox is always open — I&apos;ll get back to you soon.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-panel-fg px-6 py-3.5 text-sm font-semibold text-panel shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white"
                  >
                    <MailIcon className="h-4 w-4" />
                    Say hello
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-panel-fg/25 bg-black/20 px-5 py-3.5 text-sm text-panel-fg transition-colors hover:border-panel-fg/60"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? "done" : "copy"}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.15 }}
                      >
                        {copied ? <CheckIcon className="h-4 w-4 text-panel-accent" /> : <CopyIcon className="h-4 w-4" />}
                      </motion.span>
                    </AnimatePresence>
                    <span className="truncate font-mono text-xs sm:text-sm">{copied ? "Copied to clipboard!" : profile.email}</span>
                  </button>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {channels.map(({ label, value, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-panel-fg/15 bg-black/25 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-panel-fg/40 hover:bg-black/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-panel-fg/10 text-panel-fg transition-colors group-hover:bg-panel-fg group-hover:text-panel">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs uppercase tracking-wider text-panel-fg/55">{label}</span>
                        <span className="block truncate text-panel-fg">{value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-panel-fg/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-panel-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
