'use client';

import { useEffect } from 'react';

export default function AnalysisLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500); // Fast, 1.5s loader
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center fade-in">
      <div className="w-12 h-12 border-4 border-gray-800 border-t-red-600 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-semibold text-white">Génération de votre Roadmap...</h2>
    </div>
  );
}
