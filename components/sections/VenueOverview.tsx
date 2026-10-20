import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/Motion";
import { DynamicIcon } from "@/lib/icons";
import { venueFeatures } from "@/lib/data/venueFeatures";

const featured = venueFeatures.slice(0, 6);

export function VenueOverview() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <ImageReveal
          image={{
            src: "/images/placeholders/tall-1.svg",
            alt: "Interior of the grand hall showing ceiling height and column-free layout",
          }}
          className="order-2 aspect-[4/5] lg:order-1"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />

        <div className="order-1 lg:order-2 lg:py-4">
          <FadeUp>
            <Eyebrow>The Venue</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">
              Every detail considered, so yours doesn&apos;t have to be.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-100 sm:text-lg">
              From the main hall down to the parking arrangement, each part of the venue is
              designed to work together — so your event runs smoothly from arrival to farewell.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {featured.map((feature) => (
              <StaggerItem key={feature.id} className="flex gap-4">
                <DynamicIcon name={feature.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-bronze-400" />
                <div>
                  <h3 className="font-sans text-sm font-semibold text-charcoal-500">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-100">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.15} className="mt-10">
            <Button href="/venue" variant="secondary">
              Explore Our Venue
            </Button>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
