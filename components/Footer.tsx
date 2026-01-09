import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-secondary to-primary pt-24 pb-12 border-t border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        <div className="inline-block p-4 rounded-full bg-slate-800/50 mb-6 border border-slate-700">
            <Code className="text-accent w-8 h-8" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-gradient">Scale?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Currently open for opportunities to build robust, scalable backend systems. Let's discuss how I can contribute to your engineering team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-accent hover:bg-slate-800 transition-all duration-300">
                <div className="p-4 rounded-full bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                </div>
                <h3 className="text-white font-bold mb-1">Email Me</h3>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{PERSONAL_INFO.email}</span>
            </a>

            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-purple hover:bg-slate-800 transition-all duration-300">
                 <div className="p-4 rounded-full bg-purple/10 text-purple mb-4 group-hover:scale-110 transition-transform">
                    <Linkedin size={28} />
                </div>
                <h3 className="text-white font-bold mb-1">LinkedIn</h3>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">Let's Connect</span>
            </a>

            <div className="group flex flex-col items-center p-8 bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-pink hover:bg-slate-800 transition-all duration-300">
                 <div className="p-4 rounded-full bg-pink/10 text-pink mb-4 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                </div>
                <h3 className="text-white font-bold mb-1">Call Me</h3>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{PERSONAL_INFO.phone}</span>
            </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Crafted with precision.</p>
            <p className="mt-2 md:mt-0 flex items-center bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                <MapPin size={12} className="mr-2 text-accent" /> {PERSONAL_INFO.location}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;