import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article";
}

export function Container({ className, as: Tag = "div", ...props }: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
