import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.featuredImage.src }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.featuredImage.src}`,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-ivory-100 py-20 sm:py-28">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-3 border-b border-charcoal-500/10 pb-6 text-sm text-charcoal-100">
            <span className="font-medium text-charcoal-500">{post.author.name}</span>
            <span aria-hidden="true">&bull;</span>
            <span>{post.author.role}</span>
            <span aria-hidden="true">&bull;</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-p:text-charcoal-100">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="bg-ivory-200 py-16 sm:py-20">
          <Container className="max-w-3xl">
            <h2 className="font-serif text-2xl text-charcoal-500">More in {post.category}</h2>
            <ul className="mt-6 space-y-4">
              {related.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="relative flex items-center gap-4 border-b border-charcoal-500/10 py-4"
                  >
                    <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden">
                      <Image src={p.featuredImage.src} alt={p.featuredImage.alt} fill sizes="96px" className="object-cover" />
                    </div>
                    <span className="font-serif text-lg text-charcoal-500 hover:text-bronze-400">
                      {p.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
