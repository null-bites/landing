export function BusinessModelBody() {
  return (
    <div className="reveal-stagger space-y-7">
      <p>
        A protein-design company that ships only papers is a research lab,
        and the world is full of those. Null Bites is built to be a company
        that sells, and the way it sells follows directly from the shape of
        the design loop. Once a candidate clears simulation and the bench,
        the same molecule can leave the building through three different
        doors, each with its own margin profile and its own speed of
        compounding. We are building the company so that all three doors
        are open from the first product onward.
      </p>

      <ThreeDoors />

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 01 · Licensing the formulation.
      </h2>
      <p>
        The first door is licensing. A formulation that has cleared
        simulation, fermentation, and a small bench panel becomes a piece
        of intellectual property that an existing CPG manufacturer can pay
        to use, the way a pharma company licenses a small-molecule asset to
        a generics maker. We run the design and the validation, and a
        partner with a continental supply chain runs the distribution.
        License revenue carries the highest gross margin and the lowest
        capital requirement in the model, and it is the most defensible
        line against any one product flopping in the market.
      </p>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 02 · Selling the ingredient.
      </h2>
      <p>
        The second door is selling the ingredient itself, where Null Bites
        operates the fermentation and ships the protein as a B2B input to
        brands that want to formulate their own products around it. Selling
        the ingredient lets us capture the manufacturing margin in addition
        to the design margin, and it gives us a long ramp of operational
        learning before we ever face a consumer shelf. The clean precedent
        here is the way Impossible Foods originally sold heme as an
        ingredient before becoming a brand, and it is the cheapest way to
        build manufacturing competence on someone else&apos;s customer
        acquisition cost.
      </p>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        Door 03 · Making the food.
      </h2>
      <p>
        The third door is the one most people picture when they hear food
        company, where Null Bites makes finished products under its own
        brand and sells them through retail and DTC. Own-brand carries the
        highest absolute revenue per gram and the highest brand value, while
        also costing the most in marketing, and it is the door we will walk
        through last and most carefully. The first own-brand products will
        be ones where the underlying protein is so much better than the
        legacy protein that the marketing story writes itself, including a
        recovery shake whose protein folds for human absorption, and a
        cheese whose casein analog actually melts on a plant-based pizza.
      </p>

      <PullQuote>
        Every dollar of revenue should feed back into the engine that
        designs the next generation of food.
      </PullQuote>

      <h2 className="pt-6 text-[22px] font-normal leading-snug tracking-[-0.01em] text-[var(--text)] sm:text-[26px]">
        How the three doors compound.
      </h2>
      <p>
        The model that makes the loop pay for itself is one where licensing
        and ingredient revenue fund the design platform, the design platform
        produces the rare candidates that justify a brand, and the brand
        pulls the next wave of licensing partners back to us. We are
        deliberately staging the three doors so that each one earns the
        right to fund the next, and so that a single product is never the
        company&apos;s only path to revenue. The shape of the cash flow is
        a research-margin ramp first, a manufacturing-margin ramp second,
        and a brand-margin ramp third, with the design pipeline running
        underneath all three the entire time.
      </p>

      <DoorEconomics />

      <p>
        We expect the first license deal to close inside the next twelve to
        eighteen months, the first ingredient sales inside the second year,
        and the first own-brand product on shelves inside the third. Across
        the next ten years we are building the only company in food where
        every dollar of revenue compounds back into the engine that designs
        the next generation of food, and the result is{" "}
        <span className="text-[var(--text)]">
          more nutritious products, lower-impact production, and a category
          that finally moves at the speed of software
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
      margin: "85–95%",
      capex: "Minimal",
      runway: "12–18 mo",
    },
    {
      door: "Ingredient",
      margin: "40–60%",
      capex: "Fermentation",
      runway: "18–30 mo",
    },
    {
      door: "Own brand",
      margin: "55–70% gross",
      capex: "Brand + retail",
      runway: "30–48 mo",
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
