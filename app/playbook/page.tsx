import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { PlaybookFormCta, TextMe } from "@/components/ctas";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.magnetName,
  description: "Free guide to bloodwork, cycle structure, side effect prevention and long term health for enhanced lifters.",
};

export default function PlaybookPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hp-pagehero">
          <h1>Learn how to run your cycle safely.</h1>
          <p className="hp-lede">
            {site.magnetName} is free. Bloodwork, cycle planning, side effect prevention, nutrition and training, in
            one guide from a coach who has done it with 200+ men.
          </p>
          <div className="hp-actions">
            <PlaybookFormCta />
          </div>
        </section>
        <section className="hp-section hp-playbook" id="get-playbook">
          <div className="hp-wrap hp-playbook__grid">
            <div>
              <h2 className="hp-h2">What's inside.</h2>
              <p className="hp-lede">Written for men who want to run it smart instead of copying a forum thread.</p>
              <ul className="hp-checks">
                {[
                  "Which bloodwork to order, and the markers that matter",
                  "How a smart cycle is structured, start to finish",
                  "Side effect prevention before you need it",
                  "Nutrition and training that make the protocol worth it",
                  "Protecting your long term health and fertility",
                ].map((line) => (
                  <li key={line}>
                    <CheckCircle aria-hidden size={20} weight="fill" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hp-embed hp-embed--form">
              <iframe
                allow="camera; microphone; autoplay; encrypted-media"
                src={site.playbookEmbed}
                title="Get the Handsome Enhancement Playbook"
              />
            </div>
          </div>
        </section>
        <section className="hp-section" id="apply">
          <div className="hp-wrap">
            <h2 className="hp-h2">Want me to run it with you? Apply here.</h2>
            <p className="hp-lede">
              Coaching is by application only. Fill this out, and if it's a fit you'll be able to book a call with me
              right after.
            </p>
            <div className="hp-embed">
              <iframe allow="camera; microphone; autoplay; encrypted-media" src={site.applyEmbed} title="Coaching application" />
            </div>
            <div className="hp-actions">
              <TextMe />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
