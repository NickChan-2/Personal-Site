import type { ReactNode } from "react";
import { Check, CircleDot } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";

type Fact = {
  label: string;
  value: string;
};

export function ProjectFactGrid({ facts }: { facts: Fact[] }) {
  return (
    <div className="project-fact-grid">
      {facts.map((fact) => (
        <div key={fact.label}>
          <span>{fact.label}</span>
          <strong>{fact.value}</strong>
        </div>
      ))}
    </div>
  );
}

export function InsightPanel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <GlassPanel className="insight-panel" tone="light">
      <CircleDot aria-hidden="true" size={18} />
      <div>
        <span>{label}</span>
        {/* MDX wraps prose children in its own <p>. A div prevents invalid
            paragraph-within-paragraph markup and the hydration mismatch it causes. */}
        <div className="insight-panel__copy">{children}</div>
      </div>
    </GlassPanel>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="feature-list">
      {items.map((item) => (
        <div key={item}>
          <Check aria-hidden="true" size={17} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
