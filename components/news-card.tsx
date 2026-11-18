import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import type { NewsItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  item: NewsItem;
  featured?: boolean;
  className?: string;
};

export function NewsCard({ item, featured = false, className }: NewsCardProps) {
  return (
    <article
      className={cn(
        "card-lift group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-paper",
        className,
      )}
    >
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-ice",
            featured ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            loading="eager"
            sizes={featured ? "(max-width: 1024px) 92vw, 58vw" : "(max-width: 768px) 92vw, 30vw"}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-night/35 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-md">
            Recent News
          </span>
        </div>
        <div className={cn("flex flex-1 flex-col p-5 sm:p-6", featured && "sm:p-8")}>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate/70">
            <time dateTime={item.date}>{item.displayDate}</time>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              0 Comments
            </span>
          </div>
          <h3
            className={cn(
              "mt-3 font-display leading-tight text-ink transition-colors group-hover:text-teal",
              featured ? "text-[1.7rem] sm:text-[2.1rem]" : "text-[1.35rem]",
            )}
          >
            {item.title}
          </h3>
          <p className="link-arrow mt-auto pt-5 text-sm text-teal">
            Read more
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </p>
        </div>
      </a>
    </article>
  );
}
