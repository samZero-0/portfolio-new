"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { ease } from "./Reveal";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const onTop = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-fg/10 bg-bg/75 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav className="container-x flex h-16 items-center justify-between sm:h-18">
          <ul className="-ml-4 hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active === link.id ? "text-bg" : "text-fg/65 hover:text-fg",
                  )}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-fg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-accent-text/50 px-5 py-2 text-sm font-medium text-accent-text transition-all hover:bg-accent hover:text-accent-fg sm:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-fg/15 lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-[1.5px] w-4 bg-fg transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-[5px]",
                )}
              />
              <span
                className={cn(
                  "absolute h-[1.5px] w-4 bg-fg transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-[5px]",
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline gap-4 py-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
                      active === link.id ? "text-accent-text" : "text-fg",
                    )}
                  >
                    <span className="font-mono text-xs text-fg/40">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between border-t border-fg/10 pt-6"
            >
              <a
                href={asset(profile.resume)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg"
              >
                Download Resume
              </a>
              <div className="flex gap-4 text-fg/70">
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
