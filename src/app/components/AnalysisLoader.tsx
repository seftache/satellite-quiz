'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface AnalysisLoaderProps {
  onComplete: () => void;
}

const phases = [
  { label: 'Analyzing your profile...', target: 40 },
  { label: 'Building your personalized roadmap...', target: 80 },
  { label: 'Finalizing recommendations...', target: 100 },
];

export default function AnalysisLoader({ onComplete }: AnalysisLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds
    const phaseLength = totalDuration / phases.length;
    const interval = 30; // update every 30ms for smooth animation

    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;

      // Calculate which phase we're in
      const currentPhaseIdx = Math.min(
        Math.floor(elapsed / phaseLength),
        phases.length - 1
      );
      setPhaseIndex(currentPhaseIdx);

      // Calculate progress within current phase
      const phaseStart = currentPhaseIdx > 0 ? phases[currentPhaseIdx - 1].target : 0;
      const phaseEnd = phases[currentPhaseIdx].target;
      const phaseElapsed = elapsed - currentPhaseIdx * phaseLength;
      const phaseProgress = Math.min(phaseElapsed / phaseLength, 1);
      const currentProgress = phaseStart + (phaseEnd - phaseStart) * phaseProgress;

      setProgress(Math.min(currentProgress, 100));

      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(onComplete, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Spinning shield icon */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <motion.div
            className="w-20 h-20 flex items-center justify-center rounded-full bg-brand-surface border border-brand-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Shield className="w-10 h-10 text-brand-red drop-shadow-red-glow" />
          </motion.div>

          {/* Scan line overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-scan-line" />
          </div>
        </div>

        {/* Phase label */}
        <motion.p
          key={phaseIndex}
          className="text-lg font-medium text-white mb-6 animate-glitch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ animationDuration: '0.3s', animationIterationCount: '3' }}
        >
          {phases[phaseIndex].label}
        </motion.p>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-brand-surface-alt rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full animate-progress-shimmer"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Percentage */}
        <p className="text-sm text-brand-subtle font-mono">
          {Math.round(progress)}%
        </p>
      </motion.div>
    </section>
  );
}
