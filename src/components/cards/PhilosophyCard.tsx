import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Philosophy } from '../../types';

interface PhilosophyCardProps {
  philosophy: Philosophy;
  index: number;
}

export const PhilosophyCard = ({ philosophy, index }: PhilosophyCardProps) => {
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
      <Card variant="outlined" hover className="h-full">
        <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {philosophy.principle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {philosophy.explanation}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

