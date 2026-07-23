import Link from "next/link";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" href="/">
          <span className="brand-mark__monogram" aria-hidden="true">
            NC
          </span>
          <span className="brand-mark__name">Nick Chan</span>
        </Link>

        <nav aria-label="Primary navigation" className="desktop-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/start-project">
            Start a project
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation" className="mobile-nav__panel">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="nav-cta" href="/start-project">
              Start a project
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
