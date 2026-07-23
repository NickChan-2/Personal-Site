import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Check,
  CircleHelp,
  ListChecks,
  Send,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TechnicalLabel } from "@/components/ui/technical-label";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Nick Chan about your business, your goals, and the website you need.",
};

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Your business",
    copy: "A little context about what you do and who you help.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "The project",
    copy: "What you want the website to accomplish and what exists today.",
  },
  {
    number: "03",
    icon: CircleHelp,
    title: "The details",
    copy: "Timing, useful links, and anything else I should understand.",
  },
];

export default function StartProjectPage() {
  return (
    <main id="main-content">
      <section className="inquiry-page section-dark">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="inquiry-page__glow" aria-hidden="true" />
        <div className="site-shell inquiry-layout">
          <div className="inquiry-intro">
            <TechnicalLabel>Project inquiry</TechnicalLabel>
            <h1>
              Tell me what the business
              <span> needs next.</span>
            </h1>
            <p>
              You do not need a finished brief or the right technical words.
              Share what you know, and I’ll help shape the next step.
            </p>

            <div className="inquiry-expectations">
              <span>
                <Check aria-hidden="true" size={16} />
                Short, guided inquiry
              </span>
              <span>
                <Check aria-hidden="true" size={16} />
                No commitment required
              </span>
              <span>
                <Check aria-hidden="true" size={16} />
                You will hear directly from me
              </span>
            </div>
          </div>

          {/* Phase 4 only defines the inquiry structure. This deliberately
              remains non-submitting until Phase 5 adds validation and email. */}
          <GlassPanel as="section" className="inquiry-card">
            <div className="inquiry-card__top">
              <div>
                <span>Project fit</span>
                <strong>A quick three-step conversation</strong>
              </div>
              <span className="inquiry-card__status">Phase 5 connection</span>
            </div>

            <ol className="inquiry-step-list">
              {steps.map(({ copy, icon: Icon, number, title }) => (
                <li key={number}>
                  <span className="inquiry-step-list__number">{number}</span>
                  <div className="inquiry-step-list__icon">
                    <Icon aria-hidden="true" size={19} />
                  </div>
                  <div>
                    <h2>{title}</h2>
                    <p>{copy}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="inquiry-card__coming-soon">
              <Send aria-hidden="true" size={19} />
              <div>
                <strong>The guided inquiry is the next build phase.</strong>
                <p>
                  Its email delivery, validation, privacy language, and success
                  states will be connected together before this page accepts
                  submissions.
                </p>
              </div>
            </div>

            <button className="inquiry-preview-button" disabled type="button">
              Open inquiry
              <ArrowRight aria-hidden="true" size={17} />
            </button>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
}
