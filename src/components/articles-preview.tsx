import Link from "next/link";
import { articles } from "@/lib/articles";

export function ArticlesPreview() {
  return (
    <section
      id="essay"
      className="relative border-y border-[var(--border)] bg-[var(--surface)]/60"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <header className="lg:col-span-5">
            <p className="reveal label">Field notes</p>
            <h2 className="reveal mt-4 text-balance text-3xl font-light leading-[1.08] tracking-[-0.02em] text-[var(--text)] sm:text-5xl">
              Essays from the{" "}
              <span className="accent-text font-normal">
                <span className="display-italic">design</span> loop.
              </span>
            </h2>
            <p className="reveal mt-6 max-w-md text-[16px] leading-relaxed text-[var(--text-dim)]">
              Long-form on what a post-AGI food company actually looks like,
              how the design loop pays for itself, and what we are building
              toward. Hover the link for the one-line version.
            </p>
            <div className="reveal mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent)] transition"
              >
                <span>All articles</span>
                <span aria-hidden>→</span>
              </Link>
              <VisionLink />
            </div>
          </header>

          <ul className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {articles.map((a) => (
              <li key={a.slug}>
                <ArticleCard
                  href={`/articles/${a.slug}`}
                  kicker={a.kicker}
                  title={a.title}
                  excerpt={a.excerpt}
                  date={a.date}
                  readingTime={a.readingTime}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  href,
  kicker,
  title,
  excerpt,
  date,
  readingTime,
}: {
  href: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}) {
  return (
    <Link
      href={href}
      className="article-card group flex h-full flex-col rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6 transition hover:-translate-y-[2px] hover:border-[var(--accent)] hover:shadow-sm"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
        <span className="text-[var(--accent)]">{kicker}</span>
        <span className="h-px w-6 bg-[var(--border-strong)]" />
        <span>{date}</span>
      </div>
      <h3 className="mt-4 text-balance text-[20px] font-normal leading-[1.2] tracking-[-0.01em] text-[var(--text)] group-hover:text-[var(--accent)] transition">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.65] text-[var(--text-dim)]">
        {excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between pt-6 font-mono text-[11px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
        <span>{readingTime}</span>
        <span className="inline-flex items-center gap-1 text-[var(--text-dim)] group-hover:text-[var(--accent)] transition">
          Read
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/* Hover-reveal vision: a small inline link that pops a poetic one-liner.
   Pure CSS hover (group-hover) so it works on touch via tap-and-hold and
   stays keyboard-focusable. */
function VisionLink() {
  return (
    <span className="vision-link group relative inline-flex items-center gap-1 cursor-help text-[var(--text-dim)] hover:text-[var(--accent)] focus-within:text-[var(--accent)] transition">
      <span className="underline decoration-dotted underline-offset-4">
        the 2040 kitchen
      </span>
      <span aria-hidden className="text-[var(--text-muted)] group-hover:text-[var(--accent)]">
        ✦
      </span>
      <span
        role="tooltip"
        className="vision-pop pointer-events-none absolute left-1/2 top-full z-30 mt-3 w-[280px] -translate-x-1/2 translate-y-1 rounded-lg border border-[var(--border-strong)] bg-[var(--bg)] p-4 text-left text-[13px] leading-[1.55] text-[var(--text-dim)] opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <span className="block font-mono text-[10px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
          Vision
        </span>
        <span className="mt-2 block text-[var(--text)]">
          A child in 2040 picks up a glass of milk, and every gram of it is
          a deliberate choice about{" "}
          <span className="display-italic accent-text">
            nutrition, sustainability, and human longevity
          </span>
          .
        </span>
      </span>
    </span>
  );
}
