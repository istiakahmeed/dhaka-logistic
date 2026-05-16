"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { data } from "@/lib/data";

const clientLogos: Record<string, string> = {
  "BATB": "/client-logo/BATB.png",
  "Berger": "/client-logo/bergerlogo.svg",
  "Grameenphone": "/client-logo/Grameenphone.png",
  "Standard Chartered": "/client-logo/scb.png",
  "Novo Nordisk": "/client-logo/novo_nordisk.png",
  "Daraz": "/client-logo/Daraz-logo.png",
  "Roche": "/client-logo/Roche.png",
  "Marico": "/client-logo/Marico_Logo.svg.png",
  "DBL Group": "/client-logo/dbl.svg",
  "Evercare": "/client-logo/Evercare-Hospita-Logo.webp",
};

const displayClients = data.clients.slice(0, 10);

export function PartnersGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark">
            Our Valued Partners
          </h2>
          <Link
            href="/clients"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-body font-medium text-green-accent hover:text-green-primary transition-colors group"
          >
            View All Clients
            <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-divider"
        >
          {displayClients.map((client, i) => {
            const logo = clientLogos[client.shortName];
            return (
              <motion.div
                key={client.shortName}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center h-28 border-r border-b border-divider cursor-default"
              >
                {logo ? (
                  <div
                    className="relative w-3/4 h-3/4 transition-all duration-200"
                    style={{
                      opacity: hovered === i ? 1 : 0.55,
                      transform: hovered === i ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <Image
                      src={logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="20vw"
                    />
                  </div>
                ) : (
                  <span
                    className="text-sm font-body font-semibold transition-all duration-200"
                    style={{
                      color: hovered === i ? "#1a4d2e" : "#888888",
                      opacity: hovered === i ? 1 : 0.6,
                    }}
                  >
                    {client.shortName}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
