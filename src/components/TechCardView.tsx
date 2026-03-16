import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Atom,
  Package,
  ArrowRight,
  Zap,
  Layout,
  Palette,
  LayoutGrid,
  Grid3X3,
  Server,
  Route,
  FileJson,
  Webhook,
  Database,
  Box,
  Cloud,
  Container,
  Workflow,
  GitCommit,
  Boxes,
  TrendingUp,
  Gauge,
  Puzzle,
  Layers,
  Scissors,
  Users,
  Search,
  ListTodo,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import type { TechCategory, TechArchitectureData } from "@/types";

const skillIcons: Record<string, LucideIcon> = {
  "JavaScript ES6+": Code2,
  TypeScript: FileCode,
  "React.js": Atom,
  "Redux Toolkit": Package,
  "Next.js": ArrowRight,
  "Svelte.js": Zap,
  "HTML5 / CSS3": Layout,
  "Tailwind CSS": Palette,
  "Material UI": LayoutGrid,
  Bootstrap: Grid3X3,
  "Node.js": Server,
  "Express.js": Route,
  Django: FileJson,
  Python: FileJson,
  "REST APIs": Webhook,
  MySQL: Database,
  MongoDB: Database,
  PostgreSQL: Database,
  Redis: Box,
  AWS: Cloud,
  "Azure DevOps": Cloud,
  Docker: Container,
  "CI/CD Pipelines": Workflow,
  Git: GitCommit,
  Microservices: Boxes,
  "Scalable Systems": TrendingUp,
  "Performance Opt.": Gauge,
  "Component Arch.": Puzzle,
  "State Patterns": Layers,
  "Code Splitting": Scissors,
  "Team Mentoring": Users,
  "Code Reviews": Search,
  "Agile / Scrum": ListTodo,
  "Stakeholder Mgmt": Handshake,
};

function getSkillIcon(name: string): LucideIcon {
  return skillIcons[name] ?? Code2;
}

interface TechCardViewProps {
  data: TechArchitectureData;
  activeCategory: TechCategory;
  activeCategoryIndex: number;
}

const TechCardView = ({ data, activeCategory }: TechCardViewProps) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Section number + title + description */}
      <div className="flex gap-4 sm:gap-6">
        <span
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-primary/20 flex-shrink-0 leading-none"
          style={{ color: `${activeCategory.color}20` }}
        >
          {activeCategory.num}
        </span>
        <div className="min-w-0 flex-1 pt-1">
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 mb-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: activeCategory.color }}
            />
            {activeCategory.label}
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xl">
            {activeCategory.desc}
          </p>
        </div>
      </div>

      {/* Card grid — 2 cards on mobile when possible, else 1; 2 at sm, 4 at lg */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {activeCategory.skills.map((skill, i) => {
          const Icon = getSkillIcon(skill.name);
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="rounded-lg border border-border bg-card p-2.5 min-[360px]:p-3 sm:p-4 hover:border-primary/30 transition-colors min-w-0"
            >
              <div
                className="w-8 h-8 rounded-md flex-shrink-0 mb-2 flex items-center justify-center"
                style={{ backgroundColor: `${activeCategory.color}22` }}
              >
                <Icon
                  size={18}
                  className="flex-shrink-0"
                  style={{ color: activeCategory.color }}
                />
              </div>
              <div className="font-display font-semibold text-foreground text-sm sm:text-base truncate" title={skill.name}>
                {skill.name}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 truncate" title={skill.sub}>
                {skill.sub}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FULL STACK tags */}
      <div className="pt-4 border-t border-border">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Full Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {data.fullStackTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-border bg-secondary/50 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCardView;
