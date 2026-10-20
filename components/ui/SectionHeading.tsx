import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/ui/Motion";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  headingClassName?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
  headingClassName,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </div>
      )}
      <Tag
        className={cn(
          "text-display-md text-balance",
          light ? "text-ivory-100" : "text-charcoal-500",
          headingClassName
        )}
      >
        {heading}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-ivory-300" : "text-charcoal-100"
          )}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
