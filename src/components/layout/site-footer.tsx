import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__grid">
        <div>
          <Link className="brand-mark brand-mark--footer" href="/">
            <span className="brand-mark__monogram" aria-hidden="true">
              NC
            </span>
            <span className="brand-mark__name">Nick Chan</span>
          </Link>
          <p className="site-footer__statement">
            Independent web developer and technology partner for small
            businesses.
          </p>
        </div>

        <div className="site-footer__links">
          <p>Navigate</p>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="site-footer__links">
          <p>Start something</p>
          <Link href="/start-project">
            Project inquiry
            <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          <span>Brookings, South Dakota</span>
        </div>
      </div>

      <div className="site-shell site-footer__base">
        <span>© {new Date().getFullYear()} Nick Chan</span>
        <span>Designed to stay useful.</span>
      </div>
    </footer>
  );
}
