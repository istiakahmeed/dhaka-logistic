"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle } from "@/components/ui";
import { PartnerCard } from "@/components/ui/PartnerCard";
import { Partner } from "@/types/dlss";

interface PartnersProps {
  partners: Partner[];
}

export function Partners({ partners }: PartnersProps) {
  return (
    <section id='partners' className='bg-charcoal-mid py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionTag>Strategic Alliances</SectionTag>
          <SectionTitle>Our Partners</SectionTitle>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-6'
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-80px" }}
        >
          {partners.map((partner, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <PartnerCard {...partner} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
