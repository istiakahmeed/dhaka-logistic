"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { ServiceDetail as ServiceDetailType } from "@/types/dlss";

const serviceImages: Record<string, string> = {
  "01": "/services/Human-Resource.jpg",
  "02": "/services/Payroll-Management.jpg",
  "03": "/services/Audit.jpg",
  "04": "/services/Logistics-Services&Solutions.jpg",
  "05": "/services/Vehicle-Tracking&Telematics.jpg",
  "06": "/services/Engineering&Construction.jpg",
  "07": "/services/Facility&Catering-Management.jpg",
  "08": "/services/Event-Management.jpg",
};

interface ServiceDetailProps {
  service: ServiceDetailType;
  index: number;
}

export function ServiceDetailBlock({ service, index }: ServiceDetailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isOdd = index % 2 === 0;

  const contentSide = (
    <div className="relative px-6 md:px-12 py-[96px] md:py-[120px]">
      <span
        className="font-mono font-bold text-neutral-dark select-none absolute top-8 left-6 md:left-12 leading-none"
        style={{ fontSize: "100px", opacity: 0.04 }}
      >
        {service.id}
      </span>
      <div className="relative z-10 max-w-lg">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-dark leading-tight mb-6">
          {service.title}
        </h2>
        <p className="text-sm font-body text-neutral-mid leading-relaxed mb-8">
          {service.description}
        </p>
        <ul className="space-y-2 mb-8">
          {service.subServices.map((sub, i) => (
            <li key={i} className="text-sm font-body text-neutral-mid flex items-start gap-2">
              <span className="text-green-accent shrink-0">&mdash;</span>
              {sub}
            </li>
          ))}
        </ul>
        <div className="border-l-2 border-green-accent pl-4">
          <p className="text-xs font-body font-semibold text-green-primary leading-relaxed">
            {service.accentStat}
          </p>
        </div>
        {service.partnerCallout && (
          <div className="mt-4 border-l-2 border-green-accent pl-4">
            <p className="text-xs font-body text-green-primary leading-relaxed">
              {service.partnerCallout}
            </p>
          </div>
        )}
        {service.partnerDescription && (
          <div className="mt-2 border-l-2 border-green-accent pl-4">
            <p className="text-xs font-body text-neutral-mid/70 leading-relaxed">
              {service.partnerDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const imgSrc = serviceImages[service.id];

  const accentSide = imgSrc ? (
    <div className="relative overflow-hidden">
      <Image
        src={imgSrc}
        alt={service.title}
        fill
        className="object-cover"
        sizes="45vw"
      />
    </div>
  ) : (
    <div className={isOdd ? "bg-green-primary" : "bg-green-accent"} />
  );

  return (
    <section ref={ref} className={isOdd ? "bg-surface-light" : "bg-white"}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%]"
      >
        {isOdd ? (
          <>
            {contentSide}
            {accentSide}
          </>
        ) : (
          <>
            {accentSide}
            {contentSide}
          </>
        )}
      </motion.div>
    </section>
  );
}
