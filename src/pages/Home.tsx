import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Collaborate } from '../components/Collaborate';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20 text-center bg-neutral-900/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-8 leading-tight italic">
            "Their precision is the difference between casting a net and hitting a target."
          </h2>
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">— CEO, Solaris Fintech</p>
        </div>
      </div>
      <Services />
      <div className="pb-32 px-6 flex justify-center">
        <Link 
          to="/services" 
          className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-brand transition-colors"
        >
          Explore All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <Portfolio />
      <Collaborate />
    </>
  );
}
