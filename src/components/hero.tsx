import ProteinViewer from "./protein-viewer";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden pt-20 lg:min-h-[92vh] lg:pt-24">
      {/* Desktop only: editorial right-side spectrum protein panel. */}
      <div
        aria-hidden
        className="viewer-glow absolute inset-y-0 right-[-8%] hidden w-[55%] border-l border-[var(--border)] lg:block"
      >
        <div className="absolute left-4 top-8 z-10">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
            <span className="h-px w-6 bg-[var(--border-strong)]" />
            <span>PDB · 1HHO</span>
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)] uppercase pl-8">
            hemoglobin · 141 aa
          </div>
        </div>
        <div className="viewer-mask absolute inset-0 opacity-95">
          <ProteinViewer
            pdbId="1HHO"
            mode="spectrum"
            accent="#0E8F85"
            spinSpeed={0.25}
            zoom={1.2}
          />
        </div>
      </div>

      {/* Mobile only: clean DNA double-helix backdrop, accent stroke at low
          opacity, masked so the text column reads clearly. */}
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 38%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 38%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.22]"
          viewBox="0 0 200 600"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round">
            <path d="M60 -20 Q140 50 60 120 Q-20 190 60 260 Q140 330 60 400 Q-20 470 60 540 Q140 610 60 680" />
            <path d="M140 -20 Q60 50 140 120 Q220 190 140 260 Q60 330 140 400 Q220 470 140 540 Q60 610 140 680" />
          </g>
          <g stroke="var(--accent)" strokeWidth="0.9" strokeLinecap="round" opacity="0.65">
            <line x1="61" y1="0" x2="139" y2="0" />
            <line x1="78" y1="35" x2="122" y2="35" />
            <line x1="100" y1="70" x2="100" y2="70" />
            <line x1="78" y1="105" x2="122" y2="105" />
            <line x1="61" y1="140" x2="139" y2="140" />
            <line x1="78" y1="175" x2="122" y2="175" />
            <line x1="78" y1="245" x2="122" y2="245" />
            <line x1="61" y1="280" x2="139" y2="280" />
            <line x1="78" y1="315" x2="122" y2="315" />
            <line x1="78" y1="385" x2="122" y2="385" />
            <line x1="61" y1="420" x2="139" y2="420" />
            <line x1="78" y1="455" x2="122" y2="455" />
            <line x1="78" y1="525" x2="122" y2="525" />
            <line x1="61" y1="560" x2="139" y2="560" />
          </g>
          <g fill="var(--accent)" opacity="0.5">
            <circle cx="60" cy="0" r="2" />
            <circle cx="140" cy="0" r="2" />
            <circle cx="60" cy="140" r="2" />
            <circle cx="140" cy="140" r="2" />
            <circle cx="60" cy="280" r="2" />
            <circle cx="140" cy="280" r="2" />
            <circle cx="60" cy="420" r="2" />
            <circle cx="140" cy="420" r="2" />
            <circle cx="60" cy="560" r="2" />
            <circle cx="140" cy="560" r="2" />
          </g>
        </svg>
        <div className="absolute right-4 top-24 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
          <div className="flex items-center justify-end gap-2">
            <span>DNA · helix</span>
            <span className="h-px w-6 bg-[var(--border-strong)]" />
          </div>
          <div className="mt-1 pr-8 text-right">B-form · 10.5 bp/turn</div>
        </div>
      </div>

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-dots opacity-70"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="reveal text-balance text-[44px] font-light leading-[1.04] tracking-[-0.03em] text-[var(--text)] sm:text-6xl lg:text-[88px]">
            Nutrition,
            <br />
            <span className="accent-text font-normal">
              <span className="display-italic">designed</span> from scratch.
            </span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-[var(--text-dim)] sm:mt-8 sm:text-lg lg:text-xl">
            Null Bites is a{" "}
            <span className="text-[var(--text)]">biocomputation company</span>{" "}
            building nutrition products. We write novel food-grade proteins
            from first principles, then turn them into things you can eat.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <a
              href="#products"
              className="button-primary group inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)]"
            >
              See the products
              <span
                aria-hidden
                className="transition group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#science"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm text-[var(--text)] transition hover:-translate-y-[1px] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Read the thesis
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg)]"
      />
    </section>
  );
}
