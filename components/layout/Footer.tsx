import Link from "next/link";
import { Instagram, Facebook, Music2, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { siteConfig } from "@/lib/siteConfig";
import { footerLinks } from "@/lib/data/navigation";
import { telHref, whatsappHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-500 text-ivory-200">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_2fr] lg:gap-8">
        <div>
          <Link href="/" className="font-serif text-3xl tracking-wide text-ivory-100">
            {siteConfig.name}
            <span className="ml-1 align-super text-sm text-champagne-300">&#9670;</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-300">
            {siteConfig.tagline}
          </p>

          <ul className="mt-8 space-y-3 text-sm text-ivory-300">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-bronze-300" aria-hidden="true" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-bronze-300" aria-hidden="true" />
              <a href={telHref(siteConfig.contact.phone)} className="hover:text-ivory-100">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-bronze-300" aria-hidden="true" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-ivory-100">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-ivory-100/15 transition-colors hover:border-champagne-300 hover:text-champagne-300"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center border border-ivory-100/15 transition-colors hover:border-champagne-300 hover:text-champagne-300"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center border border-ivory-100/15 transition-colors hover:border-champagne-300 hover:text-champagne-300"
            >
              <Music2 className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest2 text-champagne-300">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ivory-300 transition-colors hover:text-ivory-100">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className="pb-12">
        <div className="flex flex-col gap-6 border-t border-ivory-100/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest2 text-champagne-300">
              Stay in touch
            </h3>
            <p className="mt-2 max-w-sm text-sm text-ivory-300">
              Occasional updates on packages, seasonal offers, and recent celebrations. No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Container>

      <Divider light />

      <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-300/70 sm:flex-row">
        <p>
          &copy; {year} {siteConfig.footer.copyrightName}. All rights reserved.
        </p>
        <a
          href={whatsappHref(siteConfig.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ivory-100"
        >
          WhatsApp: {siteConfig.contact.whatsapp}
        </a>
      </Container>
    </footer>
  );
}
