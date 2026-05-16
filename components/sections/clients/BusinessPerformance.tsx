"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const businessData = data.businessData2025;
const maxRevenue = Math.max(...businessData.clients.map((c) => c.revenue));
const sortedClients = [...businessData.clients].sort((a, b) => b.revenue - a.revenue);

export function BusinessPerformance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-surface-light py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-12"
        >
          Business Performance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-neutral-mid mb-8">
              Companywise Business 2025
            </h3>
            <div className="space-y-4">
              {sortedClients.map((client) => {
                const widthPct = (client.revenue / maxRevenue) * 100;
                const isLargest = client.revenue === maxRevenue;
                return (
                  <div key={client.name} className="flex items-center gap-4">
                    <span className="text-xs font-body text-neutral-mid w-20 shrink-0 text-right">
                      {client.name}
                    </span>
                    <div className="flex-1 h-5 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${widthPct}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="h-full"
                        style={{
                          backgroundColor: isLargest ? "#7dc142" : "#1a4d2e",
                        }}
                      />
                    </div>
                    <span className="font-mono text-xs text-neutral-mid w-16 shrink-0">
                      {client.revenue >= 1000000
                        ? `${(client.revenue / 1000000).toFixed(1)}M`
                        : `${(client.revenue / 1000).toFixed(0)}K`}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-neutral-mid mb-8">
              Areawise Business Breakdown
            </h3>
            <div className="space-y-8">
              {businessData.areaBreakdown.map((area) => (
                <div key={area.area}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-3xl md:text-4xl text-green-primary leading-none">
                      {area.percentage}%
                    </span>
                    <span className="text-xs font-body text-neutral-mid text-right max-w-[180px]">
                      {area.area}
                    </span>
                  </div>
                  <div className="h-1.5 bg-divider relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${area.percentage}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-green-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
