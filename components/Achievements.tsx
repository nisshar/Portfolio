import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Achievements Card */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="p-2 bg-yellow-500/10 rounded-lg mr-3">
                    <Trophy className="text-yellow-500" size={24} /> 
                </span>
                Recognition
             </h3>
             <div className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-yellow-600/50 via-slate-700 to-slate-800">
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8 h-full relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 text-yellow-500/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Award size={180} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="text-yellow-400" size={20} />
                            <span className="text-yellow-400 font-mono text-sm tracking-wider">TOP PERFORMANCE</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 leading-snug">{ACHIEVEMENTS[0].title}</h4>
                        <div className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-lg font-bold text-lg mb-6 border border-yellow-500/20">
                            {ACHIEVEMENTS[0].rank}
                        </div>
                        <p className="text-slate-400 leading-relaxed border-l-2 border-yellow-500/20 pl-4">
                            {ACHIEVEMENTS[0].description}
                        </p>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="p-2 bg-accent/10 rounded-lg mr-3">
                    <GraduationCap className="text-accent" size={24} />
                </span>
                Education
             </h3>
             <div className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-accent/50 via-slate-700 to-slate-800">
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8 h-full relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 text-accent/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <GraduationCap size={180} />
                    </div>

                    <div className="relative z-10 flex flex-col h-full justify-center">
                        <h4 className="text-2xl font-bold text-white mb-2">Bachelor of Technology</h4>
                        <p className="text-xl text-accent font-medium mb-6">Computer Science & Engineering</p>
                        
                        <div className="space-y-2 text-slate-400">
                            <p className="font-semibold text-white">ABES Institute of Technology</p>
                            <div className="flex items-center text-sm font-mono">
                                <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                                2017 - 2021
                            </div>
                            <div className="flex items-center text-sm font-mono">
                                <span className="w-2 h-2 rounded-full bg-slate-600 mr-2"></span>
                                Ghaziabad, India
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;