"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { cn, telHref } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial",
        solid
          ? "border-b border-charcoal-500/10 bg-ivory-100/95 py-3 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/40 to-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo light={!solid} />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-1 font-sans text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
                  solid ? "text-charcoal-300 hover:text-charcoal-500" : "text-ivory-200 hover:text-ivory-100",
                  isActive && (solid ? "text-charcoal-500" : "text-ivory-100")
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className={cn("absolute -bottom-1 left-0 h-px w-full", solid ? "bg-bronze-400" : "bg-champagne-300")}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={telHref(siteConfig.contact.phone)}
            className={cn(
              "flex items-center gap-2 text-[13px] font-medium tracking-wide transition-colors",
              solid ? "text-charcoal-300 hover:text-bronze-400" : "text-ivory-200 hover:text-ivory-100"
            )}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <Button
            href={siteConfig.nav.primaryCtaHref}
            variant={solid ? "primary" : "outline-light"}
            size="md"
            className="text-[12px] py-3"
          >
            {siteConfig.nav.primaryCtaLabel}
          </Button>
        </div>

        <MobileMenu solid={solid} />
      </Container>
    </header>
  );
}
