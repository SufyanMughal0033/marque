import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Motion";
import { EventCard } from "@/components/events/EventCard";
import { eventStories } from "@/lib/data/events";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

interface EventPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return eventStories.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: EventPageProps): Metadata {
  const event = eventStories.find((e) => e.slug === params.slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: `${event.title} | ${siteConfig.name}`,
      description: event.description,
      images: [{ url: event.coverImage.src }],
      type: "article",
    },
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = eventStories.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const related = eventStories.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${event.eventType} \u2022 ${formatDate(event.date)}`}
        title={event.title}
        description={event.description}
        image={event.coverImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title, href: `/events/${event.slug}` },
        ]}
      />

      <article className="bg-ivory-100 py-20 sm:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
          <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-p:text-charcoal-100">
            {event.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {event.gallery.length > 0 && (
              <div className="not-prose mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {event.gallery.map((image, i) => (
                  <FadeUp key={image.src + i} delay={i * 0.08} className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </FadeUp>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="border border-charcoal-500/10 p-7">
              <h2 className="font-serif text-xl text-charcoal-500">Planning something similar?</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-100">
                Share your date and guest count and our team will help you plan an event in the
                same spirit as this one.
              </p>
              <Button href="/booking" className="mt-6 w-full justify-center">
                Check Availability
              </Button>
            </div>
          </aside>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-ivory-200 py-20 sm:py-28">
          <Container>
            <h2 className="text-display-sm text-balance">More Celebrations</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
