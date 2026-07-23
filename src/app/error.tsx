"use client";

import { RotateCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error-page section-dark" id="main-content">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="site-shell error-page__inner">
        <span>Something interrupted the page</span>
        <h1>That did not load as expected.</h1>
        <p>
          The problem may be temporary. Try the page again, or return to the
          homepage if it continues.
        </p>
        <button onClick={reset} type="button">
          <RotateCcw aria-hidden="true" size={17} />
          Try again
        </button>
      </div>
    </main>
  );
}
