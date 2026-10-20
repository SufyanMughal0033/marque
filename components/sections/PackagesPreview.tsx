import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/Motion";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/lib/data/packages";

export function PackagesPreview() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Packages"
            heading="A Package For Every Scale of Celebration"
            description="Every package can be adjusted around your guest count and priorities — starting prices below are a guide, not a ceiling."
            className="max-w-xl"
          />
          <Button href="/packages" variant="ghost" className="hidden sm:inline-flex">
            Compare All Packages
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <FadeUp key={pkg.id} delay={i * 0.08}>
              <PackageCard pkg={pkg} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex sm:hidden">
          <Button href="/packages" variant="ghost">
            Compare All Packages
          </Button>
        </div>
      </Container>
    </section>
  );
}
