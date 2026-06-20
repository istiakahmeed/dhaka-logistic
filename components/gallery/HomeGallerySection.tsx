"use client";

import { useState } from "react";
import { BentoGrid } from "./BentoGrid";
import { Lightbox } from "./Lightbox";
import { featuredImages } from "@/lib/gallery-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/animations";

export function HomeGallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = featuredImages.slice(0, 6);

  return (
    <>
      <section ref={ref} className="bg-white py-[96px] md:py-[120px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-end justify-between mb-10 md:mb-12"
          >
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-dark">
                Gallery
              </h2>
              <p className="mt-2 text-neutral-mid/70 text-sm md:text-base font-body max-w-md">
                A glimpse into our operations, team, and the moments that define
                DLSS.
              </p>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-body font-medium text-green-accent hover:text-green-primary transition-colors group shrink-0"
            >
              See all photos
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <BentoGrid onImageClick={(i) => setLightboxIndex(i)} />
          </motion.div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-green-accent hover:text-green-primary transition-colors group"
            >
              See all photos
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
