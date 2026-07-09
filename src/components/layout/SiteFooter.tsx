import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

const INSTAGRAM_URL = "https://www.instagram.com/trailcheck_lacrosse/";

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

type SiteFooterProps = {
  logoSrc: string | null;
};

export default function SiteFooter({ logoSrc }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt="TrailCheck Lacrosse"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  unoptimized
                />
              ) : (
                <span className="text-lg font-semibold text-white">
                  TrailCheck
                </span>
              )}
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              College lacrosse recruiting guidance for high school players and
              families.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Founded by Kevin Michaud
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">
              Get in Touch
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:klm0027@yahoo.com"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  klm0027@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13152565366"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  (315) 256-5366
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-white"
                >
                  <InstagramIcon />
                  @trailcheck_lacrosse
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-hover"
            >
              Start Your Journey
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              &copy; 2026 TrailCheck Lacrosse. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
