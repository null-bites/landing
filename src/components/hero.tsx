import dynamic from "next/dynamic";

const ProteinViewer = dynamic(() => import("./protein-viewer"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24">
      {/* Protein viewer background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 viewer-mask opacity-75"
      >
        <ProteinViewer pdbId="1HHO" accent="#7CF5A6" spinSpeed={0.25} />
      </div>

      {/* Dot grid over the gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 grid-dots opacity-60"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="label-accent mb-6 inline-flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Designing now · Pipeline online
          </p>

          <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-[-0.025em] text-[var(--text)] sm:text-6xl lg:text-[84px]">
            Nutrition,
            <br />
            <span className="text-[var(--accent)]">designed from scratch.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-dim)] lg:text-xl">
            Null Bites is an AI-first nutrition biomanufacturing company. We
            write novel food-grade proteins from first principles — and turn
            them into real products people can eat.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#pipeline"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#06180f] transition hover:brightness-110"
            >
              See the pipeline
              <span
                aria-hidden
                className="transition group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#science"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--surface)]/50 px-5 py-3 text-sm text-[var(--text)] transition hover:border-[var(--accent-dim)] hover:text-[var(--accent)]"
            >
              Read the thesis
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-[var(--border)] pt-6">
            <Metric kicker="Papers ingested" value="1,419" />
            <Metric kicker="Self-correction cycles" value="146" />
            <Metric kicker="Lead designs" value="5" />
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

function Metric({ kicker, value }: { kicker: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="label">{kicker}</span>
      <span className="font-mono text-2xl font-medium tracking-tight text-[var(--text)]">
        {value}
      </span>
    </div>
  );
}
