import type { ReactNode } from "react";
import { TechnicalLabel } from "@/components/ui/technical-label";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${align} section-heading--${tone}`}
    >
      <TechnicalLabel tone={tone === "dark" ? "dark" : "light"}>
        {eyebrow}
      </TechnicalLabel>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
