import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Adding md/mdx lets files in src/content compile as React components.
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  turbopack: {
    // Prevent Next.js from treating an unrelated lockfile higher up as the root.
    root: process.cwd(),
  },
};

// withMDX extends the normal Next.js configuration with MDX support.
const withMDX = createMDX({});

export default withMDX(nextConfig);

// Makes Cloudflare bindings available when using the normal Next.js dev server.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
