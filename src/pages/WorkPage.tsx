import { Portfolio } from '../components/Portfolio';
import { motion } from 'motion/react';

export default function WorkPage() {
  return (
    <div className="pt-24 min-h-screen">
       <div className="px-6 py-20 border-b border-neutral-900 bg-neutral-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic mb-8"
          >
            Proof of <br />Concept.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-light"
          >
            Explore how we've helped category-leading brands navigate change and achieve exponential growth through precision marketing and strategic design.
          </motion.p>
        </div>
      </div>
      <Portfolio />
      
      <section className="py-32 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium mb-12">Looking for a specific industry?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Fintech', 'SaaS', 'Healthcare', 'Luxury Retail', 'Logistics', 'Real Estate'].map((tag) => (
              <span key={tag} className="px-6 py-3 rounded-full border border-neutral-800 text-sm hover:border-brand hover:text-brand transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
