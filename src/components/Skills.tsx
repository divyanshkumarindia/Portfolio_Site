import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Cloud, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: 'mobile',
    title: 'Mobile & Frontend',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-blue-400 to-cyan-400',
    skills: ['Flutter', 'React Native', 'React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    id: 'backend',
    title: 'Backend & DB',
    icon: <Server className="w-6 h-6" />,
    color: 'from-purple-400 to-pink-400',
    skills: ['Node.js', 'ExpressJS', 'Supabase', 'Firebase', 'SQL', 'BigQuery']
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-emerald-400 to-teal-400',
    skills: ['C++', 'C', 'Java', 'Python', 'Dart', 'TypeScript', 'JavaScript']
  },
  {
    id: 'tools',
    title: 'Cloud & Tools',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-400 to-red-400',
    skills: ['Google Cloud (GCP)', 'Git', 'GitHub', 'Framer', 'Canva', 'Notion']
  }
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="py-24 relative px-6 max-w-6xl mx-auto">
      {/* Arsenal Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* High-tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        {/* Deep Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      </div>

      {/* Stacked Hardware Container */}
      <div className="relative z-10 w-full p-[2px] rounded-[2.25rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <div className="w-full bg-slate-900/80 backdrop-blur-2xl border border-slate-900 rounded-3xl p-6 md:p-10 shadow-inner flex flex-col md:flex-row gap-8 min-h-[400px]">
        {/* Sidebar Navigation */}
        <div className="flex md:flex-col gap-4 overflow-x-auto pb-4 md:pb-0 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 md:pr-8">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 whitespace-nowrap md:whitespace-normal text-left ${
                activeTab === cat.id 
                  ? 'bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                  : 'hover:bg-white/5 opacity-50 hover:opacity-100 border border-transparent'
              }`}
            >
              <div className={`p-2 rounded-xl bg-gradient-to-br ${cat.color} text-slate-900`}>
                {cat.icon}
              </div>
              <span className="font-semibold text-lg tracking-wide">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Main Display Area */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex items-center justify-center p-4 bg-slate-800/50 border border-white/5 rounded-xl hover:border-white/20 hover:bg-slate-800 transition-all overflow-hidden"
                >
                  {/* Glitch hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <span className="font-medium text-slate-300 group-hover:text-white group-hover:scale-105 transition-all text-center">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
