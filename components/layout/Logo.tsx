import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-2xl tracking-[0.08em] transition-colors sm:text-[1.65rem]",
        light ? "text-ivory-100" : "text-charcoal-500",
        className
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      {siteConfig.name}
      <span className={cn("ml-1 align-super text-[0.5em]", light ? "text-champagne-300" : "text-bronze-400")}>
        &#9670;
      </span>
    </Link>
  );
}
