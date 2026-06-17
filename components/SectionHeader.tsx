import type { SectionHeader as SectionHeaderData } from "@/store";
import { RichText } from "./RichText";

type Props = {
  data: SectionHeaderData;
  className?: string;
  align?: "left" | "center";
  size?: "lg" | "xl";
  tone?: "ink" | "paper";
};

export function SectionHeader({
  data,
  className = "",
  align = "left",
  size = "xl",
  tone = "ink",
}: Props) {
  const titleSize =
    size === "xl"
      ? "text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]"
      : "text-[36px] sm:text-5xl md:text-6xl";
  const titleColor = tone === "paper" ? "text-paper" : "text-ink";
  const kickerColor = tone === "paper" ? "text-paper/70" : "text-muted";
  return (
    <header
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {data.eyebrow && (
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
          {data.eyebrow}
        </div>
      )}
      <RichText
        as="h2"
        content={data.title}
        className={`font-serif font-light leading-[0.98] tracking-tightest display-opsz-large ${titleSize} ${titleColor}`}
      />
      {data.kicker && (
        <p
          className={`font-serif italic ${kickerColor} text-lg md:text-xl mt-6 max-w-2xl leading-snug`}
        >
          {data.kicker}
        </p>
      )}
    </header>
  );
}
