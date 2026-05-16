"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle, Divider } from "@/components/ui";
import { Capability, CompanyData } from "@/types/dlss";

interface AboutProps {
  company: CompanyData;
  capabilities: Capability[];
  vision: string;
}

export function About({ company, capabilities, vision }: AboutProps) {
  return (
    <section id='about' className='bg-charcoal-mid py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionTag>About DLSS</SectionTag>
            </motion.div>

            <motion.div variants={fadeUp}>
              <SectionTitle>
                Strategic Partner for Organizational Excellence
              </SectionTitle>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Divider />
            </motion.div>

            <motion.div variants={fadeUp} className='space-y-4'>
              <p className='text-white-dim font-barlow leading-relaxed'>
                Founded in {company.established}, {company.name} (
                {company.shortName}) has emerged as Bangladesh's trusted partner
                for HR outsourcing, logistics management, and comprehensive
                organizational support services.
              </p>

              <p className='text-white-dim font-barlow leading-relaxed'>
                {vision}
              </p>

              <p className='text-white-dim font-barlow leading-relaxed'>
                With operations spanning {company.regions.length} regional
                offices and 2,234+ deployed resources across 22+ categories,
                we've built a reputation for delivering results that matter.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            className='space-y-4'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className='bg-charcoal border-l-4 border-green-brand p-6 hover:bg-charcoal-card transition-colors'
              >
                <h3 className='font-condensed font-bold text-green-brand uppercase mb-2'>
                  {cap.title}
                </h3>
                <p className='text-white-dim font-barlow text-sm leading-relaxed'>
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
