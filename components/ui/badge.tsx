import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        aurora:
          "border-aurora/35 bg-aurora/10 text-teal",
        dark: "border-white/15 bg-white/5 text-mint backdrop-blur-sm",
        outline: "border-line bg-paper/70 text-slate",
        solid: "border-transparent bg-night text-cream",
      },
    },
    defaultVariants: {
      variant: "aurora",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
