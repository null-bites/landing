import Link from "next/link";

export function Nav() {
  return (
    <nav className="pointer-events-auto fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(7,8,10,0.6)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent-glow)]"
          />
          <span className="text-[15px] font-medium tracking-tight text-[var(--text)]">
            Null Bites
          </span>
          <span className="label ml-3 hidden sm:inline">v0.1 · live</span>
        </Link>
        <div className="flex items-center gap-6 text-[13px] text-[var(--text-dim)]">
          <Link href="#science" className="hover:text-[var(--text)] transition">
            Science
          </Link>
          <Link href="#pipeline" className="hover:text-[var(--text)] transition">
            Pipeline
          </Link>
          <Link href="#designs" className="hover:text-[var(--text)] transition">
            Designs
          </Link>
          <a
            href="https://github.com/null-bites"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:text-[var(--text)] transition"
          >
            GitHub ↗
          </a>
          <a
            href="mailto:founders@nullbites.com"
            className="rounded-md border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-[var(--text)] hover:border-[var(--accent-dim)] hover:text-[var(--accent)] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
