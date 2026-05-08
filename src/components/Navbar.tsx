import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Process', href: '/process' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-brand group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-tighter uppercase font-display italic">Lighthouse</span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors uppercase tracking-widest",
                pathname === link.href ? "text-brand" : "text-neutral-400 hover:text-neutral-50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-neutral-50 text-neutral-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-brand transition-colors uppercase tracking-tight whitespace-nowrap"
          >
            Start a project
          </Link>
          <button
            className="md:hidden text-neutral-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 p-6 md:hidden flex flex-col gap-4"
          >
            <Link
              to="/contact"
              className="bg-brand text-neutral-950 px-5 py-3 rounded-lg text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a project
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-brand" : "text-neutral-50"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
