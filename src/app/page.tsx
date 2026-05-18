import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Thesis } from "@/components/thesis";
import { ArticlesPreview } from "@/components/articles-preview";
import { Pipeline } from "@/components/pipeline";
import { Designs } from "@/components/designs";

import { CtaFooter } from "@/components/cta-footer";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";

const TOTAL = 6;

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <main className="relative mx-auto w-full max-w-[1440px] flex-1 border-x border-[var(--border)]">
        <SectionHeader name="What we build" current={1} total={TOTAL} />
        <Hero />

        <SectionHeader name="The thesis" current={2} total={TOTAL} />
        <Thesis />

        <SectionHeader name="Field notes" current={3} total={TOTAL} />
        <ArticlesPreview />

        <SectionHeader name="The loop" current={4} total={TOTAL} />
        <Pipeline />

        <SectionHeader name="The products" current={5} total={TOTAL} />
        <Designs />

        <SectionHeader name="Get in touch" current={6} total={TOTAL} />
        <CtaFooter />
      </main>
    </>
  );
}
