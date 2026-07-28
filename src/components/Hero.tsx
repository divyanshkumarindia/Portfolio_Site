import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Code, Cloud, Cpu } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-20">
      <AnimatedBackground />

      <div className="z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left mt-2 md:mt-0 mb-4 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg md:text-2xl font-medium text-slate-600 dark:text-gray-300 mb-3 md:mb-4 tracking-wide">
                Hello, I&apos;m
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tighter">
                <span className="text-gradient">Divyansh Singh</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl lg:text-2xl text-slate-700 dark:text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0"
            >
              A software engineer building scalable full-stack architectures and data-driven applications. Experienced in <span className="font-semibold text-slate-900 dark:text-white">Flutter, React,</span> and building <span className="font-semibold text-slate-900 dark:text-white">End-to-End Solutions</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex items-center justify-center md:justify-start gap-5 md:gap-6"
            >
              <a href="https://www.linkedin.com/in/divyanshsinghindia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-blue-600 dark:text-white shadow-lg">
                <LinkedinIcon />
              </a>
              <a href="mailto:divyanshkumarindia@gmail.com" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-red-500 dark:text-white shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/divyanshkumarindia" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-slate-900 dark:text-white shadow-lg">
                <GithubIcon />
              </a>
            </motion.div>
          </div>


          {/* Central Photo & Floating Elements */}
          <div className="flex-1 flex flex-col items-center justify-center md:justify-end relative -mt-4 md:-mt-10 w-full">
            <div className="relative w-[17.5rem] h-[17.5rem] sm:w-72 sm:h-72 md:w-80 md:h-[24rem] lg:w-[26rem] lg:h-[32rem]">
              
              {/* Background Animation - Expands from behind to desired size */}
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none"
              >
                {/* Outer Orbiting Ring 1 */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border border-dashed border-blue-500/30 dark:border-blue-400/20"
                />

                {/* Outer Orbiting Ring 2 (Counter-rotating) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] rounded-[3rem] border border-purple-500/20 dark:border-purple-400/10 scale-110"
                />

                {/* Floating Glowing Orbs Behind */}
                <motion.div 
                  animate={{ 
                    x: [0, 20, -20, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.2, 0.9, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                />
                <motion.div 
                  animate={{ 
                    x: [0, -30, 20, 0],
                    y: [0, 20, -20, 0],
                    scale: [1, 0.9, 1.2, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen"
                />
              </motion.div>

              {/* Central Floating Image Container - Advanced cinematic fade-in (no pop-up) */}
              <motion.div 
                initial={{ opacity: 0, filter: "blur(14px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 z-10"
              >
                {/* Glowing border wrapper */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500 p-[3px] shadow-[0_0_40px_rgba(59,130,246,0.3)] dark:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                  <div className="w-full h-full rounded-[2.35rem] overflow-hidden bg-slate-900 relative">
                    {/* Inner highlight ring */}
                    <div className="absolute inset-0 border border-white/20 rounded-[2.35rem] z-20 pointer-events-none"></div>
                    <img 
                      src="/profile.jpg" 
                      alt="Divyansh Singh" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out z-10 relative"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating 3D Elements Front - Small icon badges pop up around the outer border */}
              <motion.div
                initial={{ scale: 0, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 15, delay: 0.9 }}
                className="absolute -right-4 md:-right-12 -top-3 md:top-10 z-30 scale-75 md:scale-100"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 md:p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl"
                >
                  <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 15, delay: 1.1 }}
                className="absolute -left-4 md:-left-10 -bottom-3 md:bottom-20 z-30 scale-75 md:scale-100"
              >
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 md:p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl"
                >
                  <Cloud className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 15, delay: 1.3 }}
                className="absolute -left-3 md:left-10 -top-4 md:-top-8 z-30 scale-75 md:scale-100"
              >
                <motion.div
                  animate={{ y: [-3, 3, -3], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="p-2.5 md:p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-xl border border-white/40 shadow-xl"
                >
                  <Cpu className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                </motion.div>
              </motion.div>

              {/* Orbiting particles (Back & Front simulated by scale/opacity) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-60px] z-20 pointer-events-none"
              >
                <motion.div 
                  animate={{ scale: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"
                />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-80px] z-0 pointer-events-none"
              >
                <motion.div 
                  animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 right-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(192,132,252,0.8)]"
                />
              </motion.div>
            </div>

            {/* Mobile-Only Social Buttons UNDER the image with slight increased gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex md:hidden items-center justify-center gap-6 mt-8 mb-4 w-full z-20"
            >
              <a href="https://www.linkedin.com/in/divyanshsinghindia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-blue-600 dark:text-white shadow-lg">
                <LinkedinIcon />
              </a>
              <a href="mailto:divyanshkumarindia@gmail.com" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-red-500 dark:text-white shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/divyanshkumarindia" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-full backdrop-blur-md transition-all hover:scale-110 text-slate-700 hover:text-slate-900 dark:text-white shadow-lg">
                <GithubIcon />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-slate-400 dark:text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
