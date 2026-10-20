import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { VenueOverview } from "@/components/sections/VenueOverview";
import { EventTypes } from "@/components/sections/EventTypes";
import { WeddingExperience } from "@/components/sections/WeddingExperience";
import { PackagesPreview } from "@/components/sections/PackagesPreview";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { VideoTour } from "@/components/sections/VideoTour";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RecentEvents } from "@/components/sections/RecentEvents";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingCta } from "@/components/sections/BookingCta";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Event Marquee & Wedding Venue`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <VenueOverview />
      <EventTypes limit={8} />
      <WeddingExperience />
      <PackagesPreview />
      <MenuPreview />
      <GalleryPreview />
      <VideoTour />
      <Services />
      <WhyChooseUs />
      <RecentEvents />
      <Testimonials />
      <FaqPreview />
      <LocationSection />
      <BookingCta />
    </>
  );
}
