import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// T is a generic: it lets the caller change the rendered HTML element with
// `as` while TypeScript still checks that element's valid props.
type GlassPanelProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function GlassPanel<T extends ElementType = "div">({
  as,
  children,
  className = "",
  tone = "dark",
  ...props
}: GlassPanelProps<T>) {
  // A normal panel is a div, but `as="section"` produces semantic <section>.
  const Component = as ?? "div";

  return (
    <Component
      className={`glass-panel glass-panel--${tone} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
