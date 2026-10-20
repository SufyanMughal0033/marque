"use server";

import { bookingSchema, type BookingFormValues } from "@/lib/validations/booking";

export interface ActionResult {
  success: boolean;
  message: string;
}

/**
 * Handles a booking/availability inquiry.
 *
 * This is intentionally storage-agnostic for now: it validates the payload
 * on the server (never trust client-side validation alone) and returns a
 * result the form can react to.
 *
 * To connect a real backend later:
 *   1. Add SUPABASE_SERVICE_ROLE_KEY / NEXT_PUBLIC_SUPABASE_URL to .env.local
 *   2. Create a server-only Supabase client (never import it into client
 *      components) and insert the parsed `data` into a `bookings` table.
 *   3. Optionally trigger an email/WhatsApp notification via a provider
 *      such as Resend, using the RESEND_API_KEY env variable.
 */
export async function submitBookingInquiry(
  values: BookingFormValues
): Promise<ActionResult> {
  const parsed = bookingSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Some details look incomplete. Please review the form and try again.",
    };
  }

  const data = parsed.data;

  // --- Persistence placeholder -------------------------------------------
  // await supabaseServerClient.from("bookings").insert({ ...data });
  // await sendBookingNotificationEmail(data);
  // -------------------------------------------------------------------------

  if (process.env.NODE_ENV !== "production") {
    console.log("[booking-inquiry]", data);
  }

  return {
    success: true,
    message:
      "Thank you — your inquiry has been received. Our events team will reach out within 24 hours to confirm availability.",
  };
}
