import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-sm text-ink shadow-[inset_0_1px_0_rgb(255_255_255_/_0.7)] outline-none transition-colors placeholder:text-slate/45 focus:border-teal focus:ring-4 focus:ring-teal/10 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
