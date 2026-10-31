import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { results, site, testimonials, timeline, videoTestimonials } from "@/lib/site";

import { CnnVideo } from "./cnn";
import { ApplyCta, TextMe } from "./ctas";
import { VslPlayer } from "./vsl-player";

export function Hero() {
  return (
    <section className="hp-hero hp-hero--faded" id="top">
      <img alt="" className="hp-pagehero__bg" fetchPriority="high" src="/assets/ryan-hero.png" />
      <div className="hp-hero__inner">
        <p className="hp-hero__eyebrow">By application only. Limited spots.</p>
        <h1>We Help Men Look, Feel & Become Badass</h1>
        <p className="hp-hero__sub">
          Online coaching & community for men who want to <mark className="hl">transform their body, mind and life</mark> through
          proper training, nutrition, mindset, lifestyle and hormone optimization. We execute with a{" "}
          <mark className="hl">no b.s approach</mark> and take our results very seriously. If you're ready to Handsome PR,
          click the button below.
        </p>
        <div className="hp-actions">
          <ApplyCta />
          <a className="hp-cta-playbook" href="#results">
            See client results
          </a>
        </div>
      </div>
    </section>
  );
}

export function VslHero() {
  return (
    <section className="hp-hero hp-hero--vsl" id="top">
      <div className="hp-hero__inner">
        <h1>
          Men <span className="hp-nowrap">21‑50yrs</span> old gain <mark className="hl"><span className="hp-nowrap">15‑25lbs</span> of lean muscle</mark> & achieve{" "}
          <mark className="hl">12% body fat</mark> <em className="hp-accent">guaranteed</em> within 6 months
        </h1>
        <p className="hp-hero__eyebrow hp-hero__eyebrow--below">Watch this before you apply</p>
        <VslPlayer title="Handsome PR coaching" vertical={site.vslVertical} videoId={site.vslVideoId} />
        <div className="hp-vslform" id="apply-form">
          <h2>Check eligibility in 60 seconds</h2>
          <div className="hp-embed hp-embed--vsl">
            <iframe allow="camera; microphone; autoplay; encrypted-media" src={site.applyEmbed} title="Check your eligibility" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="hp-section" id="results">
      <div className="hp-wrap">
        <p className="hp-kicker">Proof of the promise</p>
        <h2 className="hp-h2">Client results</h2>
        <ul className="hp-stats">
          <li>
            <b>250+</b>
            <span>Athletes coached</span>
          </li>
          <li>
            <b>100%</b>
            <span>Custom programming</span>
          </li>
          <li>
            <span className="hp-stats__only">Tailored enhanced protocols</span>
          </li>
          <li>
            <span className="hp-stats__only">Direct no b.s communication & guidance</span>
          </li>
        </ul>
        <div className="hp-grid2">
          {results.map((item) => (
            <figure key={item.src}>
              <div className="hp-rail__img">
                <img alt={`${item.name} before and after coaching`} decoding="async" src={item.src} />
              </div>
              <figcaption>
                {item.name}
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="hp-actions">
          <ApplyCta />
        </div>
      </div>
    </section>
  );
}

export function NextLevel() {
  return (
    <section className="hp-section" id="what">
      <div className="hp-wrap">
        <h2 className="hp-h2">Coaching for men who are ready for the next level.</h2>
        <div className="hp-prose">
          <p>
            You've already been training and eating healthy for years with one goal in mind:{" "}
            <mark className="hl">BUILD A BADASS PHYSIQUE.</mark>
          </p>
          <p>
            Yet the results still fall short of what you <mark className="hl">know you're capable of.</mark>
          </p>
          <p>
            This is the <mark className="hl">TRAP</mark> most guys get stuck in: <mark className="hl">CONSISTENT</mark> but{" "}
            <mark className="hl">LACKING RESULTS.</mark>
          </p>
          <p>
            This is what we <mark className="hl">fix</mark> at Team Handsome PR.
          </p>
          <p>
            Check out our <a href="#results">results</a> and <a href="#method">how we do it</a> to see if moving forward
            with our coaching makes sense for you.
          </p>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  ["Personalized Programming", "Built around your lifestyle, goals and genetics. Not some cookie cutter b.s."],
  [
    "1 on 1 Coaching",
    "It's not just how, it's also who. Direct communication with Ryan for no b.s feedback and guidance. Check ins aren't short one liners, they're 5 to 10 minute voice notes.",
  ],
  ["Accountability", "If you don't check in on time, I will check in on you."],
  ["Enhancement Guidance", "Custom protocols, advice and bloodwork analysis focused on results without sacrificing your health."],
  [
    "Education",
    "Access to 50+ hours of education on everything from personal development to PEDs to my own personal cycles.",
  ],
] as const;

export function Method() {
  return (
    <section className="hp-section" id="method">
      <div className="hp-wrap">
        <h2 className="hp-h2">How we do it: The Handsome PR System</h2>
        <ol className="hp-pillars">
          {pillars.map(([title, body], index) => (
            <li key={title}>
              <i aria-hidden>{String(index + 1).padStart(2, "0")}</i>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
        <div className="hp-classroom">
          <div className="hp-classroom__copy">
            <p className="hp-kicker">Inside the education platform</p>
            <h3>12 modules. 50+ hours. Everything I know.</h3>
            <p>
              Training, nutrition, discipline, relationships, PEDs, peptides, bloodwork, blast and cruise versus PCT,
              and a breakdown of my own cycles. All of it inside the Handsome PR classroom from day one.
            </p>
            <ul className="hp-classroom__tags">
              {["Start Here", "Bad*ss Blueprint", "Relationships", "Nutrition", "Training", "Discipline Systems", "Everything PEDs", "Peptides", "Health", "Bloodwork", "B&C vs PCT", "My Cycles"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="hp-classroom__scene" aria-hidden="true">
            <div className="hp-classroom__card">
              <img alt="" loading="lazy" src="/assets/classroom.webp" />
            </div>
            <div className="hp-classroom__reflection">
              <img alt="" loading="lazy" src="/assets/classroom.webp" />
            </div>
          </div>
        </div>
        <div className="hp-actions">
          <ApplyCta />
        </div>
      </div>
    </section>
  );
}

const perks = [
  "Community group chat",
  "Weekly community live group calls",
  "Connect with other like minded men",
  "Sourcing access",
];

export function Brotherhood() {
  return (
    <section className="hp-section hp-brotherhood" id="brotherhood">
      <div className="hp-wrap">
        <h2 className="hp-h2">You don't grow alone.</h2>
        <p className="hp-lede">
          When you join Team Handsome PR you're not just getting a coach, you're getting access to a{" "}
          <mark className="hl">community of like minded men</mark> all on the same mission as you. Everyone inside is
          building, pushing, and holding each other to a <mark className="hl">higher standard.</mark>
        </p>
        <ul className="hp-perks">
          {perks.map((perk) => (
            <li key={perk}>
              <CheckCircle aria-hidden size={22} weight="fill" />
              {perk}
            </li>
          ))}
        </ul>
        <figure className="hp-calls">
          <img alt="Recordings of weekly Brotherhood group calls" loading="lazy" src="/assets/group-calls.webp" />
          <figcaption>Weekly Brotherhood group calls, recorded for the community library.</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="hp-section" id="testimonials">
      <div className="hp-wrap">
        <h2 className="hp-h2">Real clients, real testimonials.</h2>
        <div className="hp-videos">
          {videoTestimonials.map((v) => (
            <figure key={v.id}>
              <div className="hp-video hp-video--short">
                <iframe
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={`${v.name} testimonial`}
                />
              </div>
              <figcaption>
                <b>{v.name}</b>
                <span>{v.description}</span>
                <ul>
                  {v.bullets.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
        <ul className="hp-quotes">
          {testimonials.map((t) => (
            <li key={t.name}>
              <span aria-label="Five stars">★ ★ ★ ★ ★</span>
              <h3>{t.headline}</h3>
              <p>“{t.quote}”</p>
              <cite>{t.name}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CnnFeature() {
  return (
    <section className="hp-section" id="cnn">
      <div className="hp-wrap hp-split">
        <CnnVideo />
        <div>
          <h2 className="hp-h2">As featured by CNN.</h2>
          <p className="hp-lede">
            CNN's Isobel Yeung investigated why testosterone use is booming among men, and my coaching was part of the
            story. Watch it before you decide who to trust with your health.
          </p>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="hp-section" id="about">
      <div className="hp-wrap hp-split hp-split--reverse">
        <div>
          <h2 className="hp-h2">Who is Ryan Johnson?</h2>
          <p className="hp-lede">
            I'm Ryan Johnson. <mark className="hl">Competitive Classic Physique athlete</mark>, three and a half years
            coaching men full time, 250+ clients natural and enhanced. I started coaching because I watched good men
            waste years on bad plans and worse advice. <mark className="hl">My faith drives how I coach</mark>: honest,
            direct, and invested in who you become, not just how you look.
          </p>
          <blockquote className="hp-quote">
            “I believe God put me on earth to help men look, feel & become more bad*ss.”
          </blockquote>
          <div className="hp-actions">
            <a className="hp-cta-playbook" href={site.instagram} rel="noopener" target="_blank">
              Follow my journey on Instagram
            </a>
          </div>
        </div>
        <div className="hp-split__media">
          <div className="hp-about__img">
            <img alt="Ryan Johnson before and after" loading="lazy" src="/assets/results/ryan.webp" />
          </div>
        </div>
      </div>
      <div className="hp-wrap hp-timeline-wrap">
        <p className="hp-kicker">My timeline</p>
        <h3 className="hp-h2 hp-h2--sm">From 110 lbs natural to the stage.</h3>
        <ol className="hp-timeline">
          {timeline.map((step, index) => (
            <li key={step.src}>
              <div className="hp-timeline__img">
                <img alt={step.stage} loading="lazy" src={step.src} />
              </div>
              <div className="hp-timeline__body">
                <i aria-hidden>{String(index + 1).padStart(2, "0")}</i>
                <h4>{step.stage}</h4>
                <b>{step.stat}</b>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const faq = [
  ["How much does coaching cost?", "Programs run six or twelve months and pricing is covered on your call, after you apply. It's a real investment, and it's priced for men who are serious about the result."],
  ["How much time does it take?", "About an hour of training a day plus a short weekly check in. Everything is built around a busy schedule, including travel."],
  ["I'm in my 40s or 50s. Is this for me?", "Yes. A large part of my client base is successful men in their 40s and 50s who want to look and feel like themselves again."],
  ["Do you work with men on TRT or running cycles?", "Yes. Enhancement guidance is part of the system. Everything is guided by bloodwork and built around protecting your long term health."],
  ["What happens after I apply?", "You fill out a short application. If it's a fit, you book a call directly with me and we map out your next six months."],
  ["Is there a guarantee?", "If you do the work and aren't happy in the first 30 days, you get a full refund."],
] as const;

export function Faq() {
  return (
    <section className="hp-section" id="faq">
      <div className="hp-wrap">
        <h2 className="hp-h2">Questions, answered.</h2>
        <div className="hp-faq">
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="hp-section hp-closing" id="apply">
      <div className="hp-wrap">
        <h2 className="hp-h2">Stop guessing with your health.</h2>
        <p className="hp-lede">
          <mark className="hl">Spots are limited.</mark> I only work with individuals who are{" "}
          <mark className="hl">100% committed</mark>, as I am, to looking, feeling and becoming more bad*ss. Fill out the
          application below. It only takes a few minutes, and if it's a good fit you'll{" "}
          <mark className="hl">book a call with me directly</mark> to discuss getting started.
        </p>
        <div className="hp-embed">
          <iframe allow="camera; microphone; autoplay; encrypted-media" loading="lazy" src={site.applyEmbed} title="Coaching application" />
        </div>
        <div className="hp-actions">
          <ApplyCta label="Open the application" />
          <TextMe />
        </div>
      </div>
    </section>
  );
}
