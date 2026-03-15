import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const ProjectsSection = () => {
  const projects = useAppSelector((state) => state.projects.projects);

  const colSpans = (i: number) => {
    if (i === 0) return "md:col-span-7";
    if (i === 1) return "md:col-span-5";
    return "md:col-span-6";
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group rounded-2xl bg-card border border-border card-hover p-6 sm:p-8 relative overflow-hidden ${colSpans(i)}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Layers size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://github.com/kuldeep921997"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={14} />
                    </a>
                    <span className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground cursor-pointer">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/70">
                      Problem
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent/70">
                      Solution
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{project.architecture}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
