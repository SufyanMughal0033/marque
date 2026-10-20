"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClipReveal } from "@/components/ui/Motion";
import type { ImageAsset } from "@/lib/types";

interface ImageRevealProps {
  image: ImageAsset;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  fill?: boolean;
  delay?: number;
}

export function ImageReveal({
  image,
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  hoverZoom = false,
  fill = true,
  delay = 0,
}: ImageRevealProps) {
  return (
    <ClipReveal className={cn("relative overflow-hidden", className)} delay={delay}>
      <div className={cn("group relative h-full w-full overflow-hidden", !fill && "aspect-[4/5]")}>
        <Image
          src={image.src}
          alt={image.alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-editorial",
            hoverZoom && "group-hover:scale-[1.06]",
            imageClassName
          )}
        />
      </div>
    </ClipReveal>
  );
}
