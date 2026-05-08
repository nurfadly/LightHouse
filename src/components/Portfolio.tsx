import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase italic">Selected Projects</h2>
          <div className="h-px flex-grow bg-neutral-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/work/${project.id}`} className="group cursor-pointer block">
                <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <p className="text-brand text-[10px] font-mono tracking-widest uppercase mb-1">{project.category}</p>
                        <h3 className="text-2xl font-display font-medium">{project.title}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-neutral-950">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors group"
          >
            View All Case Studies
            <span className="w-8 h-px bg-neutral-50 group-hover:bg-brand group-hover:w-12 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
};
