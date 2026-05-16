import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SummaryStrip } from "@/components/sections/services/SummaryStrip";
import { data } from "@/lib/data";

const serviceImages: Record<string, string> = {
  "01": "/services/Human-Resource.jpg",
  "02": "/services/Payroll-Management.jpg",
  "03": "/services/Audit.jpg",
  "04": "/services/Logistics-Services&Solutions.jpg",
  "05": "/services/Vehicle-Tracking&Telematics.jpg",
  "06": "/services/Engineering&Construction.jpg",
  "07": "/services/Facility&Catering-Management.jpg",
  "08": "/services/Event-Management.jpg",
};

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = data.services.find((s) => s.id === id);
  const index = data.services.findIndex((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const prev = index > 0 ? data.services[index - 1] : null;
  const next = index < data.services.length - 1 ? data.services[index + 1] : null;
  const imgSrc = serviceImages[service.id];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <section className="bg-green-primary pt-[120px] pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-body text-green-accent hover:text-white transition-colors mb-8"
          >
            &larr; All Services
          </Link>
          <span className="font-mono text-green-accent text-sm block mb-3">{service.id}</span>
          <h1 className="font-display font-bold text-white leading-tight text-[36px] md:text-[48px] max-w-3xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="bg-surface-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%]">
          <div className="px-6 md:px-12 py-[96px] md:py-[120px]">
            <div className="relative">
              <span
                className="font-mono font-bold text-neutral-dark select-none absolute -top-12 -left-4 leading-none"
                style={{ fontSize: "100px", opacity: 0.04 }}
              >
                {service.id}
              </span>
              <div className="relative z-10">
                <p className="text-sm font-body text-neutral-mid leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.subServices.map((sub, i) => (
                    <li key={i} className="text-sm font-body text-neutral-mid flex items-start gap-2">
                      <span className="text-green-accent shrink-0">&mdash;</span>
                      {sub}
                    </li>
                  ))}
                </ul>
                <div className="border-l-2 border-green-accent pl-4">
                  <p className="text-xs font-body font-semibold text-green-primary leading-relaxed">
                    {service.accentStat}
                  </p>
                </div>
                {service.partnerCallout && (
                  <div className="mt-4 border-l-2 border-green-accent pl-4">
                    <p className="text-xs font-body text-green-primary leading-relaxed">
                      {service.partnerCallout}
                    </p>
                  </div>
                )}
                {service.partnerDescription && (
                  <div className="mt-2 border-l-2 border-green-accent pl-4">
                    <p className="text-xs font-body text-neutral-mid/70 leading-relaxed">
                      {service.partnerDescription}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {imgSrc && (
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src={imgSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
          )}
        </div>
      </section>

      <section className="bg-white border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex items-center justify-between">
          <div>
            {prev && (
              <Link
                href={`/services/${prev.id}`}
                className="group flex flex-col items-start"
              >
                <span className="text-xs font-body text-gray-400 mb-1">Previous</span>
                <span className="text-sm font-body text-green-primary group-hover:text-green-accent transition-colors">
                  &larr; {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                href={`/services/${next.id}`}
                className="group flex flex-col items-end"
              >
                <span className="text-xs font-body text-gray-400 mb-1">Next</span>
                <span className="text-sm font-body text-green-primary group-hover:text-green-accent transition-colors">
                  {next.title} &rarr;
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <SummaryStrip />
      <Footer />
    </main>
  );
}
