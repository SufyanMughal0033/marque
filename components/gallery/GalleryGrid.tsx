"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { galleryImages, galleryCategoryLabels } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/lib/types";

const categories = ["all", ...Object.keys(galleryCategoryLabels).filter((c) => c !== "all")] as (
  | "all"
  | GalleryCategory
)[];

const spanClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export function GalleryGrid({ initialCategory = "all" }: { initialCategory?: "all" | GalleryCategory }) {
  const [active, setActive] = useState<"all" | GalleryCategory>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? galleryImages : galleryImages.filter((img) => img.category === active)),
    [active]
  );

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:pb-0">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "flex-shrink-0 whitespace-nowrap border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
              active === category
                ? "border-charcoal-500 bg-charcoal-500 text-ivory-100"
                : "border-charcoal-500/15 text-charcoal-300 hover:border-charcoal-500/40"
            )}
          >
            {galleryCategoryLabels[category]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center justify-center py-20 text-center">
          <p className="font-serif text-2xl text-charcoal-500">No images in this category yet</p>
          <p className="mt-2 max-w-sm text-sm text-charcoal-100">
            We&apos;re adding new photography regularly. Please check back soon or view another
            category.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(i)}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "group relative overflow-hidden bg-charcoal-300 text-left focus-visible:z-10",
                spanClasses[item.span ?? "normal"]
              )}
              aria-label={`Open image: ${item.image.alt}`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-600/0 transition-colors duration-300 group-hover:bg-charcoal-600/20" />
            </motion.button>
          ))}
        </div>
      )}

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </div>
  );
}
