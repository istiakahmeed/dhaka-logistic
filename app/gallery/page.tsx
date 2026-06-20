"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MasonryGrid } from "@/components/gallery/MasonryGrid";
import { FilterPills } from "@/components/gallery/FilterPills";
import { Lightbox } from "@/components/gallery/Lightbox";
import {
  galleryImages,
  categories,
} from "@/lib/gallery-data";

const ITEMS_PER_PAGE = 12;

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  const visibleImages = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleImageClick = (localIndex: number) => {
    const globalIndex = galleryImages.findIndex(
      (img) => img.id === visibleImages[localIndex].id
    );
    setLightboxIndex(globalIndex);
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const lightboxImages =
    lightboxIndex !== null
      ? filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter)
      : [];

  const lightboxInitialIndex =
    lightboxIndex !== null
      ? lightboxImages.findIndex(
          (img) => img.id === galleryImages[lightboxIndex].id
        )
      : 0;

  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1 bg-white pt-[120px] md:pt-[160px] pb-[96px] md:pb-[120px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-10 md:mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-dark">
              Full Gallery
            </h1>
            <p className="mt-2 text-neutral-mid/70 text-sm md:text-base font-body">
              {galleryImages.length} image{galleryImages.length > 1 ? "s" : ""}{" "}
              from across our operations
            </p>
          </div>

          <div className="mb-8">
            <FilterPills
              categories={categories}
              active={filter}
              onSelect={handleFilterChange}
            />
          </div>

          <MasonryGrid
            images={visibleImages}
            onImageClick={handleImageClick}
          />

          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
                className="px-8 py-3 rounded-full bg-green-primary text-white font-body font-medium text-sm hover:bg-green-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent"
              >
                Load More
              </button>
            </div>
          )}

          {!hasMore && filtered.length > ITEMS_PER_PAGE && (
            <p className="mt-8 text-center text-neutral-mid/50 text-sm font-body">
              Showing all {filtered.length} image
              {filtered.length > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </section>
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxInitialIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  );
}
