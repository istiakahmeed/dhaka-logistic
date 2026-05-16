import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Resources } from "@/components/sections/Resources";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <main className='bg-charcoal text-white-brand overflow-x-hidden'>
      <Navbar />
      <Hero company={data.company} stats={data.stats} />
      <About
        company={data.company}
        capabilities={data.capabilities}
        vision={data.vision}
      />
      <Services services={data.services} />
      <Clients clients={data.clients} />
      <Resources resources={data.resources} regions={data.company.regions} />
      <Partners partners={data.partners} />
      <Contact
        company={data.company}
        contacts={data.contacts}
        future={data.future}
      />
      <Footer company={data.company} />
    </main>
  );
}
