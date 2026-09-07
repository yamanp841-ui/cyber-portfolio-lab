import { profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          {profile.name} — {new Date().getFullYear()}
        </p>
        <p className="text-xs text-muted-foreground">Built with React, Three.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
