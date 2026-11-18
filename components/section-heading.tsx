import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-5",
            dark ? "text-mint" : "text-teal",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              dark ? "bg-mint/60" : "bg-teal/50",
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "display-section",
          dark ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {intro ? (
        <div
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg",
            dark ? "text-cream/70" : "text-slate",
          )}
        >
          {intro}
        </div>
      ) : null}
    </Reveal>
  );
}
