import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold tracking-[-0.01em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-teal",
  {
    variants: {
      variant: {
        primary: "btn-aurora hover:-translate-y-0.5",
        secondary:
          "border border-line bg-paper text-ink shadow-[0_10px_30px_-20px_rgb(6_24_38_/_0.45)] hover:-translate-y-0.5 hover:bg-ice",
        outline:
          "border border-white/25 bg-white/5 text-cream backdrop-blur-sm hover:bg-white/10",
        ghost: "text-current hover:bg-night/5",
        dark: "bg-night text-cream hover:-translate-y-0.5 hover:bg-midnight",
        link: "rounded-none p-0 text-teal underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-7 text-sm sm:px-8 sm:text-base",
        icon: "h-11 w-11",
        none: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
