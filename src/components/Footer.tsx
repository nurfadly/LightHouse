import { Link } from 'react-router-dom';
import { Sparkle, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
                <Sparkle className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase font-display italic">Lighthouse</span>
            </Link>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed mb-8">
              Strategically navigating the complexities of modern marketing since 2026. We are a collective of consultants, creators, and analysts dedicated to your brand's illumination.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:border-brand hover:text-brand transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-neutral-300">Quick Links</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link to="/services" className="hover:text-brand transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-brand transition-colors">Selected Work</Link></li>
              <li><Link to="/process" className="hover:text-brand transition-colors">Process</Link></li>
              <li><Link to="/about" className="hover:text-brand transition-colors">The Agency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-neutral-300">Legal</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
            © {currentYear} Lighthouse Consulting Group. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">EST. 2026</span>
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">HQ: NYC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
