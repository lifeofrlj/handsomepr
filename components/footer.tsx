import { site } from "@/lib/site";

import { Wordmark } from "./nav";
import { TypeformButton } from "./typeform-button";

export function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className="hp-footer">
      <div className="hp-footer__row">
        <Wordmark />
        {!minimal && (
        <div className="hp-footer__links">
          <a href="/playbook">Playbook</a>
          <TypeformButton formId={site.applyFormId} href={site.applyHref}>
            Apply
          </TypeformButton>
          <a href={site.instagram} rel="noopener" target="_blank">
            Instagram
          </a>
          <a href={site.smsHref}>Text {site.phoneDisplay}</a>
        </div>
        )}
      </div>
      <p>
        {site.company} provides coaching and education only, not medical advice, diagnosis or treatment. Work with a
        licensed physician before starting or changing any hormone, peptide or medication. Results vary by person.
      </p>
      <span>© 2026 {site.company}. Faith. Discipline. Transformation.</span>
    </footer>
  );
}
