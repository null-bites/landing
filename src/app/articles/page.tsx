import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Long-form notes from Null Bites — what a post-AGI food company looks like, how the design loop pays for itself, and what we are building toward.",
};

export default function ArticlesIndex() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <main className="relative mx-auto w-full max-w-[1440px] flex-1 border-x border-[var(--border)]">
        <div className="flex items-center justify-between border-y border-[var(--border)] bg-[var(--surface)]/60 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-10">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.22em] text-[var(--text-dim)] uppercase hover:text-[var(--text)] transition"
          >
            ← Home
          </Link>
          <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
            Articles
          </span>
        </div>

        <section className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-10">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 grid-dots opacity-50"
          />

          <header className="reveal mx-auto max-w-3xl">
            <p className="label">Field notes</p>
            <h1 className="mt-4 text-balance text-4xl font-light leading-[1.06] tracking-[-0.025em] text-[var(--text)] sm:text-6xl">
              Essays from the{" "}
              <span className="accent-text font-normal">
                <span className="display-italic">design</span> loop.
              </span>
            </h1>
            <p className="mt-6 text-[18px] leading-[1.6] text-[var(--text-muted)]">
              Long-form on what a post-AGI food company looks like, how the
              design loop pays for itself, and the future we are building
              toward. Updated as we ship.
            </p>
          </header>

          <ul className="reveal-stagger mx-auto mt-16 grid max-w-3xl gap-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group block rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6 transition hover:-translate-y-[2px] hover:border-[var(--accent)] hover:shadow-sm sm:p-8"
                >
                  <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
                    <span className="text-[var(--accent)]">{a.kicker}</span>
                    <span className="h-px w-6 bg-[var(--border-strong)]" />
                    <span>{a.date}</span>
                    <span className="h-px w-6 bg-[var(--border-strong)]" />
                    <span>{a.readingTime}</span>
                  </div>
                  <h2 className="mt-4 text-balance text-2xl font-normal leading-[1.15] tracking-[-0.015em] text-[var(--text)] group-hover:text-[var(--accent)] transition sm:text-[28px]">
                    {a.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[var(--text-dim)]">
                    {a.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-1 font-mono text-[12px] tracking-[0.16em] text-[var(--text-dim)] uppercase group-hover:text-[var(--accent)] transition">
                    Read
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
