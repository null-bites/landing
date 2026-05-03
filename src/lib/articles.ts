export type ArticleMeta = {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const articles: ArticleMeta[] = [
  {
    slug: "after-agi",
    kicker: "Essay · 01",
    title: "A food company built for the world that comes after AGI.",
    excerpt:
      "Why Null Bites exists, what a post-AGI food company actually looks like, and the bet we are making while the science is still wide open.",
    date: "May 2026",
    readingTime: "4 min read",
  },
  {
    slug: "business-model",
    kicker: "Essay · 02",
    title: "How we plan to make money.",
    excerpt:
      "Three doors out of the design loop: licensing, ingredient sales, own brand. The model that lets every dollar of revenue fund the engine that designs the next product.",
    date: "May 2026",
    readingTime: "5 min read",
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}
