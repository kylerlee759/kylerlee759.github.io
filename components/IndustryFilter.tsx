"use client";

type Props = {
  options: string[];
  active: string;
  onChange: (value: string) => void;
};

export function IndustryFilter({ options, active, onChange }: Props) {
  return (
    <div className="sticky top-14 z-40 -mx-6 md:-mx-10 px-6 md:px-10 py-4 bg-bg/85 backdrop-blur-md border-y border-ink/10">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by industry"
      >
        {options.map((opt) => {
          const isActive = active === opt;
          return (
            <button
              key={opt}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(opt)}
              className={`font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-1.5 border transition-colors focus-ring ${
                isActive
                  ? "bg-accent text-paper border-accent"
                  : "bg-paper/40 text-ink-soft border-ink/15 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
