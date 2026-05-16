"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const serviceNames = data.services.map((s) => s.title);

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-green-primary pt-[140px] pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-green-accent mb-5"
        >
          What We Do
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="font-display font-extrabold text-white leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] max-w-4xl"
        >
          Eight Categories.
          <br />
          One Partner.
          <br />
          Complete Coverage.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[17px] font-body text-white/70 leading-relaxed max-w-[540px] mt-6 mb-20"
        >
          From staffing a factory floor to tracking your entire vehicle fleet — DLSS manages the operational weight so you don&apos;t have to.
        </motion.p>
      </div>

      <div className="border-t border-white/10">
        <div className="py-5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...serviceNames, ...serviceNames].map((name, i) => (
              <span
                key={i}
                className="text-3xl md:text-4xl font-display font-bold text-green-accent/30 mx-6"
              >
                {name}
                <span className="text-green-accent/20 mx-6">&middot;</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
