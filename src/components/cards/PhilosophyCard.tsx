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
        <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
          <h3 className="font-title text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {philosophy.principle}
          </h3>
          <p className="font-body text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {philosophy.explanation}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

