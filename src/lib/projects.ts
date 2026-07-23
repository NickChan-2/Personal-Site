// A union type limits the value to these exact strings. TypeScript will catch
// an accidental value such as "client" before the site builds.
export type ProjectStatus = "Client work" | "Concept";

// This type is the contract every project object below must follow.
export type Project = {
  // Listing the valid slugs here prevents links to project pages that do not exist.
  slug: "therapy-practice" | "contractor-concept";
  title: string;
  shortTitle: string;
  status: ProjectStatus;
  phase: string;
  summary: string;
  outcome: string;
  services: string[];
  accent: "therapy" | "contractor";
  year: string;
};

// This is the single source of truth for cards, links, metadata, and case pages.
// Add shared project information here rather than copying it between pages.
export const projects: Project[] = [
  {
    slug: "therapy-practice",
    title: "A calmer digital front door for a private practice",
    shortTitle: "Therapy practice",
    status: "Client work",
    phase: "In development",
    summary:
      "A trust-first website that helps prospective clients understand the practice, feel at ease, and take the next step without friction.",
    outcome:
      "A clear, accessible foundation designed around privacy-aware inquiries and long-term managed care.",
    services: ["Strategy", "Web design", "Development", "Managed care"],
    accent: "therapy",
    year: "2026",
  },
  {
    slug: "contractor-concept",
    title: "Turning local reputation into a stronger lead engine",
    shortTitle: "Northline Contracting",
    status: "Concept",
    phase: "Launch portfolio",
    summary:
      "A conversion-focused concept for a local contractor, built to make services clear, prove quality, and simplify quote requests.",
    outcome:
      "A focused sales journey connecting service-area credibility, project proof, and a mobile-first estimate flow.",
    services: ["Positioning", "Web design", "Lead flow", "Concept build"],
    accent: "contractor",
    year: "2026",
  },
];

// .find() returns either a matching Project or undefined. Callers must handle
// the undefined case, which the dynamic route does with Next.js notFound().
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
