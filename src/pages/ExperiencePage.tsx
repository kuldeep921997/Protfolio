import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { useAppSelector } from '../app/hooks';

export const ExperiencePage = () => {
  const experiences = useAppSelector((state) => state.experience.experiences);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Experience Timeline
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
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

