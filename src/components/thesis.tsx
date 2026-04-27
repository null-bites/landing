export function Thesis() {
  return (
    <section
      id="science"
      className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-32 lg:px-10"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="reveal text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
            AlphaFold cracked protein structure in 2020. Billions went to
            pharma.{" "}
            <span className="accent-text font-normal">
              Nutrition got <span className="display-italic">nothing.</span>
            </span>
          </h2>
        </div>

        <div className="reveal-stagger lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-[1.7] text-[var(--text-dim)]">
          <p>
            Nutrition <span className="text-[var(--text)]">is</span> protein
            engineering. Meat texture comes from myosin and collagen. Eggs set
            because of ovalbumin. Cheese stretches because of casein. Every
            property you care about in food traces back to the shape and
            behaviour of a specific protein.
          </p>
          <p>
            The tools that design drug molecules can design food molecules.{" "}
            <span className="text-[var(--text)]">
              The infrastructure to do it at scale exists because we built it.
            </span>{" "}
            ProteinMPNN and ESMFold, stitched into an autonomous loop that
            reads papers, generates sequences, runs simulations, scores every
            candidate against real constraints, and iterates on its own.
          </p>
          <p>
            Our designs don&apos;t stop at a .pdb file. Each top candidate
            goes to the bench, into a fermenter, and out the other side as an
            ingredient formulated into a{" "}
            <span className="text-[var(--text)]">real product</span>.
            Performance, recovery, fortification, gut health, plant-based
            whole foods. The benchmark is simple: you pick it up, you bite
            into it.
          </p>
        </div>
      </div>

      <div className="reveal-stagger mt-16 grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
        <Stat
          kicker="Ignored for"
          value="5 years"
          detail="Since AlphaFold 2, every computational biology dollar chased therapeutics."
        />
        <Stat
          kicker="Agriculture uses"
          value="70%"
          detail="…of global freshwater. And still can&rsquo;t scale to 10B people."
        />
      </div>
    </section>
  );
}

function Stat({
  kicker,
  value,
  detail,
}: {
  kicker: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="bg-[var(--bg)] p-8">
      <p className="label">{kicker}</p>
      <p className="mt-3 font-mono text-4xl font-light tracking-tight text-[var(--accent)]">
        {value}
      </p>
      <p
        className="mt-4 text-sm leading-relaxed text-[var(--text-dim)]"
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  );
}
