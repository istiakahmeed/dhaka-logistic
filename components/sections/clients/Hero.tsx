"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const marqueeNames = [
  "BATB", "Berger", "Grameenphone", "Standard Chartered",
  "Novo Nordisk", "Daraz", "Roche", "Marico",
  "DBL Group", "Evercare", "JTI",
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white pt-[140px] pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-extrabold text-neutral-dark leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px]"
        >
          Our Clients
          <br />
          &amp; Partners
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="h-px bg-divider origin-left mt-8 mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm font-body text-neutral-mid leading-relaxed max-w-lg"
        >
          The organizations that trust DLSS to run their operations.
        </motion.p>
      </div>

      <div className="mt-12 overflow-hidden border-t border-b border-divider py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex whitespace-nowrap"
          style={{ animation: "marqueeClients 40s linear infinite" }}
        >
          {[...marqueeNames, ...marqueeNames].map((name, i) => (
            <span
              key={i}
              className="text-lg font-body text-neutral-mid mx-6"
            >
              {name}
              <span className="text-gray-300 mx-6">&middot;</span>
            </span>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marqueeClients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
