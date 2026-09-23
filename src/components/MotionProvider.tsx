"use client";

import { MotionConfig } from "motion/react";

/** Honors the OS "reduce motion" setting for every animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
