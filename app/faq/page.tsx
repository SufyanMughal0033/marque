import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, capacity, catering, decoration, parking, and cancellation policy at MARQUE.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="FAQ"
        title="Good to Know"
        description="Answers to the questions we hear most often while planning an event."
        image={{ src: "/images/placeholders/wide-3.svg", alt: "Guests being seated ahead of an event" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
      />

      <section className="bg-ivory-100 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <FAQAccordion items={faqs} />

          <div className="mt-14 flex flex-col items-start gap-4 border border-charcoal-500/10 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-xl text-charcoal-500">Still have a question?</h2>
              <p className="mt-1 text-sm text-charcoal-100">Our team is happy to help directly.</p>
            </div>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
