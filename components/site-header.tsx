"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CalendarCheck, Clock, Menu, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navItems, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="bg-night text-cream">
        <div className="container-page flex h-10 items-center justify-between gap-4 text-[0.68rem] font-semibold tracking-wide">
          <p className="hidden text-cream/70 sm:block">
            {site.tagline}
          </p>
          <div className="flex items-center gap-5 sm:gap-7">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-aurora"
            >
              <Phone className="h-3 w-3 text-aurora" aria-hidden="true" />
              {site.phone}
            </a>
            <span className="hidden items-center gap-2 text-cream/70 md:inline-flex">
              <Clock className="h-3 w-3 text-aurora" aria-hidden="true" />
              {site.hours}
            </span>
            <span className="hidden text-aurora/90 lg:inline">
              Accepting New Patients!
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/88 backdrop-blur-xl">
        <div className="container-page flex h-[4.6rem] items-center justify-between gap-5 sm:h-[5.2rem]">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[0.8rem] font-bold transition-colors",
                  isActive(item.href)
                    ? "text-teal"
                    : "text-ink/72 hover:bg-ice hover:text-ink",
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-teal"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="md" className="hidden sm:inline-flex">
              <Link href="/contact">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Schedule
              </Link>
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </DialogTrigger>
              <DialogContent className="left-auto top-0 h-dvh w-full max-w-sm translate-x-0 translate-y-0 rounded-none border-y-0 border-r-0 p-0 sm:max-w-sm">
                <DialogTitle className="sr-only">Site menu</DialogTitle>
                <DialogDescription className="sr-only">
                  Navigate to any page of Northern Lights Dental.
                </DialogDescription>
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-line px-6 py-5">
                    <Logo />
                  </div>
                  <nav
                    aria-label="Mobile navigation"
                    className="flex-1 overflow-y-auto px-4 py-6"
                  >
                    <ul className="space-y-1">
                      {navItems.map((item, index) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={cn(
                              "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-colors",
                              isActive(item.href)
                                ? "bg-ice text-teal"
                                : "text-ink hover:bg-ice/70",
                            )}
                          >
                            <span>{item.label}</span>
                            <span className="text-xs font-semibold text-slate/50">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-3xl bg-night p-5 text-cream">
                      <p className="eyebrow text-mint">Accepting New Patients!</p>
                      <p className="mt-3 font-display text-2xl">
                        We love to see you smile!
                      </p>
                      <p className="mt-2 text-sm leading-6 text-cream/65">
                        {site.hours}
                      </p>
                      <Button asChild className="mt-5 w-full" size="md">
                        <Link href="/contact" onClick={() => setOpen(false)}>
                          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                          Schedule your appointment
                        </Link>
                      </Button>
                    </div>
                  </nav>
                  <div className="border-t border-line px-6 py-5 text-sm">
                    <a
                      href={site.phoneHref}
                      className="flex items-center gap-2 font-bold text-ink"
                    >
                      <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                      {site.phone}
                    </a>
                    <p className="mt-2 text-xs leading-5 text-slate">
                      {site.address}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
}
