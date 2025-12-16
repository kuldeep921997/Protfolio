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
        <div className="p-6 sm:p-8 space-y-4 sm:space-y-5">
          <div>
            <span className="font-body text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {strength.category}
            </span>
            <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-2 leading-tight">
              {strength.title}
            </h3>
          </div>

          <p className="font-body text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {strength.description}
          </p>

          <div>
            <h4 className="font-title text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Examples
            </h4>
            <ul className="space-y-2">
              {strength.examples.map((example, idx) => (
                <li key={idx} className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start leading-relaxed">
                  <span className="mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">•</span>
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

