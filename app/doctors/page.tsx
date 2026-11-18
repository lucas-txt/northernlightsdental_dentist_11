import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { DoctorCard } from "@/components/doctor-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Doctors",
  description:
    "Meet Dr. Chris Schmaltz, Dr. Neha Patel and Dr. Courtney Gieseke — the dentists at Northern Lights Dental in Fargo, North Dakota.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet the Doctors"
        description="Three dentists with different paths, shared values and a genuine commitment to the Fargo-Moorhead community."
        image={{
          src: "/assets/images/about-team.jpg",
          alt: "The Northern Lights Dental team",
        }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={index * 0.08}>
                <DoctorCard doctor={doctor} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-6 rounded-[2rem] border border-line bg-paper p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ice text-teal">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                “We treat our patients with the utmost compassion and will ensure
                you achieve and maintain a bright, healthy smile.”
              </p>
              <Button asChild variant="dark">
                <Link href="/contact">
                  Book a visit
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
