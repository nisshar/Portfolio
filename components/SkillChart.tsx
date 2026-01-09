import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILLS_DATA, TECHNICAL_SKILLS } from '../constants';
import { motion } from 'framer-motion';

const SkillChart: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">My Arsenal</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Technical <span className="text-gradient">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiency across backend architectures, databases, and DevOps tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Radar Chart */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-[450px] w-full glass-card rounded-3xl p-6 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_DATA}>
                <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#e2e8f0', fontSize: 13, fontWeight: 600 }} 
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fill="#8b5cf6"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                    borderColor: 'rgba(255,255,255,0.1)', 
                    color: '#f8fafc',
                    borderRadius: '8px',
                    backdropFilter: 'blur(4px)'
                  }}
                  itemStyle={{ color: '#c4b5fd' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TECHNICAL_SKILLS.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 hover:border-accent/30 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-slate-900 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-purple transition-all duration-300">
                    <tech.icon className="text-accent group-hover:text-white transition-colors" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 ml-3">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-800/50 text-xs font-medium text-slate-300 rounded-md border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillChart;