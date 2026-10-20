"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/types";

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function GalleryLightbox({ images, index, onClose, onNavigate }: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || index === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-600/95 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory-100 transition-colors hover:text-champagne-300 sm:right-8 sm:top-8"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory-100 transition-colors hover:text-champagne-300 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory-100 transition-colors hover:text-champagne-300 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>

          <motion.div
            key={images[index].id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full max-w-4xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={images[index].image.src}
                alt={images[index].image.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-ivory-300">
              {images[index].image.alt}
              <span className="ml-2 text-ivory-100/50">
                ({index + 1} / {images.length})
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
