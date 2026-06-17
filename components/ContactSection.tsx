import {
  contactBody,
  contactEmailFallback,
  contactHeader,
  contactInfo,
  contactPrimaryCta,
} from "@/store";
import { BookButton } from "./BookButton";
import { RichText } from "./RichText";
import { SectionHeader } from "./SectionHeader";
import { RevealOnScroll } from "./RevealOnScroll";

export function ContactSection() {
  const email = contactInfo.email;
  return (
    <section id="contact" className="bg-bg pt-24 md:pt-[120px] pb-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <SectionHeader data={contactHeader} />
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <RichText
            content={contactBody}
            className="font-serif font-light text-[20px] md:text-[22px] leading-[1.45] text-ink-soft mt-10 max-w-2xl"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <div className="mt-12 flex flex-col items-start gap-4">
            <BookButton variant="accent" fallbackHref="#contact">
              {contactPrimaryCta.label}
            </BookButton>
            {email && (
              <p className="font-mono text-xs text-muted">
                {contactEmailFallback.prefix}
                <a
                  href={`mailto:${email}`}
                  className="text-ink hover:text-accent transition-colors underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </p>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
