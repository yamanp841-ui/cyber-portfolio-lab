import { skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Technologies"
          subtitle="The languages, frameworks and concepts I work with and keep learning."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="glass glass-hover h-full rounded-3xl p-7">
                <h3 className="font-mono text-xs tracking-[0.3em] text-cyan uppercase">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="group relative rounded-2xl border border-border bg-secondary/40 px-4 py-2.5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:text-cyan"
                    >
                      <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_28px_-6px_var(--cyan)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
