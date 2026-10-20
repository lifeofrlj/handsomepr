"use client";

import { useCallback, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  formId: string;
  href: string;
  className?: string;
  children: ReactNode;
};

/** Opens a Typeform in a popup overlay. Falls back to the normal link if the embed fails to load. */
export function TypeformButton({ formId, href, className, children }: Props) {
  const popup = useRef<{ open: () => void } | null>(null);

  const onClick = useCallback(
    async (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      try {
        if (!popup.current) {
          const { createPopup } = await import("@typeform/embed");
          popup.current = createPopup(formId, { size: 100, autoClose: 3000 });
        }
        popup.current.open();
      } catch {
        window.open(href, "_blank", "noopener");
      }
    },
    [formId, href],
  );

  return (
    <a className={className} href={href} onClick={onClick} rel="noopener" target="_blank">
      {children}
    </a>
  );
}
