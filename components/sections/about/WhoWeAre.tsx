"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const whoWeAreParagraphs = data.about.whoWeAre.split("\n\n");

export function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mb-6">
            Who We Are
          </h2>
          {whoWeAreParagraphs.map((para, i) => (
            <p key={i} className="text-sm font-body text-neutral-mid leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 h-[240px] md:h-[320px]"
        >
          <div className="bg-green-primary/20 col-span-2 flex items-center justify-center text-2xl font-mono font-bold text-green-accent/30">
            {/* Photo placeholder */}
          </div>
          <div className="bg-green-primary flex items-center justify-center" />
          <div className="bg-green-accent flex items-center justify-center relative">
            <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-green-primary text-3xl leading-none">
              5
              <br />
              Cities
            </span>
          </div>
          <div className="bg-green-primary/40 flex items-center justify-center" />
          <div className="bg-green-primary/20 flex items-center justify-center">
            {/* Photo placeholder */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
