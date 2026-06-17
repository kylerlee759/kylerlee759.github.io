import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { WorkArchive } from "@/components/WorkArchive";
import { seo, workPageIntro } from "@/store";

export const metadata: Metadata = {
  title: seo.work.title,
  description: seo.work.description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    title: `${seo.work.title} — ${seo.siteName}`,
    description: seo.work.description,
    url: "/work",
    siteName: seo.siteName,
    locale: seo.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.work.title} — ${seo.siteName}`,
    description: seo.work.description,
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 md:pt-28">
        <section className="max-w-site mx-auto px-6 md:px-10 pb-12 md:pb-16">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            {workPageIntro.breadcrumb}
          </Link>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[0.96] tracking-tightest mt-8 display-opsz-large">
            {workPageIntro.heading.replace(/\.$/, "")}
            <span className="text-accent">.</span>
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-ink-soft mt-6 max-w-2xl">
            {workPageIntro.subhead}
          </p>
        </section>

        <section className="max-w-site mx-auto px-6 md:px-10 pb-24">
          <Suspense fallback={<div className="font-mono text-xs text-muted py-12">Loading archive…</div>}>
            <WorkArchive />
          </Suspense>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
