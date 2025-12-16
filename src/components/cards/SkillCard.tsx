import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const proficiencyStyles = {
  expert: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800',
  advanced: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  proficient: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
};

const categoryColors = {
  frontend: 'border-l-blue-500',
  backend: 'border-l-green-500',
  devops: 'border-l-orange-500',
  architecture: 'border-l-purple-500',
  leadership: 'border-l-pink-500',
};

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: index * 0.01 
      }}
    >
      <Card 
        variant="outlined" 
        hover
        className={`h-full border-l-4 ${categoryColors[skill.category]}`}
      >
        <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="font-body text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
              {skill.name}
            </div>
            <div className="font-body text-xs text-gray-500 dark:text-gray-500 mt-1.5 capitalize">
              {skill.category}
            </div>
          </div>
          <span
            className={`px-2 py-1 text-xs font-medium rounded border flex-shrink-0 ${proficiencyStyles[skill.proficiency]}`}
          >
            {skill.proficiency}
          </span>
        </div>
      </Card>
    </motion.div>
  );
};

