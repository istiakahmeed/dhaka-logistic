"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function WhyDLSS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[40%_30%_30%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-surface-light p-10 md:p-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mb-6">
            {data.whyDLSS.heading}
          </h2>
          {data.whyDLSS.body.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm font-body text-neutral-mid leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="bg-neutral-dark p-10 md:p-12 flex flex-col justify-center"
        >
          <span className="font-mono text-5xl md:text-6xl text-green-accent leading-none">
            {data.company.managementExperience}
          </span>
          <span className="text-sm font-body text-white mt-3 leading-relaxed">
            Years avg.
            <br />
            management
            <br />
            experience
          </span>
          <div className="w-8 h-px bg-green-accent/40 my-6" />
          <span className="font-mono text-5xl md:text-6xl text-green-accent leading-none">
            {data.company.maxExperience}
          </span>
          <span className="text-sm font-body text-white mt-3 leading-relaxed">
            Years max.
            <br />
            experience
            <br />
            in the team
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="bg-green-accent p-10 md:p-12 flex flex-col justify-center"
        >
          <span className="font-display font-bold text-4xl text-green-primary leading-tight">
            Nationwide
            <br />
            Coverage
          </span>
          <p className="text-sm font-body text-green-primary mt-4 leading-relaxed font-semibold">
            Dhaka &middot; Chittagong
            <br />
            Rajshahi &middot; Khulna
            <br />
            Kushtia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
