import { aboutCards, profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About me" title="Who I am" subtitle={profile.about} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <article className="glass glass-hover h-full rounded-3xl p-6">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-4 font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                  {c.label}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/90">{c.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
