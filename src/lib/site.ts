const fallbackUrl = "http://localhost:3000";

export const site = {
  name: "Nick Chan",
  title: "Nick Chan — Independent Web Developer",
  description:
    "Modern, fully managed websites for small businesses—designed, built, hosted, and supported by Nick Chan.",
  url: new URL(process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl),
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
