import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest text-charcoal-100">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.href} className="flex items-center gap-1.5">
            {isLast ? (
              <span aria-current="page" className="text-charcoal-500">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-bronze-400">
                {item.label}
              </Link>
            )}
            {!isLast && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
          </span>
        );
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
