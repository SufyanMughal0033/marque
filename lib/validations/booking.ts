import { z } from "zod";

export const eventTypeOptions = [
  "Wedding",
  "Mehndi",
  "Barat",
  "Walima",
  "Engagement",
  "Nikkah",
  "Corporate Event",
  "Conference",
  "Birthday Celebration",
  "Private Event",
  "Product Launch",
  "Family Gathering",
  "Other",
] as const;

export const packageOptions = [
  "Essential",
  "Classic",
  "Signature",
  "Royal",
  "Not sure yet",
] as const;

export const preferredTimeOptions = ["Morning", "Afternoon", "Evening", "Flexible"] as const;

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  eventType: z.enum(eventTypeOptions, {
    errorMap: () => ({ message: "Please select an event type." }),
  }),
  eventDate: z
    .string()
    .min(1, "Please select a preferred date."),
  expectedGuests: z
    .string()
    .min(1, "Please provide an estimated guest count."),
  preferredTime: z.enum(preferredTimeOptions, {
    errorMap: () => ({ message: "Please select a preferred time." }),
  }),
  package: z.enum(packageOptions, {
    errorMap: () => ({ message: "Please select a package." }),
  }),
  message: z.string().trim().max(1000, "Message is too long.").optional().or(z.literal("")),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
