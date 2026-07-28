import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Terminal } from 'lucide-react';

interface ExperienceItem {
  type: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  badgeColor: string;
}

const experiences: ExperienceItem[] = [
  {
    type: 'Experience',
    title: 'Google Student Ambassador',
    organization: 'Google',
    date: '2025',
    description: 'Ranked in the Top 250 in India while leading workshops on Google technologies and Gemini AI, driving tech adoption.',
    icon: <Award className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-300'
  },
  {
    type: 'Experience',
    title: 'Framer Developer',
    organization: 'Independent',
    date: 'Present',
    description: 'Delivered diverse web solutions (e-commerce, portfolios, consultation platforms) for clients, managing technical integrations.',
    icon: <Briefcase className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    badgeColor: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-300'
  },
  {
    type: 'Achievement',
    title: 'Public Speaking & Management',
    organization: 'Engineering Day & Major University Events',
    date: 'Freshman Year',
    description: 'Hosted and presented at major university events to audiences of 200+ attendees as a freshman.',
    icon: <Award className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    badgeColor: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-300'
  },
  {
    type: 'Achievement',
    title: 'Analytical Problem-Solving',
    organization: 'Independent Engineering',
    date: 'Ongoing',
    description: 'Mastered complex C++/Dart concepts, building scalable architectures for data-driven apps.',
    icon: <Award className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    badgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-300'
  },
  {
    type: 'Education',
    title: 'Bachelor of Technology in Computer Science',
    organization: 'Sushant University, Gurugram, India',
    date: '2025 - 2029',
    description: 'Pursuing B.Tech in CSE. Focusing on core computer science fundamentals and modern software engineering.',
    icon: <GraduationCap className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    badgeColor: 'bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-300'
  }
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Smooth out scroll animation with spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-12 md:py-24 relative px-6 max-w-5xl mx-auto">
      {/* Background Section Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-emerald-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-emerald-500/5 blur-[140px] rounded-full pointer-events-none z-0 transform-gpu will-change-transform" />

      {/* Section Header */}
      <div className="mb-12 md:mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>// MILESTONES & TIMELINE</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Journey & <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">Milestones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6"
        >
          A scroll-driven exploration of my technical leadership, software engineering milestones, and academic growth.
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-full mx-auto" />
      </div>

      {/* Sticky Scroll-Driven Timeline Container */}
      <div ref={containerRef} className="relative pb-12 z-10">
        {/* Center Static Grey Track */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-white/10 -translate-x-1/2 rounded-full" />

        {/* Scroll-Driven Dynamic Glowing Progress Line (Framer-style filling line) */}
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
        />

        {/* Timeline Items with Sticky Stacking Animation */}
        <div className="space-y-16 md:space-y-24">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`sticky transition-all duration-300 flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              style={{
                top: `calc(96px + ${idx * 16}px)`,
                zIndex: 20 + idx
              }}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-[39px] md:left-1/2 w-12 h-12 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 z-30 shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Glassmorphic Sticky Milestone Card */}
              <div
                className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                  idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                }`}
              >
                <div className="group rounded-3xl p-7 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-500">
                  {/* Card Top: Year & Type Badge */}
                  <div
                    className={`flex items-center gap-2 mb-3 ${
                      idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    } justify-start`}
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${item.badgeColor}`}
                    >
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.type}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-300 mb-4">
                    {item.organization}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
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
