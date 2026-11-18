import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { NewsCard } from "@/components/news-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recent News",
  description:
    "Recent news from Northern Lights Dental in Fargo, ND — child dental health, the NLD Star Discount Plan and some of our favorite cases.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the practice"
        title="Recent News"
        description="Patient education, practice updates and a few favorite cases from Northern Lights Dental. Each story opens the original article."
        image={{
          src: "/assets/images/news-star-plan.jpg",
          alt: "NLD Star Discount Plan announcement",
        }}
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-12">
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

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-line bg-paper p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="eyebrow text-teal">Stay in the loop</p>
                <p className="mt-2 font-display text-2xl text-ink">
                  Questions about a story?
                </p>
                <p className="mt-1 text-sm text-slate">
                  Call the practice and we will help.
                </p>
              </div>
              <Button asChild variant="dark">
                <Link href="/contact">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Schedule a visit
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
