export function Thesis() {
  return (
    <section
      id="science"
      className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="label mb-4">01 · The idea</p>
          <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
            AlphaFold cracked protein structure in 2020. Billions went to
            pharma.{" "}
            <em className="rainbow-text not-italic font-normal">
              Nutrition got nothing.
            </em>
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-[1.7] text-[var(--text-dim)]">
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
            Five designs are ready for wet-lab testing. They target
            plant-based iron binding, protein texture, and fibrous structures
            that don&apos;t exist in any organism today. The target: a complete
            protein product you can take a bite out of.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
        <Stat
          kicker="Ignored for"
          value="5 years"
          color="var(--accent-violet)"
          detail="Since AlphaFold 2, every computational biology dollar chased therapeutics."
        />
        <Stat
          kicker="Agriculture uses"
          value="70%"
          color="var(--accent-mint)"
          detail="…of global freshwater. And still can&rsquo;t scale to 10B people."
        />
        <Stat
          kicker="Teams building food from first principles"
          value="1"
          color="var(--accent-blue)"
          detail="We&rsquo;re the only one pointing these tools at what you eat."
        />
      </div>
    </section>
  );
}

function Stat({
  kicker,
  value,
  detail,
  color,
}: {
  kicker: string;
  value: string;
  detail: string;
  color: string;
}) {
  return (
    <div className="bg-[var(--bg)] p-8">
      <p className="label">{kicker}</p>
      <p
        className="mt-3 font-mono text-4xl font-light tracking-tight"
        style={{ color }}
      >
        {value}
      </p>
      <p
        className="mt-4 text-sm leading-relaxed text-[var(--text-dim)]"
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  );
}
