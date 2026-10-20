import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqs } from "@/lib/data/faqs";

export function FaqPreview() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="FAQ" heading="Good to Know" className="max-w-sm" />
          <Button href="/faq" variant="ghost" className="mt-8">
            View All Questions
          </Button>
        </div>
        <FAQAccordion items={preview} />
      </Container>
    </section>
  );
}
