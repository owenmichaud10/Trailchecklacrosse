"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

type SiteHeaderProps = {
  logoSrc: string | null;
};

export default function SiteHeader({ logoSrc }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isClient]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const handleNavClick = (href: string) => {
    closeMenu();

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      requestAnimationFrame(() => {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const navLinkClass =
    "text-sm font-medium tracking-wide text-white/75 transition-colors hover:text-white";
  const mobileNavLinkClass =
    "border-b border-white/5 py-4 text-base font-medium text-white/85 transition-colors last:border-0 hover:text-gold";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => handleNavClick("/")}
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="TrailCheck Lacrosse"
              width={48}
              height={48}
              className="h-10 w-10 object-contain lg:h-11 lg:w-11"
              priority
              unoptimized
            />
          ) : (
            <span className="text-sm font-semibold text-white">TrailCheck</span>
          )}
        </Link>

        <nav
          className="hidden items-center gap-5 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={navLinkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={navLinkClass}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className="relative z-50 inline-flex touch-manipulation items-center justify-center rounded-md p-3 text-white lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isClient ? menuOpen : false}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {isClient && menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-navy transition-all duration-300 ease-in-out lg:hidden ${
          isClient && menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={mobileNavLinkClass}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={mobileNavLinkClass}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
