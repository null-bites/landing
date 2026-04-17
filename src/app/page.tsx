import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Thesis } from "@/components/thesis";
import { Pipeline } from "@/components/pipeline";
import { Designs } from "@/components/designs";
import { OpenScience } from "@/components/open-science";
import { CtaFooter } from "@/components/cta-footer";
import { SectionHeader } from "@/components/section-header";

const TOTAL = 6;

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative mx-auto w-full max-w-[1440px] flex-1 border-x border-[var(--border)]">
        <SectionHeader name="What we build" current={1} total={TOTAL} />
        <Hero />

        <SectionHeader name="The thesis" current={2} total={TOTAL} />
        <Thesis />

        <SectionHeader name="The loop" current={3} total={TOTAL} />
        <Pipeline />

        <SectionHeader name="The products" current={4} total={TOTAL} />
        <Designs />

        <SectionHeader name="Open by default" current={5} total={TOTAL} />
        <OpenScience />

        <SectionHeader name="Get in touch" current={6} total={TOTAL} />
        <CtaFooter />
      </main>
    </>
  );
}
