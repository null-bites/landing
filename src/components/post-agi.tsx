export function AfterAgiBody() {
  return (
    <div className="reveal-stagger space-y-8">
      <p className="text-[19px] leading-[1.55] text-[var(--text)] sm:text-[20px]">
        Protein design is already changing drug discovery. Food is still
        mostly using molecules that plants and animals happened to give us.
        Null Bites exists because that gap is too large to ignore.
      </p>

      <DividendBar />

      <p>
        Pharma absorbed most of the AlphaFold dividend. The largest leap in
        molecular design since recombinant DNA went straight into drug
        discovery and mostly skipped the dinner plate. We are taking the same
        stack and changing the target: bite, melt, gel, digestibility, cost.
      </p>

      <SectionLabel>The loop, before and after</SectionLabel>

      <LoopComparison />

      <p>
        The hard part moved from making one candidate to choosing which
        candidate deserves bench work. We treat each food protein as something
        we can write, score, reject, and rewrite. The company that learns
        fastest wins.
      </p>

      <PullQuote>
        The bottleneck moved from the lab bench to the design loop. That is
        the layer we are building around.
      </PullQuote>

      <SectionLabel>What we redesign</SectionLabel>

      <p>
        A lot of what people feel in food comes from protein behavior:
        texture, melt, set, chew, foam. Those are no longer fixed properties.
      </p>

      <ProteinGrid />

      <SectionLabel>How we ship</SectionLabel>

      <ShipPrinciples />

      <p>
        We expect some molecules to fail. That is the point of the loop:
        kill weak candidates in software, send fewer to the bench, and let
        the food team spend time on the ones with a real shot.
      </p>

      <HorizonStrip />

      <p className="text-balance text-center text-[20px] leading-[1.5] text-[var(--text)] sm:text-[22px]">
        We are designing food proteins{" "}
        <span className="display-italic accent-text">in public, today</span>.
      </p>
    </div>
  );
}

/* ─────────── visuals ─────────── */

function DividendBar() {
  return (
    <figure className="reveal my-2 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 p-6 sm:p-7">
      <figcaption className="label mb-5">
        Where the AlphaFold dividend went · 2020 to 2025
      </figcaption>
      <div className="flex h-12 w-full overflow-hidden rounded-md border border-[var(--border-strong)]">
        <div
          className="relative flex items-center justify-end pr-3"
          style={{
            width: "94%",
            background:
              "repeating-linear-gradient(135deg, rgba(14,143,133,0.18) 0 6px, rgba(14,143,133,0.06) 6px 12px)",
          }}
        >
          <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--text)] uppercase">
            Therapeutics
          </span>
        </div>
        <div
          className="relative flex items-center justify-center border-l border-[var(--border-strong)] bg-[var(--accent)]/15"
          style={{ width: "6%" }}
        >
          <span className="absolute -top-6 right-0 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] text-[var(--accent)] uppercase">
            ← Food
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
        <span>Drug discovery, antibody design, target validation</span>
        <span className="text-right">Nutrition · ingredient design</span>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-dim)]">
        Rough estimate of where post-AlphaFold protein-design investment has
        landed. Almost the entire cycle has gone to therapeutics.
      </p>
    </figure>
  );
}

function LoopComparison() {
  return (
    <div className="reveal-stagger my-2 grid gap-4 sm:grid-cols-2">
      <LoopCard
        era="2020"
        accent={false}
        headline="365 days"
        sub="per protein candidate"
        rows={[
          ["Throughput", "1 candidate / cycle"],
          ["Validation", "Bench only"],
          ["Cost", "$50K+ per attempt"],
          ["Owner", "Wet-lab specialist"],
        ]}
      />
      <LoopCard
        era="2026"
        accent
        headline="1 afternoon"
        sub="per design batch"
        rows={[
          ["Throughput", "1,000s of candidates"],
          ["Validation", "Simulator → bench"],
          ["Cost", "Pennies per candidate"],
          ["Owner", "Autonomous loop"],
        ]}
      />
    </div>
  );
}

