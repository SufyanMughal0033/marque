import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const highlights = [
  "Custom stage & decoration design",
  "Layered architectural lighting",
  "Multi-course dining & live counters",
  "Dedicated guest management",
  "Private bridal room",
  "Photography-friendly spaces",
];

export function WeddingExperience() {
  return (
    <section className="relative overflow-hidden bg-charcoal-500 py-24 sm:py-32">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <Eyebrow light>The Wedding Experience</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance text-ivory-100">
              Your Day. Your Story. Your Space.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory-300 sm:text-lg">
              Weddings hosted at MARQUE are built around the family, not a fixed template. Our
              team works with your decorators, photographers, and caterers of choice, or handles
              it all in-house — whichever suits your celebration.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-9 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <StaggerItem key={item} className="flex items-center gap-3">
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-champagne-300" />
                <span className="text-sm text-ivory-200">{item}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.15} className="mt-10">
            <Button href="/events" variant="outline-light">
              Plan Your Wedding
            </Button>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ImageReveal
            image={{ src: "/images/placeholders/tall-3.svg", alt: "Bridal stage decorated with soft floral arrangements" }}
            className="col-span-1 aspect-[3/4] translate-y-8"
            sizes="(min-width: 1024px) 22vw, 45vw"
          />
          <ImageReveal
            image={{ src: "/images/placeholders/tall-4.svg", alt: "Wedding dining hall set with elegant table settings" }}
            className="col-span-1 aspect-[3/4]"
            delay={0.15}
            sizes="(min-width: 1024px) 22vw, 45vw"
          />
        </div>
      </Container>
    </section>
  );
}
