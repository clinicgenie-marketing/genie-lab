import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { platform } from "@/lib/content/curriculum";
import { SkipLink } from "@/components/SkipLink";
import "@/styles/generated/tokens.css";
import "@/styles/generated/ds.css";
import "@/styles/app.css";

// The design system's two faces, self-hosted at build time. The token stacks read them
// from --font-face-heading and --font-face-body, then fall back as tokens.json lists.
const heading = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-face-heading", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-face-body", display: "swap" });

export const metadata: Metadata = {
  title: { template: `%s · ${platform.name}`, default: platform.name },
  description: platform.description,
  applicationName: platform.name,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable}`}>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
