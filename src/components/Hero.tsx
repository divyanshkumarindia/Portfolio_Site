import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-gray-300 mb-4 tracking-wide">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
                <span className="text-gradient">Divyansh Singh</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              A software engineer building scalable architectures and data-driven applications. Experienced in <span className="font-semibold text-slate-900 dark:text-white">Flutter, React,</span> and <span className="font-semibold text-slate-900 dark:text-white">Cloud Technologies</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <a href="https://linkedin.com/in/divyanshkumarindia" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-blue-600 dark:text-white shadow-lg">
                <LinkedinIcon />
              </a>
              <a href="mailto:divyanshkumarindia@gmail.com" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-red-500 dark:text-white shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-slate-900 dark:text-white shadow-lg">
                <GithubIcon />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-96 lg:w-96 lg:h-[30rem]">
              {/* Animated borders/glow */}
              <motion.div 
                animate={{ 
                  rotate: 360,
                  borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-50 blur-xl dark:opacity-30"
              />
              
              {/* Morphing Image Container */}
              <motion.div 
                animate={{
                  borderRadius: ["40% 60% 70% 30%/40% 50% 60% 50%", "60% 40% 30% 70%/60% 30% 70% 40%", "40% 60% 70% 30%/40% 50% 60% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-slate-200 dark:bg-slate-800 border-4 border-white/40 dark:border-white/20 overflow-hidden shadow-2xl z-10"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Divyansh Singh" 
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-slate-400 dark:text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
