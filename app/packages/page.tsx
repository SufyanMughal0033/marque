import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/ui/Motion";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Compare Essential, Classic, Signature, and Royal event packages at MARQUE, including menu, decoration, staging, and guest capacity.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="A Package For Every Scale of Celebration"
        description="Starting prices below are a guide, not a ceiling — every package can be adjusted around your guest count and priorities."
        image={{ src: "/images/placeholders/wide-1.svg", alt: "Elegant table setting prepared for a wedding reception" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }]}
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Compare Packages"
            heading="Find the Right Fit"
            description="All prices are starting estimates in PKR and vary by date, season, and final guest count. Request package details for a written quote."
            className="max-w-2xl"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, i) => (
              <FadeUp key={pkg.id} delay={i * 0.08}>
                <PackageCard pkg={pkg} />
              </FadeUp>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-charcoal-100">
            Pricing shown is indicative and subject to change based on date, season, and final
            event specifications. {" "}
          </p>
        </Container>
      </section>
    </>
  );
}
