"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";
import { ServiceRow } from "@/components/ui/ServiceRow";

export function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[25%_75%] gap-12">
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <div className="w-[3px] h-12 bg-green-accent mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-dark leading-tight">
            Our
            <br />
            Services
          </h2>
          <p className="text-sm font-body text-neutral-mid leading-relaxed mt-4 max-w-[220px]">
            We cover every operational need of your organization under one engagement.
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {data.services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <ServiceRow
                id={service.id}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
