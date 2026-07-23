import { ButtonLink } from "@/components/ui/buttons";
import { TechnicalLabel } from "@/components/ui/technical-label";

export default function NotFound() {
  return (
    <main className="not-found section-dark" id="main-content">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="site-shell not-found__inner">
        <TechnicalLabel>404 / Page not found</TechnicalLabel>
        <h1>This page is not part of the build.</h1>
        <p>
          The link may be old, or the address may have taken a wrong turn.
        </p>
        <ButtonLink href="/">Return home</ButtonLink>
      </div>
    </main>
  );
}
