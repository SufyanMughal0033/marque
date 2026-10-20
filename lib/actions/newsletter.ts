"use server";

import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations/newsletter";
import type { ActionResult } from "@/lib/actions/booking";

export async function subscribeToNewsletter(
  values: NewsletterFormValues
): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[newsletter-signup]", parsed.data);
  }

  return { success: true, message: "You're subscribed. Thank you for staying in touch." };
}
