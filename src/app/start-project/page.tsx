import type { Metadata } from "next";
import { Check } from "lucide-react";
import { InquiryForm } from "@/components/inquiry/inquiry-form";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TechnicalLabel } from "@/components/ui/technical-label";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Nick Chan about your business, your goals, and the website you need.",
};

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
                A personal reply within two business days
              </span>
            </div>
          </div>

          <GlassPanel as="section" className="inquiry-card">
            <InquiryForm
              turnstileSiteKey={
                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
              }
            />
          </GlassPanel>
        </div>
      </section>
    </main>
  );
}
