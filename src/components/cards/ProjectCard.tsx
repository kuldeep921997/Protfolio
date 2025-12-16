import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/Card';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

export const ProjectCard = ({ project, isExpanded, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }}
      className={`relative ${isExpanded ? 'z-10' : 'z-0'}`}
    >
      <Card 
        variant="elevated" 
        hover={!isExpanded}
        className={`cursor-pointer transition-all duration-300 ease-out relative ${
          isExpanded 
            ? 'shadow-2xl' 
            : 'hover:shadow-lg'
        }`}
      >
        {/* Green strip when closed - opens card */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            className="absolute top-0 right-0 bottom-0 w-5 sm:w-4 bg-green-500 hover:bg-green-600 active:bg-green-700 cursor-pointer transition-colors duration-250 ease-out z-10 rounded-r-lg touch-manipulation"
            style={{ minWidth: '20px', minHeight: '44px' }}
            aria-label="Open card"
          />
        )}

        {/* Red strip when opened - closes card */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
            }}
            className="absolute top-0 right-0 bottom-0 w-5 sm:w-4 bg-red-500 hover:bg-red-600 active:bg-red-700 cursor-pointer transition-colors duration-250 ease-out z-10 rounded-r-lg touch-manipulation"
            style={{ minWidth: '20px', minHeight: '44px' }}
            aria-label="Close card"
          />
        )}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            // Expanded View - Full Content
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative"
            >
              <div className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              {project.title}
            </h3>
                    <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
                  </div>
          </div>

          <div>
                  <h4 className="font-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Problem
            </h4>
                  <p className="font-body text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
                  <h4 className="font-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Architecture
            </h4>
                  <p className="font-body text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          <div>
                  <h4 className="font-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tech Stack
            </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.02, duration: 0.2 }}
                        className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-250 ease-out hover:scale-105"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
                  <h4 className="font-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Outcomes
            </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {project.outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-all duration-250 ease-out hover:shadow-md"
                >
                        <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {outcome.metric}
                  </div>
                        <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 mt-2">
                    {outcome.value}
                  </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {outcome.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-title text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Scale Metrics
            </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {project.scale.users && (
                <div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-1">Users</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.scale.users}
                  </div>
                </div>
              )}
              {project.scale.transactions && (
                <div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-1">Transactions</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.scale.transactions}
                  </div>
                </div>
              )}
              {project.scale.stores && (
                <div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-1">Locations</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.scale.stores}
                  </div>
                </div>
              )}
              {project.scale.data && (
                <div>
                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-1">Reliability</div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {project.scale.data}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
            </motion.div>
          ) : (
            // Compact View - Preview Only
            <motion.div
              key="compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 sm:p-6"
              onClick={onClick}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-title text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight truncate">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

