import type { EventPackage } from "@/lib/types";

/**
 * Placeholder pricing. Replace `startingFrom` values with current rates —
 * everything else in the UI derives from this file, so no component edits
 * are needed when prices change.
 */
export const packages: EventPackage[] = [
  {
    id: "essential",
    tier: "essential",
    name: "Essential",
    startingFrom: "PKR 12,00,000",
    guestCapacity: "Up to 400 guests",
    duration: "5 hours",
    inclusions: {
      menu: "3-course set menu, 2 mains",
      decoration: "Standard stage & table decor",
      stage: "Fixed stage design",
      lighting: "Ambient hall lighting",
      sound: "Standard PA system",
      parking: "Shared guest parking",
      bridalRoom: "Shared preparation room",
      customization: "Limited customization",
    },
  },
  {
    id: "classic",
    tier: "classic",
    name: "Classic",
    startingFrom: "PKR 18,00,000",
    guestCapacity: "Up to 700 guests",
    duration: "6 hours",
    inclusions: {
      menu: "4-course menu, 3 mains + BBQ",
      decoration: "Themed stage & floor decor",
      stage: "Semi-custom stage design",
      lighting: "Ambient + accent lighting",
      sound: "Full PA system with mic setup",
      parking: "Dedicated guest parking",
      bridalRoom: "Private bridal room",
      customization: "Moderate customization",
    },
  },
  {
    id: "signature",
    tier: "signature",
    name: "Signature",
    startingFrom: "PKR 26,00,000",
    guestCapacity: "Up to 1,000 guests",
    duration: "7 hours",
    featured: true,
    inclusions: {
      menu: "5-course menu with live counters",
      decoration: "Fully custom floral & stage decor",
      stage: "Custom-designed stage",
      lighting: "Layered architectural lighting",
      sound: "Premium sound with live performance support",
      parking: "Valet parking included",
      bridalRoom: "Private bridal suite",
      customization: "Extensive customization",
    },
  },
  {
    id: "royal",
    tier: "royal",
    name: "Royal",
    startingFrom: "PKR 38,00,000",
    guestCapacity: "Up to 1,500 guests",
    duration: "8 hours, extendable",
    inclusions: {
      menu: "Full multi-cuisine menu with live stations",
      decoration: "Signature designer decor concept",
      stage: "Bespoke stage & entrance design",
      lighting: "Full architectural + dynamic lighting",
      sound: "Concert-grade sound & AV production",
      parking: "Full valet with guest concierge",
      bridalRoom: "Private bridal suite with attendant",
      customization: "Complete end-to-end customization",
    },
  },
];
