import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nick Chan — Independent Web Developer",
    short_name: "Nick Chan",
    description: "Modern, fully managed websites for small businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#061a11",
    theme_color: "#061a11",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
