"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { data } from "@/lib/data";

const whoWeAreParagraphs = data.about.whoWeAre.split("\n\n");

export function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mb-6">
            Who We Are
          </h2>
          {whoWeAreParagraphs.map((para, i) => (
            <p key={i} className="text-sm font-body text-neutral-mid leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 h-[240px] md:h-[320px]"
        >
          <div className="relative col-span-2 overflow-hidden">
            <Image
              src="/services/Vehicle-Tracking&Telematics.jpg"
              alt="DLSS Operations"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <div className="bg-green-primary relative overflow-hidden">
            <Image
              src="/services/Payroll-Management.jpg"
              alt="DLSS Payroll"
              fill
              className="object-cover"
              sizes="15vw"
            />
          </div>
          <div className="bg-green-accent relative flex items-center justify-center">
            <span className="font-mono font-bold text-green-primary text-3xl leading-none z-10">
              5
              <br />
              Cities
            </span>
          </div>
          <div className="bg-green-primary/40 relative overflow-hidden">
            <Image
              src="/services/Facility&Catering-Management.jpg"
              alt="DLSS Facility Management"
              fill
              className="object-cover"
              sizes="15vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/services/Event-Management.jpg"
              alt="DLSS Events"
              fill
              className="object-cover"
              sizes="15vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
