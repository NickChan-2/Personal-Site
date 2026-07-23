import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected website work and concepts by independent developer Nick Chan.",
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="page-hero section-dark">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="site-shell page-hero__inner">
          <SectionHeading
            eyebrow="Selected work"
            level={1}
            title={
              <>
                Built around the business,
                <span> not the template.</span>
              </>
            }
            copy="Real client work and clearly labeled concepts, each showing how strategy, design, and development connect."
            tone="dark"
          />
        </div>
      </section>

      <section className="section-light work-page-section">
        <div className="site-shell project-list">
          {projects.map((project, index) => (
            <ProjectCard
              featured={index === 0}
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      <ContactCta
        title="Have a business problem worth solving?"
        copy="Share the situation, the goal, and what is getting in the way. We can shape the right website from there."
      />
    </main>
  );
}
