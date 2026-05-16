"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function Management() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { company } = data;

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-surface-light px-6 md:px-12 py-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mb-8">
            Management
            <br />
            &amp; Administration
          </h2>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-2">
                Registered Office
              </h4>
              <p className="text-sm font-body text-neutral-mid leading-relaxed">
                {company.offices.registered.address}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-2">
                Corporate Office
              </h4>
              <p className="text-sm font-body text-neutral-mid leading-relaxed">
                {company.offices.corporate.address}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-green-accent mb-2">
                Liaison Offices
              </h4>
              <p className="text-sm font-body text-neutral-mid leading-relaxed">
                Plus liaison offices in divisional towns operating on a turnkey basis.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="bg-white px-6 md:px-12 py-12"
        >
          <p className="text-sm font-body text-neutral-mid leading-relaxed mb-6">
            {company.teamDescription}
          </p>

          <div className="space-y-2 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-green-accent text-lg">15</span>
              <span className="text-sm font-body text-neutral-mid">Average experience (years)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-green-accent text-lg">35</span>
              <span className="text-sm font-body text-neutral-mid">Maximum experience (years)</span>
            </div>
          </div>

          <p className="text-sm font-body text-neutral-mid leading-relaxed">
            We are financially solvent, without primary dependency on financial institutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
