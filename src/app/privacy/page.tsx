import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TechnicalLabel } from "@/components/ui/technical-label";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How information from Nick Chan's website and project inquiry is handled.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="legal-page section-dark">
        <div className="page-hero__grid" aria-hidden="true" />
        <div className="site-shell legal-page__inner">
          <Link className="legal-page__back" href="/">
            <ArrowLeft aria-hidden="true" size={16} />
            Back home
          </Link>
          <TechnicalLabel>Privacy note</TechnicalLabel>
          <h1>Clear, minimal data use.</h1>
          <p className="legal-page__lead">
            This site only collects what is needed to understand project
            inquiries, reply to people, protect the form, and understand
            overall site performance.
          </p>

          <div className="legal-page__content">
            <section>
              <h2>Project inquiries</h2>
              <p>
                When you send the project form, the details you provide are
                emailed to Nick Chan and used only to evaluate and respond to
                your inquiry. The email address you provide also receives a
                confirmation message.
              </p>
            </section>
            <section>
              <h2>Service providers</h2>
              <p>
                Resend processes form email delivery. Cloudflare hosts and
                secures the site, provides the optional Turnstile security
                check, and supplies privacy-focused aggregate web analytics.
                These services may process technical information such as an IP
                address to deliver and protect the site.
              </p>
            </section>
            <section>
              <h2>Retention and sharing</h2>
              <p>
                Inquiry details are retained only as long as they are useful
                for the potential or active working relationship. They are not
                sold or used for mailing lists, and they are not shared beyond
                the providers needed to operate this website.
              </p>
            </section>
            <section>
              <h2>Your information</h2>
              <p>
                To ask what information is held about you, request a correction,
                or ask for deletion, use the project inquiry and state that
                request in the additional information field.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
