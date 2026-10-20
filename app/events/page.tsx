import type { Metadata } from "next";
import Image from "next/image";
import { CalendarX } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/Motion";
import { EventCard } from "@/components/events/EventCard";
import { eventTypes } from "@/lib/data/eventTypes";
import { eventStories } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Weddings, mehndi, barat, walima, corporate events, and more — explore the occasions hosted at MARQUE, plus recent celebrations.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Made For Every Occasion"
        description="From an intimate nikkah to a thousand-guest wedding, our spaces adapt to the scale and spirit of your event."
        image={{ src: "/images/placeholders/wide-5.svg", alt: "Guests gathered at a celebration in the main hall" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }]}
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Occasions" heading="Choose Your Occasion" className="max-w-xl" />

          <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {eventTypes.map((item) => (
              <StaggerItem key={item.id}>
                <div id={item.slug} className="group relative block scroll-mt-28 aspect-[4/5] overflow-hidden bg-charcoal-500">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 46vw"
                    className="object-cover opacity-90 transition-transform duration-700 ease-editorial group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/90 via-charcoal-500/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-serif text-lg text-ivory-100 sm:text-xl">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ivory-300">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-ivory-200 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Recent Celebrations"
            heading="Stories From The Hall"
            description="A look at recent events hosted at the venue, shared with permission from the families and organisations involved."
            className="max-w-xl"
          />

          {eventStories.length === 0 ? (
            <div className="mt-16 flex flex-col items-center justify-center py-16 text-center">
              <CalendarX className="h-10 w-10 text-charcoal-100" aria-hidden="true" />
              <p className="mt-4 font-serif text-2xl text-charcoal-500">No stories published yet</p>
              <p className="mt-2 max-w-sm text-sm text-charcoal-100">
                We&apos;re preparing recent event features for this page. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {eventStories.map((event, i) => (
                <FadeUp key={event.id} delay={(i % 3) * 0.08}>
                  <EventCard event={event} />
                </FadeUp>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
