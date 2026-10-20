import {
  Landmark,
  Sparkles,
  Armchair,
  DoorOpen,
  CarFront,
  UtensilsCrossed,
  TreePine,
  Presentation,
  Lightbulb,
  AudioLines,
  BatteryCharging,
  ShieldCheck,
  CalendarCheck,
  ClipboardList,
  Flower2,
  ChefHat,
  LayoutPanelTop,
  Camera,
  Users,
  Building2,
  Settings2,
  Circle,
  type LucideIcon,
} from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  Landmark,
  Sparkles,
  Armchair,
  DoorOpen,
  CarFront,
  UtensilsCrossed,
  TreePine,
  Presentation,
  Lightbulb,
  AudioLines,
  BatteryCharging,
  ShieldCheck,
  CalendarCheck,
  ClipboardList,
  Flower2,
  ChefHat,
  LayoutPanelTop,
  Camera,
  Users,
  Building2,
  Settings2,
};

export function DynamicIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const IconComponent = iconRegistry[name] ?? Circle;
  return <IconComponent className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
