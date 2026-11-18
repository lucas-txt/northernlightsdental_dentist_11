import * as React from "react";

import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "block text-xs font-bold uppercase tracking-[0.14em] text-ink/75",
        className,
      )}
      {...props}
    />
  );
}
