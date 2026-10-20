"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { whatsappHref } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(
        siteConfig.contact.whatsapp,
        "Hello, I'd like to inquire about booking an event at " + siteConfig.name + "."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 ease-editorial hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">WhatsApp us</span>
    </a>
  );
}
