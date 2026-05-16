"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function ProjectPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-12"
        >
          Project Partners
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {data.partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="border border-divider p-8"
            >
              <span className="font-display font-bold text-xl text-neutral-dark mb-3 block">
                {partner.name}
              </span>
              <p className="text-sm font-body text-neutral-mid leading-relaxed mb-4">
                {partner.description}
              </p>
              <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-green-accent">
                {partner.collaboration}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
