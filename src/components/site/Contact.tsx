import { useState, type FormEvent } from "react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "Instagram", href: profile.socials.instagram, Icon: Instagram },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Open to internships, collaborations and interesting AI/ML conversations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-7">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/70"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/70"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="font-mono text-xs tracking-[0.25em] text-cyan uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-cyan/70"
                    placeholder="Say hello…"
                  />
                </div>
                <button
                  type="submit"
                  className="glow-ring inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="size-4" />
                  {sent ? "Message Sent" : "Send Message"}
                </button>
                <p className="text-xs text-muted-foreground">
                  This form currently shows a confirmation only — connect it to email or a database
                  whenever you like.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col justify-between gap-6 rounded-3xl p-7">
              <div>
                <h3 className="text-lg font-semibold">Find me online</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Replace these placeholder links with your real profiles.
                </p>
              </div>
              <ul className="grid gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan"
                    >
                      <Icon className="size-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
