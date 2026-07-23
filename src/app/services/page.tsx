import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Check,
  CloudCog,
  Code2,
  Compass,
  RefreshCw,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website strategy, design, development, hosting, and ongoing care for small businesses.",
};

const buildServices = [
  {
    icon: Compass,
    title: "Strategy & structure",
    copy: "Clarify the audience, content, priorities, and path from first visit to inquiry.",
  },
  {
    icon: Code2,
    title: "Design & development",
    copy: "Create a distinctive, responsive site built for real customers and real devices.",
  },
  {
    icon: BarChart3,
    title: "Launch essentials",
    copy: "Connect forms, analytics, metadata, performance checks, and the production domain.",
  },
];

const careItems = [
  "Managed hosting and deployments",
  "Monitoring and technical updates",
  "Routine text, image, and service changes",
  "Troubleshooting and direct support",
  "Guidance as the business evolves",
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero page-hero--services section-dark">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="site-shell page-hero__inner">
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                A better website,
                <span> without another system to manage.</span>
              </>
            }
            copy="I handle the strategy, design, build, hosting, and ongoing updates—so your website stays useful after launch."
            tone="dark"
          />
        </div>
      </section>

      <section className="section-light service-build-section">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Website design & build"
            title={
              <>
                From a blank page to
                <span> a working business asset.</span>
              </>
            }
          />
          <div className="service-detail-grid">
            {buildServices.map(({ copy, icon: Icon, title }, index) => (
              <article key={title}>
                <div className="service-detail-grid__icon">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="managed-care-section section-dark">
        <div className="site-shell managed-care-grid">
          <div>
            <SectionHeading
              eyebrow="Fully managed care"
              title={
                <>
                  Launch is a milestone,
                  <span> not a handoff.</span>
                </>
              }
              copy="I remain responsible for the technical layer and the routine updates that keep the site accurate."
              tone="dark"
            />
            <ul className="care-list">
              {careItems.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassPanel className="care-system-card">
            <div className="care-system-card__top">
              <CloudCog aria-hidden="true" size={25} />
              <span>Managed system</span>
            </div>
            <div className="care-system-card__diagram" aria-hidden="true">
              <span>Build</span>
              <ArrowRight size={15} />
              <span>Host</span>
              <ArrowRight size={15} />
              <span>Care</span>
            </div>
            <div className="care-system-card__rows">
              <div>
                <RefreshCw aria-hidden="true" size={17} />
                <span>Routine updates</span>
                <strong>Included</strong>
              </div>
              <div>
                <Wrench aria-hidden="true" size={17} />
                <span>Major expansion</span>
                <strong>Scoped separately</strong>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>

      <section className="section-light expansion-section">
        <div className="site-shell expansion-grid">
          <div>
            <span className="expansion-grid__index">03</span>
            <h2>Grow when the business needs more.</h2>
          </div>
          <div>
            <p>
              New pages, booking, payments, calculators, client portals, and
              custom integrations can be scoped as the website and business
              mature.
            </p>
            <p>
              Routine care stays predictable. Larger additions receive their
              own clear proposal.
            </p>
            <Link className="text-link" href="/start-project">
              Tell me what you need
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
