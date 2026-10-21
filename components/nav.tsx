"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

import { site } from "@/lib/site";

import { TypeformButton } from "./typeform-button";

const navLinks = [
  ["/#brotherhood", "Brotherhood"],
  ["/#results", "Results"],
  ["/#method", "Process"],
  ["/#about", "About"],
  ["/#faq", "FAQ"],
] as const;

export function Wordmark() {
  return (
    <a aria-label={`${site.brand} home`} className="hp-wordmark" href="/">
      <img alt={site.brand} className="hp-logo" src="/logo.png" />
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hp-nav" data-open={open ? "true" : "false"}>
      <div className="hp-nav__bar">
        <Wordmark />
        <nav aria-label="Main" className="hp-nav__links">
          {navLinks.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hp-nav__right">
          <TypeformButton className="hp-nav__call" formId={site.applyFormId} href={site.applyHref}>
            Apply Now
          </TypeformButton>
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="hp-nav__burger"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>
      <nav aria-label="Mobile" className="hp-nav__sheet">
        {navLinks.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <TypeformButton className="hp-cta-apply hp-nav__sheet-apply" formId={site.applyFormId} href={site.applyHref}>
          Apply Now
        </TypeformButton>
      </nav>
    </header>
  );
}
