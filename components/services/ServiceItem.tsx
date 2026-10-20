import { DynamicIcon } from "@/lib/icons";
import type { ServiceItem as ServiceItemType } from "@/lib/types";

export function ServiceItem({ service }: { service: ServiceItemType }) {
  return (
    <div className="group border-t border-charcoal-500/10 py-7 transition-colors first:border-t-0 sm:border-t-0 sm:border-l sm:py-0 sm:pl-7">
      <DynamicIcon
        name={service.icon}
        className="h-6 w-6 text-bronze-400 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <h3 className="mt-4 font-serif text-xl text-charcoal-500">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-100">{service.description}</p>
    </div>
  );
}
