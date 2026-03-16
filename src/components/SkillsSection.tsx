import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Sparkles } from "lucide-react";
import TechCardView from "./TechCardView";
import TechConstellationView from "./TechConstellationView";
import type { TechArchitectureData, TechCategory } from "@/types";

import techArchitectureJson from "@/data/techArchitecture.json";

const data = techArchitectureJson as TechArchitectureData;

type ViewMode = "cards" | "constellation";

const SkillsSection = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("constellation");
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = useMemo(() => data.categories, []);
  const activeCategory: TechCategory = categories[activeCategoryIndex];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header: Tech Architecture + View tabs (Constellation | Cards) on the right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-[0.18em] mb-2">
              Stack
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-foreground">Tech </span>
              <span className="text-primary">Architecture</span>
            </h2>
          </div>
          <div className="flex w-fit rounded-xl border border-border bg-card/50 p-1 shrink-0 grow-0">
            <button
              type="button"
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "constellation"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles size={16} />
              Constellation
            </button>
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                viewMode === "cards"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid size={16} />
              Cards
            </button>
          </div>
        </motion.div>

        {/* Category tabs: Frontend, Backend, Infrastructure, Architecture, Leadership */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 scrollbar-thin mb-6 sm:mb-8">
          <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap pb-2">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryIndex(i)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategoryIndex === i
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:text-foreground hover:border-border/80"
                }`}
                style={
                  activeCategoryIndex === i
                    ? { borderColor: `${cat.color}55`, color: cat.color, backgroundColor: `${cat.color}18` }
                    : undefined
                }
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: activeCategoryIndex === i ? cat.color : "currentColor" }}
                />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content: Card view or Constellation view */}
        <AnimatePresence mode="wait">
          {viewMode === "cards" ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <TechCardView
                data={data}
                activeCategory={activeCategory}
                activeCategoryIndex={activeCategoryIndex}
              />
            </motion.div>
          ) : (
            <motion.div
              key="constellation"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <TechConstellationView
                data={data}
                activeCategory={activeCategory}
                activeCategoryIndex={activeCategoryIndex}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination dots: left-aligned, a bit higher below the content/description */}
        <div className="flex items-center justify-start gap-2 mt-5 sm:mt-6">
          {categories.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveCategoryIndex(i)}
              className="rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Go to ${categories[i].label}`}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors ${
                  i === activeCategoryIndex ? "bg-primary scale-125" : "bg-muted-foreground/40"
                }`}
                style={i === activeCategoryIndex ? { backgroundColor: activeCategory.color } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
