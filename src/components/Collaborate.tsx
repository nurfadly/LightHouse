import { motion } from 'motion/react';

export const Collaborate = () => {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop', x: '20%', y: '25%' },
    { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop', x: '10%', y: '45%' },
    { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop', x: '15%', y: '70%' },
    { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop', x: '35%', y: '80%' },
    { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop', x: '60%', y: '85%' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop', x: '82%', y: '65%' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop', x: '85%', y: '30%' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop', x: '65%', y: '15%' },
  ];

  return (
    <section className="bg-brand py-32 px-6 relative overflow-hidden min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between min-h-[600px]">
        {/* Header Title */}
        <div className="max-w-2xl mb-20 relative z-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-950 leading-[0.9] uppercase">
            WE COLLABORATE <br />
            WITH STARTUPS <br />
            AROUND THE WORLD
          </h2>
        </div>

        {/* Center Graphic - Interactive area */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Big White Circular Border */}
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-2 md:border-4 border-white/50 rounded-full relative">
            
            {/* Smiley in the center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
               <div className="w-full h-full border-[8px] md:border-[16px] border-neutral-950 rounded-full flex flex-col items-center justify-center gap-2 md:gap-5 pb-2 md:pb-6">
                  <div className="flex gap-4 md:gap-8 mt-2">
                      <div className="w-2.5 md:w-4 h-2.5 md:h-4 bg-neutral-950 rounded-full" />
                      <div className="w-2.5 md:w-4 h-2.5 md:h-4 bg-neutral-950 rounded-full" />
                  </div>
                  <div className="w-12 md:w-20 h-6 md:h-10 border-b-[8px] md:border-b-[16px] border-neutral-950 rounded-full" />
               </div>
            </div>

            {/* Avatars scattered around the circle area */}
            {avatars.map((av, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, type: 'spring', stiffness: 100 }}
                className="absolute w-12 h-12 md:w-24 md:h-24 rounded-full border-2 md:border-[6px] border-white overflow-hidden shadow-2xl pointer-events-auto cursor-pointer hover:scale-110 transition-transform duration-300"
                style={{ left: av.x, top: av.y }}
              >
                 <img src={av.src} alt="Partner" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="grid md:grid-cols-2 gap-12 mt-auto relative z-20">
          <div className="max-w-md">
            <p className="text-neutral-950 font-bold text-[10px] md:text-[11px] uppercase leading-tight tracking-[0.02em]">
               AT LIGHTHOUSE, WE BELIEVE THAT GREAT DESIGN IS BORN FROM STRONG PARTNERSHIPS. OVER THE YEARS,
            </p>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-neutral-950 font-bold text-[10px] md:text-[11px] uppercase leading-tight tracking-[0.02em]">
               WE'VE HELPED STARTUPS AND GLOBAL COMPANIES ALIKE TO CRAFT IDENTITIES, WEB EXPERIENCES, AND AI-POWERED VISUALS THAT MAKE AN IMPACT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
