'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Terminal, Lock, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <div className="relative w-full min-h-screen cinema-glow flex flex-col justify-between overflow-hidden">
      
      {/* Filmbot Top Ticker Marquee */}
      <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md py-2.5 z-20">
        <div className="ticker-track flex items-center space-x-12 text-xs text-gray-400 font-mono tracking-widest uppercase">
          <div className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="u-font-superscript font-bold">ETHICAL HACKER PREP</span>
          </div>
          <span className="text-white/20">•</span>
          <span>CURRICULUM ENGINE V3.0</span>
          <span className="text-white/20">•</span>
          <span className="text-red-400">100% HANDS-ON PENETRATION TESTING LABS</span>
          <span className="text-white/20">•</span>
          <span>COMPTIA SECURITY+ & CEH ALIGNED</span>
          <span className="text-white/20">•</span>
          <span>5,400+ ACTIVE DEFENDERS & PENTESTERS</span>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="u-font-superscript font-bold">ETHICAL HACKER PREP</span>
          </div>
          <span className="text-white/20">•</span>
          <span>CURRICULUM ENGINE V3.0</span>
          <span className="text-white/20">•</span>
          <span className="text-red-400">100% HANDS-ON PENETRATION TESTING LABS</span>
        </div>
      </div>

      {/* Filmbot-style Header Nav */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-white text-base">Ethical Hacker Prep</span>
            <span className="block text-[10px] font-mono text-gray-400 tracking-wider">ROADMAP SATELLITE</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://ethicalhackerprep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
          >
            <span>MAIN PLATFORM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
          </a>

          <button
            onClick={onStart}
            className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-red-600/20"
          >
            Get Roadmap
          </button>
        </div>
      </header>

      {/* Hero Content with Filmbot's Signature Curved Architectural Lines in Background */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-16 my-auto z-10">
        
        {/* Background SVG Lines (Directly from Filmbot's source code architecture) */}
        <div className="absolute inset-0 pointer-events-none opacity-25 -z-10">
          <svg viewBox="0 0 1440 700" fill="none" className="w-full h-full text-red-600/40">
            <path
              d="M100 0 V300 C100 350 150 400 200 400 H800 C850 400 900 450 900 500 V700"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            <path
              d="M400 0 V200 C400 250 450 300 500 300 H1100 C1150 300 1200 350 1200 400 V700"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* Hero Editorial Headlines */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="u-font-superscript text-gray-300">
              [ 2026 OFFICIAL CYBERSECURITY CURRICULUM ]
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6"
          >
            The modern way to master{' '}
            <span className="italic font-serif font-normal text-red-500">
              ethical hacking.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-xl font-light leading-relaxed mb-8"
          >
            A tailored, step-by-step roadmap built from real offensive labs. Tell us your goals, and get your exact certification & training blueprint in 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-base rounded-full shadow-2xl shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Build My Personalized Roadmap</span>
              <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ChevronRight className="w-4 h-4" />
              </div>
            </button>

            <span className="text-xs font-mono text-gray-400 sm:ml-2">
              60 SECONDS // NO REGISTRATION REQUIRED
            </span>
          </motion.div>
        </div>

        {/* Filmbot Asymmetrical Parallax Visual Gallery (Real Photography & High-End Labs) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-8">
          
          {/* Main Large Visual (Hacker Workstation & Red Ambient Lighting) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-6 cinema-card group"
          >
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />

            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                alt="Offensive Cybersecurity Lab"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold tracking-wider">
                  [ 01 // LIVE PENETRATION TESTING ENVIRONMENT ]
                </span>
                <span className="text-red-400">ISOLATED VMS</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Visual (Terminal Code / Reverse Engineering) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 cinema-card group"
          >
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                alt="Cyber Defense Operations"
                className="w-full h-full object-cover contrast-125 brightness-75 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono">
                <span className="text-red-400 block text-[10px] u-font-superscript mb-0.5">EXAM DRILL</span>
                <span className="text-white font-bold">CEH v13 Question Simulator</span>
              </div>
            </div>
          </motion.div>

          {/* Third Metric Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-3 cinema-card p-6 flex flex-col justify-between aspect-[4/5] bg-gradient-to-b from-[#11141a] to-black"
          >
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />

            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Terminal className="w-5 h-5 text-red-500" />
              </div>
              <span className="u-font-superscript text-red-400 block mb-2">[ REAL OUTCOMES ]</span>
              <div className="text-4xl font-extrabold text-white tracking-tight font-mono mb-1">
                98.4%
              </div>
              <p className="text-xs text-gray-400 font-mono leading-relaxed">
                First-attempt pass rate on industry certifications for students following their custom roadmap.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>UPDATED WEEKLY</span>
              <span className="text-white">VERIFIED DATA</span>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Filmbot Bottom Micro-line */}
      <div className="w-full border-t border-white/10 py-4 px-6 text-center text-xs font-mono text-gray-400">
        POWERED BY ETHICAL HACKER PREP • HIGH-IMPACT CYBERSECURITY TRAINING
      </div>

    </div>
  );
}
