import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium mb-6 tracking-tight"
          >
            Proof of Concept, <br />
            <span className="italic">Creating Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 max-w-xl mx-auto font-light leading-relaxed"
          >
            Explore how we've helped category-leading brands navigate change and achieve exponential growth through precision marketing and strategic design.
          </motion.p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-neutral-950 rounded-[2.5rem] border border-neutral-800 p-6 md:p-10 flex flex-col md:flex-row gap-12 items-center hover:border-brand/20 transition-all duration-700">
                <div className={cn(
                  "w-full md:w-1/2 space-y-8",
                  index % 2 !== 0 ? "md:order-2" : ""
                )}>
                  <div className="space-y-4">
                    <p className="text-brand text-[10px] font-mono tracking-[0.2em] uppercase">{project.category}</p>
                    <h3 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-md">
                      {project.description}
                    </p>
                  </div>
                  
                  <Link 
                    to={`/work/${project.id}`}
                    className="inline-flex bg-neutral-100 text-neutral-900 px-8 py-3 rounded-full text-sm font-bold hover:bg-brand hover:text-white transition-all duration-300"
                  >
                    Full project
                  </Link>
                </div>

                <div className={cn(
                  "w-full md:w-1/2 aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800",
                  index % 2 !== 0 ? "md:order-1" : ""
                )}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 md:opacity-60 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link 
            to="/work"
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-brand transition-all group"
          >
            <span>Explore All Work</span>
            <div className="w-10 h-[1.5px] bg-neutral-800 group-hover:bg-brand group-hover:w-16 transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
