import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const reasons = [
  {
    number: "01",
    title: "A Premium Location",
    description: "Positioned for easy access across the city, with ample space for arrival and parking.",
  },
  {
    number: "02",
    title: "Room to Host Freely",
    description: "Spaces sized generously, so a large guest list never feels cramped or rushed.",
  },
  {
    number: "03",
    title: "A Team That Plans Ahead",
    description: "Experienced coordinators who anticipate details before they become problems.",
  },
  {
    number: "04",
    title: "Reliable, Regardless of Conditions",
    description: "Full-capacity backup power and dependable facilities, event after event.",
  },
  {
    number: "05",
    title: "Packages That Flex With You",
    description: "Structured tiers that can still be shaped around your guest count and priorities.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ivory-200 py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <FadeUp>
            <Eyebrow>Why Families Choose Us</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">
              Reasons families return to us for every milestone.
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-12">
            {reasons.map((reason) => (
              <StaggerItem key={reason.number}>
                <div className="flex gap-6 py-6 sm:gap-8">
                  <span className="font-serif text-4xl leading-none text-bronze-300/70 sm:text-5xl">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-charcoal-500">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal-100">
                      {reason.description}
                    </p>
                  </div>
                </div>
                <Divider />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ImageReveal
          image={{
            src: "/images/placeholders/tall-2.svg",
            alt: "Family gathered at a reception celebrating together",
          }}
          className="aspect-[4/5] lg:sticky lg:top-28 lg:aspect-auto lg:h-[85vh]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </Container>
    </section>
  );
}
