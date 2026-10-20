import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Planning guides and ideas covering wedding planning, decor, catering, corporate events, and venue advice from the MARQUE team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Planning Guides & Ideas"
        description="Practical, unhurried advice on planning weddings, mehndis, and corporate events."
        image={{ src: "/images/placeholders/wide-5.svg", alt: "Notebook and planning materials for an event" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />

      <section className="bg-ivory-100 py-20 sm:py-28">
        <Container>
          {blogPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Newspaper className="h-10 w-10 text-charcoal-100" aria-hidden="true" />
              <p className="mt-4 font-serif text-2xl text-charcoal-500">No articles published yet</p>
              <p className="mt-2 max-w-sm text-sm text-charcoal-100">
                New planning guides are on the way. Please check back soon.
              </p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-300">
                      <Image
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-5 inline-block text-[11px] font-medium uppercase tracking-widest text-bronze-400">
                      {post.category}
                    </span>
                    <h2 className="mt-2 font-serif text-xl text-charcoal-500 transition-colors group-hover:text-bronze-400 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-100">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-widest text-charcoal-100/70">
                      {formatDate(post.publishedAt)}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </section>
    </>
  );
}
