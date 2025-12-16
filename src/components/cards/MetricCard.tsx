import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Metric } from '../../types';

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export const MetricCard = ({ metric, index }: MetricCardProps) => {
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
      <Card variant="elevated" hover className="p-4 sm:p-6 h-full">
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {metric.value}
          </div>
          <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
            {metric.label}
          </div>
          {metric.description && (
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 leading-relaxed">
              {metric.description}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

