import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { DoctorCard } from "@/components/doctor-card";
import { Gallery } from "@/components/gallery";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { doctors, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "At Northern Lights Dental, we are committed to providing excellent quality dental care to you and your families in and around Fargo, North Dakota.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Top of the line technology",
    copy: "Modern tools and a thoughtful approach, so every visit starts with a clear picture.",
  },
  {
    icon: Sparkles,
    title: "Abundant services",
    copy: "Seven services under one roof, from preventive care to restorative treatment.",
  },
  {
    icon: Users,
    title: "A comfortable, friendly environment",
    copy: "A warm welcome for ages 1 to 101+, in the heart of Fargo.",
  },
  {
    icon: Heart,
    title: "The utmost compassion",
    copy: "We treat our patients with the utmost compassion, every single visit.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our practice"
        title="About Northern Lights Dental"
        description="At Northern Lights Dental, we are committed to providing excellent quality dental care to you and your families in and around Fargo, North Dakota. You can expect top of the line technology and abundant services in a comfortable, friendly environment. We treat our patients with the utmost compassion and will ensure you achieve and maintain a bright, healthy smile."
        image={{
          src: "/assets/images/about-team.jpg",
          alt: "The Northern Lights Dental team in the practice",
        }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="What guides us"
            title="Care built on four promises."
            intro="Every detail of the practice comes back to the same idea: excellent care should also feel comfortable, friendly and personal."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <article className="card-lift flex h-full flex-col rounded-3xl border border-line bg-paper p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ice text-teal">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl leading-tight text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate">{value.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Gallery />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Inside the practice"
              title="A calm place to care for your smile."
              intro="Take a look around Northern Lights Dental — from the treatment rooms to the team who will welcome you."
            />
            <Reveal delay={0.12}>
              <div className="mt-7 rounded-3xl border border-line bg-cream p-6">
                <p className="font-display text-2xl leading-snug text-ink">
                  “We treat our patients with the utmost compassion and will
                  ensure you achieve and maintain a bright, healthy smile.”
                </p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                    Northern Lights Dental
                  </p>
                  <p className="text-xs text-slate">{site.serviceArea}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ice">
        <div className="container-page">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Meet the Doctors"
              title="The people behind the practice."
              intro="Three dentists, each with a distinct path to Fargo and a shared commitment to caring for this community."
            />
            <Reveal delay={0.1}>
              <Button asChild variant="secondary">
                <Link href="/doctors">
                  Meet the full team
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={index * 0.07}>
                <DoctorCard doctor={doctor} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="arch relative aspect-[4/5] overflow-hidden border border-line bg-paper shadow-soft">
                <Image
                  src="/assets/images/team-5753.jpg"
                  alt="Northern Lights Dental team members"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-soft">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-teal">
                  All ages
                </p>
                <p className="mt-1 font-display text-2xl text-ink">1 to 101+</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Dentistry for the whole family"
              title="Kid Friendly – Dentistry for the Whole Family"
              intro="We love kids and look forward to helping them achieve a shiny, cavity-free, healthy smile!"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate">
                From a first check-up to care for the whole family, our Fargo
                practice is built to make every visit feel a little easier.
              </p>
              <Button asChild className="mt-7" variant="dark">
                <Link href="/contact">
                  Schedule your appointment
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
