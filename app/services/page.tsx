import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/services/Hero";
import { ServiceDetailBlock } from "@/components/sections/services/ServiceDetail";
import { SummaryStrip } from "@/components/sections/services/SummaryStrip";
import { data } from "@/lib/data";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      {data.services.map((service, i) => (
        <ServiceDetailBlock key={service.id} service={service} index={i} />
      ))}
      <SummaryStrip />
      <Footer />
    </main>
  );
}
