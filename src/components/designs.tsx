import ProteinViewer from "./protein-viewer";

type Design = {
  codename: string;
  pdbId: string;
  category: string;
  product: string;
  summary: string;
  color: string;
};

const designs: Design[] = [
  {
    codename: "NB-IRON-07",
    pdbId: "1HHO",
    category: "Fortification",
    product: "Iron-dense protein bar",
    summary:
      "Heme-mimic fold that chelates Fe²⁺ from leafy inputs. Animal-source bioavailability, zero animal.",
    color: "#0E8F85",
  },
  {
    codename: "NB-FIBRE-03",
    pdbId: "2MYS",
    category: "Plant-based meat",
    product: "Fibrous whole-muscle analogue",
    summary:
      "Long coiled-coil engineered to self-assemble into aligned fibres under shear. The missing chew.",
    color: "#E4A04A",
  },
  {
    codename: "NB-GEL-02",
    pdbId: "1OVA",
    category: "Egg replacement",
    product: "Heat-set bake gel",
    summary:
      "Ovalbumin-inspired scaffold tuned for lower set temps. Gels like egg, without touching a hen.",
    color: "#1A2925",
  },
];

export function Designs() {
  return (
    <section
      id="products"
      className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10"
    >
      <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="reveal max-w-2xl">
          <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
            Five proteins going to market.{" "}
            <span className="accent-text font-normal">
              None of them <span className="display-italic">existed</span> a
              year ago.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-[15px] text-[var(--text-dim)]">
          Each candidate is a novel sequence, folded in silico, synthesized at
          the bench, and formulated into a product with a specific job.
        </p>
      </div>

      <div className="reveal-stagger grid gap-6 lg:grid-cols-3">
        {designs.map((d, i) => (
          <article
            key={d.codename}
            className="hover-lift group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]"
          >
            <div className="relative aspect-[4/3] border-b border-[var(--border)] bg-[var(--bg)]">
              <div className="absolute inset-0 viewer-mask">
                <ProteinViewer
                  pdbId={d.pdbId}
                  accent={d.color}
                  mode="spectrum"
                  spinSpeed={0.2 + i * 0.05}
                  zoom={1.0}
                  quality={6}
                  showSurface={false}
                />
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
                  className="font-mono text-[13px] tracking-[0.08em]"
                  style={{ color: d.color }}
                >
                  {d.codename}
                </h3>
                <span className="label">{d.category.toUpperCase()}</span>
              </div>
              <p className="mt-3 text-[17px] font-medium text-[var(--text)]">
                {d.product}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-dim)]">
                {d.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 font-mono text-[12px] tracking-[0.14em] text-[var(--text-muted)] uppercase">
        + 2 more products in queue · Performance · recovery · gut-health ·
        plant-based whole food
      </p>
    </section>
  );
}
