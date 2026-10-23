import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { ApplyCta, MerrittCta, TextMe } from "@/components/ctas";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Merritt Skinner: The Full Story",
  description:
    "The complete breakdown of how Merritt went from heartbroken and stuck at 190 lbs to back to back champion in 17 months. Training, food, cardio, the enhanced side and the mindset.",
  openGraph: { images: [{ url: "/assets/merritt.webp", width: 1080, height: 1080 }] },
};

const chapters = [
  "The starting point: he wasn't lazy, he was stuck",
  "The timeline at a glance: 17 months, 4 phases, 2 trophies",
  "Prep one: 190 to 163 lbs and a first place at his first show",
  "How he trained: the 3 on 1 off split that never changed",
  "How he ate: real meal plans for cutting and bulking",
  "Cardio, steps and the daily non negotiables",
  "The bulk: 163 to 220 lbs in 24 weeks",
  "The enhanced side, honestly, and how we kept him healthy",
  "Prep two and peak week, day by day",
  "The bigger win: the life he built along the way",
  "The 4 pillars behind every phase",
  "What's next: chasing the IFBB Pro card",
];

export default function MerrittPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hp-pagehero hp-merritt-hero">
          <p className="hp-kicker">Handsome PR client: the full story</p>
          <h1>
            From <mark className="hl">heartbroken</mark> to back to back <em className="hp-accent">champion.</em>
          </h1>
          <p className="hp-lede">
            The complete Merritt Skinner breakdown. The training, the food, the cardio, the enhanced side, the mindset,
            and the life he built in <mark className="hl">17 months</mark> after the worst thing that ever happened to
            him. Free, in your inbox in seconds.
          </p>
          <div className="hp-actions">
            <MerrittCta />
          </div>
          <div className="hp-merritt-photo">
            <img alt="Merritt Skinner before and after" fetchPriority="high" src="/assets/merritt.webp" />
            <span className="hp-merritt-tag hp-merritt-tag--before">Before</span>
            <span className="hp-merritt-tag hp-merritt-tag--after">After</span>
          </div>
          <ul className="hp-stats hp-stats--merritt">
            <li>
              <b>2 for 2</b>
              <span>Shows entered. First place in both.</span>
            </li>
            <li>
              <b>163</b>
              <span>lbs on stage, 2025. His first show ever.</span>
            </li>
            <li>
              <b>+57</b>
              <span>lbs gained in one 24 week bulk.</span>
            </li>
            <li>
              <b>186</b>
              <span>lbs on stage, 2026. Bigger and sharper.</span>
            </li>
          </ul>
        </section>

        <section className="hp-section" id="story">
          <div className="hp-wrap hp-split">
            <div>
              <h2 className="hp-h2">He wasn't lazy. He was stuck.</h2>
              <div className="hp-prose hp-prose--left">
                <p>
                  Merritt was training. He was eating "healthy." He was pretty consistent. And he was still 190 lbs and
                  skinny fat, with nothing to show for the work.
                </p>
                <p>
                  Then came rock bottom. Most guys fall apart. Merritt decided to get{" "}
                  <mark className="hl">tan, jacked and handsome</mark>, properly this time, and joined Team Handsome PR
                  in February 2025.
                </p>
                <p>
                  Seventeen months later he had <mark className="hl">two first place trophies</mark>, a new business, a
                  new city, and a physique good enough to chase a pro card.
                </p>
              </div>
            </div>
            <div className="hp-quotebox">
              <p>“Pain is fuel. But fuel without direction just burns out. My job was to give his a direction.”</p>
              <cite>Ryan Johnson</cite>
            </div>
          </div>
        </section>

        <section className="hp-section hp-playbook" id="inside">
          <div className="hp-wrap">
            <h2 className="hp-h2">Everything is in the guide.</h2>
            <p className="hp-lede">
              Real numbers pulled from his actual meal plans. His real split. How his cardio climbed. What his bloodwork
              looked like. And the part nobody talks about: what was going on in his head.
            </p>
            <ol className="hp-chapters">
              {chapters.map((c, i) => (
                <li key={c}>
                  <i aria-hidden>{String(i + 1).padStart(2, "0")}</i>
                  <span>{c}</span>
                </li>
              ))}
            </ol>
            <div className="hp-actions">
              <MerrittCta />
            </div>
            <p className="hp-fine hp-fine--center">
              Merritt's story and the coaching decisions we made for him. Not medical advice, and not a plan for you to
              copy.
            </p>
          </div>
        </section>

        <section className="hp-section" id="pillars">
          <div className="hp-wrap">
            <h2 className="hp-h2">The 4 pillars behind every phase.</h2>
            <p className="hp-lede">Strip away the numbers and this is what changed Merritt. Every client runs on it.</p>
            <ul className="hp-features hp-features--pillars">
              {[
                ["Structure & Direction", "From “train and eat healthy” to phases, show dates and target weights. Emotions fade. Deadlines don't."],
                ["Habits", "Food scale on the counter. Meals every 2 to 4 hours. 10k steps no matter what. Boring, repeatable, and it works."],
                ["Mindset", "The breakup could have been his excuse. It became his reason. Big results need big stakes."],
                ["Accountability", "Weekly check ins with photos and weight. Food logged every night. When someone is watching, you don't quietly quit."],
              ].map(([t, b]) => (
                <li key={t}>
                  <CheckCircle aria-hidden size={22} weight="fill" />
                  <h3>{t}</h3>
                  <p>{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hp-section hp-closing" id="apply">
          <div className="hp-wrap">
            <h2 className="hp-h2">You don't need a breakup to change your life.</h2>
            <p className="hp-lede">
              You need a plan and someone in your corner. If you're tired of "pretty consistent" and ready for structure,
              direction and real accountability, <mark className="hl">apply for coaching</mark> and we'll talk.
            </p>
            <div className="hp-actions">
              <ApplyCta label="Apply for coaching" />
              <TextMe />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
