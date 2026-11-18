"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { gallery } from "@/lib/content";
import { cn } from "@/lib/utils";

const spans = {
  wide: "sm:col-span-7 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[28rem]",
  tall: "sm:col-span-5 aspect-[4/3] sm:aspect-auto sm:min-h-[13.25rem]",
  normal: "sm:col-span-5 aspect-[4/3] sm:aspect-auto sm:min-h-[13.25rem]",
};

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const item = gallery[active];

  const previous = () =>
    setActive((current) => (current - 1 + gallery.length) % gallery.length);
  const next = () => setActive((current) => (current + 1) % gallery.length);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="grid auto-rows-[13.25rem] grid-cols-1 gap-4 sm:grid-cols-12">
        {gallery.map((image, index) => (
          <DialogTrigger key={image.src} asChild>
            <button
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "group relative overflow-hidden rounded-[1.5rem] border border-line bg-ice text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal",
                spans[image.span],
              )}
              aria-label={`Open image: ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="eager"
                sizes="(max-width: 640px) 92vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
              <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-cream">{image.caption}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-cream backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </DialogTrigger>
        ))}
      </div>

      <DialogContent className="max-w-5xl overflow-hidden p-3 sm:p-4">
        <DialogTitle className="sr-only">{item.caption}</DialogTitle>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ice sm:aspect-[16/10]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            loading="eager"
            sizes="90vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between gap-4 px-1 pt-4">
          <p className="text-sm font-bold text-ink">{item.caption}</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="min-w-14 text-center text-xs font-semibold text-slate">
              {active + 1} / {gallery.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
