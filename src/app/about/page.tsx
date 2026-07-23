import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Layers3,
} from "lucide-react";
import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nick Chan, an independent web developer and computer science student building fully managed websites for small businesses.",
};

const experience = [
  {
    icon: BriefcaseBusiness,
    label: "Industry experience",
    title: "Software engineering intern at Daktronics",
    copy: "Contributing in a real product environment has sharpened how I think about dependable software, teamwork, and the details behind a polished result.",
  },
  {
    icon: GraduationCap,
    label: "Technical foundation",
    title: "Senior computer science student at SDSU",
    copy: "My education gives me the fundamentals to reason through systems, not just assemble a page that happens to look good.",
  },
  {
    icon: Layers3,
    label: "Independent practice",
    title: "Client work and side projects",
    copy: "I keep learning by building: testing ideas, solving practical problems, and carrying projects from a rough concept to something people can use.",
  },
];

const principles = [
  {
    number: "01",
    title: "Make the complex feel clear.",
    copy: "The technology can be sophisticated behind the scenes. The experience for you and your customers should not feel that way.",
  },
  {
    number: "02",
    title: "Take responsibility past launch.",
    copy: "A website is only valuable while it stays accurate, secure, and useful. Ongoing ownership is part of the work.",
  },
  {
    number: "03",
    title: "Build trust honestly.",
    copy: "Clear language, accurate claims, accessible interactions, and thoughtful details do more than visual hype ever could.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero about-hero section-dark">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="about-hero__glow" aria-hidden="true" />
        <div className="site-shell about-hero__inner">
          <div className="about-hero__copy">
            <TechnicalLabel>About Me</TechnicalLabel>
            <h1>
              A developer who stays
              <span> close to the work.</span>
            </h1>
            <p>
              I'm an independent developer, Daktronics intern, and
              senior computer science student at South Dakota State University.
              I build websites for small businesses that want one person to
              understand the goal and own the technical details.
            </p>
          </div>

          <GlassPanel className="about-identity-card">
            <div className="about-identity-card__portrait" aria-hidden="true">
              <span>NC</span>
            </div>
            <div className="about-identity-card__meta">
              <span>Nick Chan</span>
              <strong>Developer · Technology Partner</strong>
            </div>
            <div className="about-identity-card__status">
              <span />
              Based in Sioux Falls, South Dakota
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="about-story section-light">
        <div className="site-shell about-story__grid">
          <div>
            <SectionHeading
              eyebrow="Why this work"
              title={
                <>
                  Small businesses deserve
                  <span> real technical support.</span>
                </>
              }
            />
          </div>
          <div className="about-story__body">
            <p className="about-story__lead">
              A good website can help a local business earn trust, explain its
              value, and turn interest into a real conversation.
            </p>
            <p>
              But getting there often means coordinating a designer, developer,
              host, and support contact or trying to manage all of it alone. I
              want to make that simpler.
            </p>
            <p>
              My role is part builder and part long-term technical partner. I
              learn how the business works, make the website decisions easier
              to understand, and remain available after it goes live.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-section section-light">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                A foundation in software.
                <span> A focus on people.</span>
              </>
            }
            copy="These experiences shape the way I plan, build, communicate, and care for every project."
          />

          <div className="experience-grid">
            {experience.map(({ copy, icon: Icon, label, title }) => (
              <article key={title}>
                <div className="experience-grid__icon">
                  <Icon aria-hidden="true" size={21} />
                </div>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section section-dark">
        <div className="site-shell principles-grid">
          <div className="principles-grid__heading">
            <TechnicalLabel>Working principles</TechnicalLabel>
            <h2>How I want the partnership to feel.</h2>
            <p>
              Direct, thoughtful, and dependable from the first idea through
              the tenth update.
            </p>
          </div>

          <div className="principles-list">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partnership-section section-light">
        <div className="site-shell partnership-grid">
          <div className="partnership-grid__icon">
            <Handshake aria-hidden="true" size={31} strokeWidth={1.4} />
          </div>
          <div>
            <TechnicalLabel tone="light">The working relationship</TechnicalLabel>
            <h2>Individual attention, without a technical dead end.</h2>
          </div>
          <div>
            <p>
              You communicate directly with the person planning and building
              the site. If the business changes later, the context does not
              disappear with a handoff.
            </p>
            <Link className="text-link" href="/services">
              See what I handle
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta
        title="Looking for a developer who can own the whole website?"
        copy="Tell me about the business and what you want the website to accomplish. We can work out the right shape together."
      />
    </main>
  );
}
