import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { MapSection } from "@/components/contact/MapSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { telHref, whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — address, phone, WhatsApp, email, opening hours, and a direct inquiry form.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Reach out about availability, packages, or anything else — our team typically responds within 24 hours."
        image={{ src: "/images/placeholders/wide-4.svg", alt: "Reception desk area at the venue entrance" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
      />

      <section className="bg-ivory-100 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Get in Touch" heading="Contact Information" className="max-w-sm" />

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-charcoal-500">Address</p>
                  <p className="mt-1 text-sm text-charcoal-100">{siteConfig.address.full}</p>
                </div>
              </div>
              <Divider />
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-charcoal-500">Phone &amp; WhatsApp</p>
                  <p className="mt-1 text-sm text-charcoal-100">{siteConfig.contact.phoneDisplay}</p>
                </div>
              </div>
              <Divider />
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-charcoal-500">Email</p>
                  <p className="mt-1 text-sm text-charcoal-100">{siteConfig.contact.email}</p>
                  <p className="text-sm text-charcoal-100">{siteConfig.contact.bookingEmail}</p>
                </div>
              </div>
              <Divider />
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-charcoal-500">Opening Hours</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-charcoal-100">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day}>
                        {h.day}: {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={telHref(siteConfig.contact.phone)} variant="primary">
                Call Now
              </Button>
              <Button
                href={whatsappHref(siteConfig.contact.whatsapp, "Hello, I'd like to get in touch.")}
                variant="secondary"
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="mt-10 border-t border-charcoal-500/10 pt-8">
              <p className="text-sm text-charcoal-100">
                Have a quick question first?{" "}
                <Button href="/faq" variant="ghost" showArrow={false} className="!p-0 !normal-case !tracking-normal !text-sm !font-normal underline underline-offset-4">
                  Visit our FAQ
                </Button>
              </p>
            </div>

            <div className="mt-10 aspect-[4/3] w-full">
              <MapSection className="h-full w-full" />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Send an Inquiry" heading="Tell Us About Your Event" className="max-w-lg" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
