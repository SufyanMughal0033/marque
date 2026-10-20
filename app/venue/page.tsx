import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/Motion";
import { DynamicIcon } from "@/lib/icons";
import { venueFeatures } from "@/lib/data/venueFeatures";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "The Venue",
  description:
    "Explore MARQUE's grand main hall, bridal room, VIP lounge, outdoor space, and full venue facilities in Karachi.",
  alternates: { canonical: "/venue" },
};

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="The Venue"
        title="Spaces designed to move with your event."
        description={`A single venue built for ${siteConfig.capacity.label.toLowerCase()}, across indoor halls and outdoor grounds.`}
        image={{ src: "/images/placeholders/wide-4.svg", alt: "Wide view of the grand hall set for an event" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Venue", href: "/venue" }]}
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ImageReveal
            image={{ src: "/images/placeholders/tall-2.svg", alt: "Grand hall ceiling and lighting detail" }}
            className="aspect-[4/5] lg:sticky lg:top-28 lg:h-[80vh] lg:aspect-auto"
          />

          <div>
            <FadeUp>
              <Eyebrow>Facilities</Eyebrow>
              <h2 className="mt-6 text-display-md text-balance">Everything an event of scale requires.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-100 sm:text-lg">
                Each facility below is available across every package, with the level of
                customization varying by tier.
              </p>
            </FadeUp>

            <StaggerContainer className="mt-12 divide-y divide-charcoal-500/10 border-t border-charcoal-500/10">
              {venueFeatures.map((feature) => (
                <StaggerItem key={feature.id}>
                  <div className="flex gap-5 py-6 sm:gap-7">
                    <DynamicIcon name={feature.icon} className="mt-1 h-6 w-6 flex-shrink-0 text-bronze-400" />
                    <div>
                      <h3 className="font-serif text-xl text-charcoal-500">{feature.title}</h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-charcoal-100">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.1} className="mt-10">
              <Button href="/booking" variant="primary">
                Check Availability
              </Button>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
