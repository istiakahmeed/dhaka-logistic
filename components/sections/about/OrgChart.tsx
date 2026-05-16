"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const heads = [
  "Head of Legal",
  "Head of Finance",
  "Head of Logistics",
  "Head of Engineering & Construction",
  "Head of Sales & Marketing",
  "Head of HR",
  "Head of Catering",
];

export function OrgChartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-3">
            Team Structure
          </h2>
          <div className="w-12 h-px bg-divider mx-auto mb-4" />
          <p className="text-sm font-body text-neutral-mid">
            How we are organized to serve you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Tier 1 — Advisory Board */}
          <div className="flex justify-center mb-0">
            <div className="bg-green-primary text-white text-xs font-body font-semibold px-6 py-3">
              Advisory Board
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-green-accent" />
          </div>

          {/* Tier 2 — Chairman */}
          <div className="flex justify-center">
            <div className="bg-green-primary text-white text-xs font-body font-semibold px-6 py-3">
              Chairman
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-px h-8 bg-green-accent" />
          </div>

          {/* Tier 3 — CEO | COO */}
          <div className="relative flex justify-center gap-16">
            {/* Horizontal connector bar */}
            <div className="absolute top-0 left-[calc(50%-5rem)] right-[calc(50%-5rem)] h-px bg-green-accent" />
            <div className="flex justify-center gap-16 pt-0">
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-green-accent" />
                <div className="bg-green-primary text-white text-xs font-body font-semibold px-6 py-3">
                  CEO
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-px h-6 bg-green-accent" />
                <div className="bg-green-primary text-white text-xs font-body font-semibold px-6 py-3">
                  COO
                </div>
              </div>
            </div>
          </div>

          {/* Vertical connector to department heads */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-green-accent" />
          </div>

          {/* Horizontal connector bar for heads */}
          <div className="relative">
            <div className="absolute top-0 left-[5%] right-[5%] h-px bg-green-accent" />

            {/* Tier 4 — Department Heads */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-0 pt-0">
              {heads.map((title, i) => (
                <div key={i} className="flex flex-col items-center pt-6">
                  <div className="w-px h-6 bg-green-accent" />
                  <div className="bg-green-primary/10 border border-green-accent/30 text-green-primary text-xs font-body font-medium px-3 py-2.5 text-center leading-snug">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
