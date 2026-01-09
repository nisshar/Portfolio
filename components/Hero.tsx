import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Linkedin, Mail, Server, Database, Globe, Cpu, Code, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Cinematic Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      
      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>

      <div className="z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "out" }}
          className="text-left pt-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent font-mono text-xs tracking-wider uppercase">Open for Opportunities</span>
          </div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
          >
             <h2 className="text-slate-300 text-xl font-medium mb-2">Hello, I am</h2>
             <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tighter leading-none">
                NISHANT <br />
                <span className="text-gradient text-glow">SHARMA</span>
             </h1>
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl text-slate-400 font-light mb-8 mt-4">
             Architecting <span className="text-white font-semibold relative">
              Digital Scale
              <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/20 -z-10 skew-x-12"></span>
             </span>
          </h3>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg border-l-2 border-slate-700 pl-4">
            A results-driven <span className="text-white font-semibold">Backend Engineer</span> transforming complex requirements into high-performance distributed systems using Java, Spring Boot, and Cloud Technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="group relative px-8 py-4 bg-white text-primary font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
               <span className="relative z-10">Start a Project</span>
               <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple to-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a href="#experience" className="px-8 py-4 rounded-full glass-card text-white font-medium hover:bg-white/10 transition-all duration-300">
              View Work
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 text-slate-400 hover:text-white transition-colors">
               <Linkedin size={24} />
            </a>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 text-slate-400 hover:text-white transition-colors">
               <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Visuals - 3D Abstract System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Central Sphere */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-slate-800 to-black border border-slate-700 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.15)] z-20">
                <Server size={64} className="text-white icon-glow" />
                
                {/* Inner Rings */}
                <div className="absolute inset-2 rounded-full border border-slate-600/30"></div>
                <div className="absolute inset-6 rounded-full border border-slate-600/30"></div>
             </div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-slate-700/30 animate-spin-slow">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary p-3 rounded-xl border border-purple/50 shadow-[0_0_20px_rgba(139,92,246,0.3)] transform -rotate-0">
                <Database className="text-purple" size={28} />
             </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-secondary p-3 rounded-xl border border-pink/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] transform -rotate-180">
                <Cloud className="text-pink" size={28} />
             </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-slate-800 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
             <div className="absolute top-1/4 left-[10%] bg-secondary p-3 rounded-xl border border-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Code className="text-accent" size={28} />
             </div>
             <div className="absolute bottom-1/4 right-[10%] bg-secondary p-3 rounded-xl border border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <Cpu className="text-yellow-500" size={28} />
             </div>
          </div>
          
          {/* Floating Particles */}
          <motion.div 
             animate={{ y: [-10, 10, -10] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-20 right-20 w-4 h-4 rounded-full bg-accent blur-[2px]"
          ></motion.div>
          <motion.div 
             animate={{ y: [10, -10, 10] }} 
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-40 left-10 w-3 h-3 rounded-full bg-purple blur-[2px]"
          ></motion.div>

        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 cursor-pointer hover:text-accent transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;