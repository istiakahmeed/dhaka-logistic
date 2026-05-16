"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";
import type { OrgNode } from "@/types/dlss";

function renderNode(node: OrgNode, depth: number = 0): React.ReactNode {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div key={node.title} className="flex flex-col items-center">
      <div className="bg-green-primary text-white text-xs font-body font-semibold px-5 py-2.5 whitespace-nowrap">
        {node.title}
      </div>
      {hasChildren && (
        <>
          <div className="w-px h-6 bg-green-accent" />
          <div className="relative flex gap-6 justify-center">
            {node.children!.length > 1 && (
              <div className="absolute top-0 left-[10%] right-[10%] h-px bg-green-accent" />
            )}
            <div className="flex gap-6 pt-6">
              {node.children!.map((child) => (
                <div key={child.title} className="flex flex-col items-center relative">
                  {node.children!.length > 1 && (
                    <div className="absolute -top-6 left-1/2 w-px h-6 bg-green-accent" />
                  )}
                  {renderNode(child, depth + 1)}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function OrgChartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark mb-3">
            Team Structure
          </h2>
          <div className="w-12 h-px bg-divider mx-auto mb-4" />
          <p className="text-sm font-body text-neutral-mid">
            How we are organized to serve you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center overflow-x-auto py-8"
        >
          {data.orgChart.map((node) => renderNode(node))}
        </motion.div>
      </div>
    </section>
  );
}
