import { motion } from "framer-motion";
import { Monitor, Server, Database, Container, GitBranch } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const categoryConfig: Record<
  string,
  { icon: typeof Monitor; title: string; color: "primary" | "accent" }
> = {
  frontend: { icon: Monitor, title: "Frontend", color: "primary" },
  backend: { icon: Server, title: "Backend", color: "accent" },
  devops: { icon: Container, title: "Infrastructure & Tools", color: "accent" },
  architecture: { icon: GitBranch, title: "Architecture", color: "primary" },
  leadership: { icon: GitBranch, title: "Leadership", color: "primary" },
};

const SkillsSection = () => {
  const skills = useAppSelector((state) => state.skills.skills);

  const byCategory = skills.reduce<Record<string, { name: string }[]>>((acc, s) => {
    const cat = s.category || "frontend";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({ name: s.name });
    return acc;
  }, {});

  const order = ["frontend", "backend", "devops", "architecture", "leadership"];
  const layers = order
    .filter((key) => byCategory[key]?.length)
    .map((key) => {
      const config = categoryConfig[key] ?? { icon: Monitor, title: key, color: "primary" as const };
      return {
        ...config,
        skills: byCategory[key].map((s) => s.name),
      };
    });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Stack</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Tech Architecture</h2>
        </motion.div>

        <div className="space-y-4">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card border border-border card-hover p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-3 sm:min-w-[200px]">
                    <div
                      className={`p-2.5 rounded-xl ${layer.color === "accent" ? "bg-accent/10" : "bg-primary/10"}`}
                    >
                      <Icon
                        size={20}
                        className={layer.color === "accent" ? "text-accent" : "text-primary"}
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold">{layer.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
