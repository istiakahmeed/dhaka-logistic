import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/contact/Hero";
import { ContactBlock } from "@/components/sections/contact/ContactBlock";
import { OfficeLocations } from "@/components/sections/contact/OfficeLocations";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ContactBlock />
      <OfficeLocations />
      <Footer />
    </main>
  );
}
