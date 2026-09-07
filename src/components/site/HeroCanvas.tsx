import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useState } from "react";

const HeroScene = lazy(() => import("../three/HeroScene"));

function SceneGate() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;
    if (reduced || small) return;
    const id = window.setTimeout(() => setOk(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  if (!ok) return null;
  return (
    <Suspense fallback={null}>
      <HeroScene />
    </Suspense>
  );
}

export function HeroCanvas() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <ClientOnly fallback={null}>
        <SceneGate />
      </ClientOnly>
    </div>
  );
}
