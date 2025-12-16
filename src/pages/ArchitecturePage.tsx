import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { StrengthCard } from '../components/cards/StrengthCard';
import { useAppSelector } from '../app/hooks';

export const ArchitecturePage = () => {
  const strengths = useAppSelector((state) => state.skills.strengths);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Architecture & Engineering Strengths
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          A section that feels like a system design interview answer. Deep dive into patterns, 
          techniques, and strategies that enable scale and performance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {strengths.map((strength, index) => (
          <StrengthCard key={strength.id} strength={strength} index={index} />
        ))}
      </div>
    </Container>
  );
};

