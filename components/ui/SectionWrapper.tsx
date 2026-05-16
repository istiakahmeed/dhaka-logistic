"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

export function SectionWrapper({ id, children, className = "", padding = "lg" }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const paddingMap = {
    sm: "py-16",
    md: "py-24",
    lg: "py-[96px] md:py-[120px]",
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      initial={false}
      className={`${paddingMap[padding]} ${className}`}
    >
      {children}
    </motion.section>
  );
}
