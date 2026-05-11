import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Lighthouse didn't just give us a marketing plan; they redefined our entire market position. Their precision and strategic depth are unmatched in the industry.",
    author: "Jonathan Vance",
    role: "CEO at Nexus Tech",
  },
  {
    quote: "The strategic clarity we gained from the Lighthouse team was the tipping point for our Series B. They understand the nuance of growth better than any agency we've worked with.",
    author: "Elena Rossi",
    role: "Founder of Aether Labs",
  },
  {
    quote: "Working with them felt like adding a high-octane engine to our brand. The results weren't just measurable—they were transformative for our bottom line.",
    author: "Marcus Thorne",
    role: "Marketing Director at Horizon",
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12 p-4 rounded-full bg-brand/10 border border-brand/20">
            <Quote className="w-6 h-6 text-brand" />
          </div>

          <div className="relative min-h-[300px] md:min-h-[200px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-2xl md:text-4xl font-display font-light leading-relaxed mb-10 tracking-tight text-neutral-100 italic">
                  "{testimonials[index].quote}"
                </p>
                
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-neutral-50">{testimonials[index].author}</h4>
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  i === index ? 'w-12 bg-brand' : 'w-4 bg-neutral-800 hover:bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
