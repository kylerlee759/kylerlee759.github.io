import Link from "next/link";
import {
  heroFocus,
  heroTerminalRotationMs,
  heroTerminalStatuses,
} from "@/store";
import { RotatingTerminal } from "./RotatingTerminal";

export function HeroFocusTeaser() {
  return (
    <aside className="bg-ink text-paper p-7 md:p-8 flex flex-col gap-5 hard-shadow-accent border-2 border-ink h-full">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
        <span className="pulse-dot pulse-dot-accent" />
        <span className="text-accent font-semibold">{heroFocus.badge}</span>
        <span className="text-paper/40">·</span>
        <span>{heroFocus.label}</span>
      </div>

      <div>
        <h3 className="font-serif text-4xl md:text-[40px] tracking-tightish text-paper">
          {heroFocus.title.replace(/\.$/, "")}
          <span className="text-accent">.</span>
        </h3>
        <p className="font-serif italic font-light text-paper/80 mt-3 leading-snug">
          {heroFocus.description}
        </p>
      </div>

      <div className="bg-black/40 border border-paper/15 px-3 py-2.5 mt-auto">
        <RotatingTerminal
          statuses={heroTerminalStatuses}
          intervalMs={heroTerminalRotationMs}
        />
      </div>

      <Link
        href={heroFocus.link.href}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent hover:text-paper transition-colors inline-flex items-center gap-1 group w-fit"
      >
        {heroFocus.link.label}
      </Link>
    </aside>
  );
}
