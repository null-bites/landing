import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Thesis } from "@/components/thesis";
import { Pipeline } from "@/components/pipeline";
import { Designs } from "@/components/designs";
import { OpenScience } from "@/components/open-science";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Thesis />
        <Pipeline />
        <Designs />
        <OpenScience />
      </main>
      <CtaFooter />
    </>
  );
}
