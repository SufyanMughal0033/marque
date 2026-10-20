"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { mainNav } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn, telHref, whatsappHref } from "@/lib/utils";

export function MobileMenu({ solid }: { solid: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={cn(
          "flex h-10 w-10 items-center justify-center transition-colors",
          solid ? "text-charcoal-500" : "text-ivory-100"
        )}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-charcoal-600/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-ivory-100 shadow-lift"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between border-b border-charcoal-500/10 px-6 py-5">
                <span className="font-serif text-xl tracking-wide text-charcoal-500">
                  {siteConfig.name}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center text-charcoal-500"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block border-b border-charcoal-500/5 py-3.5 font-serif text-2xl text-charcoal-500 transition-colors hover:text-bronze-400",
                          pathname === item.href && "text-bronze-400"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-4 border-t border-charcoal-500/10 px-6 py-6">
                <Button href={siteConfig.nav.primaryCtaHref} className="w-full justify-center">
                  {siteConfig.nav.primaryCtaLabel}
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href={telHref(siteConfig.contact.phone)}
                    className="flex flex-1 items-center justify-center gap-2 border border-charcoal-500/15 py-3 text-xs font-medium uppercase tracking-widest text-charcoal-300"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call
                  </a>
                  <a
                    href={whatsappHref(siteConfig.contact.whatsapp, "Hello, I'd like to inquire about booking an event.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 border border-charcoal-500/15 py-3 text-xs font-medium uppercase tracking-widest text-charcoal-300"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center justify-center gap-5 pt-2 text-charcoal-300">
                  <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-[18px] w-[18px]" />
                  </a>
                  <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
