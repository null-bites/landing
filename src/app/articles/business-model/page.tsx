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
          How we plan to{" "}
          <span className="accent-text font-normal">
            <span className="display-italic">make</span> money.
          </span>
        </>
      }
      subtitle="Three doors out of the design loop: licensing, ingredient sales, own brand. The model that lets every dollar of revenue fund the engine that designs the next product."
    >
      <BusinessModelBody />
    </ArticleShell>
  );
}
