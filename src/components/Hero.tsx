import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-full bg-brand/20 blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-brand/20 blur-[150px] opacity-40 pointer-events-none" />
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Marketing Consulting Agency</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-[5.5rem] font-sans font-bold leading-[1.1] tracking-tight mb-8">
            Guiding your <br />
            <span className="font-display italic font-light lowercase text-neutral-100">Growth</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          Spark of the light even in the dark
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/contact" 
            className="w-full sm:w-auto bg-brand text-neutral-950 px-8 py-4 rounded-full font-bold text-sm hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.4)] transition-all duration-300"
          >
            Get In Touch
          </Link>
          <Link 
            to="/work" 
            className="w-full sm:w-auto bg-neutral-900/50 backdrop-blur-md border border-neutral-800 text-neutral-100 px-8 py-4 rounded-full font-bold text-sm hover:border-brand/50 transition-all duration-300"
          >
            Our Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

