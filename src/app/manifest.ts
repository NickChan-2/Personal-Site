import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nick Chan — Independent Web Developer",
    short_name: "Nick Chan",
    description: "Modern, fully managed websites for small businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#08150f",
    theme_color: "#08150f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
