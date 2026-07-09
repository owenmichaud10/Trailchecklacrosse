import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { siteConfig } from "@/lib/site-config";
import { getLogoSrc } from "@/lib/site-assets";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | College Lacrosse Recruiting Guidance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "college lacrosse recruiting",
    "lacrosse recruiting consulting",
    "men's lacrosse recruiting",
    "recruiting guidance",
    "TrailCheck Lacrosse",
    "Kevin Michaud",
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.headline} ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo/trailcheck-logo.png",
        width: 1024,
        height: 1024,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.headline} ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/logo/trailcheck-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    areaServed: "United States",
    serviceType: "College lacrosse recruiting consulting",
    sameAs: [siteConfig.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoSrc = getLogoSrc();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        <SiteHeader logoSrc={logoSrc} />
        <main className="flex-1 pt-16">{children}</main>
        <SiteFooter logoSrc={logoSrc} />
      </body>
    </html>
  );
}
