import { site } from "@/lib/site";

import { Wordmark } from "./nav";

export function Footer() {
  return (
    <footer className="hp-footer">
      <div className="hp-footer__row">
        <Wordmark />
        <div className="hp-footer__links">
          <a href="/playbook">Playbook</a>
          <a href={site.applyHref} rel="noopener" target="_blank">
            Apply
          </a>
          <a href={site.instagram} rel="noopener" target="_blank">
            Instagram
          </a>
          <a href={site.smsHref}>Text {site.phoneDisplay}</a>
        </div>
      </div>
      <p>
        {site.company} provides coaching and education only, not medical advice, diagnosis or treatment. Work with a
        licensed physician before starting or changing any hormone, peptide or medication. Results vary by person.
      </p>
      <span>© 2026 {site.company}. Faith. Discipline. Transformation.</span>
    </footer>
  );
}
