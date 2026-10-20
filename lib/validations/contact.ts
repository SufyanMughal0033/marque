import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(2, "Please enter a subject.").max(150),
  message: z.string().trim().min(10, "Please provide a few more details.").max(1000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
