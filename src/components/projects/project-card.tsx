import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/projects/project-visual";
import { GlassPanel } from "@/components/ui/glass-panel";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  // The question mark makes this prop optional; its default is false below.
  featured?: boolean;
};

export function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <GlassPanel
      as="article"
      tone="light"
      className={`project-card ${featured ? "project-card--featured" : ""}`}
    >
      <Link
        href={`/work/${project.slug}`}
        className="project-card__visual-link"
        aria-label={`View ${project.shortTitle} case study`}
      >
        <ProjectVisual variant={project.accent} compact={!featured} />
      </Link>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.status}</span>
          <span>{project.phase}</span>
        </div>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
        <div className="project-card__footer">
          <div className="project-card__services">
            {/* Keep preview cards compact even when a project has more services. */}
            {project.services.slice(0, 3).map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
          <Link
            className="project-card__link"
            href={`/work/${project.slug}`}
          >
            View case study
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </GlassPanel>
  );
}
