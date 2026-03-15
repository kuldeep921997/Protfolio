import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import BentoIntroSection from "@/components/BentoIntroSection";
import EngineeringHighlights from "@/components/EngineeringHighlights";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      <HeroSection />
      <BentoIntroSection />
      <EngineeringHighlights />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
