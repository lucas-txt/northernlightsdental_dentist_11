import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { doctors, site } from "@/lib/content";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return { title: "Doctor not found" };
  }

  return {
    title: doctor.name,
    description: `${doctor.name} — ${doctor.role}. ${doctor.preview}`,
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  const index = doctors.findIndex((item) => item.slug === slug);
  const nextDoctor = doctors[(index + 1) % doctors.length];

  return (
    <>
      <PageHero
        eyebrow={doctor.role}
        title={doctor.name}
        description={doctor.preview}
        image={{ src: doctor.image, alt: doctor.name }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                All doctors
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display-section mt-6 text-ink">
                In {doctor.firstName}&apos;s words.
              </h2>
            </Reveal>

            <div className="prose-clinic mt-8">
              {doctor.bio.map((paragraph, paragraphIndex) => (
                <Reveal key={paragraph.slice(0, 40)} delay={0.12 + paragraphIndex * 0.05}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <blockquote className="mt-10 rounded-[2rem] border border-line bg-paper p-6 sm:p-8">
                <Quote className="h-7 w-7 text-teal" aria-hidden="true" />
                <p className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
                  “{doctor.quote}”
                </p>
                <footer className="mt-5 border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  {doctor.name} · {doctor.role}
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-paper">
                <div className="relative aspect-[4/5] bg-ice">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 90vw, 34vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="eyebrow text-teal">Visit us</p>
                  <ul className="mt-4 space-y-4 text-sm">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                      <span className="text-slate">{site.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                      <span className="text-slate">{site.hours}</span>
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
                  </ul>
                  <Button asChild className="mt-5 w-full">
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Schedule your appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <Link
                href={`/doctors/${nextDoctor.slug}`}
                className="group mt-4 flex items-center justify-between gap-4 rounded-3xl border border-line bg-paper p-5 transition-colors hover:bg-ice"
              >
                <span>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate/60">
                    Next doctor
                  </span>
                  <span className="mt-1 block font-display text-xl text-ink">
                    {nextDoctor.name}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-teal transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
