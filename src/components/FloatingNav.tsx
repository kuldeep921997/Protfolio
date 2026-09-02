import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[6.5px] sm:py-[8.5px] transition-all duration-300 ${scrolled ? "nav-glass-fade" : "bg-transparent"}`}
      >
        {/* Inner container for content alignment on wide screens */}
        <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Left: wordmark + availability. The name was previously absent from
              the entire viewport until the footer -- on a personal site it is
              the one thing that always needs to be on screen. */}
          <a href="#home" className="flex items-center gap-3 shrink-0 min-w-0 group">
            <span className="font-display text-[15px] sm:text-base font-bold tracking-tight text-foreground whitespace-nowrap">
              Kuldeep Lodhi
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-card/50 text-[11px] text-muted-foreground backdrop-blur-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
              Available
            </span>
          </a>

          {/* Right: Desktop nav links + theme | Mobile: hamburger + theme */}
          <div className="flex items-center gap-1 sm:gap-4 md:gap-6">
            {/* Desktop: nav links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] sm:text-sm font-medium text-foreground/85 hover:text-foreground transition-colors duration-200 whitespace-nowrap tracking-tight"
                >
                  {item.label}
                </a>
              ))}
            </div>

          {/* Mobile: hamburger button - min 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-foreground/90 hover:text-foreground hover:bg-secondary/50 transition-colors -mr-1"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Theme toggle - min 44px touch target on mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-foreground/90 hover:text-foreground hover:bg-secondary/50 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[72px] left-3 right-3 z-50 rounded-2xl glass border border-border p-4 md:hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Menu</span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="min-h-[48px] flex items-center px-4 rounded-xl text-base font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
