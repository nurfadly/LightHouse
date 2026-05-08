import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Calendar, User, CheckCircle2 } from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 text-center px-6">
        <h1 className="text-4xl font-display mb-8 italic">Project not found.</h1>
        <Link to="/work" className="text-brand hover:underline font-mono text-sm uppercase tracking-widest">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen pb-32">
      {/* Hero Header */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-brand font-mono text-xs uppercase tracking-widest block mb-4"
              >
                {project.category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic"
              >
                {project.title}
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-end"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-neutral-950 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Visit Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-video w-full rounded-3xl overflow-hidden border border-neutral-800"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8 border-b border-neutral-900 pb-4">The Challenge</h2>
            <p className="text-2xl text-neutral-200 font-light leading-relaxed mb-12 italic">
              "{project.description}"
            </p>
            <div className="space-y-6 text-neutral-400 leading-relaxed font-light text-lg">
              {project.fullDescription.split('. ').map((para, i) => (
                <p key={i}>{para}.</p>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-neutral-900/30 rounded-3xl border border-neutral-800">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">Metadata</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <User className="w-4 h-4 text-brand" />
                  <div>
                    <p className="text-[10px] uppercase text-neutral-600 font-mono">Client</p>
                    <p className="text-sm font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-4 h-4 text-brand" />
                  <div>
                    <p className="text-[10px] uppercase text-neutral-600 font-mono">Year</p>
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8">Services Rendered</h3>
              <ul className="space-y-4">
                {project.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 bg-neutral-900/10 py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-medium mb-20 italic">Visual Record</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {project.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={i % 3 === 0 ? "md:col-span-2 aspect-[21/9] rounded-3xl overflow-hidden" : "aspect-square rounded-3xl overflow-hidden"}
              >
                <img 
                  src={img} 
                  alt={`${project.title} process ${i}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Projects */}
      <section className="px-6 py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-display font-medium">Continue Exploring</h2>
            <Link to="/work" className="text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((p) => (
              <Link to={`/work/${p.id}`} key={p.id} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4">
                   <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand mb-1">{p.category}</p>
                <h4 className="text-xl font-display italic">{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
