import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking events and using the MARQUE website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-ivory-100 py-32 sm:py-40">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions", href: "/terms" }]} />
        <h1 className="mt-6 text-display-md text-balance">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-charcoal-100">Last updated: January 2026 (placeholder — replace with your actual terms).</p>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-p:text-charcoal-100 prose-li:text-charcoal-100">
          <p>
            This is placeholder terms and conditions content. Replace this page with terms
            reviewed by your legal counsel before launch, including your actual booking,
            deposit, and cancellation policies.
          </p>

          <h2>Bookings &amp; Deposits</h2>
          <p>
            A confirmation deposit is required to reserve a date. Dates are held tentatively for
            a limited period upon inquiry and are only confirmed once a deposit and signed
            agreement are received.
          </p>

          <h2>Cancellations &amp; Rescheduling</h2>
          <p>
            Cancellation and rescheduling terms will be outlined in your individual booking
            contract and depend on how far in advance notice is given relative to the event
            date.
          </p>

          <h2>Guest Capacity</h2>
          <p>
            Final guest counts must be confirmed within the timeframe specified in your
            contract. Additional charges may apply for guest counts exceeding your selected
            package.
          </p>

          <h2>Vendor Policy</h2>
          <p>
            Details on bringing outside vendors (decor, photography, catering) for your event
            will be confirmed with your events coordinator based on your selected package.
          </p>

          <h2>Liability</h2>
          <p>
            MARQUE takes reasonable care to maintain a safe venue but is not liable for loss or
            damage to personal property brought onto the premises during an event.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, please use the contact details listed on our
            Contact page.
          </p>
        </div>
      </Container>
    </section>
  );
}
