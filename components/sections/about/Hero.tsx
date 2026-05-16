"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-white pt-[140px] pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-green-accent mb-5">
            About DLSS
          </p>
          <h1 className="font-display font-extrabold text-neutral-dark leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px]">
            Built on Experience.
            <br />
            Driven by Results.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <span
            className="font-mono font-bold text-neutral-dark select-none absolute -top-8 left-0 leading-none"
            style={{ fontSize: "160px", opacity: 0.08 }}
          >
            Est.
            <br />
            2010
          </span>
          <p className="text-sm font-body text-neutral-mid leading-relaxed relative z-10 pt-24">
            DLSS was founded with a single conviction: that organizations deserve an operational partner, not just a vendor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
