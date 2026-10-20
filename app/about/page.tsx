import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MARQUE's story, philosophy, and the team behind a premium event venue built for weddings and celebrations.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    role: "Events Planning",
    description: "Coordinates timelines, vendors, and on-the-day logistics from first inquiry to final farewell.",
  },
  {
    role: "Culinary Team",
    description: "Plans and executes menus across traditional, BBQ, and contemporary cuisine for every guest count.",
  },
  {
    role: "Guest Experience",
    description: "Manages arrivals, seating, and hospitality so every guest feels looked after.",
  },
  {
    role: "Operations & Security",
    description: "Oversees parking, power, and safety, keeping the event running smoothly behind the scenes.",
  },
];

const commitments = [
  "Transparent contracts and pricing, agreed before your date is confirmed.",
  "A single dedicated coordinator for your event, from inquiry to event day.",
  "Facilities maintained and tested ahead of every booking.",
  "Honest guidance — including telling you if a date or package won't work for your guest count.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A venue built around how families actually celebrate."
        description="Our story, our philosophy, and the people who bring each event together."
        image={{ src: "/images/placeholders/hero-venue.svg", alt: "Wide interior view of the main event hall" }}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
      />

      {/* Our Story */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <ImageReveal
            image={{ src: "/images/placeholders/tall-1.svg", alt: "Early evening view of the venue entrance" }}
            className="aspect-[4/5] lg:order-1"
          />
          <div className="flex flex-col justify-center lg:order-2">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">
              Built for celebrations that deserved a better setting.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-100 sm:text-lg">
              {siteConfig.name} began with a simple observation: families planning weddings and
              large events were often choosing between beautiful spaces and dependable service —
              rarely both. We set out to bring the two together in a single venue.
            </p>
            <p className="mt-5 text-base leading-relaxed text-charcoal-100 sm:text-lg">
              Over the years since, the venue has grown around real feedback from the families
              and organisations who&apos;ve hosted here — from how seating flows through the hall to
              how power and parking are managed at full capacity.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Philosophy */}
      <section className="bg-charcoal-500 py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <Eyebrow light>Our Philosophy</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance text-ivory-100">
              Thoughtful hospitality, not a fixed formula.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory-300 sm:text-lg">
              No two families celebrate the same way, so we avoid treating any event as a
              template. Our role is to provide a dependable foundation — space, staffing, power,
              catering — and then shape it around what matters most to you.
            </p>
          </div>
          <ImageReveal
            image={{ src: "/images/placeholders/tall-2.svg", alt: "Detail shot of table setting and decor" }}
            className="aspect-[4/5]"
          />
        </Container>
      </section>

      {/* Our Venue (stats) */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container>
          <FadeUp className="mx-auto max-w-2xl text-center">
            <Eyebrow className="mx-auto justify-center">Our Venue</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">A space that scales with your guest list.</h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-100 sm:text-lg">
              From an intimate nikkah to a wedding for over a thousand guests, the venue&apos;s halls,
              lounge, and outdoor space are designed to be reconfigured rather than compromised.
            </p>
          </FadeUp>

          <StaggerContainer className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-charcoal-500 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-charcoal-100">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Our Team */}
      <section className="bg-ivory-200 py-24 sm:py-32">
        <Container>
          <FadeUp className="max-w-xl">
            <Eyebrow>Our Team</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">The people behind each event.</h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-100">
              A small, dedicated team works across planning, culinary, hospitality, and
              operations for every booking.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <StaggerItem key={member.role} className="border-t border-charcoal-500/10 pt-6">
                <h3 className="font-serif text-xl text-charcoal-500">{member.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-100">{member.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Our Commitment / Why Families Choose Us */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Our Commitment</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">What you can expect from us.</h2>
          </div>
          <StaggerContainer>
            {commitments.map((item, i) => (
              <StaggerItem key={item}>
                <div className="flex gap-5 py-5">
                  <span className="font-serif text-2xl text-bronze-300">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-charcoal-100 sm:text-base">{item}</p>
                </div>
                <Divider />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
