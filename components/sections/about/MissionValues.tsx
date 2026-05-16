"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function MissionValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { missionDetailed, values } = data;

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-14">
            Our Mission &amp; Values
          </h2>
          <div className="h-px bg-divider mb-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {missionDetailed.map((m) => (
            <motion.div
              key={m.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-neutral-dark p-8"
            >
              <span className="font-mono text-green-accent text-sm">{m.id}</span>
              <div className="w-8 h-px bg-green-accent/40 my-3" />
              <h3 className="font-display font-bold text-xl text-white mb-3">{m.title}</h3>
              <p className="text-sm font-body text-gray-400 leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="bg-surface-light"
        >
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-divider">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
                className="flex-1 px-6 py-8 md:py-10 text-center"
              >
                <div className="w-1.5 h-1.5 bg-green-accent rounded-full mx-auto mb-4" />
                <span className="text-sm font-body font-semibold text-neutral-dark">
                  {v}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
