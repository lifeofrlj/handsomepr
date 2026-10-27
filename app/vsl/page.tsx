import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  Brotherhood,
  Closing,
  CnnFeature,
  Method,
  Results,
  Testimonials,
  VslHero,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Build A Badass Physique",
  description: "Watch how Team Handsome PR helps men look, feel and become badass, then apply for coaching.",
  robots: { index: false, follow: false },
};

export default function VslPage() {
  return (
    <>
      <Nav />
      <main>
        <VslHero />
        <Results />
        <Method />
        <Brotherhood />
        <Testimonials />
        <CnnFeature />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
