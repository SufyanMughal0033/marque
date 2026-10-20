import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Motion";
import { siteConfig } from "@/lib/siteConfig";

export function BookingCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal-500 py-28 sm:py-36">
      <Image
        src="/images/placeholders/wide-2.svg"
        alt="Decorated stage with warm lighting ready for an event"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-charcoal-500/70 to-charcoal-500/60" />
      <Container className="relative text-center">
        <FadeUp className="mx-auto max-w-2xl">
          <Eyebrow light className="mx-auto justify-center">
            Ready When You Are
          </Eyebrow>
          <h2 className="mt-6 text-display-lg text-balance text-ivory-100">
            Let&apos;s Shape Your Celebration.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ivory-300 sm:text-lg">
            Share your date and guest count, and our events team will confirm availability and
            walk you through the right package.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/booking"
              variant="primary"
              size="lg"
              className="!border-champagne-300 !bg-champagne-300 !text-charcoal-500 hover:!bg-champagne-200"
            >
              {siteConfig.nav.primaryCtaLabel}
            </Button>
            <Button href="/booking#quote" variant="outline-light" size="lg">
              Request a Quote
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
