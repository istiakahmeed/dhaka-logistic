import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/home/Hero";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { ServicesList } from "@/components/sections/home/ServicesList";
import { VisionQuote } from "@/components/sections/home/VisionQuote";
import { WhyDLSS } from "@/components/sections/home/WhyDLSS";
import { PartnersGrid } from "@/components/sections/home/PartnersGrid";
import { IFMTeaser } from "@/components/sections/home/IFMTeaser";
import { HomeGallerySection } from "@/components/gallery/HomeGallerySection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <ServicesList />
      <VisionQuote />
      <WhyDLSS />
      <PartnersGrid />
      <IFMTeaser />
      <HomeGallerySection />
      <Footer />
    </main>
  );
}
