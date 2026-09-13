'use client';

import { motion } from 'framer-motion';
import { Shield, ChevronRight, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-surface border border-brand-border text-sm text-brand-muted">
            <Users className="w-4 h-4 text-brand-red-light" />
            <span>Trusted by 5,000+ aspiring ethical hackers</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Your Free Ethical Hacking{' '}
          <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            Roadmap
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-brand-muted font-medium">
            Personalized in 60 Seconds
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-brand-muted max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No experience needed. Answer 3 quick questions and get a{' '}
          <span className="text-white font-medium">step-by-step plan</span>{' '}
          to start your cybersecurity career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Shield className="w-5 h-5" />
            Generate My Roadmap
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

            {/* Glow ring */}
            <span className="absolute inset-0 rounded-full bg-red-600/20 animate-red-pulse -z-10" />
          </button>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { icon: Zap, text: 'Takes 60 seconds' },
            { icon: Shield, text: '100% free' },
            { icon: Users, text: 'No account required' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-brand-subtle"
            >
              <item.icon className="w-4 h-4 text-brand-red-light" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
