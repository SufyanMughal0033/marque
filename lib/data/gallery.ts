import type { GalleryImage } from "@/lib/types";

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "weddings", span: "tall", image: { src: "/images/placeholders/tall-1.svg", alt: "Bride and groom stage decorated for a wedding reception" } },
  { id: "g2", category: "mehndi", span: "normal", image: { src: "/images/placeholders/square-1.svg", alt: "Colourful mehndi decor with marigold arrangements" } },
  { id: "g3", category: "decor", span: "wide", image: { src: "/images/placeholders/wide-1.svg", alt: "Floral stage backdrop with warm ambient lighting" } },
  { id: "g4", category: "venue", span: "normal", image: { src: "/images/placeholders/square-2.svg", alt: "Interior view of the grand hall set for an event" } },
  { id: "g5", category: "barat", span: "normal", image: { src: "/images/placeholders/square-3.svg", alt: "Barat arrival setup with decorated entrance" } },
  { id: "g6", category: "food", span: "normal", image: { src: "/images/placeholders/square-4.svg", alt: "Live BBQ counter being prepared for guests" } },
  { id: "g7", category: "walima", span: "tall", image: { src: "/images/placeholders/tall-2.svg", alt: "Elegant walima stage in the evening" } },
  { id: "g8", category: "corporate", span: "wide", image: { src: "/images/placeholders/wide-2.svg", alt: "Corporate dinner setup with rows of round tables" } },
  { id: "g9", category: "decor", span: "normal", image: { src: "/images/placeholders/square-5.svg", alt: "Close-up of table centerpiece floral arrangement" } },
  { id: "g10", category: "venue", span: "normal", image: { src: "/images/placeholders/square-6.svg", alt: "Outdoor lawn space set for a daytime event" } },
  { id: "g11", category: "weddings", span: "normal", image: { src: "/images/placeholders/square-7.svg", alt: "Guests seated at a wedding reception" } },
  { id: "g12", category: "mehndi", span: "wide", image: { src: "/images/placeholders/wide-3.svg", alt: "Mehndi stage with vibrant floral canopy" } },
  { id: "g13", category: "food", span: "normal", image: { src: "/images/placeholders/square-8.svg", alt: "Dessert counter arranged for guests" } },
  { id: "g14", category: "barat", span: "tall", image: { src: "/images/placeholders/tall-3.svg", alt: "Groom entrance stage decorated with lighting" } },
  { id: "g15", category: "corporate", span: "normal", image: { src: "/images/placeholders/square-9.svg", alt: "Conference stage set up with screens" } },
  { id: "g16", category: "venue", span: "wide", image: { src: "/images/placeholders/wide-4.svg", alt: "Wide view of the main hall before guest arrival" } },
  { id: "g17", category: "walima", span: "normal", image: { src: "/images/placeholders/square-10.svg", alt: "Walima dining hall set with formal table settings" } },
  { id: "g18", category: "decor", span: "normal", image: { src: "/images/placeholders/square-11.svg", alt: "Entrance decor with drapery and floral accents" } },
  { id: "g19", category: "weddings", span: "normal", image: { src: "/images/placeholders/square-12.svg", alt: "Wedding couple's stage from a wide angle" } },
  { id: "g20", category: "food", span: "wide", image: { src: "/images/placeholders/wide-5.svg", alt: "Buffet spread with traditional Pakistani dishes" } },
];

export const galleryCategoryLabels: Record<string, string> = {
  all: "All",
  weddings: "Weddings",
  mehndi: "Mehndi",
  barat: "Barat",
  walima: "Walima",
  corporate: "Corporate",
  decor: "Decor",
  food: "Food",
  venue: "Venue",
};
