import { motion } from 'motion/react';
import { Search, Compass, Zap, BarChart } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    title: 'Discovery & Calibration',
    desc: 'We start by aligning with your internal teams, auditing existing assets, and defining clear KPIs that map to business success.',
    icon: Search
  },
  {
    title: 'Strategic Navigation',
    desc: 'We develop a bespoke roadmap, identifying the "Lighthouse" – the core brand narrative that will guide all tactical executions.',
    icon: Compass
  },
  {
    title: 'Precise Execution',
    desc: 'Our team rolls out the strategy across digital and physical touchpoints, ensuring consistency and high-impact delivery.',
    icon: Zap
  },
  {
    title: 'Optimization & Scale',
    desc: 'We don\'t just set it and forget it. We continuously monitor data, optimizing campaigns in real-time to maximize ROI.',
    icon: BarChart
  }
];

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen">
       <div className="px-6 py-20 border-b border-neutral-900 bg-neutral-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic mb-8"
          >
            How we <br />Navigate.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-light"
          >
            Our process is a blend of rigorous analytical methodology and creative intuition. We follow a proven framework that reduces risk and maximizes momentum.
          </motion.p>
        </div>
      </div>

      <section className="py-32 px-6 relative">
        {/* Background line */}
        <div className="absolute left-1/2 top-40 bottom-40 w-px bg-neutral-800 hidden md:block" />

        <div className="max-w-7xl mx-auto relative">
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-12 md:gap-24 relative",
                  index % 2 !== 0 && "md:flex-row-reverse"
                )}
              >
                {/* Visual side */}
                <div className="w-full md:w-1/2">
                   <div className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-neutral-800 aspect-[16/10] flex items-center justify-center">
                      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <step.icon className="w-24 h-24 text-neutral-800 group-hover:text-brand/20 transition-all duration-700 group-hover:scale-125" />
                      <div className="absolute top-8 left-8">
                        <span className="text-4xl font-display font-black text-white/5 italic">0{index + 1}</span>
                      </div>
                   </div>
                </div>

                {/* Content side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                   <div className={cn(
                     "inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 mb-8 backdrop-blur-sm",
                     index % 2 !== 0 && "md:ml-0"
                   )}>
                     <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                     <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.2em]">Phase 0{index + 1}</span>
                   </div>
                   
                   <h3 className="text-4xl md:text-5xl font-display font-medium mb-6 tracking-tight">{step.title}</h3>
                   <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                     {step.desc}
                   </p>
                   
                   <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                      {['Analysis', 'Reporting', 'Alignment'].map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest border border-neutral-800/50 px-3 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Step Marker for Desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full bg-neutral-950 border-4 border-neutral-800 z-10 flex items-center justify-center group-hover:border-brand transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-4xl font-display font-medium mb-8">Ready to start the journey?</h2>
           <p className="text-neutral-500 mb-12 max-w-xl mx-auto font-light">
             Our process is adaptable to your specific needs, whether you're a startup looking for a launchpad or an enterprise needing a course correction.
           </p>
           <button className="bg-brand text-neutral-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
             Book a strategy session
           </button>
        </div>
      </section>
    </div>
  );
}
