import ProteinViewer from "./protein-viewer";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden pt-20 lg:flex-row lg:items-center lg:pt-24">
      {/* Colorful spectrum protein showcase.
          Mobile: bounded block ABOVE the text so it never overlaps copy.
          Desktop: editorial right-side panel as before. */}
      <div
        aria-hidden
        className="viewer-glow relative mx-6 mb-6 h-[260px] w-[calc(100%-3rem)] sm:h-[320px] lg:absolute lg:inset-y-0 lg:right-[-8%] lg:mx-0 lg:mb-0 lg:h-auto lg:w-[55%] lg:border-l lg:border-[var(--border)]"
      >
        {/* Panel label at top of viewer column */}
        <div className="hidden absolute left-4 top-8 z-10 lg:block">
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

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg)]"
      />
    </section>
  );
}
