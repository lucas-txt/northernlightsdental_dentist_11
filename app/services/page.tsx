import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, CalendarCheck, Phone, Sparkles } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceDirectory } from "@/components/service-directory";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "General exams and cleanings, sealants and fillings, dentures, same-day crowns, bridges and veneers, implants, root canal treatment, gum disease treatment and professional tooth whitening in Fargo, ND.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Services We Provide"
        description="We view each visit from the mind of our patients. By staying up to date on research and education, we can correctly diagnose, assess risk, and thoroughly consider options with the patient. We strongly believe in electing for conservative approaches whenever possible."
        image={{
          src: "/assets/images/office-7657.jpg",
          alt: "A bright treatment room at Northern Lights Dental",
        }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="What We Offer"
              title={
                <>
                  Seven services.
                  <br className="hidden sm:block" /> One connected plan.
                </>
              }
              intro="Explore the care available at Northern Lights Dental. Every service below is offered by our team in Fargo, North Dakota."
            />
            <Reveal delay={0.12}>
              <div className="mt-7 rounded-3xl border border-line bg-paper p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Sparkles className="h-4 w-4 text-teal" aria-hidden="true" />
                  Not sure where to start?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate">
                  Call us at {site.phone} or send an appointment request. We will
                  help you find the right next step.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Request a visit
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Call us
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <ServiceDirectory />
        </div>
      </section>

      <section className="bg-ice py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Dentistry for the whole family"
              title="Kid Friendly – Dentistry for the Whole Family"
              intro="We love kids and look forward to helping them achieve a shiny, cavity-free, healthy smile!"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate">
                The same welcoming environment that puts adults at ease works for
                our youngest patients too — with care for ages 1 to 101+.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="dark">
                  <Link href="/contact">
                    Schedule your appointment
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href={site.phoneHref}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="arch relative aspect-[4/5] overflow-hidden border border-line bg-paper shadow-soft">
                <Image
                  src="/assets/images/young-patient.jpg"
                  alt="A young patient smiling at Northern Lights Dental"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-soft">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-teal">
                  All ages
                </p>
                <p className="mt-1 font-display text-2xl text-ink">1 to 101+</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions, answered."
            intro="Straight answers about visiting Northern Lights Dental. If your question is not here, call us — we are happy to help."
          />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible defaultValue="faq-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
