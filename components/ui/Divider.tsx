import { cn } from "@/lib/utils";

export function Divider({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <hr
      className={cn(
        "border-t",
        light ? "border-ivory-100/15" : "border-charcoal-500/10",
        className
      )}
    />
  );
}
