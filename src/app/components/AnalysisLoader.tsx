'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, Cpu } from 'lucide-react';

interface AnalysisLoaderProps {
  onComplete: () => void;
}

const phases = [
  { label: 'CALIBRATING CURRICULUM PREREQUISITES...', target: 35, detail: 'Validating Linux & networking baseline...' },
  { label: 'SYNTHESIZING LAB SIMULATIONS & EXAM DOMAINS...', target: 75, detail: 'Cross-referencing CEH v13 & CompTIA Security+...' },
  { label: 'FINALIZING PERSONALIZED OFFENSIVE ROADMAP...', target: 100, detail: 'Connecting tailored modules on ethicalhackerprep.com...' },
];

export default function AnalysisLoader({ onComplete }: AnalysisLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 2000;
    const phaseLength = totalDuration / phases.length;
    const interval = 25;

    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;

      const currentPhaseIdx = Math.min(
        Math.floor(elapsed / phaseLength),
        phases.length - 1
      );
      setPhaseIndex(currentPhaseIdx);

      const phaseStart = currentPhaseIdx > 0 ? phases[currentPhaseIdx - 1].target : 0;
      const phaseEnd = phases[currentPhaseIdx].target;
      const phaseElapsed = elapsed - currentPhaseIdx * phaseLength;
      const phaseProgress = Math.min(phaseElapsed / phaseLength, 1);
      const currentProgress = phaseStart + (phaseEnd - phaseStart) * phaseProgress;

      setProgress(Math.min(currentProgress, 100));

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(onComplete, 220);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 cyber-grid-bg">
      <motion.div
        className="relative w-full max-w-lg mx-auto glass-panel p-8 sm:p-10 rounded-2xl shadow-2xl border border-brand-border"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Filmbot Frame Corners */}
        <div className="frame-corner frame-corner-tl" />
        <div className="frame-corner frame-corner-tr" />
        <div className="frame-corner frame-corner-bl" />
        <div className="frame-corner frame-corner-br" />

        {/* Radar / Core Animation */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-red-600/10 animate-ping" />
          <div className="relative w-24 h-24 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center shadow-xl">
            <Cpu className="w-10 h-10 text-brand-red animate-pulse" />
          </div>
          {/* Subtle rotating radar line */}
          <div className="absolute inset-0 rounded-full border border-red-500/20 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-t from-red-500 to-transparent origin-bottom animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Phase Header */}
        <div className="text-center mb-6">
          <span className="tech-superscript text-brand-red-light inline-block mb-2">
            [ ENGINE SYNTHESIS IN PROGRESS ]
          </span>
          <h2 className="text-lg font-mono font-bold text-white tracking-wide">
            {phases[phaseIndex].label}
          </h2>
          <p className="text-xs font-mono text-brand-muted mt-1">
            {phases[phaseIndex].detail}
          </p>
        </div>

        {/* High-End Progress Bar */}
        <div className="w-full h-2.5 bg-brand-surface-alt rounded-full overflow-hidden border border-brand-border/60 mb-4">
          <motion.div
            className="h-full rounded-full animate-progress-shimmer"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Hex and percentage metrics */}
        <div className="flex justify-between items-center text-xs font-mono text-brand-subtle">
          <span>MEM: 0x8FA4 // READY</span>
          <span className="text-white font-bold">{Math.round(progress)}%</span>
        </div>
      </motion.div>
    </section>
  );
}
