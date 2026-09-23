import { focusAreas, profile } from "@/data/portfolio";
import { ChartIcon, CodeIcon, SparkIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const focusIcons = [CodeIcon, SparkIcon, ChartIcon];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineering products that are <span className="text-gradient">useful</span>, fast and
              a little bit intelligent.
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-5 text-base leading-relaxed text-fg/75 sm:text-lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <ul className="flex flex-col gap-4">
            {focusAreas.map((area, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <li key={area.title}>
                  <Reveal x={24} y={0} delay={0.1 + i * 0.1}>
                    <div className="card group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-text/40 sm:p-6">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-fg/[0.07] text-fg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-fg">{area.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-fg/65">{area.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
