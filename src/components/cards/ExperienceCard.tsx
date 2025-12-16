import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { Experience } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleExpandedItem } from '../../features/ui/uiSlice';
// Chevron icon component
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const dispatch = useAppDispatch();
  const expandedItems = useAppSelector((state) => state.ui.expandedItems);
  const isExpanded = expandedItems.includes(experience.id);

  const toggleExpand = () => {
    dispatch(toggleExpandedItem(experience.id));
  };

  const achievementTypes = {
    scale: { label: 'Scale', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
    performance: { label: 'Performance', color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' },
    leadership: { label: 'Leadership', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' },
    devops: { label: 'DevOps', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300' },
  };

  return (
    <Card variant="elevated" hover className="overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <div className="mt-1 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
              {experience.company}
            </div>
            <div className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {experience.period} {experience.location && `• ${experience.location}`}
            </div>
          </div>
          <motion.button
            onClick={toggleExpand}
            className="flex-shrink-0 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-150 ease-in-out"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <ChevronDownIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.button>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {experience.tags.slice(0, 6).map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.02, duration: 0.15 }}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded transition-all duration-150 hover:scale-105"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.25 
              }}
              className="overflow-hidden"
            >
              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start leading-relaxed">
                        <span className="mr-2 text-gray-400 dark:text-gray-500 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    {experience.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              achievementTypes[achievement.type].color
                            }`}
                          >
                            {achievementTypes[achievement.type].label}
                          </span>
                          {achievement.metrics && (
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              {achievement.metrics}
                            </span>
                          )}
                        </div>
                        <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                          {achievement.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

