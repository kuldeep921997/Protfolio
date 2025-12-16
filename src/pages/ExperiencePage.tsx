import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { useAppSelector } from '../app/hooks';

export const ExperiencePage = () => {
  const experiences = useAppSelector((state) => state.experience.experiences);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Experience Timeline
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Non-linear timeline focusing on impact, architecture, scale, leadership, and performance. 
          Each role represents significant contributions to enterprise-scale systems.
        </p>
      </motion.div>

      <div className="space-y-4 sm:space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </Container>
  );
};

