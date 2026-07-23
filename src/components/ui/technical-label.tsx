import type { ReactNode } from "react";

type TechnicalLabelProps = {
  children: ReactNode;
  tone?: "dark" | "light";
};

export function TechnicalLabel({
  children,
  tone = "dark",
}: TechnicalLabelProps) {
  return (
    <span className={`technical-label technical-label--${tone}`}>
      <span aria-hidden="true" className="technical-label__dot" />
      {children}
    </span>
  );
}
