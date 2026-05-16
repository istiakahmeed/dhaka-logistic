"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const cityLabels: Record<string, string> = {
  Dhaka: "Corporate Office",
  Chittagong: "Regional Office",
  Rajshahi: "Regional Office",
  Khulna: "Regional Office",
  Kushtia: "Regional Office",
};

export function OfficeLocations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const regions = data.company.regions;

  return (
    <section ref={ref} className="bg-green-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#2a5a3a]">
          {regions.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex-1 px-6 md:px-10 py-10 text-center"
            >
              <h3 className="font-display font-bold text-xl text-white">
                {city}
              </h3>
              <p className="text-xs font-body text-green-accent mt-1">
                {cityLabels[city] || "Regional Office"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
