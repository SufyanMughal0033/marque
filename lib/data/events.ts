import type { EventStory } from "@/lib/types";

export const eventStories: EventStory[] = [
  {
    id: "e1",
    slug: "a-winter-walima",
    title: "A Winter Walima",
    eventType: "Walima",
    date: "2026-01-18",
    description:
      "A softly lit evening walima with a warm, neutral palette and an intimate dining layout for 500 guests.",
    content: [
      "The family wanted an evening that felt calm rather than overstated — warm light, neutral tones, and a stage built around a single sculptural floral arrangement.",
      "Dinner was served in three courses across the main dining hall, with the live BBQ counter positioned near the outdoor terrace to keep the smoke and energy away from the main seating.",
      "The evening closed with a short performance on the main stage, timed carefully around the sound system's acoustic setup for the hall.",
    ],
    coverImage: { src: "/images/placeholders/wide-1.svg", alt: "Winter walima stage with warm lighting" },
    gallery: [
      { src: "/images/placeholders/square-1.svg", alt: "Walima stage close-up with floral details" },
      { src: "/images/placeholders/square-2.svg", alt: "Guests seated at round dining tables" },
      { src: "/images/placeholders/square-3.svg", alt: "Evening lighting across the main hall" },
    ],
  },
  {
    id: "e2",
    slug: "an-evening-of-elegance",
    title: "An Evening of Elegance",
    eventType: "Wedding Reception",
    date: "2025-12-02",
    description:
      "A signature-package wedding reception built around a custom stage design and a layered lighting plan.",
    content: [
      "This reception used the Signature package in full — a custom stage backdrop, layered architectural lighting, and a five-course dinner served with live counters.",
      "The couple requested a clear separation between the reception lounge and the main hall, which allowed close family to receive guests without crowding the dining area.",
      "Photography was planned around the venue's natural light points near the reception entrance, captured before the evening lighting plan came into effect.",
    ],
    coverImage: { src: "/images/placeholders/wide-2.svg", alt: "Wedding reception stage in the evening" },
    gallery: [
      { src: "/images/placeholders/square-4.svg", alt: "Reception lounge seating area" },
      { src: "/images/placeholders/square-5.svg", alt: "Custom stage backdrop with floral design" },
      { src: "/images/placeholders/square-6.svg", alt: "Guests arriving at the reception entrance" },
    ],
  },
  {
    id: "e3",
    slug: "corporate-annual-dinner",
    title: "Corporate Annual Dinner",
    eventType: "Corporate Event",
    date: "2025-11-14",
    description:
      "An AV-equipped annual dinner for 350 employees, including an awards segment and a plated three-course meal.",
    content: [
      "The event required a stage capable of supporting a screen, podium, and a small performance segment — configured using the venue's modular staging system.",
      "Seating was arranged in a banquet-style layout to keep sightlines clear from every table to the stage and screen.",
      "The evening's format moved from a welcome reception, to dinner, to an awards segment, all managed on a fixed run-of-show with the in-house AV team.",
    ],
    coverImage: { src: "/images/placeholders/wide-3.svg", alt: "Corporate annual dinner stage with screen" },
    gallery: [
      { src: "/images/placeholders/square-7.svg", alt: "Banquet-style seating for corporate dinner" },
      { src: "/images/placeholders/square-8.svg", alt: "Awards segment on stage" },
      { src: "/images/placeholders/square-9.svg", alt: "Welcome reception area for corporate guests" },
    ],
  },
  {
    id: "e4",
    slug: "a-mehndi-in-marigold",
    title: "A Mehndi in Marigold",
    eventType: "Mehndi",
    date: "2025-10-09",
    description:
      "A daytime mehndi hosted on the outdoor lawn, built around a marigold and dupatta-based colour palette.",
    content: [
      "The outdoor lawn was used in full for this celebration, with shaded seating arranged around a central dance floor.",
      "Decor combined fresh marigold with fabric drapery, keeping the palette consistent from the entrance through to the stage.",
      "A dedicated food counter setup allowed guests to move freely between seating and the live snack stations throughout the afternoon.",
    ],
    coverImage: { src: "/images/placeholders/wide-4.svg", alt: "Outdoor mehndi setup with marigold decor" },
    gallery: [
      { src: "/images/placeholders/square-10.svg", alt: "Marigold stage decoration for mehndi" },
      { src: "/images/placeholders/square-11.svg", alt: "Outdoor lawn seating arrangement" },
      { src: "/images/placeholders/square-12.svg", alt: "Guests dancing at the mehndi celebration" },
    ],
  },
];
