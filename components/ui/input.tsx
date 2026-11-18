import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-2xl border border-line bg-paper px-4 text-sm text-ink shadow-[inset_0_1px_0_rgb(255_255_255_/_0.7)] outline-none transition-colors placeholder:text-slate/45 focus:border-teal focus:ring-4 focus:ring-teal/10 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
