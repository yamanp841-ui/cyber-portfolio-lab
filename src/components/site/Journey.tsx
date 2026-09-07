import { motion } from "motion/react";
import { journey } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Journey() {
  return (
    <section id="journey" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Timeline"
          title="My Learning Journey"
          subtitle="From first lines of code to building intelligent systems."
        />

        <div className="relative pl-8 sm:pl-12">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-2 w-px origin-top bg-[image:var(--gradient-holo)] sm:left-4"
          />

          <ol className="space-y-10">
            {journey.map((step, i) => (
              <motion.li
                key={step.tag}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute top-6 -left-[26px] size-3 rounded-full bg-cyan shadow-[0_0_16px_var(--cyan)] sm:-left-[42px]"
                />
                <div className="glass glass-hover rounded-3xl p-6">
                  <span className="font-mono text-xs tracking-[0.3em] text-violet uppercase">
                    {step.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
