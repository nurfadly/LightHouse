import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Collaborate } from '../components/Collaborate';
import { Testimonials } from '../components/Testimonials';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
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
