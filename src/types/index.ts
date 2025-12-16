export interface Metric {
  id: string;
  label: string;
  value: string | number;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  achievements: Achievement[];
  tags: string[];
}

export interface Achievement {
  type: 'scale' | 'performance' | 'leadership' | 'devops';
  title: string;
  description: string;
  metrics?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  architecture: string;
  techStack: string[];
  outcomes: ProjectOutcome[];
  scale: ScaleMetrics;
  images?: string[];
}

export interface ProjectOutcome {
  metric: string;
  value: string;
  description: string;
}

export interface ScaleMetrics {
  users?: string;
  transactions?: string;
  stores?: string;
  data?: string;
}

export interface EngineeringStrength {
  id: string;
  category: string;
  title: string;
  description: string;
  examples: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'architecture' | 'leadership';
  proficiency: 'expert' | 'advanced' | 'proficient';
}

export interface Philosophy {
  id: string;
  principle: string;
  explanation: string;
}

export interface AppState {
  theme: 'light' | 'dark';
  activeSection: string;
  expandedItems: Set<string>;
}

