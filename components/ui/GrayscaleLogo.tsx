"use client";

import { useState } from "react";

interface GrayscaleLogoProps {
  name: string;
  className?: string;
}

export function GrayscaleLogo({ name, className = "" }: GrayscaleLogoProps) {
  const [hovered, setHovered] = useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center justify-center transition-all duration-150 ${className}`}
      style={{
        filter: hovered ? "none" : "grayscale(100%)",
        opacity: hovered ? 1 : 0.6,
      }}
    >
      <span
        className="text-sm font-body font-semibold tracking-wider transition-colors duration-150"
        style={{ color: hovered ? "#1a4d2e" : "#888888" }}
      >
        {initials}
      </span>
    </div>
  );
}
