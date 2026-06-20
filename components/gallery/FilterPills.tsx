"use client";

interface FilterPillsProps {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export function FilterPills({
  categories,
  active,
  onSelect,
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Image category filter">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent ${
              isActive
                ? "bg-green-primary text-white"
                : "bg-transparent text-neutral-mid border border-divider hover:border-green-accent hover:text-green-accent"
            }`}
            aria-pressed={isActive}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
