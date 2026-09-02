import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/app/hooks";
import ProjectVisual from "./ProjectVisual";

/**
 * Featured projects.
 *
 * Two changes from the previous version:
 *   1. The right panel was an empty dashed box with a generic icon. It now
 *      renders an interface skeleton (see ProjectVisual) so the panel shows
 *      shape and density instead of absence. Swap in real screenshots when
 *      you have them -- that is a further large upgrade.
 *   2. Amber was this section's private accent while About used indigo and
 *      Tech Architecture used green. Three accents across one page reads
 *      accidental. Unified on the primary indigo; green stays semantic.
 */

type Variant = "grid" | "zones" | "queue" | "chart";

/** Which interface skeleton suits each project. */
const VISUAL_BY_ID: Record<string, { variant: Variant; caption: string }> = {
  "anytrac-rfid": { variant: "grid", caption: "Store portal · stock on hand" },
  "jio-video-analytics": { variant: "zones", caption: "Camera zones · ROI configuration" },
  "scholarship-portal": { variant: "queue", caption: "Application review queue" },
  "reliance-jewels": { variant: "grid", caption: "Inventory reconciliation" },
  "trading-simulator": { variant: "chart", caption: "Portfolio performance" },
};

const ProjectsSection = () => {
  const projects = useAppSelector((state) => state.projects.projects);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const project = projects[selectedIndex];

  // Guard rather than relying on the data file always being populated.
  if (!project) return null;

  const stats = project.featuredStats ?? [];
  const visual = VISUAL_BY_ID[project.id] ?? {
    variant: "grid" as Variant,
    caption: project.featuredKeywords ?? "",
  };

  return (
    <section id="projects" className="section bg-background text-foreground">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-7 sm:mb-9 select-none"
        >
          <p className="eyebrow">Work</p>
          <h2 className="section-title">
            <span className="text-foreground">Featured </span>
            <span className="text-primary">projects</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-8">
          {/* Deliberately NOT role="tablist". A real tab pattern also needs
              aria-controls, a role="tabpanel", roving tabindex and arrow-key
              handling; declaring the roles without them announces "tab 1 of 5"
              and then gives a screen reader nothing to navigate to, which is
              worse than no roles. Toggle buttons with aria-pressed are honest. */}
          <div
            role="group"
            aria-label="Featured projects"
            className="flex gap-2 overflow-x-auto pb-2 flex-nowrap sm:flex-wrap sm:overflow-visible overscroll-x-contain scrollbar-thin"
          >
            {projects.map((p, i) => {
              const active = i === selectedIndex;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedIndex(i)}
                  className={`select-none shrink-0 min-h-[42px] touch-manipulation
                    px-4 py-2 rounded-full border text-[13px] font-medium transition-colors
                    ${
                      active
                        ? "border-primary/60 bg-primary/[0.12] text-primary-soft"
                        : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                    }`}
                >
                  {p.title.length > 24 ? p.title.split(" ").slice(0, 2).join(" ") : p.title}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left: narrative */}
            <div className="lg:col-span-7 relative">
              <span
                className="absolute -top-6 -left-1 font-display font-extrabold leading-none
                           text-[5rem] sm:text-[7rem] text-primary/[0.07] select-none pointer-events-none"
                aria-hidden
              >
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5 break-words">
                  {project.title}
                </h3>

                <div className="space-y-5 mb-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-soft mb-1.5">
                      Problem
                    </p>
                    <p className="text-[14.5px] text-muted-foreground leading-relaxed measure">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-soft mb-1.5">
                      Approach
                    </p>
                    <p className="text-[14.5px] text-muted-foreground leading-relaxed measure">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11.5px] rounded-md border border-border text-muted-foreground bg-card"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: visual + stats */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <ProjectVisual variant={visual.variant} caption={visual.caption} />

              {stats.length > 0 && (
                <div className="grid grid-cols-3 gap-3 card-base p-4 sm:p-5">
                  {stats.map((s, i) => (
                    <div key={i} className="min-w-0 text-center">
                      <p
                        className="num font-display text-base sm:text-xl font-bold text-foreground truncate"
                        title={s.value}
                      >
                        {s.value}
                      </p>
                      <p
                        className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.08em] text-muted-foreground mt-1 truncate"
                        title={s.label}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
