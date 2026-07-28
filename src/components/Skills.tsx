import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Cloud, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    id: 'mobile',
    title: 'Mobile & Frontend',
    subtitle: 'App & Web Interfaces',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-blue-400 to-cyan-400',
    glow: 'rgba(56, 189, 248, 0.5)',
    skills: [
      { name: 'Flutter', level: '96%', tech: 'Framework' },
      { name: 'CSS/HTML', level: '92%', tech: 'Styling' },
      { name: 'React.js', level: '84%', tech: 'Web' },
      { name: 'React Native', level: '82%', tech: 'Mobile' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & DB',
    subtitle: 'Server & Architecture',
    icon: <Server className="w-6 h-6" />,
    color: 'from-purple-400 to-pink-400',
    glow: 'rgba(192, 132, 252, 0.5)',
    skills: [
      { name: 'Supabase', level: '94%', tech: 'BaaS' },
      { name: 'Firebase', level: '92%', tech: 'BaaS' },
      { name: 'BigQuery', level: '44%', tech: 'Data' },
      { name: 'Node.js', level: '72%', tech: 'Runtime' }
    ]
  },
  {
    id: 'tools',
    title: 'Cloud & Tools',
    subtitle: 'DevOps & Design',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-orange-400 to-red-400',
    glow: 'rgba(251, 146, 60, 0.5)',
    skills: [
      { name: 'Framer', level: '99%', tech: 'Design' },
      { name: 'Git & GitHub', level: '94%', tech: 'VCS' },
      { name: 'Canva', level: '94%', tech: 'Design' },
      { name: 'Notion', level: '92%', tech: 'Workspace' },
      { name: 'Chrome extensions', level: '90%', tech: 'Dev' }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core Syntax',
    icon: <Terminal className="w-6 h-6" />,
    color: 'from-emerald-400 to-teal-400',
    glow: 'rgba(52, 211, 153, 0.5)',
    skills: [
      { name: 'TypeScript', level: '92%', tech: 'Web' },
      { name: 'Dart', level: '95%', tech: 'Mobile' },
      { name: 'C++', level: '82%', tech: 'Systems' },
      { name: 'C', level: '80%', tech: 'Core' }
    ]
  }
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find(c => c.id === activeTab)!;

  return (
    <section id="skills" className="py-12 md:py-24 relative px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Arsenal Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated High-tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 dark:opacity-30 animate-[pulse_4s_ease-in-out_infinite]" />
        
        {/* Dynamic Deep Glow matching active category */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[140px] rounded-full transition-colors duration-1000 ease-in-out opacity-60 dark:opacity-20"
          style={{ backgroundColor: activeCategory.glow }}
        />
      </div>

      <div className="mb-10 md:mb-16 relative z-10">
        <div className="inline-block relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-slate-900 dark:text-white">
            Technical Arsenal
          </h2>
          <div className="h-1.5 w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p className="text-slate-500 dark:text-gray-400 text-lg mb-4 font-mono">
          <span className="text-blue-500">&gt;</span> SYSTEM.MODULES.LOADED
        </p>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
          The metrics below reflect my current, authentic hands-on experience and comfort levels with each technology. While I have deep expertise in my core stack, I am highly adaptable and continuously mastering new tools as project requirements evolve.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
      </div>

      {/* Stacked Hardware Container */}
      <div className="relative z-10 w-full p-[2px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-emerald-500/30 dark:from-white/30 dark:via-white/10 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.18)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-colors duration-500">
        <div className="w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur-3xl border border-white dark:border-slate-900 rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 min-h-[450px]">
          
          {/* Sidebar Navigation */}
          <div className="grid grid-cols-2 md:flex md:flex-col gap-2.5 md:gap-3 pb-4 md:pb-0 md:w-[30%] border-b md:border-b-0 md:border-r border-slate-200/80 dark:border-white/10 md:pr-6 w-full">
            {skillCategories.map(cat => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2.5 md:gap-4 px-3 py-2.5 md:p-4 rounded-2xl transition-all duration-300 text-left group w-full overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent dark:bg-white/10 border-blue-400/60 dark:border-white/20 shadow-[0_8px_25px_rgba(59,130,246,0.12)] border scale-[1.02]' 
                      : 'hover:bg-slate-100/70 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Active Indicator Line - Smooth in-place vertical animation (no cross-screen flying/clipping) */}
                  {isActive && (
                    <motion.div 
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                    />
                  )}
                  
                  {/* Content Wrapper */}
                  <div className="relative flex items-center gap-2.5 md:gap-4 w-full z-10">
                    {/* Icon Container with rotating glow on active */}
                    <div className="relative">
                      {isActive && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-40 animate-[spin_4s_linear_infinite]" />
                      )}
                      <div className={`relative p-2 md:p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                        {cat.icon}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className={`font-bold text-sm md:text-lg tracking-wide transition-colors duration-300 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                        {cat.title}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-500 font-mono tracking-wider hidden md:block">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Display Area */}
          <div className="flex-1 relative pl-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 h-full content-start"
              >
                {activeCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="group relative bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 dark:from-slate-800/80 dark:via-slate-800/80 dark:to-slate-800/80 border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 hover:border-blue-500/50 dark:hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-[0_12px_30px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse"></span>
                          // {skill.tech}
                        </p>
                      </div>
                      <div className="relative overflow-hidden px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-slate-900 border border-blue-500/20 dark:border-white/10 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        {/* Smooth Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                        
                        <span className="relative z-10 text-xs font-bold text-blue-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300 ease-out">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-2 w-full bg-slate-200/80 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${activeCategory.color} rounded-full`}
                        initial={{ width: "0%" }}
                        animate={{ width: skill.level }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      />
                    </div>
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
