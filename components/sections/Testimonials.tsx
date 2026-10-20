import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialSlider } from "@/components/testimonials/TestimonialSlider";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-charcoal-500 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Families Have Shared"
          description="Demo content shown below until real, permission-cleared guest feedback is added."
          light
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
}
