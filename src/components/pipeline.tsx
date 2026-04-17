export function Pipeline() {
  const steps: Array<{
    id: string;
    label: string;
    tech: string;
    detail: string;
  }> = [
    {
      id: "01",
      label: "Ingest",
      tech: "LLM · Autonomous reader",
      detail:
        "1,400+ papers parsed into a living corpus of functional motifs, substrate bindings, and known dead-ends.",
    },
    {
      id: "02",
      label: "Design",
      tech: "ProteinMPNN · RFdiffusion",
      detail:
        "Novel amino-acid sequences generated against a target fold and a bundle of functional constraints.",
    },
    {
      id: "03",
      label: "Fold + score",
      tech: "ESMFold · AF-Multimer",
      detail:
        "Every sequence is folded in silico, scored on stability, manufacturability, and nutritional fit.",
    },
    {
      id: "04",
      label: "Rank",
      tech: "Self-critique loop",
      detail:
        "146 self-correction cycles: the pipeline re-reads its own output and throws out anything that looks too optimistic.",
    },
    {
      id: "05",
      label: "Synthesize",
      tech: "Gene synthesis · E.coli",
      detail:
        "Top candidates are ordered as DNA, expressed in bacteria, purified, and handed to the bench.",
    },
    {
      id: "06",
      label: "Eat",
      tech: "Wet lab · Sensory panel",
      detail:
        "The only benchmark that matters: a human picks up a product made from a protein the AI wrote, and takes a bite.",
    },
  ];

  return (
    <section
      id="pipeline"
      className="relative border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label mb-4">02 · The loop</p>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.02em] text-[var(--text)] sm:text-4xl">
              A closed loop from{" "}
              <span className="text-[var(--accent)]">a paper</span> to{" "}
              <span className="text-[var(--accent)]">a bite</span>.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--text-dim)]">
            Every candidate, every score, every failed synthesis is written
            back to the system. The loop tightens every week.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.id}
              className="group relative flex flex-col gap-4 bg-[var(--surface-2)] p-6 transition hover:bg-[var(--surface)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] text-[var(--text-muted)]">
                  {s.id}
                </span>
                <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--accent)] opacity-70 uppercase">
                  {s.tech}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-[var(--text)]">
                {s.label}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--text-dim)]">
                {s.detail}
              </p>
              <span
                aria-hidden
                className="absolute right-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[var(--text-dim)]">
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono">pipeline: running</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--iron)]" />
            <span className="font-mono">designs/hour: 12–18</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--cobalt)]" />
            <span className="font-mono">last cycle: 2 min ago</span>
          </span>
        </div>
      </div>
    </section>
  );
}
