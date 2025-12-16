import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 200,
        damping: 25,
        delay: index * 0.03 
      }}
    >
      <Card variant="elevated" hover className="h-full">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Problem
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Architecture
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.02, duration: 0.15 }}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-150 hover:scale-105"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {project.outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.2 }}
                  className="p-2.5 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-150 hover:shadow-md"
                >
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    {outcome.metric}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400 mt-1">
                    {outcome.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    {outcome.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Scale Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {project.scale.users && (
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Users</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.scale.users}
                  </div>
                </div>
              )}
              {project.scale.transactions && (
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Transactions</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.scale.transactions}
                  </div>
                </div>
              )}
              {project.scale.stores && (
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Locations</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.scale.stores}
                  </div>
                </div>
              )}
              {project.scale.data && (
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Reliability</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {project.scale.data}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

