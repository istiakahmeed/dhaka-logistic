"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-green-primary pt-[140px] pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-extrabold text-white leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-4xl"
        >
          The Operational
          <br />
          Depth Behind
          <br />
          Every Mandate.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="text-[17px] font-body text-white/70 leading-relaxed max-w-[600px] mt-8"
        >
          We bring 2,234 deployed resources, multinational management experience, and nationwide infrastructure to every client engagement — with financial independence that ensures delivery without delay.
        </motion.p>
      </div>
    </section>
  );
}
