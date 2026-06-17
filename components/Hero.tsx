import Link from "next/link";
import {
  heroEyebrow,
  heroHeadline,
  heroLede,
  heroPrimaryCta,
  heroSecondaryCta,
  heroStats,
} from "@/store";
import { CTAButton } from "./CTAButton";
import { MastheadStrip } from "./MastheadStrip";
import { RichText } from "./RichText";
import { HeroFocusTeaser } from "./HeroFocusTeaser";

export function Hero() {
  return (
    <section className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <MastheadStrip />

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 mt-10 md:mt-14">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {heroEyebrow}
            </div>

            <h1 className="font-serif font-medium leading-[0.92] tracking-tightest mt-6 display-opsz-large">
              <span className="block text-[60px] sm:text-[80px] md:text-[110px] lg:text-[132px]">
                {heroHeadline.line1.replace(/\.$/, "")}
                <span className="text-accent">.</span>
              </span>
              <span className="block font-light italic text-[42px] sm:text-[54px] md:text-[72px] lg:text-[88px] mt-2 text-ink-soft">
                {heroHeadline.line2Prefix}
                <em className="text-accent">{heroHeadline.line2Emphasis}</em>
                {heroHeadline.line2Suffix}
              </span>
            </h1>

            <RichText
              content={heroLede}
              className="font-serif font-light text-[20px] md:text-[22px] leading-[1.45] text-ink-soft mt-10 max-w-2xl"
            />

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CTAButton href={heroPrimaryCta.href} variant="accent">
                {heroPrimaryCta.label}
              </CTAButton>
              <Link
                href={heroSecondaryCta.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-accent transition-colors"
              >
                {heroSecondaryCta.label}
              </Link>
            </div>

            <dl className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-ink/15 max-w-xl">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-1.5">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-3xl md:text-4xl text-accent display-opsz-large">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — current-focus teaser */}
          <div className="lg:mt-12">
            <HeroFocusTeaser />
          </div>
        </div>
      </div>
    </section>
  );
}
