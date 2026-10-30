import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Wordmark } from "@/components/nav";
import { results, testimonialPageVideos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "Real Team Handsome PR clients, in their own words, and their before and after results.",
  robots: { index: false, follow: false },
};

export default function TestimonialsPage() {
  return (
    <>
      <header className="hp-nav hp-nav--plain">
        <div className="hp-nav__bar">
          <Wordmark />
        </div>
      </header>
      <main>
        <section className="hp-pagehero">
          <p className="hp-kicker">Team Handsome PR clients</p>
          <h1 className="hp-pagehero__title">
            Real men. <em className="hp-accent">Real results.</em>
          </h1>
          <p className="hp-lede">
            Before we talk, hear it from the men who have already done it. No actors, no scripts, just clients telling
            you what changed.
          </p>
        </section>

        <section className="hp-section hp-section--tight">
          <div className="hp-wrap">
            <div className="hp-videos hp-videos--testimonials">
              {testimonialPageVideos.map((v) => (
                <figure key={v.vimeo}>
                  <div className="hp-video hp-video--short">
                    <iframe
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      allowFullScreen
                      loading="lazy"
                      src={`https://player.vimeo.com/video/${v.vimeo}&title=0&byline=0&portrait=0&dnt=1`}
                      title={`${v.name} testimonial`}
                    />
                  </div>
                  <figcaption>
                    <h2>{v.headline}</h2>
                    <b>{v.name}</b>
                    <span>{v.description}</span>
                    {v.quote && <q className="hp-vquote">{v.quote}</q>}
                    {v.bullets.length > 0 && (
                    <ul>
                      {v.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="hp-section" id="results">
          <div className="hp-wrap">
            <p className="hp-kicker">Before and after</p>
            <h2 className="hp-h2">Client results</h2>
            <div className="hp-grid2">
              {results.map((item) => (
                <figure key={item.src}>
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
          </div>
        </section>
      </main>
      <Footer minimal />
    </>
  );
}
