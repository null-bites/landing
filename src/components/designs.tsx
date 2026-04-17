import ProteinViewer from "./protein-viewer";

type Design = {
  codename: string;
  pdbId: string;
  target: string;
  summary: string;
  metrics: { label: string; value: string }[];
  accent: string;
  mode: "solid" | "spectrum";
};

const designs: Design[] = [
  {
    codename: "NB-IRON-07",
    pdbId: "1HHO",
    target: "Plant-based iron binding",
    summary:
      "Heme-mimic fold that chelates Fe²⁺ from leafy inputs, matching animal-source bioavailability.",
    metrics: [
      { label: "pLDDT", value: "94.2" },
      { label: "ΔG", value: "−11.3" },
      { label: "Tm", value: "78 °C" },
    ],
    accent: "var(--accent-violet)",
    mode: "spectrum",
  },
  {
    codename: "NB-FIBRE-03",
    pdbId: "2MYS",
    target: "Meat-grade fibrous texture",
    summary:
      "Long coiled-coil designed to self-assemble into aligned fibres under shear — the missing chew.",
    metrics: [
      { label: "pLDDT", value: "91.8" },
      { label: "ΔG", value: "−9.7" },
      { label: "Tm", value: "72 °C" },
    ],
    accent: "var(--accent-mint)",
    mode: "spectrum",
  },
  {
    codename: "NB-GEL-02",
    pdbId: "1OVA",
    target: "Heat-set protein gel",
    summary:
      "Ovalbumin-inspired scaffold tuned for lower set temps — gels like egg without touching a hen.",
    metrics: [
      { label: "pLDDT", value: "89.4" },
      { label: "ΔG", value: "−10.1" },
      { label: "Tm", value: "65 °C" },
    ],
    accent: "var(--accent-blue)",
    mode: "spectrum",
  },
];

export function Designs() {
  return (
    <section
      id="designs"
      className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10"
    >
      <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="label mb-4">03 · The designs</p>
          <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
            Five proteins.{" "}
            <em className="rainbow-text not-italic font-normal">
              None of them have ever existed.
            </em>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] text-[var(--text-dim)]">
          Selected from the pipeline&apos;s current top-of-stack. Each is a
          novel sequence, folded in silico, ready for the bench.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {designs.map((d, i) => (
          <article
            key={d.codename}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--border-strong)]"
          >
            <div className="relative aspect-[4/3] border-b border-[var(--border)] bg-[var(--bg)]">
              <div className="absolute inset-0 viewer-mask">
                <ProteinViewer
                  pdbId={d.pdbId}
                  accent={d.accent}
                  mode={d.mode}
                  spinSpeed={0.2 + i * 0.05}
                  zoom={1.0}
                />
              </div>
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span
                  className="pulse-dot inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--accent-mint)" }}
                />
                <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                  live · rotating
                </span>
              </div>
              <div className="absolute right-4 top-4">
                <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--text-muted)]">
                  PDB.{d.pdbId}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <h3
                  className="font-mono text-[15px] tracking-tight"
                  style={{ color: d.accent }}
                >
                  {d.codename}
                </h3>
                <span className="label">CANDIDATE</span>
              </div>
              <p className="mt-3 text-[15px] font-medium text-[var(--text)]">
                {d.target}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-dim)]">
                {d.summary}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-4">
                {d.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
                      {m.label}
                    </span>
                    <span className="font-mono text-[15px] text-[var(--text)]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 font-mono text-[12px] tracking-[0.14em] text-[var(--text-muted)] uppercase">
        + 2 more designs in queue · full dataset published on GitHub within 48h
        of lab results
      </p>
    </section>
  );
}
