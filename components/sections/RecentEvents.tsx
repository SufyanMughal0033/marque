import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Motion";
import { EventCard } from "@/components/events/EventCard";
import { eventStories } from "@/lib/data/events";

export function RecentEvents() {
  const featured = eventStories.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Recent Celebrations"
            heading="Stories From The Hall"
            className="max-w-xl"
          />
          <Button href="/events" variant="ghost" className="hidden sm:inline-flex">
            View All Stories
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((event, i) => (
            <FadeUp key={event.id} delay={i * 0.1}>
              <EventCard event={event} priority={i === 0} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex sm:hidden">
          <Button href="/events" variant="ghost">
            View All Stories
          </Button>
        </div>
      </Container>
    </section>
  );
}
