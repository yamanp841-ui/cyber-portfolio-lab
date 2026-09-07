import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1200;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-gradient text-5xl font-semibold tabular-nums">
      {n}+
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Dashboard"
          title="Learning Snapshot"
          subtitle="Placeholder counters you can update as you grow."
        />
        <div className="glass grid gap-8 rounded-[2rem] p-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} />
              <p className="mt-3 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
