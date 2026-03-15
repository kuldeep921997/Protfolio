import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const FloatingNav = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass glow-border" : "bg-transparent border border-transparent"}`}
    >
      {/* Left: Available for opportunities */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted-foreground shrink-0">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Available for opportunities
      </div>

      {/* Right: Nav links + theme toggle */}
      <div className="flex items-center gap-5 sm:gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          className="p-1.5 text-foreground/90 hover:text-foreground transition-colors shrink-0"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
