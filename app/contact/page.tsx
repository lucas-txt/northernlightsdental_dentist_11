import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Orbit,
  Phone,
} from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { quickLinks, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Make an Appointment",
  description:
    "Schedule a visit at Northern Lights Dental in Fargo, ND. Call 701-551-2000 or send an appointment request. M-Th 8:00am-5:00pm, Friday 8:00am-noon.",
};

const icons = {
  orbit: Orbit,
  file: FileText,
  card: CreditCard,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Contact"
        title="Make an Appointment"
        description="Scheduling a visit is the first step toward a healthy smile. Please give us a call at 701-551-2000 or fill out the form below and we’ll get in touch with you soon! We look forward to serving you."
      />

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-line bg-paper p-6">
                <h2 className="display-card text-ink">Northern Lights Dental</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <span className="text-slate">{site.address}</span>
                  </li>
                  <li>
                    <a
                      href={site.phoneHref}
                      className="flex items-center gap-3 font-bold text-ink transition-colors hover:text-teal"
                    >
                      <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.emailHref}
                      className="flex items-center gap-3 text-slate transition-colors hover:text-teal"
                    >
                      <Mail className="h-4 w-4 text-teal" aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-5 border-t border-line pt-5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    Office Hours
                  </h3>
                  <p className="mt-2 flex items-start gap-3 text-sm text-slate">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    {site.hours}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-3.5 py-2 text-xs font-bold text-slate transition-colors hover:border-teal/40 hover:text-teal"
                  >
                    Facebook
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-3.5 py-2 text-xs font-bold text-slate transition-colors hover:border-teal/40 hover:text-teal"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-3.5 py-2 text-xs font-bold text-slate transition-colors hover:border-teal/40 hover:text-teal"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-paper">
                <div className="map-surface relative h-52" aria-hidden="true">
                  <div className="map-pin">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-3 left-4 rounded-full border border-line bg-paper/90 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate backdrop-blur-sm">
                    4150 19th Ave S · Fargo
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                  <p className="text-xs font-semibold text-slate">
                    {site.coordinates}
                  </p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-sm text-teal"
                  >
                    Get directions
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ice py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((link, index) => {
              const Icon = icons[link.icon];
              return (
                <Reveal key={link.label} delay={index * 0.06}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-3xl border border-line bg-paper p-5 transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ice text-teal transition-colors group-hover:bg-teal group-hover:text-cream">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-ink">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate">
                        {link.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-slate/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
