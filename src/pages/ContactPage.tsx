import { Contact } from '../components/Contact';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
       <div className="px-6 py-20 border-b border-neutral-900 bg-neutral-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase italic mb-8"
          >
            Start the <br />Ignition.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl font-light"
          >
            Ready to elevate your brand? Fill out the form below or reach out via our contact channels. Let's discuss how we can illuminate your path to success.
          </motion.p>
        </div>
      </div>
      <Contact />
      
      <section className="py-32 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
             <h2 className="text-3xl font-display font-medium mb-8 italic">Frequently Asked Questions</h2>
             <div className="space-y-8">
                {[
                  { q: 'How long does a strategy engagement take?', a: 'Typically 4-6 weeks for discovery and initial roadmap development.' },
                  { q: 'Do you work with international clients?', a: 'Yes, we have a global delivery system and worked with brands across 4 continents.' },
                  { q: 'What industries do you specialize in?', a: 'Fintech, SaaS, Healthcare, and Luxury Retail are our primary focus areas.' }
                ].map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-neutral-200 mb-2">{faq.q}</h4>
                    <p className="text-neutral-500 text-sm">{faq.a}</p>
                  </div>
                ))}
             </div>
          </div>
          <div className="bg-brand/5 p-12 rounded-3xl border border-brand/10">
            <h3 className="text-2xl font-display font-medium mb-6">Our HQ</h3>
            <div className="aspect-video w-full rounded-2xl bg-neutral-900 mb-8 border border-neutral-800 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-50"
                alt="Office"
               />
            </div>
            <p className="text-neutral-300 font-light">
              Madison Avenue, 10th Floor <br />
              New York, NY 10010 <br />
              United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
