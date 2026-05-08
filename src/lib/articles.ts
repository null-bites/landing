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
    slug: "business-model",
    kicker: "Essay · 01",
    title: "How Null Bites makes money.",
    excerpt:
      "First we license designed proteins and sell ingredients. Own-brand food comes later, after the molecule has earned the risk.",
    date: "May 2026",
    readingTime: "5 min read",
  },
  {
    slug: "after-agi",
    kicker: "Essay · 02",
    title: "Why design food proteins at all.",
    excerpt:
      "Protein design left the lab faster than food noticed. This is the case for pointing the stack at meat, dairy, and everyday nutrition.",
    date: "May 2026",
    readingTime: "4 min read",
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}
