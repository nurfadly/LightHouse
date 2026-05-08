import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-neutral-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8">
              Let's ignite your <br /><span className="italic text-brand text-6xl md:text-8xl">signal.</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-sm">
              Ready to stand out? Connect with our strategists to discuss how we can illuminate your path to market leadership.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-brand transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-neutral-950 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Mail us</p>
                  <p className="font-medium">hello@lighthouse.agency</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-brand transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-neutral-950 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Call us</p>
                  <p className="font-medium">+1 (555) 000-1234</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center group-hover:bg-brand transition-colors">
                  <MapPin className="w-5 h-5 group-hover:text-neutral-950 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Visit us</p>
                  <p className="font-medium">Madison Ave, New York</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-950 border border-neutral-800 p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:border-brand focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:border-brand focus:outline-none transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">Service Inquiry</label>
                <select className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:border-brand focus:outline-none transition-colors text-sm appearance-none">
                  <option>Brand Strategy</option>
                  <option>Performance Marketing</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-mono text-neutral-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:border-brand focus:outline-none transition-colors text-sm resize-none"
                />
              </div>

              <button className="w-full bg-brand text-neutral-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors uppercase tracking-widest text-xs">
                Submit Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
