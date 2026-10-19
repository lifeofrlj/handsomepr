import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { site } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.brand, template: `%s | ${site.brand}` },
  description: "Health first coaching for enhanced and natural lifters who want the next level. Get the free Handsome Enhancement Playbook.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: site.brand,
    title: site.brand,
    description: "We help men look, feel and become badass. Coaching by application only.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0d12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="hp">{children}</body>
    </html>
  );
}
