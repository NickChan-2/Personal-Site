import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import "@/components/ui/glass-panel.css";
import { CloudflareWebAnalytics } from "@/components/analytics/cloudflare-web-analytics";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LiquidGlassFilter } from "@/components/ui/glass-panel";
import { site } from "@/lib/site";

// Next.js turns this object into the default <title> and description tags.
// Individual pages can export their own metadata to override these values.
export const metadata: Metadata = {
  metadataBase: site.url,
  title: {
    default: "Nick Chan — Independent Web Developer",
    template: "%s — Nick Chan",
  },
  description: site.description,
  applicationName: "Nick Chan",
  authors: [{ name: "Nick Chan" }],
  creator: "Nick Chan",
  publisher: "Nick Chan",
  keywords: [
    "web developer",
    "small business websites",
    "website design",
    "managed website",
    "South Dakota web developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Nick Chan",
    title: "Modern websites. Fully managed.",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nick Chan — modern websites, fully managed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern websites. Fully managed.",
    description: site.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020b05",
  colorScheme: "dark light",
};

// A root layout wraps every page in the App Router. The shared header, footer,
// fonts, and global CSS only need to be added here once.
// This is a Server Component by default because it does not use "use client".
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}#nick-chan`,
        name: "Nick Chan",
        jobTitle: "Independent Web Developer",
        url: site.url.toString(),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brookings",
          addressRegion: "SD",
          addressCountry: "US",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}#business`,
        name: "Nick Chan — Independent Web Developer",
        url: site.url.toString(),
        description: site.description,
        founder: { "@id": `${site.url}#nick-chan` },
        areaServed: "United States",
        serviceType: [
          "Website strategy",
          "Web design",
          "Web development",
          "Managed website hosting",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <LiquidGlassFilter />
        {/* The target is each page's <main id="main-content"> element. */}
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CloudflareWebAnalytics />
      </body>
    </html>
  );
}
