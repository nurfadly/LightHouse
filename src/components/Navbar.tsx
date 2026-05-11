import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkle } from 'lucide-react';
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
    { name: 'Portfolio', href: '/work' },
    { name: 'Service', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Process', href: '/process' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-500">
      <div className={cn(
        "max-w-5xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border",
        isScrolled 
          ? "bg-neutral-950/80 backdrop-blur-xl border-neutral-800 shadow-2xl py-2.5" 
          : "bg-neutral-900/40 backdrop-blur-md border-neutral-800/50"
      )}>
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:rotate-90">
              <Sparkle className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase font-display italic">Lighthouse</span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[11px] font-medium transition-colors uppercase tracking-[0.15em]",
                pathname === link.href ? "text-brand" : "text-neutral-400 hover:text-neutral-50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:block bg-neutral-900 border border-neutral-800 text-neutral-100 px-5 py-2.5 rounded-full text-[10px] font-bold hover:bg-neutral-800 transition-colors uppercase tracking-widest whitespace-nowrap"
          >
            Get In Touch
          </Link>
          <button
            className="md:hidden text-neutral-50 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
