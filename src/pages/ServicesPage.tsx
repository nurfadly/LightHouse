import { Services } from '../components/Services';
import { motion } from 'motion/react';

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="px-6 py-20 border-b border-neutral-900 bg-neutral-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic mb-8"
          >
            Capabilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-light"
          >
            We provide a holistic suite of marketing consulting services designed to deliver clarity and growth in an increasingly noisy digital marketplace.
          </motion.p>
        </div>
      </div>
      <Services />
      
      {/* Detailed section maybe */}
      <section className="py-32 px-6 bg-brand/5 border-t border-brand/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-display font-medium mb-6">Our Approach to Strategy</h3>
            <p className="text-neutral-400 leading-relaxed">
              We don't believe in boilerplate solutions. Every engagement begins with a deep dive into your business fundamentals, market context, and historical data. We look for the "Signal" – that unique value proposition that will resonate most powerfully with your target audience.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {['Data-Driven Discovery', 'Stakeholder Alignment', 'Competitive Landscaping', 'Roadmap Finalization'].map((step, i) => (
                <li key={i} className="flex items-center gap-4 text-neutral-200">
                  <span className="text-brand font-mono text-sm">0{i+1}</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
