"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function VisionQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { vision, visionAttribution } = data;

  return (
    <section ref={ref} className="bg-green-primary py-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-[860px] mx-auto px-6 md:px-12 relative"
      >
        <span
          className="absolute -top-16 -left-2 md:-left-8 font-display font-bold leading-none select-none"
          style={{ fontSize: "200px", color: "#7dc142", opacity: 0.2 }}
        >
          &ldquo;
        </span>
        <blockquote className="font-display font-semibold text-2xl md:text-3xl text-white leading-relaxed relative z-10">
          {vision}
        </blockquote>
        <div className="w-8 h-0.5 bg-green-accent mt-8 mb-4" />
        <cite className="not-italic text-xs font-body text-green-accent">
          &mdash; {visionAttribution}
        </cite>
      </motion.div>
    </section>
  );
}
