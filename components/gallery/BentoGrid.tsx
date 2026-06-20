"use client";

import { featuredImages } from "@/lib/gallery-data";
import { GalleryTile } from "./GalleryTile";

interface BentoGridProps {
  onImageClick: (index: number) => void;
}

export function BentoGrid({ onImageClick }: BentoGridProps) {
  const images = featuredImages.slice(0, 6);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {/* A — hero tile (2x2 on desktop, 2x1 on mobile) */}
      <div className="col-span-2 row-span-1 md:row-span-2">
        <GalleryTile
          image={images[0]}
          priority
          onClick={() => onImageClick(0)}
          className="h-full min-h-[300px] md:min-h-[480px]"
        />
      </div>

      {/* B - top-right */}
      <div className="col-span-1">
        <GalleryTile
          image={images[1]}
          priority
          onClick={() => onImageClick(1)}
          className="aspect-[4/3] md:aspect-auto md:h-full"
        />
      </div>

      {/* C - top-right */}
      <div className="col-span-1">
        <GalleryTile
          image={images[2]}
          priority
          onClick={() => onImageClick(2)}
          className="aspect-[4/3] md:aspect-auto md:h-full"
        />
      </div>

      {/* D - merged row (hidden on mobile, col-span-2 on desktop) */}
      <div className="hidden md:block col-span-2">
        <GalleryTile
          image={images[3]}
          onClick={() => onImageClick(3)}
          className="h-full min-h-[200px]"
        />
      </div>

      {/* Mobile: show remaining images as 2-col grid below */}
      <div className="col-span-1 md:hidden">
        <GalleryTile
          image={images[3]}
          onClick={() => onImageClick(3)}
          className="aspect-[4/3]"
        />
      </div>
      <div className="col-span-1 md:hidden">
        <GalleryTile
          image={images[4]}
          onClick={() => onImageClick(4)}
          className="aspect-[4/3]"
        />
      </div>

      {/* E - bottom-left */}
      <div className="col-span-1 hidden md:block">
        <GalleryTile
          image={images[4]}
          onClick={() => onImageClick(4)}
          className="h-full min-h-[200px]"
        />
      </div>

      {/* F - bottom-wide (3 cols on desktop, hidden on mobile) */}
      <div className="col-span-3 hidden md:block">
        <GalleryTile
          image={images[5]}
          onClick={() => onImageClick(5)}
          className="h-full min-h-[200px]"
        />
      </div>
      {/* Mobile: 6th image as last item */}
      <div className="col-span-1 md:hidden">
        <GalleryTile
          image={images[5]}
          onClick={() => onImageClick(5)}
          className="aspect-[4/3]"
        />
      </div>
    </div>
  );
}
