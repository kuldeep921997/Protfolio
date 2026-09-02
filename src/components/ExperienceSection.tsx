import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

const ExperienceSection = () => {
  const experiences = useAppSelector((state) => state.experience.experiences);

  return (
    <section id="experience" className="section">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-8 sm:mb-10"
        >
          <p className="eyebrow">Career</p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-14"
              >
                <div className="absolute left-[11px] top-8 w-[17px] h-[17px] rounded-full border-[3px] border-primary bg-background hidden md:block" />

                <div className="rounded-2xl bg-card border border-border card-hover p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 md:hidden">
                        <Briefcase size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                        <p className="text-muted-foreground text-sm">
                          {exp.company}
                          {exp.location ? ` · ${exp.location}` : ""}
                        </p>
                        {exp.priorRole && (
                          <p className="text-[12.5px] text-muted-foreground/80 mt-1.5 italic">
                            {exp.priorRole}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
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
      </div>
    </section>
  );
};

export default ExperienceSection;
