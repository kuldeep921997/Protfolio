import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const ProjectsSection = () => {
  const projects = useAppSelector((state) => state.projects.projects);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const project = projects[selectedIndex];
  const stats = project?.featuredStats ?? [];
  const keywords = project?.featuredKeywords ?? project?.techStack?.slice(0, 3).join(" · ") ?? "";

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-zinc-950 text-zinc-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header: WORK + Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 select-none"
        >
          <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-2 font-sans">
            Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">Featured </span>
            <span className="text-amber-400">Projects</span>
          </h2>
        </motion.div>

        {/* Project tabs: horizontal scroll on mobile, wrap on sm+ */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 flex-nowrap sm:flex-wrap sm:overflow-visible overscroll-x-contain">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`select-none shrink-0 min-h-[44px] touch-manipulation
                  px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors
                  ${i === selectedIndex
                    ? "border border-zinc-600 border-b-2 border-b-amber-400 text-amber-400"
                    : "border border-zinc-600 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500"
                  }
                `}
              >
                {p.title.length > 24 ? p.title.split(" ").slice(0, 2).join(" ") : p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Two-column layout: left (content) + right (visual + stats) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Left section: background number, title, problem, solution, tech stack */}
            <div className="lg:col-span-8 relative min-h-0 lg:min-h-[320px]">
              {/* Background project number — smaller on mobile to avoid overlap */}
              <span
                className="absolute -top-2 left-0 font-display font-bold text-[4rem] sm:text-[7rem] md:text-[8rem] leading-none text-amber-400/20 select-none pointer-events-none"
                aria-hidden
              >
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 pt-4">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 break-words">
                  {project.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                      Problem
                    </p>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-lg border border-amber-400/50 text-zinc-300 bg-zinc-900/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* Right section: visual placeholder (hidden on mobile) + summary stats */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="hidden lg:flex rounded-xl bg-zinc-800/80 border border-zinc-700/50 min-h-[200px] sm:min-h-[240px] flex-col items-center justify-center gap-4 p-6">
                <div className="p-4 rounded-xl bg-zinc-700/50">
                  <Layers size={40} className="text-amber-400/80" />
                </div>
                <p className="text-xs uppercase tracking-wider text-zinc-500 text-center">
                  {keywords}
                </p>
              </div>

              {stats.length > 0 && (
                <div className="grid grid-cols-3 gap-2 sm:gap-6">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center min-w-0">
                      <p className="font-display text-base sm:text-2xl font-bold text-amber-400 truncate" title={s.value}>
                        {s.value}
                      </p>
                      <p className="text-[9px] sm:text-xs uppercase tracking-wider text-zinc-500 mt-1 truncate" title={s.label}>
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
