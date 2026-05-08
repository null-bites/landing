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
              Notes on the business model, the protein-design loop, and the
              parts of food science we are turning into product.
            </p>
            <div className="reveal mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent)] transition"
              >
                <span>All articles</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </header>

          <ul className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:col-span-7">
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
