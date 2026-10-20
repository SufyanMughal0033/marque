import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/forms/BookingForm";
import { siteConfig } from "@/lib/siteConfig";
import { telHref, whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Check Availability",
  description:
    "Submit a booking inquiry to check availability and request a quote for your wedding, mehndi, corporate event, or private celebration.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Check Availability"
        title="Let's Find Your Date"
        description="Share a few details about your event and our team will confirm availability and the right package for you."
        image={{ src: "/images/placeholders/hero-venue.svg", alt: "Main hall prepared ahead of an evening event" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Booking", href: "/booking" }]}
      />

      <section id="quote" className="scroll-mt-24 bg-ivory-100 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Inquiry Form"
              heading="Tell Us About Your Event"
              description={siteConfig.booking.depositNote}
              className="max-w-xl"
            />
            <div className="mt-10">
              <Suspense fallback={<div className="h-96 animate-pulse bg-ivory-200" />}>
                <BookingForm />
              </Suspense>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="border border-charcoal-500/10 p-7">
              <h2 className="font-serif text-xl text-charcoal-500">Prefer to talk it through?</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-100">
                Call or message us directly and our events team will guide you through
                availability and packages.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={telHref(siteConfig.contact.phone)}
                  className="flex items-center gap-3 text-sm font-medium text-charcoal-500 hover:text-bronze-400"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={whatsappHref(siteConfig.contact.whatsapp, "Hello, I'd like to check availability for an event.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-charcoal-500 hover:text-bronze-400"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="border border-charcoal-500/10 p-7">
              <h2 className="font-serif text-xl text-charcoal-500">What happens next?</h2>
              <ol className="mt-4 space-y-4">
                {[
                  "We review your date, guest count, and package preference.",
                  "Our team confirms availability and shares a written quote.",
                  "A short call or visit to finalize decor, menu, and logistics.",
                  "Your date is confirmed with a signed contract and deposit.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-serif text-lg text-bronze-300">{i + 1}</span>
                    <span className="text-sm leading-relaxed text-charcoal-100">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
