import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Thesis } from "@/components/thesis";
import { PostAgi } from "@/components/post-agi";
import { Pipeline } from "@/components/pipeline";
import { Designs } from "@/components/designs";
import { OpenScience } from "@/components/open-science";
import { CtaFooter } from "@/components/cta-footer";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";

const TOTAL = 7;

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

        <SectionHeader name="Essay · After AGI" current={3} total={TOTAL} />
        <PostAgi />

        <SectionHeader name="The loop" current={4} total={TOTAL} />
        <Pipeline />

        <SectionHeader name="The products" current={5} total={TOTAL} />
        <Designs />

        <SectionHeader name="Open by default" current={6} total={TOTAL} />
        <OpenScience />

        <SectionHeader name="Get in touch" current={7} total={TOTAL} />
        <CtaFooter />
      </main>
    </>
  );
}
