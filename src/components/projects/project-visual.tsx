import type { Project } from "@/lib/projects";

type ProjectVisualProps = {
  variant: Project["accent"];
  compact?: boolean;
};

export function ProjectVisual({
  variant,
  compact = false,
}: ProjectVisualProps) {
  if (variant === "therapy") {
    return (
      <div
        className={`project-visual project-visual--therapy ${
          compact ? "project-visual--compact" : ""
        }`}
        aria-label="Abstract preview of the therapy-practice website"
        role="img"
      >
        <div className="mock-browser mock-browser--therapy">
          <div className="mock-browser__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="therapy-mock">
            <div className="therapy-mock__nav">
              <span>Practice name</span>
              <span>Begin here</span>
            </div>
            <div className="therapy-mock__body">
              <span className="therapy-mock__eyebrow">A space to feel heard</span>
              <strong>Support that meets you where you are.</strong>
              <p>Clear, compassionate care with a simple first step.</p>
              <div className="therapy-mock__action">Request a consultation</div>
            </div>
          </div>
        </div>
        <div className="visual-note visual-note--therapy">
          <span>Design priority</span>
          <strong>Calm clarity</strong>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual project-visual--contractor ${
        compact ? "project-visual--compact" : ""
      }`}
      aria-label="Abstract preview of the Northline Contracting concept"
      role="img"
    >
      <div className="contractor-mark" aria-hidden="true">
        N
      </div>
      <div className="mock-browser mock-browser--contractor">
        <div className="mock-browser__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="contractor-mock">
          <div className="contractor-mock__nav">
            <span>NORTHLINE</span>
            <span>Get an estimate</span>
          </div>
          <div className="contractor-mock__body">
            <span>Built right. Built local.</span>
            <strong>Work that earns its reputation.</strong>
            <div className="contractor-mock__stats">
              <span>Residential</span>
              <span>Commercial</span>
              <span>Repairs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="visual-note visual-note--contractor">
        <span>Primary action</span>
        <strong>Request estimate</strong>
      </div>
    </div>
  );
}
