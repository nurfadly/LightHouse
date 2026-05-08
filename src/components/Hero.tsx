import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neutral-800/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1 px-3 border border-neutral-800 rounded-full text-[11px] uppercase tracking-[0.2em] text-neutral-400 mb-8">
            Guiding Brands Through the Digital Mist
          </span>
          
          <h1 className="text-6xl md:text-[8rem] font-display font-black leading-[0.9] tracking-tighter uppercase mb-8 italic">
            Illuminating <br />
            <span className="text-brand">Global </span> 
            Futures.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light"
          >
            Lighthouse is a boutique marketing consulting agency. We craft precision strategies that pierce through market noise to deliver measurable impact for visionaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-end"
          >
            <a 
              href="#work"
              className="group relative w-32 h-32 rounded-full border border-neutral-700 flex items-center justify-center overflow-hidden hover:border-brand transition-colors"
            >
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              <ArrowDownRight className="w-8 h-8 relative z-10 group-hover:text-neutral-950 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Ticker / Marquee */}
      <div className="mt-32 py-10 border-t border-b border-neutral-800 overflow-hidden select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 text-sm font-mono uppercase tracking-widest text-neutral-600"
        >
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>Strategy First</span>
              <span className="text-brand opacity-50">•</span>
              <span>Data Driven</span>
              <span className="text-brand opacity-50">•</span>
              <span>Design Led</span>
              <span className="text-brand opacity-50">•</span>
              <span>Future Oriented</span>
              <span className="text-brand opacity-50">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
