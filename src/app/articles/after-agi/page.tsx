import type { Metadata } from "next";
import { ArticleShell } from "@/components/article-shell";
import { AfterAgiBody } from "@/components/post-agi";
import { getArticle } from "@/lib/articles";

const meta = getArticle("after-agi")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
};

export default function AfterAgiPage() {
  return (
    <ArticleShell
      kicker={meta.kicker}
      date={meta.date}
      readingTime={meta.readingTime}
      title={
        <>
          Why design food{" "}
          <span className="accent-text font-normal">
            <span className="display-italic">proteins</span> at all.
          </span>
        </>
      }
      subtitle="Protein design left the lab faster than food noticed. We are pointing the stack at meat, dairy, and everyday nutrition."
    >
      <AfterAgiBody />
    </ArticleShell>
  );
}
