"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle } from "@/components/ui";
import { ClientItem } from "@/components/ui/ClientItem";
import { Client } from "@/types/dlss";

interface ClientsProps {
  clients: Client[];
}

export function Clients({ clients }: ClientsProps) {
  return (
    <section id='clients' className='bg-charcoal-mid py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <SectionTag>Trusted Partners</SectionTag>
            <SectionTitle>Our Clients</SectionTitle>
          </div>
          <motion.p
            className='text-white-dim font-barlow leading-relaxed flex items-end'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            We've partnered with 22+ major corporations across Bangladesh,
            including multinational companies and sector leaders who rely on us
            for their operational excellence.
          </motion.p>
        </motion.div>

        {/* Client Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px'
          style={{
            backgroundImage: "linear-gradient(transparent, transparent)",
            backgroundColor: "#2a3028",
            padding: "1px",
          }}
          variants={staggerContainer}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-80px" }}
        >
          {clients.map((client, idx) => (
            <div key={idx} style={{ backgroundColor: "#181c1a" }}>
              <motion.div variants={fadeUp}>
                <ClientItem {...client} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
