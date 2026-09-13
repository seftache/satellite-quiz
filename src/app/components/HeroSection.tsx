'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  ChevronRight, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  Award,
  Lock,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  // Interactive Brilliant-style widget state
  const [sliderVal, setSliderVal] = useState(80);
  const [targetAudience, setTargetAudience] = useState<'beginner' | 'it-pro'>('beginner');

  // Payload simulator evaluation (Brilliant interactive feel)
  const isVulnerable = sliderVal >= 75;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-4 pb-16 px-4 sm:px-6 lg:px-8 cyber-grid-bg overflow-hidden">
      {/* Filmbot-style Marquee Ticker */}
      <div className="w-full max-w-7xl mx-auto mb-8 border-y border-brand-border/60 py-2.5 bg-brand-surface/40 backdrop-blur-md overflow-hidden rounded-md">
        <div className="animate-marquee flex items-center space-x-8 text-xs font-mono tracking-widest text-brand-muted">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-white font-semibold">LIVE ROADMAP ENGINE</span>
          </span>
          <span className="text-brand-subtle">//</span>
          <span>5,420+ ASPIRING HACKERS PREPARED</span>
          <span className="text-brand-subtle">//</span>
          <span className="text-brand-red-light font-medium">CEH v13 & COMPTIA SECURITY+ ALIGNED</span>
          <span className="text-brand-subtle">//</span>
          <span>100% INTERACTIVE FUNNEL</span>
          <span className="text-brand-subtle">//</span>
          <span>ZERO PREREQUISITES REQUIRED</span>
          <span className="text-brand-subtle">//</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>ETHICALHACKERPREP.COM SATELLITE</span>
          </span>
        </div>
      </div>

      {/* Main 2-Column Hero (Brilliant.org Structure + Filmbot Aesthetics) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 my-auto">
        
        {/* LEFT COLUMN: Editorial & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Filmbot Micro-Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border/80 mb-6 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="tech-superscript text-white">
              [ OFFICIAL CAREER ONBOARDING ]
            </span>
            <span className="text-brand-subtle text-xs">|</span>
            <span className="text-xs text-brand-muted font-medium">60-Second Simulator</span>
          </motion.div>

          {/* Massive Editorial Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Your personal guide for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
              ethical hacking
            </span>{' '}
            and cybersecurity.
          </motion.h1>

          {/* Subtitle with High-Trust Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8 font-normal"
          >
            A world-class interactive roadmap tailored to your experience. Built by verified CEH & OSCP certified instructors. No boring theory — only actionable, offensive security labs.
          </motion.p>

          {/* Brilliant.org Pill Selector ("I'm a beginner" / "I have IT basics") */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 p-1.5 rounded-full bg-brand-surface/90 border border-brand-border mb-8 shadow-xl"
          >
            <button
              onClick={() => setTargetAudience('beginner')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                targetAudience === 'beginner'
                  ? 'bg-brand-red text-white shadow-lg shadow-red-600/30'
                  : 'text-brand-muted hover:text-white hover:bg-brand-surface-alt'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              I&apos;m starting from zero
            </button>
            <button
              onClick={() => setTargetAudience('it-pro')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                targetAudience === 'it-pro'
                  ? 'bg-brand-red text-white shadow-lg shadow-red-600/30'
                  : 'text-brand-muted hover:text-white hover:bg-brand-surface-alt'
              }`}
            >
              <Cpu className="w-4 h-4" />
              I have IT or dev basics
            </button>
          </motion.div>

          {/* Primary CTA & Guarantee */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
          >
            <button
              onClick={onStart}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Shield className="w-5 h-5 text-white" />
              <span>Generate My Roadmap</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 rounded-full bg-red-600/20 animate-red-pulse -z-10" />
            </button>

            <a
              href="https://ethicalhackerprep.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted hover:text-white transition-colors"
            >
              <span>Explore curriculum catalog</span>
              <ArrowUpRight className="w-4 h-4 text-brand-red-light" />
            </a>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-brand-border/60 w-full max-w-lg"
          >
            <div>
              <div className="text-2xl font-bold text-white font-mono">98.4%</div>
              <div className="text-xs text-brand-muted mt-0.5">Exam pass rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">15+ Labs</div>
              <div className="text-xs text-brand-muted mt-0.5">Hands-on scenarios</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">CEH / OSCP</div>
              <div className="text-xs text-brand-muted mt-0.5">Industry standard</div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: The Brilliant.org Interactive Simulator Widget */}
        <div className="lg:col-span-5 relative w-full">
          {/* Subtle glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-orange-600/10 rounded-2xl blur-xl" />

          {/* Filmbot-style Framed Card Container */}
          <div className="relative glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl border border-brand-border/80">
            {/* Filmbot Technical Corner Brackets */}
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />

            {/* Terminal Card Header */}
            <div className="flex items-center justify-between border-b border-brand-border/80 pb-4 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="tech-superscript ml-2 text-brand-subtle">
                  LAB-SANDBOX // SEC-OPS
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-red-950/60 border border-red-800/40 text-brand-red-light">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                INTERACTIVE
              </span>
            </div>

            {/* Brilliant-style Interactive Problem / Exercise */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-brand-red-light uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Mission 01: Vulnerability Recon
                </div>
                <h2 className="text-lg font-bold text-white leading-snug">
                  Adjust payload injection to bypass the web firewall:
                </h2>
              </div>

              {/* Dynamic Visual Diagram / Target Status */}
              <div className="p-4 rounded-xl bg-black/60 border border-brand-border font-mono text-xs space-y-2">
                <div className="flex justify-between text-brand-muted">
                  <span>TARGET:</span>
                  <span className="text-white">api.bank-secure.internal</span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>VECTOR:</span>
                  <span className="text-yellow-400">SQLi Auth Bypass</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-brand-border/50">
                  <span>INJECTION CODE:</span>
                  <span className="text-brand-red-light font-bold">
                    admin&apos; OR {sliderVal > 50 ? '1=1' : '0=1'} --
                  </span>
                </div>
              </div>

              {/* Interactive Slider like Brilliant.org */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-mono text-brand-muted mb-2">
                  <span>Payload Frequency:</span>
                  <span className="text-white font-bold">{sliderVal}% Complexity</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full h-2 bg-brand-surface-alt rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-brand-subtle font-mono mt-1">
                  <span>Filter Blocked (20%)</span>
                  <span>Optimal Exploit (80%+)</span>
                </div>
              </div>

              {/* Instant Verification Feedback (The Brilliant Checkmark Effect!) */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  isVulnerable
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400'
                    : 'bg-red-950/20 border-red-500/30 text-red-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isVulnerable ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <Lock className="w-6 h-6 text-brand-red flex-shrink-0" />
                  )}
                  <div>
                    <div className="font-bold text-sm">
                      {isVulnerable ? 'ACCESS GRANTED: ROOT SHELL' : 'FIREWALL: REQUEST BLOCKED'}
                    </div>
                    <div className="text-xs opacity-80">
                      {isVulnerable
                        ? 'Token extracted: admin_session_992'
                        : 'Adjust payload intensity above 75% to succeed'}
                    </div>
                  </div>
                </div>
                {isVulnerable && (
                  <span className="px-2 py-1 bg-emerald-500/20 rounded font-mono text-xs font-bold text-emerald-300">
                    +100 XP
                  </span>
                )}
              </div>

              {/* Action trigger below widget */}
              <button
                onClick={onStart}
                className="w-full py-3.5 bg-brand-surface-alt hover:bg-brand-surface border border-brand-border hover:border-red-500/60 rounded-xl text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Ready for real challenges? Build your roadmap</span>
                <ChevronRight className="w-4 h-4 text-brand-red-light transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
