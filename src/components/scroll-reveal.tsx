"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      document
        .querySelectorAll<HTMLElement>(".reveal, .reveal-stagger > *")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger > *"),
    );

    if (!targets.length) return;

    // Already-in-view elements get shown immediately, no fade
    // (avoids a janky fade-in on the initial hero on page load).
    const instant = new Set<HTMLElement>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!instant.has(el)) {
              el.classList.add("is-visible");
            }
            io.unobserve(el);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    for (const el of targets) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        instant.add(el);
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    }

    return () => io.disconnect();
  }, []);

  return null;
}
