export function CtaFooter() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-[var(--border)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-dots opacity-60"
        />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10 px-6 py-28 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="reveal">
            <h2 className="text-balance text-3xl font-light leading-[1.05] tracking-[-0.025em] text-[var(--text)] sm:text-5xl lg:text-6xl">
              Manufacturing with us.
              <br />
              <span className="accent-text font-normal">Eating with us.</span>
              <br />
              Investing in us.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:founders@nullbites.com"
              className="button-primary inline-flex items-center gap-3 rounded-md bg-[var(--text)] px-6 py-4 text-[15px] font-medium text-[var(--bg)] hover:bg-[var(--accent)]"
            >
              founders@nullbites.com
              <span aria-hidden>→</span>
            </a>
            <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--text-muted)] uppercase">
              Typical reply in 24h · Bangalore + SFO
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 text-[13px] text-[var(--text-dim)] sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium text-[var(--text)]">
                Null Bites
              </span>
            </div>
            <p className="mt-4 leading-relaxed">
              A biocomputation company building nutrition products. For a
              future that can feed ten billion.
            </p>
          </div>
          <div>
            <p className="label mb-3">Company</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#science"
                  className="hover:text-[var(--text)] transition"
                >
                  Thesis
                </a>
              </li>
              <li>
                <a
                  href="#pipeline"
                  className="hover:text-[var(--text)] transition"
                >
                  Pipeline
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[var(--text)] transition"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label mb-3">Open</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/null-bites"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text)] transition"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/nullbites"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--text)] transition"
                >
                  X / Twitter ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label mb-3">Contact</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:founders@nullbites.com"
                  className="hover:text-[var(--text)] transition"
                >
                  founders@nullbites.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 font-mono text-[11px] tracking-[0.14em] text-[var(--text-muted)] uppercase sm:flex-row sm:items-center lg:px-10">
            <span>© {new Date().getFullYear()} Null Bites Research, Inc.</span>
            <span>Written by models · expressed by cells · eaten by you</span>
          </div>
        </div>
      </footer>
    </>
  );
}
