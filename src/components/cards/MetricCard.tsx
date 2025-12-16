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
      <Card variant="elevated" hover className="p-6 sm:p-8 h-full">
        <div className="space-y-3">
          <div className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-none">
            {metric.value}
          </div>
          <div className="font-body text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
            {metric.label}
          </div>
          {metric.description && (
            <div className="font-body text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              {metric.description}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

