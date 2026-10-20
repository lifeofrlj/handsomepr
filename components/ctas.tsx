import { ArrowRight, ChatCircleText } from "@phosphor-icons/react/dist/ssr";

import { site } from "@/lib/site";

import { TypeformButton } from "./typeform-button";

export function ApplyCta({ label = "Apply Now" }: { label?: string }) {
  return (
    <TypeformButton className="hp-cta-apply" formId={site.applyFormId} href={site.applyHref}>
      {label}
      <ArrowRight aria-hidden size={18} weight="bold" />
    </TypeformButton>
  );
}

export function PlaybookCta({ label = "Get the free playbook" }: { label?: string }) {
  return (
    <a className="hp-cta-playbook" href="/playbook">
      {label}
    </a>
  );
}

export function PlaybookFormCta() {
  return (
    <TypeformButton className="hp-cta-apply" formId={site.playbookFormId} href={site.playbookHref}>
      Send me the playbook
      <ArrowRight aria-hidden size={18} weight="bold" />
    </TypeformButton>
  );
}

export function CheatSheetCta({ label = "Click here" }: { label?: string }) {
  return (
    <TypeformButton className="hp-cta-apply" formId={site.cheatSheetFormId} href={site.cheatSheetHref}>
      {label}
      <ArrowRight aria-hidden size={18} weight="bold" />
    </TypeformButton>
  );
}

export function PlaybookCardCta({ label = "Click here" }: { label?: string }) {
  return (
    <TypeformButton className="hp-cta-apply" formId={site.playbookFormId} href={site.playbookHref}>
      {label}
      <ArrowRight aria-hidden size={18} weight="bold" />
    </TypeformButton>
  );
}

export function TextMe() {
  return (
    <a className="hp-textme" href={site.smsHref}>
      <ChatCircleText aria-hidden size={20} weight="bold" />
      <span>
        Text me <b>{site.phoneDisplay}</b>
      </span>
    </a>
  );
}
