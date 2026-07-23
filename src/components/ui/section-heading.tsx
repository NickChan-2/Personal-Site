import type { ReactNode } from "react";
import { TechnicalLabel } from "@/components/ui/technical-label";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  level?: 1 | 2;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
  level = 2,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div
      className={`section-heading section-heading--${align} section-heading--${tone}`}
    >
      <TechnicalLabel tone={tone === "dark" ? "dark" : "light"}>
        {eyebrow}
      </TechnicalLabel>
      <Heading>{title}</Heading>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
