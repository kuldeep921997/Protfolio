import { motion } from "framer-motion";
import { Code2, Layers, Zap, GitBranch, ArrowUpRight, MapPin } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const BentoIntroSection = () => {
  const metrics = useAppSelector((state) => state.profile.metrics);
  const aboutParagraphs = [
    "Frontend-focused engineer with 7 years building data-intensive enterprise platforms across retail, logistics and fintech.",
    "Currently SDE-2 at Reliance Jio, owning the frontend architecture of an inventory platform that serves 12,000+ daily users across 1,900+ stores and 6 retail brands.",
    "I lead a 4-engineer frontend team and work across the API boundary — REST contract design, plus PostgreSQL query and stored-procedure tuning.",
  ];

  const keyMetricIds = ["experience", "users", "scale", "performance"];
  const keyMetrics = keyMetricIds
    .map((id) => metrics.find((m) => m.id === id))
    .filter(Boolean)
    .map((m) => ({ value: m!.value, label: m!.label }));

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">At a glance</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <Code2 size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">About Me</h3>
            </div>
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-muted-foreground leading-relaxed ${i < aboutParagraphs.length - 1 ? "mb-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-accent/10">
                <Zap size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold">Key Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {keyMetrics.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <Layers size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">Now Building</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Real-time inventory platforms over Kafka & SSE",
                "Rendering performance on 50,000+ row views",
                "Retail video analytics on NVIDIA pipelines",
                "Design systems & shared component libraries",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <GitBranch size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">GitHub</h3>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profile</span>
                <span className="text-foreground font-semibold">kuldeep921997</span>
              </div>
              <div className="flex justify-between items-start gap-4 text-sm">
                <span className="text-muted-foreground shrink-0">Focus</span>
                <div className="text-foreground font-semibold text-right">
                  <span>React · TypeScript · Node</span>
                  <br />
                  <span>Kafka · SSE · PostgreSQL</span>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/kuldeep921997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View Profile <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 rounded-2xl border border-primary/30 bg-primary/5 card-hover p-5 sm:p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-[40px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">Let&apos;s Connect</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Open to Senior Frontend Engineer roles. Mumbai-based, open to relocating to Bengaluru
                or Hyderabad.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Contact Me <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoIntroSection;
