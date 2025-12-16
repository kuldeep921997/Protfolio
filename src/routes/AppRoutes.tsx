import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const OverviewPage = lazy(() => import('../pages/OverviewPage').then(m => ({ default: m.OverviewPage })));
const ExperiencePage = lazy(() => import('../pages/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ArchitecturePage = lazy(() => import('../pages/ArchitecturePage').then(m => ({ default: m.ArchitecturePage })));
const SkillsPage = lazy(() => import('../pages/SkillsPage').then(m => ({ default: m.SkillsPage })));
const PhilosophyPage = lazy(() => import('../pages/PhilosophyPage').then(m => ({ default: m.PhilosophyPage })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
    </motion.div>
  </div>
);

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.2,
};

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

