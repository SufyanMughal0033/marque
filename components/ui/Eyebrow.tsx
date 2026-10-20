import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-widest2",
        light ? "text-ivory-200" : "text-bronze-400",
        className
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-ivory-200/60" : "bg-bronze-400/60")} />
      {children}
    </span>
  );
}
