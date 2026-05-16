import { ReactNode } from "react";

interface SplitSectionProps {
  left: ReactNode;
  right: ReactNode;
  ratio?: "50/50" | "55/45" | "58/42" | "60/40";
  leftBg?: string;
  rightBg?: string;
  className?: string;
}

const ratioMap = {
  "50/50": "md:grid-cols-2",
  "55/45": "md:grid-cols-[55%_45%]",
  "58/42": "md:grid-cols-[58%_42%]",
  "60/40": "md:grid-cols-[60%_40%]",
};

export function SplitSection({
  left,
  right,
  ratio = "50/50",
  leftBg = "",
  rightBg = "",
  className = "",
}: SplitSectionProps) {
  return (
    <div className={`grid grid-cols-1 ${ratioMap[ratio]} ${className}`}>
      <div className={leftBg}>{left}</div>
      <div className={rightBg}>{right}</div>
    </div>
  );
}
