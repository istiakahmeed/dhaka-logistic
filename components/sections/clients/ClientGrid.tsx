"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
  "Coats": "/client-logo/coats-logo.svg",
  "Elanco": "/client-logo/elanco.png",
  "Centro": "/client-logo/cento.png",
  "MTB": "/client-logo/Logo_of_Mutual_Trust_Bank.png",
  "Apex": "/client-logo/apex.png",
  "RPGCL": "/client-logo/RPGCL-Logo.jpg",
  "JTI": "/client-logo/JTI_Logo.svg.png",
  "PetroMax": "/client-logo/petromaxlpg_logo.svg",
  "Target": "/client-logo/Target_logo.svg.png",
  "DIFE": "/client-logo/dife_logo.png",
  "GoB": "/client-logo/Government_Seal_of_Bangladesh.svg",
};

export function ClientGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const allClients = data.clients;

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-divider"
        >
          {allClients.map((client, i) => {
            const logo = clientLogos[client.shortName];
            return (
              <motion.div
                key={client.shortName}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.2 } },
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center justify-center h-24 md:h-28 border-r border-b border-divider cursor-default"
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

        <p className="text-xs font-body italic text-gray-500 mt-6">
          + Several additional government and private engagements not listed publicly.
        </p>
      </div>
    </section>
  );
}
