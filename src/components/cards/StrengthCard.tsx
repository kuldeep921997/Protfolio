import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { EngineeringStrength } from '../../types';

interface StrengthCardProps {
  strength: EngineeringStrength;
  index: number;
}

export const StrengthCard = ({ strength, index }: StrengthCardProps) => {
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
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {strength.category}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mt-1">
              {strength.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {strength.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Examples
            </h4>
            <ul className="space-y-1">
              {strength.examples.map((example, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start leading-relaxed">
                  <span className="mr-2 text-primary-600 dark:text-primary-400 flex-shrink-0">•</span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

