import { masthead } from "@/store";

export function MastheadStrip() {
  return (
    <div className="border-b-2 border-ink pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
      <div>{masthead.left}</div>
      <div className="flex items-center gap-2">
        <span className="pulse-dot" />
        <span>{masthead.right}</span>
      </div>
    </div>
  );
}
