import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/about/Hero";
import { WhoWeAre } from "@/components/sections/about/WhoWeAre";
import { CapabilitiesProse } from "@/components/sections/about/CapabilitiesProse";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { OrgChartSection } from "@/components/sections/about/OrgChart";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <CapabilitiesProse />
      <MissionValues />
      <OrgChartSection />
      <Footer />
    </main>
  );
}
