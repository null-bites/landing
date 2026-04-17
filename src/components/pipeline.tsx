import { LoopDiagram } from "./loop-diagram";

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
          <div className="max-w-2xl">
            <p className="label mb-4">02 · The loop</p>
            <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
              A closed loop from{" "}
              <em className="rainbow-text not-italic font-normal">a paper</em>{" "}
              to{" "}
              <em className="rainbow-text not-italic font-normal">a bite</em>.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--text-dim)]">
            Every candidate, every score, every failed synthesis is written
            back to the system. The loop tightens every week.
          </p>
        </div>

        {/* Split layout: animated diagram + step list */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-last lg:order-first">
            <LoopDiagram />
          </div>

          <ol className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)] bg-[var(--bg)]">
            {steps.map((s) => (
              <li
                key={s.id}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 px-5 py-5"
              >
                <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-muted)]">
                  {s.id}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium tracking-tight text-[var(--text)]">
                    {s.label}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--text-dim)]">
                    {s.detail}
                  </p>
                </div>
                <span className="hidden font-mono text-[10px] tracking-[0.16em] text-[var(--accent)] opacity-80 sm:inline uppercase whitespace-nowrap">
                  {s.tech}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[var(--text-dim)]">
          <span className="flex items-center gap-2">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)]" />
            <span className="font-mono">pipeline: running</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-amber)]" />
            <span className="font-mono">designs/hour: 12–18</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)]" />
            <span className="font-mono">last cycle: 2 min ago</span>
          </span>
        </div>
      </div>
    </section>
  );
}
