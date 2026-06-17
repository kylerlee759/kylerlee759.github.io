import Link from "next/link";
import { aboutBand, aboutCtas, contactInfo, stackGroups } from "@/store";
import { RichText } from "./RichText";
import { RevealOnScroll } from "./RevealOnScroll";

export function AboutStack() {
  return (
    <section id="stack" className="bg-ink text-paper relative overflow-hidden">
      <div className="diagonal-stripe-accent" />
      <div className="max-w-site mx-auto px-6 md:px-10 py-20 md:py-28">
        <RevealOnScroll>
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-6">
            {aboutBand.eyebrow}
          </div>
          <RichText
            as="h2"
            content={aboutBand.heading}
            className="font-serif font-light text-[40px] sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.98] tracking-tightest display-opsz-large text-paper max-w-4xl"
          />
          <RichText
            content={aboutBand.body}
            className="font-serif font-light text-[20px] md:text-[22px] leading-[1.5] text-paper/80 mt-8 max-w-3xl [&_strong]:text-paper [&_strong]:font-medium"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mt-16 md:mt-20">
          {stackGroups.map((group, i) => (
            <RevealOnScroll
              key={group.category}
              delay={i * 0.06}
              className="border-t border-paper/20 pt-5"
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] tracking-[0.04em] text-paper/85 border border-paper/20 px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll
          delay={0.3}
          className="mt-14 md:mt-16 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-center"
        >
          <Link
            href={aboutCtas.primary.href}
            className="inline-flex items-center font-mono text-xs uppercase tracking-[0.16em] px-7 py-4 bg-accent text-paper border-2 border-accent hard-shadow-paper hover:bg-accent-deep cta-press focus-ring w-fit"
          >
            {aboutCtas.primary.label}
          </Link>
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 hover:text-accent transition-colors w-fit"
          >
            Get in touch →
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 hover:text-accent transition-colors w-fit"
          >
            GitHub →
          </a>
        </RevealOnScroll>
      </div>
      <div className="diagonal-stripe-accent" />
    </section>
  );
}
