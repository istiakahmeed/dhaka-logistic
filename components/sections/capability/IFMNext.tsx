"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function IFMNext() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-neutral-dark py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            The Next Chapter:
            <br />
            Integrated Facility
            <br />
            Management (IFM)
          </h2>
          <p className="text-sm font-body text-gray-400 leading-relaxed">
            {data.future.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col justify-center"
        >
          {data.future.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -8 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
              }}
              className="flex items-center gap-4 py-4 border-b border-[#333333]"
            >
              <span className="font-mono text-green-accent text-sm shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-body text-white">{pillar}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
