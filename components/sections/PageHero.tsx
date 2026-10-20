import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import type { ImageAsset } from "@/lib/types";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: ImageAsset;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({ eyebrow, title, description, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-charcoal-500 pt-32 pb-14 sm:min-h-[52vh] sm:pb-16">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600 via-charcoal-500/60 to-charcoal-500/20" />
      <Container className="relative">
        <Eyebrow light className="mb-5">
          {eyebrow}
        </Eyebrow>
        <h1 className="max-w-3xl text-balance text-display-md text-ivory-100">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory-300 sm:text-lg">
            {description}
          </p>
        )}
        <div className="mt-8 [&_span]:text-ivory-300 [&_a]:text-ivory-300 [&_a:hover]:text-ivory-100 [&_span[aria-current]]:text-ivory-100">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </Container>
    </section>
  );
}
