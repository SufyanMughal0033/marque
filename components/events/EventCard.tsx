import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { EventStory } from "@/lib/types";

export function EventCard({ event, priority = false }: { event: EventStory; priority?: boolean }) {
  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-300">
        <Image
          src={event.coverImage.src}
          alt={event.coverImage.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-600/0 transition-colors duration-300 group-hover:bg-charcoal-600/10" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-widest text-bronze-400">
            {event.eventType} &bull; {formatDate(event.date)}
          </span>
          <h3 className="mt-2 font-serif text-xl text-charcoal-500 transition-colors group-hover:text-bronze-400 sm:text-2xl">
            {event.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-100">
            {event.description}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 flex-shrink-0 text-charcoal-300 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bronze-400"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
