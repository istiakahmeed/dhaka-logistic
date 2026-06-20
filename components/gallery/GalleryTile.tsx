"use client";

import type { GalleryImage } from "@/lib/gallery-data";
import Image from "next/image";

interface GalleryTileProps {
  image: GalleryImage;
  priority?: boolean;
  onClick?: () => void;
  className?: string;
}

export function GalleryTile({
  image,
  priority = false,
  onClick,
  className = "",
}: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full overflow-hidden rounded-2xl bg-surface-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent ${className}`}
      aria-label={`View ${image.title || image.alt}`}
    >
      <div className="relative w-full h-full min-h-[180px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADYA/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9bAEMBBQkJDQwMFg0NFjIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAAEAAQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGE0FRB2FxEyIyQYEIkaGxwQNTFSQzUnJh4vEkJDNic4LxU5KisaKyY4OjQ1Njc4OT8PF0dICQkqKissLS4v/aAAgBAQAAPwL1"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 transition-all duration-[250ms] ease-out opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
        {image.title && (
          <h3 className="text-white font-display font-semibold text-sm md:text-base leading-tight">
            {image.title}
          </h3>
        )}
        {image.category && (
          <p className="text-white/70 text-xs md:text-sm mt-0.5 font-body">
            {image.category}
          </p>
        )}
      </div>
    </button>
  );
}
