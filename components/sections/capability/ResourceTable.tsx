"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const top5 = [...data.resources.breakdown]
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);

const maxCount = top5[0].count;

export function ResourceTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { breakdown, total } = data.resources;

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-10"
        >
          Deployed Resources
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-primary">
                <th className="text-xs font-body font-semibold text-white px-4 py-3 w-12">No.</th>
                <th className="text-xs font-body font-semibold text-white px-4 py-3">Resource Category</th>
                <th className="text-xs font-body font-semibold text-white px-4 py-3 text-right w-32">Total Deployed</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((row, i) => (
                <tr key={i} className="border-b border-divider">
                  <td className="font-mono text-xs text-neutral-mid px-4 py-3 align-top">{i + 1}</td>
                  <td className="text-sm font-body text-neutral-mid px-4 py-3">{row.role}</td>
                  <td className="font-mono text-sm text-neutral-dark px-4 py-3 text-right">{row.count.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="bg-neutral-dark">
                <td className="px-4 py-3" />
                <td className="text-sm font-body font-semibold text-white px-4 py-3">Total Resources</td>
                <td className="font-mono text-sm font-bold text-white px-4 py-3 text-right">{total.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14"
        >
          <h3 className="text-xs font-body font-semibold uppercase tracking-widest text-neutral-mid mb-6">
            Top Resource Categories
          </h3>
          <div className="space-y-3 max-w-2xl">
            {top5.map((item) => (
              <div key={item.role} className="flex items-center gap-4">
                <span className="text-xs font-body text-neutral-mid w-36 shrink-0 text-right leading-snug">
                  {item.role}
                </span>
                <div className="flex-1 h-6 bg-divider relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(item.count / maxCount) * 100}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="h-full bg-green-primary"
                  />
                </div>
                <span className="font-mono text-xs text-neutral-dark w-12 shrink-0">
                  {item.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
