import type { NavItem } from "@/lib/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Venue", href: "/venue" },
  { label: "Events", href: "/events" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Menu", href: "/menu" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: { title: string; links: NavItem[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "The Venue", href: "/venue" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Plan",
    links: [
      { label: "Event Types", href: "/events" },
      { label: "Packages", href: "/packages" },
      { label: "Menu", href: "/menu" },
      { label: "Check Availability", href: "/booking" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
