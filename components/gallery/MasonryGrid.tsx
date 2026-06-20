"use client";

import type { GalleryImage } from "@/lib/gallery-data";
import { GalleryTile } from "./GalleryTile";
import { motion, AnimatePresence } from "framer-motion";

interface MasonryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export function MasonryGrid({ images, onImageClick }: MasonryGridProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      <AnimatePresence mode="popLayout">
        {images.map((image, i) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="break-inside-avoid mb-4"
          >
            <GalleryTile
              image={image}
              onClick={() => onImageClick(i)}
              className="!min-h-0"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
