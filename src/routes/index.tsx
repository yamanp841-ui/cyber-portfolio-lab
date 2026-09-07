import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Journey } from "@/components/site/Journey";
import { Achievements } from "@/components/site/Achievements";
import { Stats } from "@/components/site/Stats";
import { Goal } from "@/components/site/Goal";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { profile } from "@/lib/portfolio-data";

const title = `${profile.name} — B.Tech CSE (AI & ML) Portfolio`;
const description =
  "Futuristic 3D portfolio of Yaman Prajapat, B.Tech Computer Science (AI & ML) student at JECRC University, Alwar NCR Campus — projects, skills and learning journey.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Stats />
        <Goal />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
