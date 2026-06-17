import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "paper" | "outline";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  accent:
    "bg-accent text-paper border-2 border-ink hard-shadow-ink hover:bg-accent-deep cta-press-ink",
  paper:
    "bg-paper text-ink border-2 border-ink hard-shadow-accent hover:bg-bg-alt cta-press",
  outline:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper cta-press-ink",
};

export function CTAButton({
  href,
  children,
  variant = "accent",
  external = false,
  className = "",
}: Props) {
  const classes = `inline-flex items-center font-mono text-xs uppercase tracking-[0.16em] px-7 py-4 focus-ring ${variantClasses[variant]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
