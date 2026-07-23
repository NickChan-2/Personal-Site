import type { ComponentType } from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContractorConcept from "@/content/projects/contractor-concept.mdx";
import TherapyPractice from "@/content/projects/therapy-practice.mdx";
import { ProjectVisual } from "@/components/projects/project-visual";
import { ContactCta } from "@/components/sections/contact-cta";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { getProject, projects, type Project } from "@/lib/projects";

// The [slug] folder is a dynamic route. Next.js supplies the URL segment in
// params, so /work/therapy-practice produces slug = "therapy-practice".
type CaseStudyPageProps = {
  // In current Next.js App Router versions, dynamic params are asynchronous.
  params: Promise<{ slug: string }>;
};

// Record<Key, Value> guarantees that every allowed Project slug maps to one
// React component. The imported MDX files compile into React components.
const caseStudies: Record<Project["slug"], ComponentType> = {
  "therapy-practice": TherapyPractice,
  "contractor-concept": ContractorConcept,
};

// Only the slugs returned by generateStaticParams are valid public pages.
export const dynamicParams = false;

// Next.js uses this list to generate both case studies during npm run build.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Dynamic metadata gives each case study its own browser title and description.
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.shortTitle,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  // notFound() stops rendering and shows src/app/not-found.tsx.
  if (!project || !(slug in caseStudies)) {
    notFound();
  }

  // Capitalized variables can be rendered as React components in JSX.
  const Content = caseStudies[project.slug];

  return (
    <main id="main-content">
      <article className={`case-study case-study--${project.accent}`}>
        <header className="case-study-hero section-dark">
          <div className="page-hero__grid" aria-hidden="true" />
          <div className="site-shell">
            <Link className="case-study-hero__back" href="/work">
              <ArrowLeft aria-hidden="true" size={16} />
              All work
            </Link>

            <div className="case-study-hero__heading">
              <div>
                <TechnicalLabel>{project.status}</TechnicalLabel>
                <h1>{project.title}</h1>
                <p>{project.summary}</p>
              </div>
              <div className="case-study-hero__status">
                <span>Status</span>
                <strong>{project.phase}</strong>
              </div>
            </div>

            <div className="case-study-hero__visual">
              <ProjectVisual variant={project.accent} />
            </div>
          </div>
        </header>

        <div className="case-study-body section-light">
          <div className="site-shell case-study-body__inner">
            <Content />
          </div>
        </div>
      </article>

      <ContactCta
        title="Need a website shaped around a real business goal?"
        copy="Tell me what you are trying to improve. The right structure, design, and technical plan can follow from there."
      />
    </main>
  );
}
