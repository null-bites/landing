import { ScientistStory } from "./scientist-story";

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
      tech: "LLM · autonomous reader",
      detail:
        "1,400+ papers parsed into a living corpus of functional motifs, substrate bindings, and known dead-ends. The reader never sleeps and never forgets a result.",
    },
    {
      id: "02",
      label: "Design",
      tech: "ProteinMPNN · RFdiffusion",
      detail:
        "Novel amino-acid sequences generated against a target fold with a bundle of functional constraints: heat stability, water solubility, fibre alignment, binding pocket geometry.",
    },
    {
      id: "03",
      label: "Fold and score",
      tech: "ESMFold · AF-Multimer",
      detail:
        "Every sequence is folded in silico, then scored on stability, manufacturability, and nutritional fit. The pipeline throws out anything without a clear physical basis.",
    },
    {
      id: "04",
      label: "Self-critique",
      tech: "Re-read · re-rank · drop",
      detail:
        "146 cycles of self-correction. The system reads its own output and drops candidates that look too confident. Designs that survive cycle 140+ get to the bench.",
    },
    {
      id: "05",
      label: "Bench",
      tech: "Gene synthesis · E.coli",
      detail:
        "Top candidates are ordered as DNA from a synthesis vendor, expressed in bacteria, purified, and handed to the formulation team.",
    },
    {
      id: "06",
      label: "Product",
      tech: "Formulate · sensory · ship",
      detail:
        "The ingredient becomes food. Sensory panels with real people. If it passes, it ships. If it fails, the result goes back to the top of the loop.",
    },
  ];

  return (
    <section
      id="pipeline"
      className="relative border-y border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="reveal max-w-2xl">
            <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
              Meet the{" "}
              <span className="accent-text font-normal">
                <span className="display-italic">autonomous</span> scientist.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--text-dim)]">
            It runs experiments, scores its own results, and only the designs
            a human would trust make it to the bench. Everything that follows
            ends in a thing you can eat.
          </p>
        </div>

        {/* Narrative storyboard */}
        <ScientistStory />

        {/* Accordion detail */}
        <div className="reveal mt-14 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
            <span className="label">Under the hood</span>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              click to expand
            </span>
          </div>
          <ul className="divide-y divide-[var(--border)]">
            {steps.map((s) => (
              <li key={s.id}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition hover:bg-[var(--surface)]">
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[12px] tracking-[0.14em] text-[var(--text-muted)]">
                        {s.id}
                      </span>
                      <span className="text-[16px] font-medium tracking-tight text-[var(--text)]">
                        {s.label}
                      </span>
                    </span>
                    <span className="flex items-center gap-5">
                      <span className="hidden font-mono text-[10px] tracking-[0.14em] text-[var(--accent)] sm:inline uppercase">
                        {s.tech}
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        aria-hidden
                        className="text-[var(--text-muted)] transition-transform duration-200 group-open:rotate-45"
                      >
                        <path
                          d="M 7 2 L 7 12 M 2 7 L 12 7"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pl-[56px]">
                    <p className="max-w-3xl text-[14px] leading-[1.7] text-[var(--text-dim)]">
                      {s.detail}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
