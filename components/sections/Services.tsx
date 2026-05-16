"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionTag, SectionTitle } from "@/components/ui";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Service } from "@/types/dlss";

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id='services' className='bg-charcoal py-20 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <SectionTag>Our Expertise</SectionTag>
            <SectionTitle>Comprehensive Services</SectionTitle>
          </div>
          <motion.p
            className='text-white-dim font-barlow leading-relaxed flex items-end'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-80px" }}
          >
            From human resource management to logistics solutions, we provide
            end-to-end services that streamline your operations and boost
            organizational efficiency.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
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
          {services.map((service) => (
            <div key={service.id} style={{ backgroundColor: "#0f1110" }}>
              <motion.div variants={fadeUp}>
                <ServiceCard {...service} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
