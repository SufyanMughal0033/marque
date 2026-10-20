import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { eventStories } from "@/lib/data/events";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/venue",
    "/services",
    "/events",
    "/packages",
    "/menu",
    "/gallery",
    "/contact",
    "/booking",
    "/faq",
    "/blog",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const eventRoutes = eventStories.map((event) => ({
    url: `${siteConfig.url}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...eventRoutes, ...blogRoutes];
}
