import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

// Next.js turns this object into the default <title> and description tags.
// Individual pages can export their own metadata to override these values.
export const metadata: Metadata = {
  title: {
    default: "Nick Chan — Independent Web Developer",
    template: "%s — Nick Chan",
  },
  description:
    "Modern, fully managed websites for small businesses—designed, built, hosted, and supported by Nick Chan.",
};

// A root layout wraps every page in the App Router. The shared header, footer,
// fonts, and global CSS only need to be added here once.
// This is a Server Component by default because it does not use "use client".
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* The target is each page's <main id="main-content"> element. */}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
