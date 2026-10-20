import Link from "next/link";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory-100 py-24">
      <Container className="flex flex-col items-center text-center">
        <Compass className="h-10 w-10 text-charcoal-100" aria-hidden="true" />
        <p className="mt-6 font-serif text-6xl text-bronze-300 sm:text-7xl">404</p>
        <h1 className="mt-4 text-display-sm text-balance">This page can&apos;t be found.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-100">
          The page you&apos;re looking for may have been moved, renamed, or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Link
            href="/contact"
            className="inline-flex items-center text-[13px] font-medium uppercase tracking-widest text-charcoal-300 hover:text-bronze-400"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
