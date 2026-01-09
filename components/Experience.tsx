import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-secondary relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <span className="text-pink font-mono text-sm tracking-widest uppercase">Career Trajectory</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Professional <span className="text-gradient">Experience</span></h2>
        </motion.div>

        <div className="relative space-y-12">
            {/* Continuous Gradient Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple to-pink hidden md:block"></div>
          
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center md:items-stretch`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-slate-800 shadow-[0_0_15px_rgba(255,255,255,0.1)] z-20 flex items-center justify-center hidden md:flex">
                 <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-accent animate-pulse' : 'bg-slate-500'}`}></div>
              </div>

              {/* Date Column (Desktop) */}
              <div className="hidden md:flex flex-1 flex-col justify-center items-center opacity-70">
                 {/* Empty on one side to balance layout */}
              </div>

              {/* Card Content */}
              <div className="flex-1 w-full pl-12 md:pl-0">
                <div className={`glass-card p-8 rounded-2xl relative border-t-4 ${index % 2 === 0 ? 'border-t-accent' : 'border-t-purple'} hover:bg-slate-800/50 transition-all duration-300 group`}>
                  
                  {/* Mobile Timeline Node */}
                  <div className="absolute -left-[42px] top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-accent z-20 md:hidden"></div>
                  <div className="absolute -left-[31px] top-10 bottom-0 w-0.5 bg-slate-800 md:hidden"></div>

                  <div className="flex flex-col sm:flex-row justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{job.role}</h3>
                      <div className="flex items-center text-slate-300 mt-2 font-medium">
                        <Briefcase size={16} className="mr-2 text-accent" />
                        {job.company}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                       <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300 mb-2">
                          <Calendar size={12} className="mr-2" />
                          {job.period}
                       </div>
                       <div className="flex items-center justify-end text-slate-500 text-sm">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                       </div>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {job.highlights.map((point, i) => (
                      <li key={i} className="flex items-start text-slate-300 leading-relaxed">
                        <ArrowRight size={16} className="mr-3 mt-1 text-slate-500 shrink-0 group-hover:text-accent transition-colors" />
                        <span>
                          {point.split(/(\d+%)/).map((part, j) => 
                            part.match(/\d+%/) ? <span key={j} className="text-white font-bold border-b border-accent/50">{part}</span> : part
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;