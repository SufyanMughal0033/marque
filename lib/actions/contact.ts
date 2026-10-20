"use server";

import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import type { ActionResult } from "@/lib/actions/booking";

/**
 * Handles a general contact form submission. See lib/actions/booking.ts for
 * notes on wiring this up to Supabase and email notifications later.
 */
export async function submitContactMessage(
  values: ContactFormValues
): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Some details look incomplete. Please review the form and try again.",
    };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[contact-message]", parsed.data);
  }

  return {
    success: true,
    message: "Thank you for reaching out. We'll get back to you shortly.",
  };
}
