const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path so it works under a GitHub Pages sub-path. */
export function asset(path: string) {
  return `${basePath}${path}`;
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
