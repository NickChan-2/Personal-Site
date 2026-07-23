import { ButtonLink } from "@/components/ui/buttons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TechnicalLabel } from "@/components/ui/technical-label";

type ContactCtaProps = {
  title?: string;
  copy?: string;
};

export function ContactCta({
  title = "Your website should feel handled.",
  copy = "Tell me what your business needs. I’ll help turn it into a clear, reliable website and stay around to keep it working.",
}: ContactCtaProps) {
  return (
    <section className="contact-cta section-dark">
      <div className="site-shell">
        <GlassPanel className="contact-cta__panel">
          <div>
            <TechnicalLabel>Next project</TechnicalLabel>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <ButtonLink href="/start-project">Start a project</ButtonLink>
        </GlassPanel>
      </div>
    </section>
  );
}
