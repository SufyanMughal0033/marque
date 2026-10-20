import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { siteConfig } from "@/lib/siteConfig";

export function Intro() {
  return (
    <section className="bg-ivory-100 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeUp>
            <Eyebrow>The Experience</Eyebrow>
            <h2 className="mt-6 text-display-md text-balance">
              A venue built around how a celebration actually unfolds.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1} className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-charcoal-100 sm:text-lg">
              {siteConfig.description} Every space — from arrival to the last dance — is
              considered on its own terms, so the flow of your event feels natural rather than
              managed.
            </p>
            <p className="mt-5 text-base leading-relaxed text-charcoal-100 sm:text-lg">
              Our team works closely with families and organisers to bring together decor,
              catering, and hospitality under one roof, without losing the personal details that
              make a celebration feel like yours.
            </p>
          </FadeUp>
        </div>

        <Divider className="my-16" />

        <StaggerContainer className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {siteConfig.stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center sm:text-left">
              <div className="font-serif text-4xl text-charcoal-500 sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-charcoal-100 sm:text-[13px]">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
