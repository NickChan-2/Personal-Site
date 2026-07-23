import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/start-project",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...mainRoutes.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      priority,
      changeFrequency,
    })),
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
}
