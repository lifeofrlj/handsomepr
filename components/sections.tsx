import { CheckCircle, XCircle } from "@phosphor-icons/react/dist/ssr";

import { site, testimonials } from "@/lib/site";

import { CnnVideo } from "./cnn";
import { ApplyCta, PlaybookCta, TextMe } from "./ctas";

export function Hero() {
  return (
    <section className="hp-hero" id="top">
      <div className="hp-hero__inner">
        <p className="hp-hero__eyebrow">By application only. Limited spots.</p>
        <h1>We Help Men Look, Feel & Become Badass</h1>
        <p className="hp-hero__sub">
          Online coaching for men who want to transform their body, mind and life through training, nutrition,
          mindset, lifestyle and hormone optimization.
        </p>
        <div className="hp-actions">
          <ApplyCta />
          <PlaybookCta />
        </div>
      </div>
      <picture className="hp-hero__photo">
        <source media="(max-width: 760px)" srcSet="/assets/ryan-hero-mobile.png" />
        <img alt="Ryan Johnson, Classic Physique athlete and coach" fetchPriority="high" src="/assets/ryan-hero.png" />
      </picture>
    </section>
  );
}

export function WhatWeDo() {
  return (
    <section className="hp-section" id="what">
      <div className="hp-wrap">
        <h2 className="hp-h2">Coaching for men who are done starting over.</h2>
        <p className="hp-lede">
          Build A Badass Physique is a six or twelve month program for men 25 to 55 who want a physique they're proud
          of, a mind that holds up under pressure, and a life that matches. Training, nutrition, mindset, lifestyle and
          hormones, handled together by one coach.
        </p>
        <ul className="hp-badges">
          <li>Competitive Classic Physique athlete</li>
          <li>3.5+ years coaching men</li>
          <li>200+ men coached</li>
          <li>Faith driven, no B.S. coaching</li>
          <li>By application only</li>
        </ul>
        <div className="hp-actions">
          <ApplyCta />
        </div>
      </div>
    </section>
  );
}

const pillars = [
  ["Training", "A split built for your body and schedule, adjusted every week from what your check in shows."],
  ["Nutrition", "Exact meals and macros for home, travel and eating out, so the plan survives real life."],
  ["Mindset", "Identity work, not another diet. You become the man who trains, instead of the guy trying to."],
  ["Lifestyle", "Sleep, stress and routine planned on purpose, because they decide whether the rest works."],
  ["Hormones", "Bloodwork guided optimization for men on TRT, considering it, or already enhanced."],
] as const;

