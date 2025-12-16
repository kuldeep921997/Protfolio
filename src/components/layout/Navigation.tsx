import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setActiveSection, toggleTheme } from '../../features/ui/uiSlice';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Overview', id: 'overview' },
  { path: '/experience', label: 'Experience', id: 'experience' },
  { path: '/projects', label: 'Projects', id: 'projects' },
  { path: '/architecture', label: 'Architecture', id: 'architecture' },
  { path: '/skills', label: 'Skills', id: 'skills' },
  { path: '/philosophy', label: 'Philosophy', id: 'philosophy' },
];

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

export const Navigation = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    dispatch(setActiveSection(id));
    setIsMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle('dark');
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          <Link 
            to="/" 
              className="font-title text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
            onClick={() => handleNavClick('overview')}
          >
            Kuldeep Lodhi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-md text-sm font-medium font-body transition-all duration-250 ease-out ${
                    isActive
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleThemeToggle}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-250 ease-out"
              aria-label="Toggle theme"
            >
              <motion.span
                key={theme}
                initial={{ scale: 0.8, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-250 ease-out"
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Floating with Glassmorphism */}
        <AnimatePresence>
          {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Floating Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.25
              }}
              className="fixed top-[var(--header-height)] left-4 right-4 z-50 md:hidden mt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="py-2">
                  {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                      >
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.id)}
                          className={`block px-6 py-4 text-base font-medium font-body transition-all duration-250 ease-out ${
                        isActive
                              ? 'bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white border-l-4 border-primary-500'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                      </motion.div>
                  );
                })}
                </div>
              </div>
            </motion.div>
          </>
          )}
        </AnimatePresence>
    </>
  );
};

