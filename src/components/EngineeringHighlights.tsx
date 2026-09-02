import { motion } from "framer-motion";
import { Gauge, Puzzle, Network, LayoutDashboard, Radio, Database } from "lucide-react";

// Every figure here is mirrored from the resume so the two never disagree.
// If you change a number in one place, change it in the other.
const highlights = [
  {
    icon: Gauge,
    title: "Rendering Performance",
    description:
      "Re-engineered the heaviest inventory dashboards with list virtualization, memoized selectors and route-level code-splitting, cutting time-to-interactive from 8s to 3s on views of 50,000+ rows.",
    metric: "8s → 3s",
  },
  {
    icon: Radio,
    title: "Real-Time Data Layer",
    description:
      "Built the platform's real-time layer, consuming Kafka-published Stock-on-Hand and RFID tracking events across 15 topics so store teams see stock movement in under 5 seconds instead of waiting on a 15-minute batch refresh.",
    metric: "15-min batch → under 5s",
  },
  {
    icon: Network,
    title: "High-Throughput Integrations",
    description:
      "Designed integrations processing 1.28M+ daily transactions at a 99.68% API success rate, spanning 25–30 backend services across the inventory and analytics stack.",
    metric: "1.28M+ Daily Txns",
  },
  {
    icon: LayoutDashboard,
    title: "Enterprise Dashboard Platforms",
    description:
      "Architected the Store, Cluster and Self-Checkout portals that 12,000+ daily users rely on to manage INR 1,000 Cr of live inventory across 1,900+ stores and 6 retail brands.",
    metric: "12,000+ Users",
  },
  {
    icon: Puzzle,
    title: "Design System Architecture",
    description:
      "Established a shared library of 50+ TypeScript components and a standardized Redux data layer, removing 30% of duplicated UI code and cutting new-module scaffolding from 5 days to 2.",
    metric: "50+ Components",
  },
  {
    icon: Database,
    title: "Query and Contract Design",
    description:
      "Authored the REST contracts and PostgreSQL stored procedures behind high-volume Stock-on-Hand aggregation, cutting the slowest store-level report from 10s to 2s.",
    metric: "10s → 2s",
  },
];

const EngineeringHighlights = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
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
                className="group rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8 relative overflow-hidden"
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
