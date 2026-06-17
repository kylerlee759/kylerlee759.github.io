import {
  engagementClosingStatement,
  engagementColumns,
  engagementHeader,
} from "@/store";
import { RichText } from "./RichText";
import { SectionHeader } from "./SectionHeader";
import { RevealOnScroll } from "./RevealOnScroll";

export function Engagement() {
  return (
    <section
      id="how"
      className="bg-bg-alt border-y-2 border-ink py-20 md:py-28"
    >
      <div className="max-w-site mx-auto px-6 md:px-10">
        <SectionHeader data={engagementHeader} />

        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 md:mt-20 md:divide-x md:divide-ink/15">
          {engagementColumns.map((col, i) => (
            <RevealOnScroll
              key={col.number}
              delay={i * 0.1}
              className="px-0 md:px-8 first:md:pl-0 last:md:pr-0 py-8 md:py-2 flex flex-col"
            >
              <div className="flex items-end justify-between gap-4 mb-6 border-b border-ink/15 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {col.category}
                </span>
                <span
                  aria-hidden
                  className="font-serif text-[88px] md:text-[104px] leading-[0.8] display-opsz-large select-none pointer-events-none text-accent/25"
                >
                  {col.number}
                </span>
              </div>

              <RichText
                as="h3"
                content={col.heading}
                className="font-serif text-2xl md:text-[28px] leading-[1.15] tracking-tightish max-w-[20ch]"
              />
              <RichText
                content={col.body}
                className="font-sans text-[15px] leading-relaxed text-ink-soft mt-5"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mt-auto pt-8">
                {col.details}
              </p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4} className="mt-20 md:mt-24">
          <div className="border-t-2 border-ink pt-10 max-w-4xl">
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-ink-soft">
              &ldquo;{engagementClosingStatement}&rdquo;
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
