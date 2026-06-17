import { ContactSection } from "@/components/ContactSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Engagement } from "@/components/Engagement";
import { AboutStack } from "@/components/AboutStack";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Engagement />
        <FeaturedWork />
        <AboutStack />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
