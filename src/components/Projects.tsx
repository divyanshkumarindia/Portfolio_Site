import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, LayoutDashboard, Star, Globe } from 'lucide-react';

const projects = [
  {
    title: 'University ERP System',
    stack: ['React', 'TypeScript', 'Supabase', 'TanStack Query'],
    icon: <LayoutDashboard className="w-8 h-8 text-blue-400" />,
    color: 'from-blue-500/20 to-transparent',
    features: [
      'Architected a full-stack University ERP web application to digitize institutional operations.',
      'Engineered a high-performance financial dashboard utilizing React and TanStack Query.',
      'Implemented robust Role-Based Access Control (RBAC) with PostgreSQL Row Level Security (RLS).',
      'Developed an automated fee ledger engine reducing manual accounting errors.'
    ]
  },
  {
    title: 'Kaccha Pakka Khata',
    stack: ['Flutter', 'Supabase', 'RevenueCat'],
    icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
    color: 'from-emerald-500/20 to-transparent',
    features: [
      'Developed and published a cross-platform personal finance mobile app on Google Play Store.',
      'Engineered a real-time backend with Supabase and secure authentication via Google Sign-In.',
      'Integrated RevenueCat (subscriptions), OneSignal (notifications), and PDF report generation.'
    ]
  },
  {
    title: 'Bhrigu Nandi Astrology Portal',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    icon: <Star className="w-8 h-8 text-purple-400" />,
    color: 'from-purple-500/20 to-transparent',
    features: [
      'Built a full-stack consultation platform with secure authentication and daily predictions.',
      'Developed a dynamic report generator using jspdf and html2canvas for PDF/DOCX files.',
      'Designed a highly responsive UI with multi-step forms for precise data entry.'
    ]
  },
  {
    title: 'Web Systems Design',
    stack: ['Data Automation', 'Validation Protocols'],
    icon: <Globe className="w-8 h-8 text-pink-400" />,
    color: 'from-pink-500/20 to-transparent',
    features: [
      'Designed commercial websites (Geniq Enterprise, Imperial College) with automated data collection.',
      'Enforced data validation protocols to ensure high data consistency for accurate reporting.'
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Selected Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`glass-card p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.color} rounded-full blur-3xl opacity-50`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/40 dark:bg-white/5 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10">
                {project.icon}
              </div>
              <button className="text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-black/5 dark:bg-white/10 text-slate-700 dark:text-gray-300 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3 text-slate-600 dark:text-gray-400 text-sm">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
