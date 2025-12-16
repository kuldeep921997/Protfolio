import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { MetricCard } from '../components/cards/MetricCard';
import { useAppSelector } from '../app/hooks';

export const OverviewPage = () => {
  const metrics = useAppSelector((state) => state.profile.metrics);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Senior Frontend / Full Stack Engineer
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Senior Full Stack Engineer with 7+ years of experience architecting enterprise platforms 
          serving 6000+ users across 1000+ locations. Expert in React/TypeScript ecosystems, Redux 
          state management, and scalable frontend architecture. Technical leader with proven ability 
          to mentor teams, drive performance optimization, and deliver high-impact solutions in 
          fast-paced environments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>
    </Container>
  );
};

