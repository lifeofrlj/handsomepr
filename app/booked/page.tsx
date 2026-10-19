import type { Metadata } from "next";

import { TextMe } from "@/components/ctas";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "You're booked",
  robots: { index: false, follow: false },
};

function Video({ id, title }: { id: string; title: string }) {
  return (
    <div className="hp-video">
      <iframe
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
      />
    </div>
  );
}

const steps = [
  "Check your email for the meeting link and join on time.",
  "Be somewhere you can actually talk. Not driving, not at the gym, not in the shower.",
  "Use a laptop if you can. A phone works if that's what you have.",
  "Know your budget for coaching before we get on.",
  "If you want the action taker discount, have payment ready for a 6 or 12 month program. Card or buy now, pay later both work.",
  "Be ready to start on the call. Payment and onboarding happen there. If that's not possible yet, reschedule.",
  "If someone else is part of the decision, like a partner, bring them.",
];

export default function BookedPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hp-pagehero">
          <h1>You're booked.</h1>
          <p className="hp-lede">
            Your call is confirmed. Do the three things below before we talk, so we can use the whole call on your plan.
          </p>
        </section>
        <section className="hp-section">
          <div className="hp-wrap">
            <h2 className="hp-h2">Watch these first.</h2>
            <p className="hp-lede">Two short videos: who this coaching is and isn't for, and exactly what you get.</p>
            <div className="hp-split hp-split--even">
              <Video id={site.bookedVideo1} title="Who this coaching is for" />
              <Video id={site.bookedVideo2} title="What coaching includes" />
            </div>
          </div>
        </section>
        <section className="hp-section">
          <div className="hp-wrap">
            <h2 className="hp-h2">See what the work produces.</h2>
            <div className="hp-actions">
              <a className="hp-cta-playbook" href={site.transformationsFolder} rel="noopener" target="_blank">
                Open the client transformations folder
              </a>
            </div>
          </div>
        </section>
        <section className="hp-section">
          <div className="hp-wrap">
            <h2 className="hp-h2">Before the call.</h2>
            <ol className="hp-steps">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
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
