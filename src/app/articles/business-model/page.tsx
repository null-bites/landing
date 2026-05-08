import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { BusinessModelBody } from "@/components/business-model";
import { getArticle } from "@/lib/articles";

const meta = getArticle("business-model")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
};

export default function BusinessModelPage() {
  return (
    <ArticleShell
      kicker={meta.kicker}
      date={meta.date}
      readingTime={meta.readingTime}
      title={
        <>
          How Null Bites{" "}
          <span className="accent-text font-normal">
            <span className="display-italic">makes</span> money.
          </span>
        </>
      }
      subtitle="First we license designed proteins and sell ingredients. Own-brand food comes later, after the molecule has earned the risk."
    >
      <BusinessModelBody />
    </ArticleShell>
  );
}
