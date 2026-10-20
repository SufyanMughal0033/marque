import { Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { Divider } from "@/components/ui/Divider";
import { menuCategories } from "@/lib/data/menu";

const preview = menuCategories.slice(0, 4);

export function MenuPreview() {
  return (
    <section className="bg-charcoal-500 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="The Menu"
            heading="A Table Guests Remember"
            description="Traditional Pakistani cuisine alongside contemporary favourites, served fresh across live counters and multi-course settings."
            light
            className="max-w-xl"
          />
          <a
            href="/downloads/marque-full-menu.pdf"
            download
            className="hidden items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-champagne-300 transition-colors hover:text-champagne-200 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Full Menu
          </a>
        </div>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {preview.map((category) => (
            <StaggerItem key={category.id}>
              <h3 className="font-serif text-2xl text-ivory-100">{category.title}</h3>
              <Divider light className="my-4" />
              <ul className="space-y-4">
                {category.items.slice(0, 3).map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-ivory-100">
                        {item.name}
                        {item.isSignature && (
                          <span className="ml-2 text-[10px] uppercase tracking-widest text-bronze-300">
                            Signature
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-sm text-ivory-300">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mt-14 flex flex-wrap items-center gap-4">
          <Button href="/menu" variant="outline-light">
            View Full Menu
          </Button>
          <a
            href="/downloads/marque-full-menu.pdf"
            download
            className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-champagne-300 transition-colors hover:text-champagne-200 sm:hidden"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Full Menu
          </a>
        </FadeUp>
      </Container>
    </section>
  );
}
