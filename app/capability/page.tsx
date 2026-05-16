import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/capability/Hero";
import { Management } from "@/components/sections/capability/Management";
import { ResourceTable } from "@/components/sections/capability/ResourceTable";
import { IFMNext } from "@/components/sections/capability/IFMNext";

export default function CapabilityPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Management />
      <ResourceTable />
      <IFMNext />
      <Footer />
    </main>
  );
}
