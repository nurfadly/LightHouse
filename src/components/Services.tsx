import { motion } from 'motion/react';
import { Target, Zap, Globe, BarChart3, Search, Layers } from 'lucide-react';

const services = [
  {
    title: 'Brand Creation',
    description: 'Logo Creation, Brand Guidelines & Brand Profile',
    icon: Layers,
    number: '01'
  },
  {
    title: 'Brand Development',
    description: 'Rebranding, Creative Production, Website Development, UI/UX Design, Social Media Strategy',
    icon: Globe,
    number: '02'
  },
  {
    title: 'Campaign',
    description: 'Omni Channel Activation, Data Driven Campaign.',
    icon: Target,
    number: '03'
  },
  {
    title: 'Analysist',
    description: 'Marketing Consultan, Marketing Research',
    icon: Search,
    number: '04'
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-brand text-xs font-mono uppercase tracking-[0.3em] mb-4 block underline decoration-brand/30 underline-offset-8">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
              We specialize in navigating <span className="italic">complexity</span>.
            </h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-sm leading-relaxed mb-2">
            Providing end-to-end consulting services that bridge the gap between vision and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-950 p-12 hover:bg-neutral-900/50 transition-colors group relative h-full flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-lg border border-neutral-800 group-hover:border-brand/30 transition-colors">
                    <service.icon className="w-6 h-6 text-neutral-400 group-hover:text-brand transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-700 font-bold tracking-widest">{service.number}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-medium mb-4 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed group-hover:text-neutral-200 transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
