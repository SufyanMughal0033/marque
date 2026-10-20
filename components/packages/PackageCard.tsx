import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/utils";
import type { EventPackage } from "@/lib/types";

const inclusionLabels: Record<keyof EventPackage["inclusions"], string> = {
  menu: "Menu",
  decoration: "Decoration",
  stage: "Stage",
  lighting: "Lighting",
  sound: "Sound",
  parking: "Parking",
  bridalRoom: "Bridal Room",
  customization: "Customization",
};

export function PackageCard({ pkg }: { pkg: EventPackage }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border p-8 transition-colors duration-300 sm:p-9",
        pkg.featured
          ? "border-bronze-300 bg-charcoal-500 text-ivory-100"
          : "border-charcoal-500/10 bg-ivory-100 text-charcoal-500"
      )}
    >
      {pkg.featured && (
        <span className="mb-6 inline-flex w-fit items-center gap-2 border border-champagne-300/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-champagne-300">
          Signature Selection
        </span>
      )}

      <h3 className={cn("font-serif text-2xl sm:text-[1.75rem]", pkg.featured ? "text-ivory-100" : "text-charcoal-500")}>
        {pkg.name}
      </h3>

      <div className="mt-4">
        <span className={cn("text-xs uppercase tracking-widest", pkg.featured ? "text-ivory-300" : "text-charcoal-100")}>
          Starting From
        </span>
        <p className={cn("mt-1 font-serif text-3xl sm:text-4xl", pkg.featured ? "text-ivory-100" : "text-charcoal-500")}>
          {pkg.startingFrom}
        </p>
      </div>

      <div className={cn("mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm", pkg.featured ? "text-ivory-300" : "text-charcoal-100")}>
        <span>{pkg.guestCapacity}</span>
        <span aria-hidden="true">&bull;</span>
        <span>{pkg.duration}</span>
      </div>

      <Divider light={pkg.featured} className="my-7" />

      <ul className="flex-1 space-y-3.5">
        {(Object.keys(pkg.inclusions) as (keyof EventPackage["inclusions"])[]).map((key) => (
          <li key={key} className="flex items-start gap-3 text-sm">
            <Check
              className={cn("mt-0.5 h-4 w-4 flex-shrink-0", pkg.featured ? "text-champagne-300" : "text-bronze-400")}
              aria-hidden="true"
            />
            <span>
              <span className={cn("font-medium", pkg.featured ? "text-ivory-100" : "text-charcoal-500")}>
                {inclusionLabels[key]}:
              </span>{" "}
              <span className={pkg.featured ? "text-ivory-300" : "text-charcoal-100"}>
                {pkg.inclusions[key]}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={`/booking?package=${encodeURIComponent(pkg.name)}`}
        variant={pkg.featured ? "outline-light" : "secondary"}
        className="mt-9 w-full justify-center"
      >
        Request Package Details
      </Button>
    </div>
  );
}
