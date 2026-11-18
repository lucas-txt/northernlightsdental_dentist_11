import {
  Activity,
  ArrowUpRight,
  Crown,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
} from "lucide-react";

import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  smile: Smile,
  crown: Crown,
  activity: Activity,
  heart: HeartPulse,
  sun: Sun,
} as const;

type ServiceCardProps = {
  service: Service;
  index: number;
  className?: string;
};

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <article
      className={cn(
        "card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 hover:border-aurora/35 hover:bg-white/[0.07] sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-aurora/20 bg-aurora/10 text-aurora transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-display text-sm text-cream/35">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-mint/70">
        {service.category}
      </p>
      <h3 className="mt-2 font-display text-[1.45rem] leading-tight text-cream">
        {service.title}
      </h3>
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="h-px w-10 bg-aurora/40 transition-all duration-300 group-hover:w-16" />
        <ArrowUpRight
          className="h-4 w-4 text-aurora/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aurora"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
