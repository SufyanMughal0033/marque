import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { FadeUp } from "@/components/ui/Motion";
import { MapSection } from "@/components/contact/MapSection";
import { siteConfig } from "@/lib/siteConfig";
import { telHref, whatsappHref } from "@/lib/utils";

export function LocationSection() {
  return (
    <section className="bg-ivory-200 py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="mt-6 text-display-md text-balance">Plan Your Visit</h2>

          <div className="mt-9 space-y-6">
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
            <Button href={siteConfig.address.googleMapsUrl} variant="primary">
              Get Directions
            </Button>
            <Button href={telHref(siteConfig.contact.phone)} variant="secondary">
              Call Now
            </Button>
            <Button
              href={whatsappHref(siteConfig.contact.whatsapp, "Hello, I'd like to inquire about booking an event.")}
              variant="secondary"
            >
              WhatsApp Us
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="min-h-[360px] lg:min-h-full">
          <MapSection className="h-full min-h-[360px]" />
        </FadeUp>
      </Container>
    </section>
  );
}
