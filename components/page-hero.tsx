import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, CalendarCheck, Phone } from "lucide-react";

import { AuroraBackdrop } from "@/components/aurora-backdrop";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  image?: { src: string; alt: string };
  aside?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  aside,
  align = "left",
  className,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "aurora-field grain relative overflow-hidden pb-16 pt-12 text-cream sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20",
        className,
      )}
    >
      <AuroraBackdrop />
      <div className="container-page relative z-10">
        <div
          className={cn(
            "grid items-center gap-12",
            image || aside ? "lg:grid-cols-[1.08fr_0.92fr]" : "",
          )}
        >
          <div className={cn(centered && "mx-auto max-w-4xl text-center")}>
            <Reveal>
              <Badge variant="dark">{eyebrow}</Badge>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-hero mt-7 max-w-4xl text-cream">{title}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div
                className={cn(
                  "mt-6 max-w-2xl text-base leading-7 text-cream/72 sm:text-lg sm:leading-8",
                  centered && "mx-auto",
                )}
              >
                {description}
              </div>
            </Reveal>
            {!centered ? (
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              </Reveal>
            ) : null}
          </div>

          {image ? (
            <Reveal delay={0.2} className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-4 rounded-[3rem] border border-aurora/20 bg-aurora/5 blur-[1px]"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/5 p-2 shadow-aurora">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-full border border-white/15 bg-night/80 px-4 py-2 text-xs font-bold text-cream backdrop-blur-md sm:flex">
                  <span className="h-2 w-2 rounded-full bg-aurora" aria-hidden="true" />
                  Fargo, North Dakota
                </div>
              </div>
            </Reveal>
          ) : aside ? (
            <Reveal delay={0.2} className="relative">
              {aside}
            </Reveal>
          ) : null}
        </div>

        {centered ? (
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </Reveal>
        ) : null}
      </div>

      <div className="container-page relative z-10 mt-12 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream/45 sm:flex">
        <Link href="/" className="transition-colors hover:text-aurora">
          Home
        </Link>
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{title}</span>
      </div>
    </section>
  );
}
