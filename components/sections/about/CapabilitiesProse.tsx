"use client";

import { data } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = data.capabilities;

export function CapabilitiesProse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-surface-light py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex gap-6">
          <div className="w-[3px] h-12 bg-green-accent shrink-0 mt-1" />
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight">
              What We
              <br />
              Have
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="space-y-6">
          {capabilities.map((cap, i) => (
            <p
              key={i}
              className="text-sm font-body text-neutral-mid leading-relaxed">
              {cap.description}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
