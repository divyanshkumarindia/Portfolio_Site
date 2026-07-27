import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark

  useEffect(() => {
    // Check initial state on mount
    const root = window.document.documentElement;
    if (!root.classList.contains('light') && !root.classList.contains('dark')) {
      root.classList.add('dark');
    }
    setIsDark(root.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 p-1 rounded-full flex items-center justify-between overflow-hidden cursor-pointer select-none transition-all duration-500 shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] border border-slate-300/80 dark:border-white/15 bg-gradient-to-b from-slate-200 to-slate-300/70 dark:from-slate-950 dark:to-slate-800"
      aria-label="Toggle Theme"
    >
      {/* Background Track Decorative Icons */}
      <div className="absolute left-2.5 flex items-center justify-center opacity-40">
        <Sun className="w-3 h-3 text-amber-500" />
      </div>
      <div className="absolute right-2.5 flex items-center justify-center opacity-40">
        <Moon className="w-3 h-3 text-indigo-300 rotate-[90deg] transform scale-x-[-1]" />
      </div>

      {/* 3D Sliding Thumb */}
      <motion.div
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.25)] ${
          isDark
            ? 'bg-gradient-to-br from-indigo-500 via-purple-600 to-slate-900'
            : 'bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500'
        }`}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] rotate-[90deg] transform scale-x-[-1]" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] animate-[spin_8s_linear_infinite]" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
