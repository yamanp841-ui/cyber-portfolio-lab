import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <HeroCanvas />
      <div aria-hidden className="grid-bg absolute inset-0 -z-20" />
      <div
        aria-hidden
        className="animate-aurora absolute -top-40 -left-32 -z-20 size-[36rem] rounded-full bg-[var(--electric)] opacity-20 blur-[140px]"
      />
      <div
        aria-hidden
        className="animate-aurora absolute -right-32 bottom-0 -z-20 size-[32rem] rounded-full bg-[var(--violet)] opacity-20 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-cyan">
            <Sparkles className="size-3.5" />
            AI / ML • Engineering Student
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span> 👋
          </h1>

          <p className="mt-5 font-mono text-sm tracking-wide text-cyan sm:text-base">
            {profile.role}
          </p>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{profile.university}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="group glow-ring inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore My Journey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              View My Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
