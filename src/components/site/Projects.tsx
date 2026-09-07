import { useRef, type MouseEvent } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 10}deg) translateY(-6px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="glass glass-hover flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 will-change-transform"
    >
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[11px] tracking-wide text-cyan"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-3 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-cyan/60 hover:text-cyan"
        >
          <Github className="size-4" /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-violet)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
        >
          <ExternalLink className="size-4" /> Live Demo
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Placeholder projects — swap them for real repositories any time."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
