"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { useTheme } from "@/lib/useTheme";
import Galaxy from "./Galaxy";
import ProfileCard from "./ProfileCard";
import { ArrowDown, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "./Icons";
import { ease } from "./Reveal";

const nameLines = [
  { words: ["Kazi", "Samin"], gradient: false },
  { words: ["Nawal"], gradient: true },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="whitespace-nowrap text-accent-text"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroProfileCard() {
  const theme = useTheme();
  const light = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease }}
      className="mx-auto w-fit"
    >
      <ProfileCard
        className="hero-profile"
        avatarUrl={asset("/images/samin.jpg")}
        name={profile.name}
        title="Full Stack & AI Developer"
        handle="samZero-0"
        status="Open to work"
        contactText="Contact Me"
        showUserInfo
        enableTilt
        enableMobileTilt={false}
        behindGlowEnabled
        behindGlowColor={light ? "rgba(109, 129, 150, 0.6)" : "rgba(255, 255, 255, 0.3)"}
        innerGradient={
          light
            ? "linear-gradient(145deg, #6d819680 0%, #ffffe326 100%)"
            : "linear-gradient(145deg, #ffffff14 0%, #6d819640 100%)"
        }
        onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      />
    </motion.div>
  );
}

function HeroBackground() {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const light = theme === "light";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {theme && (
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className={light ? "absolute inset-0 opacity-60 mix-blend-multiply" : "absolute inset-0"}
        >
          <Galaxy
            lightMode={light}
            saturation={0}
            density={1.1}
            glowIntensity={light ? 0.18 : 0.35}
            twinkleIntensity={0.4}
            starSpeed={0.4}
            rotationSpeed={0.05}
            repulsionStrength={1.5}
            disableAnimation={!!reduce}
          />
        </motion.div>
      )}
      <div className="hero-scrim absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

export function Hero() {
  let wordIndex = 0;

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-24 sm:pt-28">
      <HeroBackground />

      <div className="container-x relative flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-fg/15 bg-surface/70 px-4 py-1.5 text-xs font-medium text-fg/80 backdrop-blur sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities & collaborations
            </motion.div>

            <h1 className="font-display text-[2.9rem] font-bold leading-[1.02] tracking-tight text-fg min-[400px]:text-6xl sm:text-7xl xl:text-[5.5rem]">
              <span className="sr-only">{profile.name}</span>
              {nameLines.map((line, li) => (
                <span key={li} aria-hidden className="block">
                  {line.words.map((word) => {
                    const i = wordIndex++;
                    return (
                      <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom last:mr-0">
                        <motion.span
                          initial={{ y: "110%" }}
                          animate={{ y: "0%" }}
                          transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease }}
                          className={line.gradient ? "text-gradient inline-block" : "inline-block"}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
              className="mt-6 font-display text-xl font-medium text-fg/85 sm:text-2xl"
            >
              <RoleRotator />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-5 max-w-xl text-base leading-relaxed text-fg/70 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-fg shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                View my work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={asset(profile.resume)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-fg/20 px-6 py-3.5 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-fg/50 hover:bg-fg/5"
              >
                <DownloadIcon className="h-4 w-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg/60"
            >
              <div className="flex items-center gap-1">
                {[
                  { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
                  { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full text-fg/70 transition-all hover:-translate-y-0.5 hover:bg-fg/10 hover:text-accent-text"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              <span className="flex items-center gap-1.5">
                <MapPinIcon className="h-4 w-4 text-accent-text" />
                {profile.location}
              </span>
            </motion.div>
          </div>

          <HeroProfileCard />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative mx-auto mt-10 hidden h-11 w-7 justify-center rounded-full border border-fg/25 pt-2 [@media(min-height:760px)]:flex"
      >
        <motion.span
          animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-1 rounded-full bg-accent"
        />
      </motion.a>
    </section>
  );
}
