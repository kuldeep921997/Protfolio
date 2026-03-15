import { motion } from "framer-motion";
import { Gauge, Puzzle, Network, LayoutDashboard, Zap, Shield } from "lucide-react";

const highlights = [
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Achieved ~45% average load time reduction across enterprise applications through code splitting, lazy loading, and bundle optimization strategies.",
    metric: "45% Faster",
  },
  {
    icon: Network,
    title: "Scalable API Integrations",
    description:
      "Designed high-throughput systems processing 1.28M+ daily transactions with a 99.68% API success rate across integrations with 25–30 backend services.",
    metric: "1.28M+ Daily Txns",
  },
  {
    icon: LayoutDashboard,
    title: "Enterprise Dashboard Platforms",
    description:
      "Architected real-time analytics dashboards used by 6000+ users across 1000+ retail locations with live inventory tracking and operational reporting.",
    metric: "6000+ Users",
  },
  {
    icon: Puzzle,
    title: "Reusable Component Architecture",
    description:
      "Built 30–40 reusable TypeScript components, reducing code duplication by 20–40% across multiple repositories and establishing scalable frontend architecture patterns.",
    metric: "30–40 Components",
  },
  {
    icon: Zap,
    title: "High-Performance Data Handling",
    description:
      "Implemented optimized data rendering and state management strategies for large datasets used in analytics dashboards, significantly improving UI responsiveness and data handling performance.",
    metric: "70% Faster",
  },
  {
    icon: Shield,
    title: "Role-Based Access Control Systems",
    description:
      "Designed scalable role-based access control models for multi-location enterprise systems, ensuring secure access management across thousands of users and operational roles.",
    metric: "Enterprise-Grade Security",
  },
];

const EngineeringHighlights = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Engineering</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Technical Highlights</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-card border border-border card-hover p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
