"use client";

import { data } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function IFMTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-end text-right bg-surface-light px-6 md:px-12 py-[96px] md:py-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" ">
            <span className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-green-accent">
              What&apos;s Next
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mt-4 mb-6">
              What&apos;s Next
              <br />
              for DLSS
            </h2>
            <p className="text-sm font-body text-neutral-mid leading-relaxed max-w-md">
              {data.future.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="bg-green-primary px-6 md:px-12 py-[96px] md:py-[120px] flex flex-col justify-center gap-6">
          <h3 className="font-display font-bold text-lg text-white mb-2">
            Integrated Facility Management
          </h3>
          {data.future.pillars.map((pillar, i) => (
            <div key={i} className="border-l-2 border-green-accent pl-4">
              <span className="text-sm font-body text-white leading-relaxed">
                {pillar}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
