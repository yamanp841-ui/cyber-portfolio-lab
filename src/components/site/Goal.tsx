import { Reveal } from "./Reveal";

export function Goal() {
  return (
    <section id="goals" className="section-pad relative overflow-hidden">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="animate-aurora absolute top-10 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-[var(--electric)] opacity-20 blur-[150px]"
      />
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.35em] text-cyan uppercase">
            Career goal
          </span>
          <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
            <span className="text-gradient">My Goal</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/85 sm:text-2xl">
            &ldquo;I want to build intelligent, useful and innovative technology using Computer
            Science, Artificial Intelligence and Machine Learning.&rdquo;
          </p>
          <div className="animate-float-soft glass mx-auto mt-12 w-fit rounded-full px-6 py-3 font-mono text-xs tracking-[0.3em] text-violet uppercase">
            Building • Learning • Shipping
          </div>
        </Reveal>
      </div>
    </section>
  );
}
