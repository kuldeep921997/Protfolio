import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ProjectCard } from '../components/cards/ProjectCard';
import { useAppSelector } from '../app/hooks';

export const ProjectsPage = () => {
  const projects = useAppSelector((state) => state.projects.projects);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Project Case Studies
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
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

