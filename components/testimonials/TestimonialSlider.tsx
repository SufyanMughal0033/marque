"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import type { Testimonial } from "@/lib/types";

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Keyboard, A11y]}
        slidesPerView={1}
        spaceBetween={32}
        loop
        keyboard={{ enabled: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        a11y={{ prevSlideMessage: "Previous testimonial", nextSlideMessage: "Next testimonial" }}
        className="!pb-2"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className="h-auto">
            <figure className="flex h-full flex-col border border-ivory-100/15 p-8 sm:p-10">
              <Quote className="h-8 w-8 text-champagne-300/60" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-ivory-100 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-ivory-100/10 pt-5">
                <p className="text-sm font-medium text-ivory-100">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-ivory-300/70">
                  {t.eventType}
                  {t.date ? ` \u2022 ${t.date}` : ""}
                </p>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
