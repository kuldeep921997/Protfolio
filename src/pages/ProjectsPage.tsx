import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ProjectCard } from '../components/cards/ProjectCard';
import { useAppSelector } from '../app/hooks';

export const ProjectsPage = () => {
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Project Case Studies
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Each project is a case study focusing on problem, architecture decisions, tech stack, 
          performance outcomes, and scale metrics. Real-world impact over feature lists.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
};

