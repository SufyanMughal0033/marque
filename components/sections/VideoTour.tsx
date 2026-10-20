"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Set a YouTube/Vimeo embed URL or a self-hosted .mp4 path here once a real
 * venue walkthrough video is available. Leaving this null shows a graceful
 * "coming soon" state instead of a broken player.
 */
const TOUR_VIDEO_URL: string | null = null;

export function VideoTour() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-ivory-200 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Virtual Tour"
          heading="See The Venue Before You Arrive"
          description="A walkthrough of the main hall, lounge, and outdoor spaces — useful for out-of-town families planning from afar."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-14 aspect-video max-w-4xl overflow-hidden bg-charcoal-500">
          <Image
            src="/images/placeholders/wide-6.svg"
            alt="Preview frame of the venue walkthrough video"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-charcoal-600/30" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play venue walkthrough video"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ivory-100/50 bg-ivory-100/10 backdrop-blur-sm transition-transform duration-300 ease-editorial group-hover:scale-110 group-hover:bg-ivory-100/20">
              <Play className="ml-1 h-7 w-7 fill-ivory-100 text-ivory-100" aria-hidden="true" />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Venue walkthrough video"
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-600/95 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory-100 hover:text-champagne-300 sm:right-8 sm:top-8"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div
              className="aspect-video w-full max-w-4xl bg-charcoal-500"
              onClick={(e) => e.stopPropagation()}
            >
              {TOUR_VIDEO_URL ? (
                <iframe
                  src={TOUR_VIDEO_URL}
                  title="Venue walkthrough video"
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="font-serif text-2xl text-ivory-100">Video Coming Soon</p>
                  <p className="max-w-sm text-sm text-ivory-300">
                    Our full venue walkthrough is currently being filmed. In the meantime, browse
                    the photo gallery or schedule an in-person visit.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
