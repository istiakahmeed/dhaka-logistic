import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/clients/Hero";
import { ClientGrid } from "@/components/sections/clients/ClientGrid";
import { BusinessPerformance } from "@/components/sections/clients/BusinessPerformance";
import { ProjectPartners } from "@/components/sections/clients/ProjectPartners";

export default function ClientsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ClientGrid />
      <BusinessPerformance />
      <ProjectPartners />
      <Footer />
    </main>
  );
}
