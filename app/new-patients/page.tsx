import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Orbit,
  Phone,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { news, quickLinks, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Accepting new patients at Northern Lights Dental in Fargo, ND. Find patient forms, online payment, a virtual tour, office hours and appointment information.",
};

const icons = {
  orbit: Orbit,
  file: FileText,
  card: CreditCard,
} as const;

const welcomePoints = [
  "Accepting New Patients!",
  "Ages 1 to 101+",
  "M-Th 8:00am-5:00pm Friday 8:00am-noon",
  "Fargo, North Dakota",
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Accepting New Patients!"
        title="New Patients"
        description="Scheduling a visit is the first step toward a healthy smile. Please give us a call at 701-551-2000 or fill out the form below and we’ll get in touch with you soon! We look forward to serving you."
        image={{
          src: "/assets/images/young-patient.jpg",
          alt: "A young patient smiling at Northern Lights Dental",
        }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <SectionHeading
              eyebrow="Before your visit"
              title="Everything you need, in one place."
              intro="Start with the forms, make a payment or take a virtual tour. Then call or send a request when you are ready to schedule."
            />
            <Reveal delay={0.1}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {welcomePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-semibold text-ink"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aurora/15 text-teal">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {quickLinks.map((link, index) => {
              const Icon = icons[link.icon];
              return (
                <Reveal key={link.label} delay={index * 0.07}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-lift group flex h-full flex-col rounded-3xl border border-line bg-paper p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ice text-teal transition-colors group-hover:bg-teal group-hover:text-cream">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-slate/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="mt-6 font-display text-2xl text-ink">
                      {link.label}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate">
                      {link.description}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 sm:py-24 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Office Hours"
              title="Plan your visit."
              intro="Call us, send an appointment request, or stop by the practice in Fargo."
            />
            <Reveal delay={0.1}>
              <div className="mt-7 rounded-[2rem] border border-line bg-paper p-6">
                <p className="eyebrow text-teal">Northern Lights Dental</p>
                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <p className="text-slate">{site.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <p className="text-slate">{site.hours}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <a
                      href={site.phoneHref}
                      className="font-bold text-ink transition-colors hover:text-teal"
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <a
                      href={site.emailHref}
                      className="text-slate transition-colors hover:text-teal"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Request an appointment
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <article className="card-lift group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-paper">
              <a
                href={news[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ice">
                  <Image
                    src={news[1].image}
                    alt={news[1].alt}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-night/35 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-md">
                    Practice news
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <time
                    dateTime={news[1].date}
                    className="text-xs font-semibold text-slate/70"
                  >
                    {news[1].displayDate}
                  </time>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-teal">
                    {news[1].title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate">
                    A practice update for patients without dental insurance.
                    Read the original announcement for full details.
                  </p>
                  <p className="link-arrow mt-auto pt-6 text-sm text-teal">
                    Read more
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </p>
                </div>
              </a>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
