/**
 * Central brand & business configuration.
 *
 * Every piece of contact information, brand copy, and business detail used
 * across the site is sourced from this file. Replace the placeholder values
 * below with real business information — nothing else in the codebase needs
 * to change.
 */

export const siteConfig = {
  name: "MARQUE",
  legalName: "Marque Events & Banquets",
  tagline: "Where Every Celebration Becomes a Memory.",
  shortDescription:
    "A premium event marquee in Karachi for weddings, corporate events, and private celebrations.",
  description:
    "MARQUE is a premium event venue offering thoughtfully designed spaces, attentive hospitality, and the freedom to shape every celebration — from intimate nikkah ceremonies to large-scale weddings and corporate events.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.marquevenue.com",

  contact: {
    phone: "+92 300 1234567",
    phoneDisplay: "0300 1234567",
    whatsapp: "+923001234567",
    email: "hello@marquevenue.com",
    bookingEmail: "bookings@marquevenue.com",
  },

  address: {
    line1: "Plot 14-C, Main Boulevard",
    line2: "DHA Phase 6",
    city: "Karachi",
    country: "Pakistan",
    full: "Plot 14-C, Main Boulevard, DHA Phase 6, Karachi, Pakistan",
    googleMapsUrl: "https://maps.google.com/?q=DHA+Phase+6+Karachi",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.0!2d67.0658!3d24.8007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzAyLjUiTiA2N8KwMDMnNTcuMCJF!5e0!3m2!1sen!2s",
    lat: 24.8007,
    lng: 67.0658,
  },

  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
    { day: "Saturday – Sunday", time: "10:00 AM – 12:00 AM" },
    { day: "Event Days", time: "By prior booking, extended hours available" },
  ],

  social: {
    instagram: "https://instagram.com/marquevenue",
    facebook: "https://facebook.com/marquevenue",
    tiktok: "https://tiktok.com/@marquevenue",
    youtube: "https://youtube.com/@marquevenue",
  },

  capacity: {
    minGuests: 150,
    maxGuests: 1500,
    label: "150 – 1,500 Guests",
  },

  stats: [
    { value: 500, suffix: "+", label: "Events Hosted" },
    { value: 1000, suffix: "+", label: "Happy Families" },
    { value: 1500, suffix: "+", label: "Guest Capacity" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
  ],

  booking: {
    minAdvanceNoticeDays: 14,
    depositNote:
      "A confirmation deposit is required to reserve your date. Full details are shared after your inquiry.",
    responseTimeNote: "Our events team typically responds within 24 hours.",
  },

  nav: {
    primaryCtaLabel: "Check Availability",
    primaryCtaHref: "/booking",
    secondaryCtaLabel: "Explore the Venue",
    secondaryCtaHref: "/venue",
  },

  footer: {
    copyrightName: "Marque Events & Banquets",
  },
} as const;

export type SiteConfig = typeof siteConfig;
