import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Motion";
import { galleryImages } from "@/lib/data/gallery";

const preview = galleryImages.slice(0, 6);

export function GalleryPreview() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            heading="Moments From Recent Celebrations"
            className="max-w-xl"
          />
          <Button href="/gallery" variant="ghost" className="hidden sm:inline-flex">
            View Full Gallery
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {preview.map((item, i) => (
            <FadeUp
              key={item.id}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2 sm:col-span-1" : ""}
            >
              <div className="group relative aspect-square overflow-hidden bg-charcoal-300 sm:aspect-[4/5]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 30vw, 46vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
                />
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex sm:hidden">
          <Button href="/gallery" variant="ghost">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
