import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { ServiceItem } from "@/components/services/ServiceItem";
import { services } from "@/lib/data/services";

const preview = services.slice(0, 8);

export function Services() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            heading="Everything Handled, In One Place"
            description="A single point of coordination across decor, catering, staging, and logistics — so nothing falls between two vendors."
            className="max-w-xl"
          />
          <Button href="/services" variant="ghost" className="hidden sm:inline-flex">
            View All Services
          </Button>
        </div>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {preview.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceItem service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex sm:hidden">
          <Button href="/services" variant="ghost">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
