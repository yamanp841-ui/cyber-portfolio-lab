import { achievements } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Achievements() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Goals"
          subtitle="Editable placeholders — add certificates, courses and wins as they happen."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.07}>
              <article className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-6">
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 size-40 rounded-full bg-[var(--violet)] opacity-15 blur-3xl"
                />
                <div className="text-3xl">{a.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
