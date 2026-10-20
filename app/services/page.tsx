import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { ServiceItem } from "@/components/services/ServiceItem";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From venue booking to catering, decoration, staging, and guest management — a complete list of services offered at MARQUE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A single team, coordinating everything."
        description="Every service below can be booked as part of a package or arranged individually for your event."
        image={{ src: "/images/placeholders/wide-3.svg", alt: "Event staff preparing the hall before a celebration" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]}
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            heading="Complete Event Services"
            description="Decor, catering, staging, and logistics — coordinated by one team so nothing falls between vendors."
            className="max-w-xl"
          />

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceItem service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-16 flex justify-center">
            <Button href="/booking" variant="primary">
              Check Availability
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
