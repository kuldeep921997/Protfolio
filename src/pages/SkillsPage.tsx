import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { SkillCard } from '../components/cards/SkillCard';
import { useAppSelector } from '../app/hooks';
import { Skill } from '../types';

const categoryLabels = {
  frontend: 'Frontend Engineering',
  backend: 'Backend & APIs',
  devops: 'DevOps & Infrastructure',
  architecture: 'Architecture & Design',
  leadership: 'Leadership & Collaboration',
};

export const SkillsPage = () => {
  const skills = useAppSelector((state) => state.skills.skills);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <Container className="py-6 sm:py-8 md:py-12">
      <motion.div 
        className="mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
          Skills Matrix
        </h1>
        <p className="font-body text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl leading-relaxed">
          Categorized skill cards with visual proficiency indicators. No progress bars—clean 
          visual language that communicates expertise level.
        </p>
      </motion.div>

      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category}>
            <h2 className="font-title text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              {categoryLabels[category as Skill['category']]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {categorySkills.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

