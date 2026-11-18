import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
} from "lucide-react";

import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { DoctorCard } from "@/components/doctor-card";
import { NewsCard } from "@/components/news-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { doctors, news, services, site, stats } from "@/lib/content";

const heroPoints = [
  "Ages 1 to 101+",
  "Family dentistry",
  "Fargo, North Dakota",
];

const values = [
  { icon: ShieldCheck, label: "Top of the line technology" },
  { icon: Sparkles, label: "Abundant services" },
  { icon: Heart, label: "The utmost compassion" },
  { icon: Users, label: "A comfortable, friendly environment" },
];

export default function HomePage() {
  return (
    <>
      <section className="aurora-field grain relative overflow-hidden text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <div className="orbit-ring left-[52%] top-[-22rem] h-[46rem] w-[46rem]" />
          <div className="orbit-ring left-[62%] top-[-12rem] h-[30rem] w-[30rem] opacity-60" />
          <div className="absolute right-[10%] top-[18%] h-2 w-2 rounded-full bg-aurora shadow-[0_0_28px_8px_var(--color-aurora)]" />
          <div className="absolute left-[8%] top-[72%] h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_22px_6px_var(--color-violet)]" />
        </div>

        <div className="container-page relative z-10 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="pill-live text-cream/90">
                  Accepting New Patients!
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="display-hero mt-7 max-w-3xl text-cream">
                  Welcome to{" "}
                  <span className="aurora-text">Northern Lights</span> Dental
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 font-display text-[1.3rem] leading-snug text-cream/85 sm:text-[1.65rem]">
                  Professional Dental Care for the Entire Family
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <p className="mt-4 max-w-xl text-sm leading-7 text-cream/62 sm:text-base">
                  We at Northern Lights Dental offer professional dental care in
                  a warm, welcoming environment for ages 1 to 101+.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                      Schedule your appointment
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">
                      Explore services
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.38}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-cream/60">
                  {heroPoints.map((point) => (
                    <li key={point} className="inline-flex items-center gap-2">
                      <span className="grid h-4 w-4 place-items-center rounded-full border border-aurora/30 bg-aurora/10">
                        <Check className="h-2.5 w-2.5 text-aurora" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-[3.2rem] border border-aurora/15 bg-aurora/[0.04]"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[2.7rem] border border-white/12 bg-white/5 p-2 shadow-aurora">
                  <div className="relative aspect-[5/6] overflow-hidden rounded-[2.2rem] sm:aspect-[4/3] lg:aspect-[5/6]">
                    <Image
                      src="/assets/images/hero-raceway.jpg"
                      alt="The Northern Lights Dental community at the Fargo raceway"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 46vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/5 to-transparent" />
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="glass-dark rounded-2xl p-4">
                        <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-mint">
                          We love to see you smile!
                        </p>
                        <p className="mt-1.5 font-display text-lg leading-tight text-cream">
                          Care for every age, under one roof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="float-soft absolute -right-3 top-8 hidden rounded-2xl border border-white/15 bg-night/75 px-4 py-3 text-cream shadow-soft backdrop-blur-md sm:block">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-aurora">
                    Family dentistry
                  </p>
                  <p className="mt-1 font-display text-xl">1 to 101+</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-7 border-t border-white/10 pt-8 sm:mt-16 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <p className="font-display text-4xl leading-none text-cream sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs leading-5 text-cream/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-teal">
              <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
              Welcome
            </p>
            <h2 className="display-section mt-5 max-w-xl text-ink">
              We love to see you <span className="text-teal">smile!</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-8 text-slate sm:text-lg">
              We at Northern Lights Dental offer professional dental care in a
              warm, welcoming environment for ages 1 to 101+. Our team is here to
              help you and your family feel at home from your very first visit.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button asChild variant="dark">
                <Link href="/contact">
                  Schedule your appointment
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-teal"
              >
                <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="aurora-field grain relative overflow-hidden py-20 text-cream sm:py-24 lg:py-28">
        <div className="container-page relative z-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Services We Provide"
              tone="dark"
              title={
                <>
                  Care that covers
                  <br className="hidden sm:block" /> every smile.
                </>
              }
              intro="We view each visit from the mind of our patients. By staying up to date on research and education, we can correctly diagnose, assess risk, and thoroughly consider options with the patient."
            />
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link href="/services">
                  View all services
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.05}
                className={index === 0 ? "lg:col-span-2" : undefined}
              >
                <ServiceCard
                  service={service}
                  index={index}
                  className={index === 0 ? "min-h-[15rem]" : "min-h-[15rem]"}
                />
              </Reveal>
            ))}
            <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-1">
              <div className="flex h-full min-h-[15rem] flex-col justify-between rounded-3xl border border-aurora/25 bg-aurora/[0.07] p-6">
                <Smile className="h-6 w-6 text-aurora" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl leading-tight text-cream">
                    We strongly believe in conservative approaches whenever
                    possible.
                  </p>
                  <Link
                    href="/services"
                    className="link-arrow mt-4 text-sm text-aurora"
                  >
                    How we care
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ice">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
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
              <div className="absolute -bottom-5 -right-3 rounded-3xl border border-line bg-paper p-4 shadow-soft sm:-right-6 sm:p-5">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-teal">
                  Kid friendly
                </p>
                <p className="mt-1 font-display text-2xl text-ink">1 to 101+</p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Dentistry for the whole family"
              title="Kid Friendly – Dentistry for the Whole Family"
              intro="We love kids and look forward to helping them achieve a shiny, cavity-free, healthy smile!"
            />
            <Reveal delay={0.12}>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-paper p-4">
                  <Sparkles className="h-5 w-5 text-teal" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-ink">
                    A warm first visit
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate">
                    A welcoming environment for ages 1 to 101+.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-paper p-4">
                  <Heart className="h-5 w-5 text-teal" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold text-ink">
                    Family-first care
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate">
                    The utmost compassion, every visit.
                  </p>
                </div>
              </div>
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

      <section className="section-pad bg-cream">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Northern Lights Dental"
              title={
                <>
                  A brighter smile starts
                  <br className="hidden sm:block" /> with feeling at home.
                </>
              }
              intro="At Northern Lights Dental, we are committed to providing excellent quality dental care to you and your families in and around Fargo, North Dakota. You can expect top of the line technology and abundant services in a comfortable, friendly environment. We treat our patients with the utmost compassion and will ensure you achieve and maintain a bright, healthy smile."
            />
            <Reveal delay={0.12}>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.label}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3"
                  >
                    <value.icon className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                    <span className="text-xs font-bold leading-5 text-ink">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-7" variant="secondary">
                <Link href="/about">
                  Meet the practice
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-lg pb-14 pr-6 sm:pb-20 sm:pr-12 lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-paper shadow-soft">
                <Image
                  src="/assets/images/about-team.jpg"
                  alt="The Northern Lights Dental team"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-[1.5rem] border-[6px] border-cream bg-paper shadow-soft sm:w-[52%]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/assets/images/office-7657.jpg"
                    alt="A treatment room at Northern Lights Dental"
                    fill
                    loading="eager"
                    sizes="(max-width: 1024px) 50vw, 24vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-2 top-5 rounded-2xl border border-line bg-paper px-4 py-3 shadow-soft sm:-left-4">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-teal">
                  Fargo, ND
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">
                  Serving our community
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Meet the Doctors"
              title="Three dentists. One standard of care."
              intro="Get to know the people who will care for your smile — and the community they call home."
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
              <Reveal key={doctor.slug} delay={index * 0.08}>
                <DoctorCard doctor={doctor} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ice">
        <div className="container-page">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Recent News"
              title="From the practice."
              intro="Patient education, practice news and a few favorite cases from Northern Lights Dental."
            />
            <Reveal delay={0.1}>
              <Button asChild variant="secondary">
                <Link href="/news">
                  View all news
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <NewsCard item={news[0]} featured />
            </Reveal>
            <div className="grid gap-4 lg:col-span-5">
              {news.slice(1).map((item, index) => (
                <Reveal key={item.href} delay={0.08 * (index + 1)}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream pt-10">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-paper px-5 py-4 text-sm">
              <p className="inline-flex items-center gap-2 font-semibold text-ink">
                <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
                {site.address}
              </p>
              <p className="inline-flex items-center gap-2 text-slate">
                <Clock className="h-4 w-4 text-teal" aria-hidden="true" />
                {site.hours}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow text-teal"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
