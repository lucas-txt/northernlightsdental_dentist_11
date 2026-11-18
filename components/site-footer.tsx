import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { navItems, quickLinks, site } from "@/lib/content";

const socials = [
  { label: "Facebook", href: site.facebook },
  { label: "Instagram", href: site.instagram },
  { label: "YouTube", href: site.youtube },
];

export function SiteFooter() {
  return (
    <footer className="aurora-field grain relative overflow-hidden text-cream">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-aurora/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative z-10">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.6fr_0.6fr_0.85fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/65">
              Professional dental care in a warm, welcoming environment for ages
              1 to 101+ in Fargo, North Dakota and surrounding communities.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-cream/80 transition-colors hover:border-aurora/50 hover:text-aurora"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-mint">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/65 transition-colors hover:text-aurora"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mint">Resources</p>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cream/65 transition-colors hover:text-aurora"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mint">Visit</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aurora" aria-hidden="true" />
                <span className="text-cream/65">{site.address}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 font-bold text-cream transition-colors hover:text-aurora"
                >
                  <Phone className="h-4 w-4 text-aurora" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-cream/65 transition-colors hover:text-aurora"
                >
                  <Mail className="h-4 w-4 text-aurora" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aurora" aria-hidden="true" />
                <span className="text-cream/65">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <p>
            {site.credit} · Enfold WordPress Theme by Kriesi
          </p>
        </div>
      </div>
    </footer>
  );
}
