import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroSection = () => {
  const bio =
    "Senior Full Stack Engineer with 7+ years of experience building enterprise web applications used by 6000+ users across 1000+ locations. I design scalable application architectures and high-performance interfaces for complex, data-driven platforms. My focus is building reliable systems, improving performance, and helping teams deliver clean, maintainable, production-grade software.";

  return (
    <section id="home" className="min-h-screen flex items-start relative overflow-hidden bg-background pt-20 sm:pt-24 md:pt-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Subtle grid - light gray lines on dark (matches reference) */}
      <div
        className="absolute inset-0 bg-[length:24px_24px] opacity-[0.06] dark:opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight leading-[0.9] mb-4 sm:mb-6 text-left pt-4 sm:pt-7"
        >
          <span className="text-foreground">FULL-STACK</span>
          <br />
          <span className="text-gradient-hero">MERN ENGINEER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed text-left"
        >
          {bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-sm text-muted-foreground text-left"
        >
          {[
            "7+ years development experience",
            "MERN stack specialization",
            "Enterprise-scale applications",
            "Production dashboards & apps",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-10 sm:mb-12"
        >
          <a href="#projects" className="min-h-[44px] inline-flex items-center justify-center px-5 py-3 sm:px-6 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity touch-manipulation">
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Resume_Kuldeep_V12_4.pdf`}
            download="Resume_Kuldeep_V12_4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors touch-manipulation"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a href="#contact" className="min-h-[44px] inline-flex items-center justify-center px-5 py-3 sm:px-6 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors touch-manipulation">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/kuldeep921997", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/kuldeep-lodhi-1b17b9118/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:kuldeep921997@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all touch-manipulation"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
