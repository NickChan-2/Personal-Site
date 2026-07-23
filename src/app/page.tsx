import {
  ArrowDown,
  ArrowRight,
  Check,
  Code2,
  HeartHandshake,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  ServerCog,
} from "lucide-react";
import Link from "next/link";
import { HeroPanelStack } from "@/components/hero/hero-panel-stack";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { ButtonLink } from "@/components/ui/buttons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { projects } from "@/lib/projects";

// Keeping repeated content in arrays lets us render it with .map() below.
// The page structure stays readable and a new card only needs one new object.
const serviceCards = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Website design",
    copy: "A focused digital presence built around your customers, your services, and the action you want people to take.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Development",
    copy: "Responsive, accessible implementation that stays quick, stable, and straightforward to maintain.",
  },
  {
    number: "03",
    icon: ServerCog,
    title: "Managed care",
    copy: "Hosting, monitoring, routine updates, and technical support handled after the site goes live.",
  },
];

const processSteps = [
  {
    label: "Understand",
    copy: "We clarify your business, audience, priorities, and what success should look like.",
  },
  {
    label: "Shape",
    copy: "I organize the content and design a clear customer journey before development begins.",
  },
  {
    label: "Build",
    copy: "The approved direction becomes a responsive, tested website with the right integrations.",
  },
  {
    label: "Care",
    copy: "I launch, host, monitor, and keep the site current as your business changes.",
  },
];

// In the App Router, src/app/page.tsx automatically becomes the "/" route.
export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero section-dark">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--green" aria-hidden="true" />
        <div className="hero-glow hero-glow--orange" aria-hidden="true" />

        <div className="site-shell hero__inner">
          <div className="hero__content">
            <TechnicalLabel>Independent web developer</TechnicalLabel>
            <h1>
              Modern websites.
              <span>Fully managed.</span>
            </h1>
            <p>
              I design, build, host, and maintain websites for small
              businesses—giving you one technology partner from first idea to
              ongoing updates.
            </p>
            <div className="hero__actions">
              <ButtonLink href="/start-project">Start a project</ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                View my work
              </ButtonLink>
            </div>
            <div className="hero__trust-line">
              <span>
                <Check aria-hidden="true" size={15} />
                Direct communication
              </span>
              <span>
                <Check aria-hidden="true" size={15} />
                Built for long-term care
              </span>
            </div>
          </div>

          <HeroPanelStack />
        </div>

        <a className="hero__scroll" href="#selected-work">
          Scroll to explore
          <ArrowDown aria-hidden="true" size={15} />
        </a>
      </section>

      <section className="section-light work-section" id="selected-work">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Thoughtful websites for
                <span> real business needs.</span>
              </>
            }
            copy="Each project starts with the problem the business needs to solve—not a template or a trend."
          />

          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard
                featured={index === 0}
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          <Link className="text-link" href="/work">
            Explore all work
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>

      <section className="services-section section-dark">
        <div className="site-shell">
          <SectionHeading
            eyebrow="What I handle"
            title={
              <>
                One relationship.
                <span> Every layer.</span>
              </>
            }
            copy="You focus on running the business. I take ownership of the website—from the structure customers see to the systems keeping it online."
            tone="dark"
          />

          <div className="service-card-grid">
            {/* icon: Icon renames the stored component so JSX can render <Icon />. */}
            {serviceCards.map(({ copy, icon: Icon, number, title }) => (
              <GlassPanel className="service-card" key={title}>
                <div className="service-card__top">
                  <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </GlassPanel>
            ))}
          </div>

          <div className="managed-strip">
            <div className="managed-strip__icon">
              <RefreshCw aria-hidden="true" size={26} strokeWidth={1.5} />
            </div>
            <div>
              <span>Fully managed means fully supported</span>
              <h3>The relationship continues after launch.</h3>
            </div>
            <ul>
              <li>Hosting and monitoring</li>
              <li>Routine content updates</li>
              <li>Technical maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-section section-light">
        <div className="site-shell">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A clear process.
                <span> No handoffs.</span>
              </>
            }
            copy="You work directly with me from the first conversation through launch and ongoing care."
          />

          <ol className="process-grid">
            {processSteps.map((step, index) => (
              <li key={step.label}>
                <span className="process-grid__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.label}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-teaser section-light">
        <div className="site-shell about-teaser__grid">
          <div className="about-teaser__portrait" aria-hidden="true">
            <div className="portrait-grid" />
            <span>NC</span>
            <div className="portrait-status">
              <span />
              Based in South Dakota
            </div>
          </div>

          <div className="about-teaser__content">
            <TechnicalLabel tone="light">The person behind the work</TechnicalLabel>
            <h2>Technical ownership with a human point of view.</h2>
            <p>
              I’m Nick Chan, a computer science student, Daktronics intern, and
              independent developer. I care about making technology useful,
              understandable, and dependable for the people relying on it.
            </p>

            <div className="credential-row">
              <div>
                <Rocket aria-hidden="true" size={19} />
                <span>Industry experience</span>
              </div>
              <div>
                <HeartHandshake aria-hidden="true" size={19} />
                <span>Direct partnership</span>
              </div>
            </div>

            <ButtonLink href="/about" variant="light">
              More about me
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
