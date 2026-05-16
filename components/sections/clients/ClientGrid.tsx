"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

export function ClientGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const allClients = data.clients;

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-divider"
        >
          {allClients.map((client, i) => (
            <motion.div
              key={client.shortName}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.2 } },
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-center h-24 md:h-28 border-r border-b border-divider transition-colors duration-150 cursor-default"
              style={{
                backgroundColor: hovered === i ? "#1a4d2e" : "transparent",
              }}
            >
              <span
                className="text-sm font-body font-semibold transition-colors duration-150"
                style={{
                  color: hovered === i ? "#ffffff" : "#888888",
                  filter: hovered === i ? "none" : "grayscale(100%)",
                  opacity: hovered === i ? 1 : 0.6,
                }}
              >
                {client.shortName}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-xs font-body italic text-gray-500 mt-6">
          + Several additional government and private engagements not listed publicly.
        </p>
      </div>
    </section>
  );
}
