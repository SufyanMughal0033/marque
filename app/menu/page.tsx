import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { FadeUp } from "@/components/ui/Motion";
import { menuCategories } from "@/lib/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore MARQUE's full menu — starters, main course, BBQ, rice, desserts, beverages, tea, and special menu options for weddings and events.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="A Table Guests Remember"
        description="Traditional Pakistani cuisine alongside contemporary favourites, prepared fresh for every event."
        image={{ src: "/images/placeholders/wide-2.svg", alt: "Live catering counter being prepared for guests" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Menu", href: "/menu" }]}
      />

      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Full Menu"
              heading="Explore Every Category"
              description="Menus vary by package. Dishes below reflect commonly served options and can be customized on request."
              className="max-w-xl"
            />
            <a
              href="/downloads/marque-full-menu.pdf"
              download
              className="inline-flex items-center gap-2 border border-charcoal-500/20 px-5 py-3 text-[13px] font-medium uppercase tracking-widest text-charcoal-500 transition-colors hover:border-charcoal-500"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Full Menu
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
            {menuCategories.map((category) => (
              <FadeUp key={category.id}>
                <h2 className="font-serif text-2xl text-charcoal-500 sm:text-3xl">{category.title}</h2>
                <p className="mt-2 text-sm text-charcoal-100">{category.description}</p>
                <Divider className="my-6" />
                <ul className="space-y-5">
                  {category.items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-charcoal-500 sm:text-base">
                          {item.name}
                          {item.isSignature && (
                            <span className="ml-2 text-[10px] font-medium uppercase tracking-widest text-bronze-400">
                              Signature
                            </span>
                          )}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal-100">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
