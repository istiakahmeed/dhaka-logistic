"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-surface-light pt-[140px] pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-extrabold text-neutral-dark leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-3xl"
        >
          Let&apos;s Talk
          <br />
          About Your
          <br />
          Operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="text-[17px] font-body text-neutral-mid leading-relaxed max-w-[540px] mt-6"
        >
          Whether you are looking to outsource a function, consult on HR compliance, or manage an entire facility — we are ready to be your single point of contact.
        </motion.p>
      </div>
    </section>
  );
}