export function Method() {
  return (
    <section className="hp-section" id="method">
      <div className="hp-wrap">
        <h2 className="hp-h2">How we do it: the five pillars.</h2>
        <p className="hp-lede">
          Most coaches sell one of these. Results come from running all five at once, with your bloodwork telling us
          what to change.
        </p>
        <ol className="hp-pillars">
          {pillars.map(([title, body], index) => (
            <li key={title}>
              <i aria-hidden>{String(index + 1).padStart(2, "0")}</i>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const features = [
  ["Fully custom plans", "Training, nutrition, supplements and hormone protocol, with a walkthrough video of your plan."],
  ["Weekly check ins", "Every check in answered with a 5 to 10 minute voice note from me, not a one liner."],
  ["Direct text access", "My personal number. Questions get answered the same day."],
  ["Bloodwork reviews", "Regular panels read together, with the protocol adjusted from the numbers."],
  ["Weekly group calls", "Live calls on mindset, discipline and faith with the other men in the program."],
  ["Education library", "Videos on training, nutrition, enhancement and bloodwork so you understand the why."],
] as const;

export function WhatItLooksLike() {
  return (
    <section className="hp-section" id="coaching">
      <div className="hp-wrap">
        <h2 className="hp-h2">What coaching looks like.</h2>
        <ul className="hp-features">
          {features.map(([title, body]) => (
            <li key={title}>
              <CheckCircle aria-hidden size={22} weight="fill" />
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
        <div className="hp-actions">
          <ApplyCta />
        </div>
      </div>
    </section>
  );
}

const results = [
  { src: "/assets/results/justin.webp", name: "Justin", note: "Natural, OCB medalist" },
  { src: "/assets/results/merritt.webp", name: "Merritt", note: "Full rebuild" },
  { src: "/assets/results/alex.webp", name: "Alex", note: "Soft to stage ready" },
  { src: "/assets/results/tyler.webp", name: "Tyler", note: "Fat loss, recomp" },
  { src: "/assets/results/stage.webp", name: "Stage day", note: "Medal on stage" },
];

export function Results() {
  return (
    <section className="hp-section" id="results">
      <div className="hp-wrap">
        <h2 className="hp-h2">Real clients. Real stage time.</h2>
        <p className="hp-lede">
          Natural and enhanced. Fat loss, full rebuilds and first shows. Every one of them started with a plan built
          around their bloodwork.
        </p>
        <div className="hp-rail" role="list">
          {results.map((item) => (
            <figure key={item.src} role="listitem">
              <div className="hp-rail__img">
                <img alt={`${item.name} before and after coaching`} decoding="async" loading="lazy" src={item.src} />
              </div>
              <figcaption>
                {item.name}
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="hp-rail__hint">Swipe for more</p>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="hp-section" id="testimonials">
      <div className="hp-wrap">
        <h2 className="hp-h2">Real men, real words.</h2>
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

export function Brotherhood() {
  return (
    <section className="hp-section hp-brotherhood" id="brotherhood">
      <div className="hp-wrap">
        <h2 className="hp-h2">You don't do this alone.</h2>
        <p className="hp-lede">
          When you join, you join a group of men on the same mission: building the body, holding the standard and
          keeping their faith at the center of it. Every week we get on a call, fix what's broken, and hold each other to
          it.
        </p>
        <ul className="hp-badges">
          <li>Weekly live group calls</li>
          <li>Mindset, discipline and faith</li>
          <li>Direct access to Ryan</li>
          <li>Men who show up</li>
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="hp-section" id="about">
      <div className="hp-wrap hp-split hp-split--reverse">
        <div>
          <h2 className="hp-h2">Who I am.</h2>
          <p className="hp-lede">
            I'm Ryan Johnson. Competitive Classic Physique athlete, three and a half years coaching men full time, 200+
            clients natural and enhanced. I started coaching because I watched good men waste years on bad plans and
            worse advice. My faith drives how I coach: honest, direct, and invested in who you become, not just how you
            look.
          </p>
          <blockquote className="hp-quote">“The compound is the easy part. The man running it is the work.”</blockquote>
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
    </section>
  );
}

export function FitCheck() {
  return (
    <section className="hp-section" id="fit">
      <div className="hp-wrap">
        <h2 className="hp-h2">Is this for you?</h2>
        <div className="hp-fit">
          <div>
            <h3>This is for you if</h3>
            <ul>
              {[
                "You've trained for years and want the next level, natural or enhanced",
                "You're ready to invest in yourself and do the work",
                "You want one coach who handles training, nutrition and bloodwork together",
                "You want to be held accountable, not babysat",
              ].map((line) => (
                <li key={line}>
                  <CheckCircle aria-hidden size={20} weight="fill" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>This is not for you if</h3>
            <ul>
              {[
                "You want a quick fix or a 30 day miracle",
                "You want to be told what you want to hear",
                "You're curious but not committed",
                "You're not willing to get bloodwork done",
              ].map((line) => (
                <li key={line}>
                  <XCircle aria-hidden size={20} weight="fill" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const faq = [
  ["How much does coaching cost?", "Programs run six or twelve months and pricing is covered on your call, after you apply. It's a real investment, and it's priced for men who are serious about the result."],
  ["How much time does it take?", "About an hour of training a day plus a short weekly check in. Everything is built around a busy schedule, including travel."],
  ["I'm in my 40s or 50s. Is this for me?", "Yes. A large part of my client base is successful men in their 40s and 50s who want to look and feel like themselves again."],
  ["Do you work with men on TRT or running cycles?", "Yes. Hormones are one of the five pillars. Everything is guided by bloodwork and built around protecting your long term health."],
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

export function PlaybookTeaser() {
  return (
    <section className="hp-section" id="playbook">
      <div className="hp-wrap hp-teaser">
        <div>
          <h2 className="hp-h2">Not ready to apply? Start with the free playbook.</h2>
          <p className="hp-lede">
            {site.magnetName}: the framework I use with paying clients for bloodwork, cycles, side effect prevention
            and long term health.
          </p>
          <div className="hp-actions">
            <PlaybookCta />
          </div>
        </div>
        <div className="hp-about__img">
          <img alt="" loading="lazy" src="/assets/results/stage.webp" />
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="hp-section hp-closing">
      <div className="hp-wrap">
        <h2 className="hp-h2">Stop guessing with your health.</h2>
        <p className="hp-lede">
          Apply in about two minutes. If it's a fit, you book a call with me directly. No hard sell, limited spots.
        </p>
        <div className="hp-actions">
          <ApplyCta />
          <TextMe />
        </div>
      </div>
    </section>
  );
}
