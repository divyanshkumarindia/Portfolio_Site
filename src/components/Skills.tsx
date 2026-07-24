import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Code2, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Technical Arsenal
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Programming - Large span */}
        <motion.div variants={itemVariants} className="md:col-span-2 glass-card p-8 group relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
          <Code2 className="w-10 h-10 text-blue-400 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Programming & Core</h3>
          <div className="flex flex-wrap gap-2">
            {['C++', 'Java', 'Flutter', 'Dart', 'HTML', 'CSS', 'Git', 'React.js', 'TypeScript', 'Tailwind CSS'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Data & Cloud */}
        <motion.div variants={itemVariants} className="glass-card p-8 group relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
          <Database className="w-10 h-10 text-purple-400 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Data & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            {['BigQuery', 'GCP', 'SQL', 'Supabase'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={itemVariants} className="md:col-span-2 glass-card p-8 group relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>
          <Wrench className="w-10 h-10 text-pink-400 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Creative & Dev Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['Framer', 'Notion', 'Canva', 'Firebase'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visualization */}
        <motion.div variants={itemVariants} className="glass-card p-8 group relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
          <LineChart className="w-10 h-10 text-emerald-400 mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Data Vis</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm text-slate-700 dark:text-gray-300">
              Google Sheets
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
