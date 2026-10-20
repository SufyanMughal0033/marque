export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
  /** Intrinsic width/height help avoid layout shift for non-fill images. */
  width?: number;
  height?: number;
}

export interface VenueFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EventTypeItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: ImageAsset;
}

export type PackageTier = "essential" | "classic" | "signature" | "royal";

export interface EventPackage {
  id: string;
  tier: PackageTier;
  name: string;
  startingFrom: string;
  guestCapacity: string;
  duration: string;
  featured?: boolean;
  inclusions: {
    menu: string;
    decoration: string;
    stage: string;
    lighting: string;
    sound: string;
    parking: string;
    bridalRoom: string;
    customization: string;
  };
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  isSignature?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export type GalleryCategory =
  | "weddings"
  | "mehndi"
  | "barat"
  | "walima"
  | "corporate"
  | "decor"
  | "food"
  | "venue";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  image: ImageAsset;
  span?: "tall" | "wide" | "normal";
}

export interface EventStory {
  id: string;
  slug: string;
  title: string;
  eventType: string;
  date: string;
  description: string;
  content: string[];
  coverImage: ImageAsset;
  gallery: ImageAsset[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  eventType: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type BlogCategory =
  | "Wedding Planning"
  | "Event Ideas"
  | "Decor"
  | "Food & Catering"
  | "Corporate Events"
  | "Venue Guide";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  featuredImage: ImageAsset;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  category: BlogCategory;
  seo: {
    title: string;
    description: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}
