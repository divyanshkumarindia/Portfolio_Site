import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'Experience',
      title: 'Google Student Ambassador',
      organization: 'Google',
      date: '2025',
      description: 'Ranked in the Top 250 in India while leading workshops on Google technologies and Gemini AI, driving tech adoption.',
      icon: <Award className="w-6 h-6 text-blue-400" />
    },
    {
      type: 'Experience',
      title: 'Framer Developer',
      organization: 'Independent',
      date: 'Present',
      description: 'Delivered diverse web solutions (e-commerce, portfolios, consultation platforms) for clients, managing technical integrations.',
      icon: <Briefcase className="w-6 h-6 text-purple-400" />
    },
    {
      type: 'Achievement',
      title: 'Public Speaking & Management',
      organization: 'Engineering Day & Major University Events',
      date: 'Freshman Year',
      description: 'Hosted and presented at major university events to audiences of 200+ attendees as a freshman.',
      icon: <Award className="w-6 h-6 text-yellow-400" />
    },
    {
      type: 'Achievement',
      title: 'Analytical Problem-Solving',
      organization: 'Independent Engineering',
      date: 'Ongoing',
      description: 'Mastered complex C++/Dart concepts, building scalable architectures for data-driven apps.',
      icon: <Award className="w-6 h-6 text-emerald-400" />
    },
    {
      type: 'Education',
      title: 'Bachelor of Technology in Computer Science',
      organization: 'Sushant University, Gurugram, India',
      date: '2025 - 2029',
      description: 'Pursuing B.Tech in CSE. Focusing on core computer science fundamentals and modern software engineering.',
      icon: <GraduationCap className="w-6 h-6 text-pink-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Journey & Milestones
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[39px] md:left-1/2 w-12 h-12 bg-white dark:bg-black border-4 border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {item.icon}
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
              }`}>
                <div className="glass-card p-6 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
                  <span className="text-sm font-semibold text-blue-500 dark:text-blue-400 mb-2 block tracking-wider uppercase">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <h4 className="text-md text-slate-600 dark:text-gray-400 mb-4">{item.organization}</h4>
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
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
