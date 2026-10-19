import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  About,
  Brotherhood,
  Closing,
  CnnFeature,
  Faq,
  FitCheck,
  Hero,
  Method,
  PlaybookTeaser,
  Results,
  Testimonials,
  WhatItLooksLike,
  WhatWeDo,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Method />
        <WhatItLooksLike />
        <Results />
        <Testimonials />
        <CnnFeature />
        <Brotherhood />
        <About />
        <FitCheck />
        <Faq />
        <PlaybookTeaser />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
