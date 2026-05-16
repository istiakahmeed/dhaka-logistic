"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceRowProps {
  id: string;
  title: string;
  description: string;
}

export function ServiceRow({ id, title, description }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start gap-6 px-6 py-6 transition-all duration-200 cursor-pointer border-b border-divider"
      style={{ backgroundColor: hovered ? "#1a4d2e" : "transparent" }}
    >
      <span
        className="font-mono text-sm transition-colors duration-200 shrink-0 pt-0.5"
        style={{ color: hovered ? "#7dc142" : "#1a4d2e" }}
      >
        {id}
      </span>
      <div className="flex-1 min-w-0">
        <h3
          className="font-display font-bold text-lg transition-colors duration-200"
          style={{ color: hovered ? "#ffffff" : "#111111" }}
        >
          {title}
        </h3>
        <p
          className="text-sm font-body mt-1 leading-relaxed transition-colors duration-200"
          style={{ color: hovered ? "rgba(255,255,255,0.7)" : "#4a4a4a" }}
        >
          {description}
        </p>
      </div>
      <ArrowRight
        size={18}
        className="shrink-0 mt-1 transition-all duration-200"
        style={{
          color: hovered ? "#7dc142" : "#4a4a4a",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      />
    </div>
  );
}
