import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Doctor } from "@/lib/content";
import { cn } from "@/lib/utils";

type DoctorCardProps = {
  doctor: Doctor;
  index: number;
  className?: string;
};

export function DoctorCard({ doctor, index, className }: DoctorCardProps) {
  return (
    <article
      className={cn(
        "card-lift group relative overflow-hidden rounded-[2rem] border border-line bg-paper",
        className,
      )}
    >
      <Link
        href={`/doctors/${doctor.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-ice">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            loading="eager"
            sizes="(max-width: 768px) 90vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent opacity-80" />
          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-night/30 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} · Dentist
          </span>
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-[1.55rem] leading-tight text-cream">
                {doctor.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-cream/70">
                {doctor.role}
              </p>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-cream backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-sm leading-6 text-slate">{doctor.preview}</p>
          <p className="link-arrow mt-4 text-sm text-teal">
            Meet {doctor.name.split(" ").slice(0, 2).join(" ")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </p>
        </div>
      </Link>
    </article>
  );
}
