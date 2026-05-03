export function AfterAgiBody() {
  return (
    <div className="reveal-stagger space-y-7">
      <p>
        We started Null Bites in 2026 because the same protein-design models
        that are now reshaping pharma can reshape what we eat, and almost no
        one is building a food company on top of them. Pharma absorbed
        roughly the entire AlphaFold dividend, which meant the largest leap
        in molecular design since recombinant DNA went straight into the
        drug stack and skipped the dinner plate. The{" "}
        <span className="text-[var(--text)]">post-AGI food company</span> is
        the one built to close that gap, and we are closing it now, while
        the underlying science is still wide open and the moats have not yet
        been drawn.
      </p>

      <p>
        A post-AGI food company looks structurally different from a
        traditional CPG brand, because the binding constraint is no longer
        sourcing or formulation but the design of the ingredients
        themselves. The old loop took a year of bench work for a single
        protein candidate, and the new loop takes a single afternoon for
        thousands of candidates inside a simulator that has internalised
        most of what biology has learned about folding. We treat every food
        molecule as an object that can be written from scratch, scored
        against real constraints, and re-written until the candidate clears
        the bench. The company that wins this loop is the one that runs it
        most often, on the broadest set of nutrients, with the tightest
        feedback from real production.
      </p>

      <PullQuote>
        The bottleneck moved from the lab bench to the design loop, and that
        is the layer we are building the company around.
      </PullQuote>

      <p>
        Food is the largest, oldest, and least-rewritten layer of human
        infrastructure, and that combination is exactly what the new tools
        are good at. Every property a person actually cares about (texture,
        satiety, recovery, gut response, micronutrient density) traces back
        to a small number of proteins, and each of those proteins is now a
        designable object. We pick the proteins that move the most weight
        per gram, including myosin for meat texture, ovalbumin for set,
        casein for stretch, and lactoferrin for iron uptake, and we rebuild
        them around the goals a modern body and a modern planet actually
        need.
      </p>

      <p>
        We publish every sequence, every dock score, and every failed
        synthesis, because a post-AGI food company should compete on
        execution rather than secrecy. Pharma kept its science private and
        its failures even more private, and that posture is wrong for an
        industry that feeds nine billion people three times a day. Our
        designs are free for any lab, any cooperative, and any country to
        fork, while the moat we are building sits in fermentation,
        manufacturing, brand, and distribution, where execution actually
        compounds and where the upside is large enough to fund the next
        round of design.
      </p>

      <p>
        We expect to be wrong about specifics, in the same way every early
        bet on a new computational substrate has been wrong about specifics,
        and we are building the company so that being wrong cheaply and
        quickly is part of the operating loop. The future we are working
        toward is one where a child in 2040 picks up a piece of meat, a
        glass of milk, or a scoop of protein, and every gram of it is a
        deliberate choice about{" "}
        <span className="text-[var(--text)]">
          nutrition, sustainability, and human longevity
        </span>
        . We are designing the proteins that future eats, in public, today.
      </p>

      <CriteriaPanel />
    </div>
  );
}

function CriteriaPanel() {
  return (
    <div className="reveal-stagger mt-12 grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
      <Criterion
        kicker="Criterion 01"
        title="Designs every ingredient"
        detail="Sequence-level control of the molecules that carry the texture, taste, and nutrition. Not blends of what already exists."
      />
      <Criterion
        kicker="Criterion 02"
        title="Closes the loop in software"
        detail="Read papers, generate candidates, simulate, score, iterate. Each pass costs a coffee, not a quarter."
      />
      <Criterion
        kicker="Criterion 03"
        title="Ships product, opens science"
        detail="Margin lives in fermentation, brand, and distribution. The science is public so the field moves with us."
      />
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

function Criterion({
  kicker,
  title,
  detail,
}: {
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="bg-[var(--bg)] p-6">
      <p className="label">{kicker}</p>
      <p className="mt-3 text-[17px] font-normal leading-snug text-[var(--text)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
        {detail}
      </p>
    </div>
  );
}
