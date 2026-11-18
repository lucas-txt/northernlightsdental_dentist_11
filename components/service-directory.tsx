"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
import Link from "next/link";

import { services } from "@/lib/content";
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

export function ServiceDirectory() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(services.map((service) => service.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const reduce = useReducedMotion();

  const visible = services.filter(
    (service) => active === "All" || service.category === active,
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter services by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-bold transition-colors",
              active === category
                ? "border-night bg-night text-cream"
                : "border-line bg-paper text-ink/70 hover:border-teal/40 hover:text-teal",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.ul layout={!reduce} className="mt-8 border-t border-line">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.li
                key={service.title}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-line"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-4 py-5 transition-colors hover:bg-ice/60 sm:gap-6 sm:px-3 sm:py-6"
                >
                  <span className="hidden w-8 shrink-0 font-display text-sm text-slate sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-paper text-teal transition-colors group-hover:border-teal/30 group-hover:bg-teal group-hover:text-cream">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-teal">
                      {service.category}
                    </span>
                    <span className="mt-1 block font-display text-xl leading-tight text-ink sm:text-2xl">
                      {service.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-slate/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                    aria-hidden="true"
                  />
                </Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
