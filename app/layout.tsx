import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nldentalfargo.com"),
  title: {
    default: "Northern Lights Dental — Professional Dental Care for the Entire Family",
    template: "%s — Northern Lights Dental",
  },
  description:
    "Northern Lights Dental offers professional dental care in a warm, welcoming environment for ages 1 to 101+ in Fargo, North Dakota. Accepting new patients.",
  keywords: [
    "dentist Fargo",
    "Northern Lights Dental",
    "family dentistry",
    "dental care Fargo ND",
    "new patients",
  ],
  openGraph: {
    title: "Northern Lights Dental — Professional Dental Care for the Entire Family",
    description:
      "Professional dental care in a warm, welcoming environment for ages 1 to 101+ in Fargo, North Dakota.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/images/hero-raceway.jpg", width: 2000, height: 1174 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#061826",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: "https://nldentalfargo.com",
  image: "https://nldentalfargo.com/assets/images/hero-raceway.jpg",
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.848475,
    longitude: -96.849786,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [site.facebook, site.instagram, site.youtube],
  areaServed: "Fargo, North Dakota",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
