import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photography from weddings, mehndi, barat, walima, corporate events, decor, food, and venue spaces at MARQUE.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments From The Hall"
        description="A visual look at celebrations hosted at the venue, organized by category."
        image={{ src: "/images/placeholders/wide-6.svg", alt: "Collage-style view of the venue during an event" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]}
      />

      <section className="bg-ivory-100 py-20 sm:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
