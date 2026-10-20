import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a phone number for a tel: link (strips spaces). */
export function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

/** Build a wa.me link with an optional prefilled message. */
export function whatsappHref(number: string, message?: string) {
  const digits = number.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Slugify a string for use in URLs. */
export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Format a date consistently across the site. */
export function formatDate(date: string | Date) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
