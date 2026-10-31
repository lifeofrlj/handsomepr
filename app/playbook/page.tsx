import type { Metadata } from "next";
import { ChatCircleText, CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { ApplyCta, CheatSheetCta, PlaybookCardCta, PlaybookFormCta } from "@/components/ctas";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";
import { VslPlayer } from "@/components/vsl-player";

export const metadata: Metadata = {
  title: site.magnetName,
  description: "Free guide to bloodwork, cycle structure, side effect prevention and long term health for enhanced lifters.",
};

const playbookInside = [
  "Which bloodwork to order, and the markers that matter",
  "How a smart cycle is structured, start to finish",
  "Side effect prevention before you need it",
  "Nutrition and training that make the protocol worth it",
  "Protecting your long term health and fertility",
];

const cheatInside = [
  "Peptides, testosterone and the main compounds at a glance",
  "What each one does, and what it doesn't",
  "Where beginners go wrong, and how to avoid it",
  "A quick reference you'll come back to before every decision",
];

export default function PlaybookPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hp-pagehero hp-pagehero--photo">
          <img alt="" className="hp-pagehero__bg" src="/assets/ryan-hero.png" />
          <h1>
            Learn how to run your <em className="hp-accent">cycle</em> safely.
          </h1>
          <p className="hp-lede">
            {site.magnetName} is <mark className="hl">free</mark>. Bloodwork, cycle planning, side effect prevention,
            nutrition and training, in one guide from a coach who has done it with{" "}
            <mark className="hl">250+ men</mark>.
          </p>
          <div className="hp-wrap hp-banner">
            <div className="hp-banner__cell">
              <h2 className="hp-h2 hp-h2--sm">Get the playbook</h2>
              <PlaybookFormCta />
            </div>
            <div className="hp-banner__cell">
              <a className="hp-banner__phone" href={site.smsHref}>
                {site.phoneDisplay}
              </a>
              <p className="hp-banner__q">Any questions regarding your cycle?</p>
              <a className="hp-banner__text" href={site.smsHref}>
                <ChatCircleText aria-hidden size={18} weight="bold" />
                Text me
              </a>
            </div>
          </div>
        </section>

        <section className="hp-section" id="watch">
          <div className="hp-wrap">
            <VslPlayer className="hp-vsl--flush" title="Handsome PR coaching" videoId={site.vslVideoId} />
            <div className="hp-actions">
              <ApplyCta label="Apply here" />
            </div>
          </div>
        </section>

        <section className="hp-section hp-playbook" id="guides">
          <div className="hp-wrap hp-cards">
            <article className="hp-card">
              <h2 className="hp-h2 hp-h2--sm">
                Get my <em className="hp-accent">free</em> enhancement playbook
              </h2>
              <p className="hp-lede">
                Bloodwork, cycle structure, side effect prevention, nutrition, training and long term health. In your
                inbox in seconds.
              </p>
              <PlaybookCardCta />
              <img
                alt="The Handsome Enhancement Playbook ebook"
                className="hp-card__mock"
                height={883}
                loading="lazy"
                src="/assets/playbook-mockup.webp"
                width={1400}
              />
              <ul className="hp-checks">
                {playbookInside.map((line) => (
                  <li key={line}>
                    <CheckCircle aria-hidden size={20} weight="fill" />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
            <article className="hp-card">
              <h2 className="hp-h2 hp-h2--sm">
                Get my <em className="hp-accent">free</em> enhancement cheat sheet
              </h2>
              <p className="hp-lede">
                The quick reference to peptides, testosterone and the compounds used in bodybuilding, all on a few
                pages.
              </p>
              <CheatSheetCta />
              <img
                alt="The Enhancement Cheat Sheet ebook"
                className="hp-card__mock"
                height={883}
                loading="lazy"
                src="/assets/cheat-sheet-mockup.webp"
                width={1400}
              />
              <ul className="hp-checks">
                {cheatInside.map((line) => (
                  <li key={line}>
                    <CheckCircle aria-hidden size={20} weight="fill" />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
