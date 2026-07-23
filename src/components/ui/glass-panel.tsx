import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// This image stores horizontal movement in its red channel and vertical
// movement in green. Stretching it across a panel creates a smooth lens around
// every edge while leaving the center calm enough for readable content.
const GLASS_DISPLACEMENT_MAP =
  "data:image/png;base64,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";

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
      {/* CSS draws the refractive surface and rim on the panel itself. Keeping
          only real content here makes the component easier to understand. */}
      {children}
    </Component>
  );
}

// The filter only needs to exist once. RootLayout renders it globally, then
// every GlassPanel references the same ID from CSS.
export function LiquidGlassFilter() {
  return (
    <svg
      aria-hidden="true"
      className="liquid-glass-filter"
      focusable="false"
    >
      <filter
        colorInterpolationFilters="sRGB"
        height="240%"
        id="liquid-glass-displacement"
        width="110%"
        x="-5%"
        y="-70%"
      >
        <feImage
          height="100%"
          href={GLASS_DISPLACEMENT_MAP}
          preserveAspectRatio="none"
          result="displacement-map"
          width="100%"
          x="0"
          y="0"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="displacement-map"
          scale="32"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
