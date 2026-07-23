import {
  Braces,
  Check,
  Cloud,
  PenTool,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";

const services = [
  { icon: PenTool, label: "Design" },
  { icon: Braces, label: "Development" },
  { icon: Cloud, label: "Hosting" },
  { icon: RefreshCw, label: "Updates" },
];

export function HeroPanelStack() {
  return (
    <div className="hero-stack" aria-label="Fully managed website services">
      <GlassPanel className="hero-stack__service-card">
        <div className="panel-topline">
          <span>Full service system</span>
          <span>01 / 03</span>
        </div>
        <h2>One partner. Every layer.</h2>
        <div className="service-chip-grid">
          {services.map(({ icon: Icon, label }) => (
            <div className="service-chip" key={label}>
              <Icon aria-hidden="true" size={16} strokeWidth={1.6} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel className="hero-stack__availability-card">
        <div className="availability-orbit" aria-hidden="true">
          <span />
        </div>
        <div>
          <span className="availability-copy">Availability</span>
          <strong>Open for select projects</strong>
        </div>
      </GlassPanel>

      <GlassPanel className="hero-stack__care-card">
        <div className="panel-icon">
          <ShieldCheck aria-hidden="true" size={22} strokeWidth={1.5} />
        </div>
        <div>
          <span className="availability-copy">Managed care</span>
          <strong>Launch is the beginning.</strong>
        </div>
        <ul>
          <li>
            <Check aria-hidden="true" size={14} /> Hosting & monitoring
          </li>
          <li>
            <Check aria-hidden="true" size={14} /> Routine content updates
          </li>
        </ul>
      </GlassPanel>
    </div>
  );
}
