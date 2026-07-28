import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, Terminal, Sparkles, Globe, Smartphone, Database } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'divyanshkumarindia@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-emerald-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Section Header */}
      <div className="mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>// INITIATE COLLABORATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Let&apos;s Build Something{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-6"
        >
          Whether you need an enterprise ERP architecture, a high-conversion client platform, or custom full-stack engineering — let&apos;s connect and bring your vision to life.
        </motion.p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-full mx-auto" />
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10">
        {/* Email Direct Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl p-7 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
              Direct Dispatch
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Email Address
            </h3>
            <p className="text-sm font-mono text-slate-600 dark:text-slate-300 break-all mb-6">
              {email}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-white text-sm font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md"
              aria-label="Send Email"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-3xl p-7 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
              Professional Network
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              LinkedIn
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Connect with me on LinkedIn for professional collaborations, consulting, and tech discussions.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/divyanshsinghindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative rounded-3xl p-7 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
              Open Source & Architecture
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              GitHub Profile
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Explore my open-source repositories, system architectures, and live full-stack projects.
            </p>
          </div>

          <a
            href="https://github.com/divyanshkumarindia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-700 dark:text-white text-sm font-semibold transition-all"
          >
            <span>Explore Repositories</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Human-Readable & Beautifully Designed Availability Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-3xl p-8 md:p-10 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl relative z-10 shadow-xl"
      >
        {/* Banner Title & Status */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
            </span>
            <h4 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Open for Select Projects & Consultations
            </h4>
          </div>
          <span className="text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            AVAILABLE NOW
          </span>
        </div>

        {/* 3 Crystal-Clear Human-Readable Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Apps */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Custom Websites & Web Apps
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                From high-converting Framer & Webflow sites to custom React/Next.js web applications, e-commerce stores, and interactive portals.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-300">
                Framer & Webflow
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-300">
                React & Next.js
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-300">
                Custom HTML/TS
              </span>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Mobile Apps (iOS & Android)
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Smooth, cross-platform mobile apps with native speed, offline-first architectures, and stunning modern UI for startups & enterprises.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300">
                Flutter & Dart
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300">
                iOS & Android
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300">
                Fintech & ERP Apps
              </span>
            </div>
          </div>

          {/* Cloud Databases & Enterprise Systems */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Cloud Databases & Enterprise
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Secure cloud databases, automated university ERP systems, financial ledgers, and real-time backend infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                PostgreSQL & RLS
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                Supabase & Firebase
              </span>
              <span className="inline-block text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                Custom ERP Portals
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
