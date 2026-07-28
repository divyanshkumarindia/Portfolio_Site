import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, LayoutDashboard, Star, Globe, ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  featured?: boolean;
  url?: string;
  urlDisplay?: string;
  stack: string[];
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'University ERP System',
    category: '// FULL-STACK ENTERPRISE',
    featured: true,
    stack: ['React 19', 'TypeScript', 'Supabase', 'TanStack Query', 'PostgreSQL RLS'],
    icon: <LayoutDashboard className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    color: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    features: [
      'Architected a comprehensive full-stack University ERP web application to digitize institutional operations.',
      'Engineered a high-performance financial dashboard utilizing React and TanStack Query for instantaneous data synchronization.',
      'Implemented robust Role-Based Access Control (RBAC) with PostgreSQL Row Level Security (RLS) policies.',
      'Developed an automated fee ledger engine reducing manual accounting errors and streamlining student records.'
    ]
  },
  {
    title: 'Imperial College Hisar Portal',
    category: '// CLIENT PRODUCTION · HIGHER ED',
    url: 'https://imperialcollegehisar.com',
    urlDisplay: 'imperialcollegehisar.com',
    stack: ['Modern Web', 'SEO Optimization', 'Lead Automation', 'Responsive UI', 'Data Pipelines'],
    icon: <Globe className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
    color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    glowColor: 'rgba(6, 182, 212, 0.18)',
    features: [
      'Architected and deployed the official commercial website for Imperial College Hisar (imperialcollegehisar.com).',
      'Implemented automated data collection pipelines and lead generation workflows for admissions inquiries.',
      'Optimized page rendering speed, accessibility (a11y), and mobile responsiveness for thousands of prospective students.'
    ]
  },
  {
    title: 'Geniq Enterprise Platform',
    category: '// CLIENT PRODUCTION · CORPORATE',
    url: 'https://geniqenterprise.com',
    urlDisplay: 'geniqenterprise.com',
    stack: ['Full-Stack Web', 'Client Portal', 'Validation Protocols', 'Performance Optimization'],
    icon: <Globe className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    color: 'from-amber-500/20 via-orange-500/10 to-transparent',
    glowColor: 'rgba(245, 158, 11, 0.18)',
    features: [
      'Engineered the corporate digital presence and client portal for Geniq Enterprise (geniqenterprise.com).',
      'Enforced rigorous data validation protocols to ensure high data consistency and accurate business reporting.',
      'Delivered a sleek, high-conversion user interface with optimized SEO and fast load performance.'
    ]
  },
  {
    title: 'Kaccha Pakka Khata',
    category: '// MOBILE APPLICATION · FINTECH',
    stack: ['Flutter', 'Supabase', 'RevenueCat', 'OneSignal', 'Google Sign-In'],
    icon: <Smartphone className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    features: [
      'Developed and published a cross-platform personal finance mobile app on the Google Play Store.',
      'Engineered a real-time backend with Supabase and secure OAuth authentication via Google Sign-In.',
      'Integrated RevenueCat for subscription billing, OneSignal for push notifications, and automated PDF expense reports.'
    ]
  },
  {
    title: 'Bhrigu Nandi Astrology Portal',
    category: '// CONSULTATION PLATFORM',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'jsPDF', 'html2canvas'],
    icon: <Star className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    color: 'from-purple-500/20 via-pink-500/10 to-transparent',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    features: [
      'Built a full-stack astrological consultation platform with secure authentication and dynamic prediction workflows.',
      'Developed a client-side document generator using jsPDF and html2canvas to export custom PDF/DOCX astrological charts.',
      'Designed a highly responsive UI with interactive multi-step data entry forms for precise client onboarding.'
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background Section Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-cyan-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Section Header */}
      <div className="mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>// ARCHITECTED SYSTEMS & DEPLOYMENTS</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Engineered <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">Systems & Production Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed mb-6"
        >
          A curated portfolio of full-stack enterprise platforms, live commercial client websites, and cross-platform mobile applications engineered for reliability, speed, and scale.
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative rounded-3xl p-8 transition-all duration-500 border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Soft Ambient Hover Glow inside card */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at 50% 0%, ${project.glowColor}, transparent 70%)`
              }}
            />

            {/* Top Bar: macOS Dots & Category */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
              <div className="flex items-center gap-3">
                {/* macOS traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Live Status Pill if URL is available */}
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-500/20 transition-all group/link"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.urlDisplay}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-mono">
                  <span>Production System</span>
                </div>
              )}
            </div>

            {/* Project Header & Icon */}
            <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
                  aria-label={`Visit ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="text-xs font-mono font-medium px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features List */}
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base relative z-10">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-1 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
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
