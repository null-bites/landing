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
          A food company built for{" "}
          <span className="accent-text font-normal">
            the world that comes{" "}
            <span className="display-italic">after</span> AGI.
          </span>
        </>
      }
      subtitle="Why Null Bites exists, what a post-AGI food company actually looks like, and the bet we are making while the science is still wide open."
    >
      <AfterAgiBody />
    </ArticleShell>
  );
}
