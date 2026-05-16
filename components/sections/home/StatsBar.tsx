"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-neutral-dark py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2a2a2a]"
        >
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
              <span className="font-mono text-5xl md:text-6xl lg:text-7xl text-green-accent leading-none">
                <AnimatedCounter target={parseInt(stat.value.replace(/\D/g, ""))} suffix={stat.value.includes("+") ? "+" : ""} />
              </span>
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-white mt-3">
                {stat.label}
              </span>
              <span className="text-xs font-body text-gray-500 mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
