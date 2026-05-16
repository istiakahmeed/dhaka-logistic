"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle, Divider } from "@/components/ui";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { ResourceHighlight } from "@/types/dlss";

interface ResourcesProps {
  resources: {
    total: number;
    breakdown: Array<{
      role: string;
      count: number;
      outsourced: boolean;
    }>;
    highlights: ResourceHighlight[];
  };
  regions: string[];
}

export function Resources({ resources, regions }: ResourcesProps) {
  return (
    <section id='resources' className='bg-charcoal py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionTag>Our Strength</SectionTag>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SectionTitle>Nationwide Deployment</SectionTitle>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Divider />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className='text-white-dim font-barlow leading-relaxed mb-8'
            >
              With {resources.total.toLocaleString()}+ skilled professionals
              deployed across Bangladesh, DLSS maintains a robust network of
              resources ready to support organizations nationwide.
            </motion.p>

            {/* Regional Offices */}
            <motion.div variants={fadeUp} className='space-y-3'>
              <p className='text-green-brand font-condensed font-bold text-sm uppercase tracking-widest'>
                Regional Presence
              </p>
              <div className='grid grid-cols-2 gap-2'>
                {regions.map((region, idx) => (
                  <p
                    key={idx}
                    className='text-white-dim font-barlow text-sm border-l-2 border-green-brand pl-3'
                  >
                    {region}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Resource Highlights */}
          <motion.div
            className='grid grid-cols-2 gap-4'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            {resources.highlights.map((highlight, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <ResourceCard {...highlight} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Total Resources Note */}
        <motion.p
          className='text-white-faint text-xs font-barlow mt-12 pt-8 border-t border-charcoal-border'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          * Total {resources.total.toLocaleString()} resources across 22+
          professional categories, including{" "}
          {resources.breakdown.filter((r) => r.outsourced).length}+ outsourced
          and direct staff positions
        </motion.p>
      </div>
    </section>
  );
}
