import type { Metadata, Viewport } from "next";
import { Fraunces, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/store";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.home.title,
    template: `%s — ${seo.siteName}`,
  },
  description: seo.home.description,
  keywords: seo.home.keywords,
  authors: [{ name: seo.person.name, url: seo.siteUrl }],
  creator: seo.person.name,
  applicationName: seo.siteName,
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: "/",
    siteName: seo.siteName,
    title: seo.home.title,
    description: seo.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#1A1815",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: seo.person.name,
  jobTitle: seo.person.jobTitle,
  description: seo.person.description,
  url: seo.siteUrl,
  knowsAbout: seo.person.knowsAbout,
  ...(seo.person.sameAs.length > 0 ? { sameAs: seo.person.sameAs } : {}),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seo.siteName,
  url: seo.siteUrl,
  description: seo.home.description,
  inLanguage: "en-US",
  author: { "@type": "Person", name: seo.person.name },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-ink font-sans antialiased">
        {children}
        <GrainOverlay />
        <JsonLd data={[websiteSchema, personSchema]} />
      </body>
    </html>
  );
}
