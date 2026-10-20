"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/siteConfig";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal-500">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: shouldReduceMotion ? 1 : 1.08 }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <Image
          src="/images/placeholders/hero-main.svg"
          alt="Grand marquee hall set for an evening wedding celebration with warm ambient lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-charcoal-500/50 to-charcoal-500/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-600/40 via-transparent to-transparent" />

      <Container className="relative pb-24 pt-40 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Eyebrow light>Premium Events &bull; Weddings &bull; Celebrations</Eyebrow>
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-display-xl text-ivory-100">
          {["Where Every Celebration", "Becomes a Memory."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mt-7 max-w-lg text-base leading-relaxed text-ivory-300 sm:text-lg"
        >
          Thoughtfully designed spaces, attentive hospitality, and the freedom to shape your
          celebration your way — for {siteConfig.capacity.label.toLowerCase()}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={siteConfig.nav.primaryCtaHref} variant="primary" size="lg">
            {siteConfig.nav.primaryCtaLabel}
          </Button>
          <Button href={siteConfig.nav.secondaryCtaHref} variant="outline-light" size="lg">
            {siteConfig.nav.secondaryCtaLabel}
          </Button>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-300 sm:flex"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest2">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
