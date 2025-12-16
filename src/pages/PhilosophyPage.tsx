import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { PhilosophyCard } from '../components/cards/PhilosophyCard';
import { useAppSelector } from '../app/hooks';

export const PhilosophyPage = () => {
  const philosophy = useAppSelector((state) => state.skills.philosophy);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Engineering Philosophy
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Short, sharp principles that guide technical decisions. Tradeoffs over trends, 
          performance before polish, scalability before shortcuts.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {philosophy.map((principle, index) => (
          <PhilosophyCard key={principle.id} philosophy={principle} index={index} />
        ))}
      </div>
    </Container>
  );
};