function LoopCard({
  era,
  accent,
  headline,
  sub,
  rows,
}: {
  era: string;
  accent: boolean;
  headline: string;
  sub: string;
  rows: [string, string][];
}) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border bg-[var(--bg)] p-5 sm:p-6 ${
        accent
          ? "border-[var(--accent)]/60 shadow-[0_0_0_1px_rgba(14,143,133,0.15)]"
          : "border-[var(--border)]"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="label">{era}</span>
        <span
          className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
            accent ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
          }`}
        >
          {accent ? "After" : "Before"}
        </span>
      </div>
      <p
        className={`mt-3 font-mono text-3xl font-light tracking-tight sm:text-[34px] ${
          accent ? "text-[var(--accent)]" : "text-[var(--text)]"
        }`}
      >
        {headline}
      </p>
      <p className="mt-1 text-[13px] text-[var(--text-muted)]">{sub}</p>
      <ul className="mt-5 divide-y divide-[var(--border)] border-t border-[var(--border)]">
        {rows.map(([k, v]) => (
          <li key={k} className="flex items-center justify-between py-2.5">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)] uppercase">
              {k}
            </span>
            <span className="text-[13px] text-[var(--text)]">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProteinGrid() {
  const proteins = [
    {
      name: "Myosin",
      property: "Meat texture",
      detail: "The fiber that makes a steak bite like a steak.",
      accent: "#0E8F85",
    },
    {
      name: "Ovalbumin",
      property: "Set & structure",
      detail: "The fold that turns liquid egg into a custard.",
      accent: "#D6A93C",
    },
    {
      name: "Casein",
      property: "Stretch & melt",
      detail: "The micelle that makes cheese pull on a pizza.",
      accent: "#C24A3A",
    },
    {
      name: "Lactoferrin",
      property: "Iron uptake",
      detail: "The carrier that delivers iron the body actually uses.",
      accent: "#7C5CFF",
    },
  ];
  return (
    <div className="reveal-stagger my-2 grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
      {proteins.map((p) => (
        <div key={p.name} className="bg-[var(--bg)] p-5">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ background: p.accent }}
            />
            <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
              {p.name}
            </span>
          </div>
          <p className="mt-3 text-[18px] font-normal leading-snug text-[var(--text)]">
            {p.property}
          </p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--text-dim)]">
            {p.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function ShipPrinciples() {
  const items = [
    {
      kicker: "01",
      title: "Write the molecule",
      detail: "Sequence-level control.",
    },
    {
      kicker: "02",
      title: "Reject quickly",
      detail: "Cheap design passes before bench work.",
    },
    {
      kicker: "03",
      title: "Pick the right route",
      detail: "Fermentation, partner formulation, licensing, or own brand.",
    },
  ];
  return (
    <ol className="reveal-stagger my-2 grid gap-3 sm:grid-cols-3">
      {items.map((i) => (
        <li
          key={i.kicker}
          className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--accent)]">
            {i.kicker}
          </span>
          <p className="mt-3 text-[15px] font-normal leading-snug text-[var(--text)]">
            {i.title}
          </p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--text-dim)]">
            {i.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}

function HorizonStrip() {
  return (
    <figure className="reveal my-2 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 p-6">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
        <div>
          <p className="label">Today</p>
          <p className="mt-2 text-[15px] leading-snug text-[var(--text)]">
            Food is{" "}
            <span className="text-[var(--text-muted)]">inherited</span> from
            evolution and patched by industry.
          </p>
        </div>
        <div className="flex items-center justify-center font-mono text-[var(--accent)]">
          <span className="hidden sm:inline">→</span>
          <span className="sm:hidden">↓</span>
        </div>
        <div>
          <p className="label">2040</p>
          <p className="mt-2 text-[15px] leading-snug text-[var(--text)]">
            Every gram can be designed around{" "}
            <span className="display-italic accent-text">
              nutrition, cost, and taste
            </span>
            .
          </p>
        </div>
      </div>
    </figure>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal flex items-center gap-3 pt-4">
      <span className="h-px w-8 bg-[var(--border-strong)]" />
      <span className="font-mono text-[10px] tracking-[0.24em] text-[var(--text-muted)] uppercase">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="reveal relative my-2 border-l-2 border-[var(--accent)] pl-6 text-[19px] leading-[1.55] tracking-[-0.005em] text-[var(--text)]">
      <span className="display-italic">{children}</span>
    </blockquote>
  );
}
