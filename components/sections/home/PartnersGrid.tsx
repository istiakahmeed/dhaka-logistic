"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { data } from "@/lib/data";

const displayClients = data.clients.slice(0, 10);

export function PartnersGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          {displayClients.map((client) => (
            <motion.div
              key={client.shortName}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.3 } },
              }}
              className="group flex items-center justify-center h-28 border-r border-b border-divider transition-colors duration-150 hover:bg-green-primary cursor-default"
            >
              <span className="text-sm font-body font-semibold text-gray-400 transition-colors duration-150 group-hover:text-white">
                {client.shortName}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
