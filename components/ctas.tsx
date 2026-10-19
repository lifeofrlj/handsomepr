import { ArrowRight, ChatCircleText } from "@phosphor-icons/react/dist/ssr";

import { site } from "@/lib/site";

export function ApplyCta({ label = "Apply Now" }: { label?: string }) {
  return (
    <a className="hp-cta-apply" href={site.applyHref} rel="noopener" target="_blank">
      {label}
      <ArrowRight aria-hidden size={18} weight="bold" />
    </a>
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
    <a className="hp-cta-apply" href={site.playbookHref} rel="noopener" target="_blank">
      Send me the playbook
      <ArrowRight aria-hidden size={18} weight="bold" />
    </a>
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
