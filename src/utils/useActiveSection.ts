import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["about", "parcours", "projects", "skills", "synthese", "veille", "contact"];

export function useActiveSection(): string {
  const [active, setActive] = useState<string>("");
  const ratios = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          ratios.current[e.target.id] = e.intersectionRatio;
        });
        let best = "";
        let bestRatio = 0;
        for (const id of SECTION_IDS) {
          const r = ratios.current[id] ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = id;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0] }
    );

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
