import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  linked?: boolean;
};

export function Logo({ tone = "dark", className, linked = true }: LogoProps) {
  const wordmark = (
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          "font-display text-[1.15rem] font-semibold tracking-[-0.04em] sm:text-[1.3rem]",
          tone === "dark" ? "text-ink" : "text-cream",
        )}
      >
        Northern Lights
      </span>
      <span
        className={cn(
          "mt-1 pl-0.5 text-[0.58rem] font-bold uppercase tracking-[0.35em]",
          tone === "dark" ? "text-teal" : "text-aurora",
        )}
      >
        Dental
      </span>
    </span>
  );

  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border sm:h-12 sm:w-12",
          tone === "dark"
            ? "border-line bg-paper"
            : "border-white/15 bg-cream",
        )}
      >
        <Image
          src="/assets/images/logo-emblem.jpg"
          alt=""
          width={48}
          height={52}
          className="h-9 w-9 object-contain mix-blend-multiply sm:h-10 sm:w-10"
          aria-hidden="true"
          loading="eager"
        />
      </span>
      {wordmark}
    </span>
  );

  if (!linked) return content;

  return (
    <Link
      href="/"
      className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
    >
      {content}
    </Link>
  );
}
