import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[13px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-editorial focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal-500 text-ivory-100 hover:bg-charcoal-600 border border-charcoal-500",
  secondary:
    "bg-transparent text-charcoal-500 border border-charcoal-500/30 hover:border-charcoal-500",
  "outline-light":
    "bg-transparent text-ivory-100 border border-ivory-100/50 hover:border-ivory-100 hover:bg-ivory-100/10",
  ghost: "bg-transparent text-charcoal-500 hover:text-bronze-400 px-0",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5",
  lg: "px-8 py-[1.125rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
}

interface ButtonAsButton
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLink
  extends CommonProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant !== "ghost" && sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
