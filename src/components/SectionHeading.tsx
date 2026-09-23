import { Reveal } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-text sm:text-sm">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/60" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-fg/65 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
