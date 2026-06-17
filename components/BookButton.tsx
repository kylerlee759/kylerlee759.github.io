"use client";

import type { MouseEvent, ReactNode } from "react";
import { bookCall, contactInfo } from "@/store";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

let calendlyLoadPromise: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (window.Calendly) return Promise.resolve();
  if (calendlyLoadPromise) return calendlyLoadPromise;

  calendlyLoadPromise = new Promise<void>((resolve, reject) => {
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const scriptId = "calendly-widget-js";
    const existing = document.getElementById(scriptId);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => {
        calendlyLoadPromise = null;
        reject(new Error("calendly-load"));
      });
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      calendlyLoadPromise = null;
      reject(new Error("calendly-load"));
    };
    document.head.appendChild(script);
  });

  return calendlyLoadPromise;
}

function buildMailto(email: string): string {
  const params = new URLSearchParams({
    subject: bookCall.emailSubject,
    body: bookCall.emailBody,
  });
  return `mailto:${email}?${params.toString()}`;
}

function resolveHref(fallbackHref: string): string {
  if (contactInfo.email) return buildMailto(contactInfo.email);
  return fallbackHref;
}

type Variant = "accent" | "paper" | "outline";

const variantClasses: Record<Variant, string> = {
  accent:
    "bg-accent text-paper border-2 border-ink hard-shadow-ink hover:bg-accent-deep cta-press-ink",
  paper:
    "bg-paper text-ink border-2 border-ink hard-shadow-accent hover:bg-bg-alt cta-press",
  outline:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper cta-press-ink",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  fallbackHref?: string;
};

export function BookButton({
  children,
  variant = "accent",
  className = "",
  fallbackHref = "#contact",
}: Props) {
  const href = resolveHref(fallbackHref);
  const calendlyUrl = contactInfo.calendlyUrl;

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (!calendlyUrl) return;
    e.preventDefault();
    try {
      await loadCalendly();
      window.Calendly?.initPopupWidget({ url: calendlyUrl });
    } catch {
      window.location.href = href;
    }
  };

  const classes = `inline-flex items-center font-mono text-xs uppercase tracking-[0.16em] px-7 py-4 focus-ring ${variantClasses[variant]} ${className}`;

  return (
    <a href={href} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}
