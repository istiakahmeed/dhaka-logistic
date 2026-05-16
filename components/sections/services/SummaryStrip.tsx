"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function SummaryStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-neutral-dark py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]"
        >
          {data.services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="bg-neutral-dark p-6 flex flex-col items-center text-center"
            >
              <span className="font-mono text-green-accent text-sm mb-2">
                {service.id}
              </span>
              <span className="text-sm font-body text-white leading-snug">
                {service.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
