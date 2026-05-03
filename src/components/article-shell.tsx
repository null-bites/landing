import Link from "next/link";
import { Nav } from "@/components/nav";
import { ScrollReveal } from "@/components/scroll-reveal";

type Props = {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  date: string;
  readingTime: string;
  children: React.ReactNode;
};

export function ArticleShell({
  kicker,
  title,
  subtitle,
  date,
  readingTime,
  children,
}: Props) {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <main className="relative mx-auto w-full max-w-[1440px] flex-1 border-x border-[var(--border)]">
        <div className="flex items-center justify-between border-y border-[var(--border)] bg-[var(--surface)]/60 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-10">
          <Link
            href="/articles"
            className="font-mono text-[11px] tracking-[0.22em] text-[var(--text-dim)] uppercase hover:text-[var(--text)] transition"
          >
            ← Articles
          </Link>
          <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
            {kicker}
          </span>
        </div>

        <article className="relative pb-24 pt-16 sm:pb-32 sm:pt-24">
          {/* Dot grid backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 grid-dots opacity-50"
          />

          <header className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10">
            <div className="reveal flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-[var(--text-muted)] uppercase">
              <span>{kicker}</span>
              <span className="h-px w-8 bg-[var(--border-strong)]" />
              <span>{date}</span>
              <span className="h-px w-8 bg-[var(--border-strong)]" />
              <span>{readingTime}</span>
            </div>

            <h1 className="reveal mt-6 text-balance text-[34px] font-light leading-[1.06] tracking-[-0.025em] text-[var(--text)] sm:text-[52px]">
              {title}
            </h1>

            {subtitle && (
              <p className="reveal mt-6 text-[18px] leading-[1.6] text-[var(--text-muted)] sm:text-[20px]">
                {subtitle}
              </p>
            )}

            <div className="reveal mt-8 flex items-center gap-3 border-t border-[var(--border)] pt-6 font-mono text-[11px] tracking-[0.18em] text-[var(--text-muted)] uppercase">
              <span>Null Bites</span>
              <span>·</span>
              <span>{date}</span>
            </div>
          </header>

          <div className="prose-article mx-auto mt-14 max-w-[680px] px-5 text-[17px] leading-[1.78] text-[var(--text-dim)] sm:mt-20 sm:px-6 sm:text-[18px] lg:px-10">
            {children}
          </div>

          <footer className="mx-auto mt-20 max-w-3xl border-t border-[var(--border)] px-5 pt-8 sm:px-6 lg:px-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.18em] text-[var(--text-dim)] uppercase hover:text-[var(--accent)] transition"
            >
              <span>←</span> All articles
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
