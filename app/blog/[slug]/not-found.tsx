import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function BlogPostNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ivory-100 py-24">
      <Container className="flex flex-col items-center text-center">
        <Newspaper className="h-10 w-10 text-charcoal-100" aria-hidden="true" />
        <h1 className="mt-6 text-display-sm text-balance">This article isn&apos;t available.</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-100">
          The post you&apos;re looking for may have been moved or the link may be incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/blog">Browse Articles</Button>
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
