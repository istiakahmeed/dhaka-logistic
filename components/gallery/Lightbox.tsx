"use client";

import type { GalleryImage } from "@/lib/gallery-data";
import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const image = images[index];

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          prev();
          break;
        case "ArrowRight":
          next();
          break;
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-[fadeIn_200ms_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-[80vw] max-h-[75vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain animate-[lightboxScaleIn_200ms_ease-out]"
            sizes="90vw"
            priority
          />
        </div>
        {(image.title || image.category) && (
          <div className="mt-4 text-center">
            {image.title && (
              <p className="text-white font-display font-semibold text-lg">
                {image.title}
              </p>
            )}
            {image.category && (
              <p className="text-white/60 text-sm mt-1">{image.category}</p>
            )}
          </div>
        )}
        <p className="text-white/40 text-xs mt-2 font-body">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
