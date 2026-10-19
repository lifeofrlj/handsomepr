import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import {
  About,
  Brotherhood,
  Closing,
  CnnFeature,
  Faq,
  Hero,
  Method,
  NextLevel,
  Results,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Results />
        <NextLevel />
        <Method />
        <Brotherhood />
        <Testimonials />
        <CnnFeature />
        <About />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
