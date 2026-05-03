export function OpenScience() {
  return (
    <section className="relative border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:gap-16 sm:px-6 sm:py-32 lg:grid-cols-12 lg:px-10">
        <div className="reveal lg:col-span-5">
          <h2 className="text-balance text-3xl font-light leading-[1.1] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
            Open by{" "}
            <span className="accent-text font-normal">
              <span className="display-italic">default</span>.
            </span>
          </h2>
          <p className="mt-8 text-[17px] leading-[1.7] text-[var(--text-dim)]">
            Every sequence, score, and failed synthesis lands on GitHub
            within 48 hours. The science is public; the products are ours
            to ship.
          </p>
          <div className="mt-10">
            <a
              href="https://github.com/null-bites"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg)] px-5 py-3 text-[14px] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <GithubGlyph />
              github.com/null-bites
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="reveal lg:col-span-6 lg:col-start-7">
          <CommitStream />
        </div>
      </div>
    </section>
  );
}

function GithubGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.01 3.24 9.26 7.74 10.76.56.1.77-.25.77-.54v-1.9c-3.15.68-3.81-1.51-3.81-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.73 2.64 1.23 3.28.94.1-.73.39-1.23.71-1.51-2.51-.28-5.15-1.25-5.15-5.59 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.1-2.97 0 0 .95-.3 3.11 1.15.9-.25 1.88-.38 2.84-.39.97.01 1.94.13 2.85.39 2.16-1.46 3.11-1.15 3.11-1.15.61 1.54.22 2.69.11 2.97.72.79 1.16 1.81 1.16 3.03 0 4.35-2.65 5.31-5.17 5.59.4.35.76 1.02.76 2.07v3.07c0 .3.21.65.77.54 4.5-1.5 7.73-5.75 7.73-10.76C23.33 5.56 18.27.5 12 .5z" />
    </svg>
  );
}

function CommitStream() {
  const rows = [
    { t: "2m", hash: "7ab91f2", msg: "NB-IRON-07: dock score improved −11.3 → −12.1", tag: "design" },
    { t: "14m", hash: "e4c3a88", msg: "pipeline: self-critic caught over-confidence on fold #146", tag: "critic" },
    { t: "1h", hash: "c10b05d", msg: "NB-FIBRE-03: simulation @ shear rate 500s⁻¹ — stable", tag: "sim" },
    { t: "3h", hash: "0ff22a4", msg: "ingest: 17 new papers from NeurIPS bio-track", tag: "ingest" },
    { t: "6h", hash: "9ae8721", msg: "NB-GEL-02: Tm reduced 72 → 65°C after redesign", tag: "design" },
    { t: "9h", hash: "3d7c5a1", msg: "bench: gene synthesis order placed for NB-IRON-07", tag: "synth" },
    { t: "12h", hash: "b12fe09", msg: "dataset: OpenBio-Nutrition v0.3 pushed", tag: "data" },
  ];

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-sm">
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--text-dim)] uppercase">
            null-bites/pipeline · main
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          live feed
        </span>
      </div>
      <ul className="divide-y divide-[var(--border)]">
        {rows.map((r) => (
          <li
            key={r.hash}
            className="flex flex-col gap-1.5 px-4 py-3 font-mono text-[12px] leading-relaxed sm:grid sm:grid-cols-[auto_auto_1fr_auto] sm:items-baseline sm:gap-4 sm:text-[12.5px]"
          >
            <div className="flex items-center gap-3 sm:contents">
              <span className="text-[var(--text-muted)] tabular-nums shrink-0">
                {r.t.padStart(3, " ")} ago
              </span>
              <span className="text-[var(--accent)] shrink-0">{r.hash}</span>
              <span className="ml-auto rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] tracking-[0.1em] text-[var(--text-muted)] uppercase sm:order-last sm:ml-0">
                {r.tag}
              </span>
            </div>
            <p className="break-words text-[var(--text-dim)] sm:truncate">
              {r.msg}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
