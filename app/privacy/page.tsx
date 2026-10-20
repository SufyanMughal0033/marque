import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MARQUE collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-ivory-100 py-32 sm:py-40">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />
        <h1 className="mt-6 text-display-md text-balance">Privacy Policy</h1>
        <p className="mt-4 text-sm text-charcoal-100">Last updated: January 2026 (placeholder — replace with your actual policy date).</p>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-p:text-charcoal-100 prose-li:text-charcoal-100">
          <p>
            This is placeholder privacy policy content. Replace this page with a policy reviewed
            by your legal counsel before launch. It should describe what information is
            collected, how it is used, and the rights visitors have over their data.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit a booking inquiry or contact form, we may collect your name, phone
            number, email address, and details about your event. We do not collect payment
            information through this website.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to booking and contact inquiries.</li>
            <li>To coordinate event planning details once a booking is confirmed.</li>
            <li>To send occasional updates, if you have opted in via the newsletter form.</li>
          </ul>

          <h2>Data Storage</h2>
          <p>
            Inquiry data submitted through this website is intended to be stored securely and
            accessed only by authorised staff. As the site is connected to a backend service in
            the future, this section should be updated to reflect the specific provider and
            retention practices used.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may use third-party services such as Google Maps for location display
            and WhatsApp for messaging. These services operate under their own privacy policies.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy, please use the contact details listed on our{" "}
            Contact page.
          </p>
        </div>
      </Container>
    </section>
  );
}
