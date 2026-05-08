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
            initialRotationY={68}
          />
        </div>
      </div>

      {/* Mobile only: spinning spectrum-protein backdrop with a horizontal
          sharpness gradient — transparent on the left so the text column
          reads, soft/blurred through the middle, crisp on the far right.
          Two layers do the work: the canvas itself (sharp) and a
          backdrop-blur veil masked to leave the right edge untouched. */}
      <div
        aria-hidden
        className="viewer-glow absolute inset-y-0 right-[-12%] w-[96%] lg:hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 78%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 28%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,1) 78%)",
        }}
      >
        <div className="absolute inset-0">
          <ProteinViewer
            pdbId="1HHO"
            mode="spectrum"
            accent="#0E8F85"
            spinSpeed={0.18}
            zoom={1.28}
            initialRotationY={74}
            quality={12}
          />
        </div>
        {/* Sharpness gradient: blur the left/middle of the panel, leave
            the rightmost ~30% perfectly crisp so the rotating protein
            reads as high-resolution at the edge it spins out into. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(6px) saturate(1.08)",
            WebkitBackdropFilter: "blur(6px) saturate(1.08)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0) 90%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0) 90%)",
          }}
        />
        <div className="absolute right-3 top-6 font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] uppercase">
          <div className="flex items-center justify-end gap-2">
            <span>PDB · 1HHO</span>
            <span className="h-px w-6 bg-[var(--border-strong)]" />
          </div>
          <div className="mt-1 pr-8 text-right">hemoglobin · 141 aa</div>
        </div>
      </div>

      {/* Mobile only: cream wash sitting between the protein and the text
          column. Holds the body copy on a near-opaque cream up to ~70%
          of the viewport so headline + paragraph stay clean, then fades
          out so the rightmost slice of rotating, high-res protein
          breathes through unobstructed. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 right-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to right, var(--bg) 0%, var(--bg) 52%, rgba(251,250,246,0.92) 66%, rgba(251,250,246,0.4) 80%, rgba(251,250,246,0) 96%)",
        }}
      />

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

          <p className="reveal mt-6 max-w-[260px] text-base leading-relaxed text-[var(--text-dim)] sm:mt-8 sm:max-w-xl sm:text-lg lg:text-xl">
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
