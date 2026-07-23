"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassPanel } from "@/components/ui/glass-panel";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const navTargets = [
  { href: "/", label: "Home" },
  ...navItems,
  { href: "/start-project", label: "Start a project" },
];

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const siteHeaderRef = useRef<HTMLElement>(null);
  const activeGlassRef = useRef<HTMLSpanElement>(null);
  const activeHref = navTargets.find(({ href }) =>
    isActiveRoute(pathname, href),
  )?.href;

  useEffect(() => {
    const header = siteHeaderRef.current;
    const activeGlass = activeGlassRef.current;
    const panel = header?.querySelector<HTMLElement>(".site-header__inner");
    const activeLink = activeHref
      ? panel?.querySelector<HTMLElement>(
          `[data-nav-href="${activeHref}"]`,
        )
      : null;

    if (!panel || !activeGlass || !activeLink) {
      if (activeGlass) {
        activeGlass.dataset.visible = "false";
      }
      return;
    }

    // Measure against the full header panel so one indicator can travel from
    // the brand on the left to every navigation target on the right.
    const positionActiveGlass = () => {
      const panelRect = panel.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const brandInset = activeHref === "/" ? 6 : 0;

      activeGlass.style.setProperty(
        "--nav-active-x",
        `${linkRect.left - panelRect.left - brandInset}px`,
      );
      activeGlass.style.setProperty(
        "--nav-active-y",
        `${linkRect.top - panelRect.top - brandInset}px`,
      );
      activeGlass.style.setProperty(
        "--nav-active-width",
        `${linkRect.width + brandInset * 2}px`,
      );
      activeGlass.style.setProperty(
        "--nav-active-height",
        `${linkRect.height + brandInset * 2}px`,
      );
      activeGlass.dataset.visible = "true";
    };

    positionActiveGlass();

    const resizeObserver = new ResizeObserver(positionActiveGlass);
    resizeObserver.observe(panel);
    resizeObserver.observe(activeLink);

    return () => resizeObserver.disconnect();
  }, [activeHref]);

  return (
    <header className="site-header" ref={siteHeaderRef}>
      <GlassPanel className="site-header__inner liquid-glass-nav">
        <span
          aria-hidden="true"
          className="site-header__active-glass"
          ref={activeGlassRef}
        />

        <Link
          aria-current={pathname === "/" ? "page" : undefined}
          className="brand-mark"
          data-nav-href="/"
          href="/"
        >
          <span className="brand-mark__monogram" aria-hidden="true">
            NC
          </span>
          <span className="brand-mark__name">Nick Chan</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <Link
              aria-current={
                isActiveRoute(pathname, item.href) ? "page" : undefined
              }
              data-nav-href={item.href}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            aria-current={
              isActiveRoute(pathname, "/start-project") ? "page" : undefined
            }
            className="nav-cta"
            data-nav-href="/start-project"
            href="/start-project"
          >
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
              <Link
                aria-current={
                  isActiveRoute(pathname, item.href) ? "page" : undefined
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              aria-current={
                isActiveRoute(pathname, "/start-project")
                  ? "page"
                  : undefined
              }
              className="nav-cta"
              href="/start-project"
            >
              Start a project
            </Link>
          </nav>
        </details>
      </GlassPanel>
    </header>
  );
}
