export function BusinessModelBody() {
  return (
    <div className="reveal-stagger space-y-7">
      <p>
        A protein-design company that only publishes papers is a lab. Null
        Bites has to sell. Once a candidate clears simulation and the bench,
        the same molecule can become a license, a B2B ingredient, or a food
        product under our own brand. We will take the fastest serious route
        first.
      </p>

      <ThreeDoors />

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 01 · Licensing the formulation.
      </h2>
      <p>
        Licensing is the first route. A formulation that clears simulation,
        fermentation, and bench testing can become IP that an existing food
        company pays to use. We run the design and validation. A partner with
        supply chain and distribution takes it to market. This is the lowest
        capex revenue in the model, which matters early.
      </p>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 02 · Selling the ingredient.
      </h2>
      <p>
        The second route is selling the ingredient itself. Null Bites can
        produce the protein through fermentation or a partner route, then sell
        it as a B2B input to brands that know their category better than we
        do. That gives us manufacturing learning before we fight for consumer
        shelf space.
      </p>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 03 · Making the food.
      </h2>
      <p>
        The third route is the finished food most people picture first. It is
        also the most expensive one to earn: brand, packaging, distribution,
        repeat purchase, returns. We should only do it when the designed
        protein is obviously better than the commodity substitute.
      </p>

      <PullQuote>
        Every dollar of revenue should feed back into the engine that
        designs the next generation of food.
      </PullQuote>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        How the three doors compound.
      </h2>
      <p>
        Licensing and ingredient sales should fund the design loop before
        the brand carries the company. The loop then produces the few
        candidates good enough to deserve a consumer product. That keeps us
        from betting the whole company on one SKU.
      </p>

      <DoorEconomics />

      <p>
        The rough sequence: first license inside 12 to 18 months, first
        ingredient sales in year two, own-brand food after the molecule has
        proven itself. Across the next decade, the goal is simple: every rupee
        of revenue pays for more designs, better bench data, and better food.
        The result should be{" "}
        <span className="text-[var(--text)]">
          better proteins at lower cost, sold through the route that makes
          sense first
        </span>
        .
      </p>
    </div>
  );
}

function ThreeDoors() {
  return (
    <figure className="reveal my-4 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]/60 p-6 sm:p-8">
      <svg
        viewBox="0 0 720 220"
        className="h-auto w-full"
        role="img"
        aria-label="Three revenue doors flowing out of the design loop"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* Source node */}
        <g>
          <rect
            x="20"
            y="80"
            width="180"
            height="60"
            rx="8"
            fill="var(--bg)"
            stroke="var(--border-strong)"
          />
          <text
            x="110"
            y="106"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), ui-monospace"
            fontSize="11"
            letterSpacing="2"
            fill="var(--text-muted)"
          >
            DESIGN LOOP
          </text>
          <text
            x="110"
            y="128"
            textAnchor="middle"
            fontFamily="var(--font-geist-sans), system-ui"
            fontSize="14"
            fontWeight="500"
            fill="var(--text)"
          >
            One designed protein
          </text>
        </g>

        {/* Connectors */}
        <path
          d="M200 110 C 280 110, 320 38, 420 38"
          stroke="var(--accent)"
          strokeWidth="1.4"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M200 110 L 420 110"
          stroke="var(--accent)"
          strokeWidth="1.4"
          fill="none"
          markerEnd="url(#arrow)"
        />
        <path
          d="M200 110 C 280 110, 320 182, 420 182"
          stroke="var(--accent)"
          strokeWidth="1.4"
          fill="none"
          markerEnd="url(#arrow)"
        />

        {/* Door nodes */}
        <DoorNode y={8} kicker="DOOR 01" title="License" detail="formulation IP" />
        <DoorNode y={80} kicker="DOOR 02" title="Sell ingredient" detail="B2B fermentation" />
        <DoorNode y={152} kicker="DOOR 03" title="Make food" detail="own-brand product" />
      </svg>
    </figure>
  );
}

function DoorNode({
  y,
  kicker,
  title,
  detail,
}: {
  y: number;
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <g>
      <rect
        x="430"
        y={y}
        width="270"
        height="60"
        rx="8"
        fill="var(--bg)"
        stroke="var(--border-strong)"
      />
      <text
        x="446"
        y={y + 22}
        fontFamily="var(--font-geist-mono), ui-monospace"
        fontSize="10"
        letterSpacing="2"
        fill="var(--accent)"
      >
        {kicker}
      </text>
      <text
        x="446"
        y={y + 42}
        fontFamily="var(--font-geist-sans), system-ui"
        fontSize="14"
        fontWeight="500"
        fill="var(--text)"
      >
        {title}
      </text>
      <text
        x="446"
        y={y + 56}
        fontFamily="var(--font-geist-sans), system-ui"
        fontSize="11"
        fill="var(--text-dim)"
      >
        {detail}
      </text>
    </g>
  );
}

function DoorEconomics() {
  const rows = [
    {
      door: "License",
      margin: "85 to 95%",
      capex: "Minimal",
      runway: "12 to 18 mo",
    },
    {
      door: "Ingredient",
      margin: "40 to 60%",
      capex: "Fermentation",
      runway: "18 to 30 mo",
    },
    {
      door: "Own brand",
      margin: "55 to 70% gross",
      capex: "Brand + retail",
      runway: "30 to 48 mo",
    },
  ];
  return (
    <div className="reveal-stagger my-2 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg)]">
      <div className="grid grid-cols-4 gap-px border-b border-[var(--border)] bg-[var(--border)] font-mono text-[10px] tracking-[0.18em] text-[var(--text-muted)] uppercase">
        <div className="bg-[var(--surface)] px-4 py-2.5">Door</div>
        <div className="bg-[var(--surface)] px-4 py-2.5">Gross margin</div>
        <div className="bg-[var(--surface)] px-4 py-2.5">Capex</div>
        <div className="bg-[var(--surface)] px-4 py-2.5">First revenue</div>
      </div>
      {rows.map((r) => (
        <div
          key={r.door}
          className="grid grid-cols-4 border-b border-[var(--border)] text-[14px] last:border-0"
        >
          <div className="px-4 py-3 text-[var(--text)]">{r.door}</div>
          <div className="px-4 py-3 font-mono text-[var(--accent)]">
            {r.margin}
          </div>
          <div className="px-4 py-3 text-[var(--text-dim)]">{r.capex}</div>
          <div className="px-4 py-3 font-mono text-[var(--text-dim)]">
            {r.runway}
          </div>
        </div>
      ))}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="reveal relative my-2 border-l-2 border-[var(--accent)] pl-6 text-[20px] leading-[1.55] tracking-[-0.005em] text-[var(--text)]">
      <span className="display-italic">{children}</span>
    </blockquote>
  );
}
