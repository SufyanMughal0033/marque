import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { eventTypes } from "@/lib/data/eventTypes";
import type { EventTypeItem } from "@/lib/types";

export function EventTypes({ limit, showCta = true }: { limit?: number; showCta?: boolean }) {
  const items = limit ? eventTypes.slice(0, limit) : eventTypes;

  return (
    <section className="bg-ivory-200 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Occasions"
            heading="Made For Every Occasion"
            description="From an intimate nikkah to a thousand-guest wedding, our spaces adapt to the scale and spirit of your event."
            className="max-w-xl"
          />
          {showCta && (
            <Button href="/events" variant="ghost" className="hidden sm:inline-flex">
              View All Occasions
            </Button>
          )}
        </div>

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <EventTypeCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showCta && (
          <div className="mt-10 flex sm:hidden">
            <Button href="/events" variant="ghost">
              View All Occasions
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

function EventTypeCard({ item }: { item: EventTypeItem }) {
  return (
    <Link
      href={`/events#${item.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-charcoal-500"
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 46vw"
        className="object-cover opacity-90 transition-all duration-700 ease-editorial group-hover:scale-110 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/90 via-charcoal-500/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-serif text-lg text-ivory-100 sm:text-xl">{item.title}</h3>
        <p className="mt-1 line-clamp-2 max-h-0 overflow-hidden text-xs leading-relaxed text-ivory-300 opacity-0 transition-all duration-500 ease-editorial group-hover:max-h-16 group-hover:opacity-100">
          {item.description}
        </p>
      </div>
      <ArrowUpRight
        className="absolute right-4 top-4 h-4 w-4 text-ivory-100 opacity-0 transition-all duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}
