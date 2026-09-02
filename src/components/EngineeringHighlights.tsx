import { motion } from "framer-motion";
import { Gauge, Puzzle, Network, LayoutDashboard, Radio, Database } from "lucide-react";

/**
 * Technical highlights.
 *
 * The previous version was six identically-sized cards where the metric sat in
 * a small corner pill and four lines of prose took all the visual weight --
 * hierarchy inverted against the most persuasive content on the page.
 *
 * Now the number IS the card: large, tabular, high contrast, with one or two
 * supporting lines. Two cards span two columns so the grid has rhythm instead
 * of repeating a single shape six times.
 *
 * Every figure mirrors the resume. If you change a number here, change it there.
 */

type Highlight = {
  icon: typeof Gauge;
  label: string;
  value: string;
  suffix?: string;
  detail: string;
  wide?: boolean;
  tone?: "accent";
};

const highlights: Highlight[] = [
  {
    icon: Gauge,
    label: "Rendering performance",
    value: "8s → 3s",
    detail:
      "Time-to-interactive on views rendering 50,000+ rows, after list virtualization, memoized selectors and route-level code-splitting.",
    wide: true,
    tone: "accent",
  },
  {
    icon: LayoutDashboard,
    label: "Daily users",
    value: "12,000+",
    detail: "Across 1,900+ stores and 6 retail brands.",
  },
  {
    icon: Network,
    label: "Daily transactions",
    value: "1.28M",
    suffix: "+",
    detail: "At a 99.68% API success rate across 25–30 backend services.",
  },
  {
    icon: Radio,
    label: "Event latency",
    value: "<5s",
    detail: "Kafka-published stock movement, replacing a 15-minute batch refresh.",
    tone: "accent",
  },
  {
    icon: Puzzle,
    label: "Shared components",
    value: "50+",
    detail: "Design-system library that removed 30% of duplicated UI code.",
  },
  {
    icon: Database,
    label: "Query & contract design",
    value: "10s → 2s",
    detail:
      "Slowest store-level report, after moving Stock-on-Hand aggregation into PostgreSQL stored procedures and reworking the index strategy.",
    wide: true,
    tone: "accent",
  },
];

const EngineeringHighlights = () => {
  return (
    <section className="section">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 sm:mb-10"
        >
          <p className="eyebrow">Engineering</p>
          <h2 className="section-title">Technical highlights</h2>
          <p className="mt-3 text-[15px] text-muted-foreground measure">
            Measured outcomes from production systems, not estimates. Each figure is one I can walk
            through end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.3) }}
                className={`card-base card-hover p-5 sm:p-6 flex flex-col ${
                  item.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={16} className="text-primary-soft shrink-0" aria-hidden />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-soft">
                    {item.label}
                  </p>
                </div>

                <p
                  className={`num font-display font-extrabold leading-none mb-2.5
                    text-[2rem] sm:text-[2.375rem]
                    ${item.tone === "accent" ? "text-accent" : "text-foreground"}`}
                >
                  {item.value}
                  {item.suffix && (
                    <span className="text-xl sm:text-2xl text-muted-foreground font-bold">
                      {item.suffix}
                    </span>
                  )}
                </p>

                <p className="text-[13px] text-muted-foreground leading-relaxed measure-sm">
                  {item.detail}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
