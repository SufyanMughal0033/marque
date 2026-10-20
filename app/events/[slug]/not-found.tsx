import Link from "next/link";
import { CalendarX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function EventNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ivory-100 py-24">
      <Container className="flex flex-col items-center text-center">
        <CalendarX className="h-10 w-10 text-charcoal-100" aria-hidden="true" />
        <h1 className="mt-6 text-display-sm text-balance">This celebration story isn&apos;t available.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-100">
          The event you&apos;re looking for may have been moved or the link may be incorrect.
          Browse recent celebrations instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/events">Browse Events</Button>
          <Link
            href="/"
            className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-charcoal-300 hover:text-bronze-400"
          >
            Return Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
