import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
       <div className="px-6 py-20 border-b border-neutral-900 bg-neutral-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic mb-8"
          >
            Illuminating <br />Brands.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-light"
          >
            We are more than a marketing consultancy. We are a collective of strategists, analysts, and designers dedicated to making your brand the brightest signal in the market.
          </motion.p>
        </div>
      </div>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-neutral-800">
               <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
                alt="Our Studio"
               />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand rounded-full mix-blend-difference blur-[80px]" />
          </div>
          <div>
            <span className="text-brand text-xs font-mono uppercase tracking-[0.3em] mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
              Expertise forged through <span className="italic underline decoration-brand/30">results.</span>
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
              <p>
                Founded by a group of industry veterans who grew tired of the status quo, Lighthouse was built to be more than just a vendor. We are a strategic partner committed to your long-term illumination.
              </p>
              <p>
                Our team comes from diverse backgrounds—including tech, finance, and creative arts—giving us a multifaceted lens through which we view marketing challenges.
              </p>
              <p>
                We believe that in a saturated world, clarity is the ultimate luxury. Our mission is to strip away the noise and focus on what actually moves the needle for your business.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-12">
              <div>
                <p className="text-3xl font-display font-bold text-neutral-50 mb-1">50+</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Global Clients</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-neutral-50 mb-1">200%</p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Avg. Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-medium mb-16 text-center italic tracking-tight">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: 'Radical Clarity', d: 'We cut through the jargon to deliver actionable insights and honest advice.' },
              { t: 'Strategic Precision', d: 'Every recommendation is backed by data and aligned with your long-term goals.' },
              { t: 'Creative Integrity', d: 'We believe good design is good business. We never compromise on aesthetics or function.' }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-neutral-800 rounded-2xl hover:border-brand/30 transition-colors">
                <h3 className="text-xl font-display font-medium mb-4">{v.t}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-brand text-xs font-mono uppercase tracking-[0.3em] mb-4 block">The Brain Trust</span>
             <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Meet the <span className="italic">Strategists</span>.</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { n: 'Alex Morgan', r: 'CEO & Strategy Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
              { n: 'Sarah Chen', r: 'Design Director', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop' },
              { n: 'Marcus Thorne', r: 'Head of Growth', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop' },
              { n: 'Elena Rodriguez', r: 'Analytics Lead', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop' },
              { n: 'James Wilson', r: 'Tech Lead', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop' },
              { n: 'Sophia Kim', r: 'Brand Strategist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop' },
              { n: 'David Muller', r: 'Market Analyst', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop' },
              { n: 'Lily Watson', r: 'Client Success', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-neutral-900 border border-neutral-800">
                  <img 
                    src={member.img} 
                    alt={member.n} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-display font-medium mb-1 group-hover:text-brand transition-colors">{member.n}</h4>
                <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">{member.r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
