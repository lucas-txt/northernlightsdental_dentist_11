import Link from "next/link";
import { CalendarCheck, Clock, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="bg-cream pb-20 pt-4 sm:pb-24">
      <div className="container-page">
        <Reveal>
          <div className="aurora-field grain relative overflow-hidden rounded-[2.5rem] px-6 py-10 text-cream shadow-soft sm:rounded-[3rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-aurora/20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-aurora/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <Badge variant="dark">Accepting New Patients!</Badge>
                <h2 className="display-section mt-6 max-w-2xl text-cream">
                  We love to see you <span className="aurora-text">smile!</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-cream/70">
                  We at Northern Lights Dental offer professional dental care in
                  a warm, welcoming environment for ages 1 to 101+. Scheduling a
                  visit is the first step toward a healthy smile.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Schedule your appointment
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {site.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="glass-dark rounded-3xl p-5 sm:p-6">
                <p className="eyebrow text-mint">Visit us</p>
                <div className="mt-4 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aurora" aria-hidden="true" />
                    <p className="text-cream/78">{site.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-aurora" aria-hidden="true" />
                    <p className="text-cream/78">{site.hours}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aurora" aria-hidden="true" />
                    <a
                      href={site.phoneHref}
                      className="font-bold text-cream transition-colors hover:text-aurora"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-5 h-px bg-white/10" />
                <a
                  href={site.emailHref}
                  className="mt-4 inline-flex text-sm font-semibold text-mint transition-colors hover:text-aurora"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
