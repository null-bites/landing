import ProteinViewer from "./protein-viewer";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden pb-16 pt-28 sm:pt-24 lg:min-h-[92vh]">
      {/* Colorful spectrum protein showcase — right side (drag to rotate) */}
      <div className="viewer-glow absolute inset-y-0 right-[-8%] w-[65%] opacity-60 sm:opacity-80 lg:w-[55%] lg:opacity-95">
        <div className="viewer-mask absolute inset-0">
          <ProteinViewer
            pdbId="1HHO"
            mode="spectrum"
            accent="#0E8F85"
            spinSpeed={0.25}
            zoom={1.2}
            interactive
          />
        </div>
      </div>

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-dots opacity-70"
      />

      <div className="pointer-events-none relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="pointer-events-auto max-w-3xl">
          <h1 className="reveal text-balance text-[44px] font-light leading-[1.04] tracking-[-0.03em] text-[var(--text)] sm:text-6xl lg:text-[88px]">
            Nutrition,
            <br />
            <span className="accent-text font-normal">
              <span className="display-italic">designed</span> from scratch.
            </span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-dim)] lg:text-xl">
            Null Bites is a{" "}
            <span className="text-[var(--text)]">biocomputation company</span>{" "}
            building nutrition products. We write novel food-grade proteins
            from first principles, then turn them into things you can eat.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
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
