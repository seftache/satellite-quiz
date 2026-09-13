'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import QuizEngine, { QuizAnswers } from './components/QuizEngine';
import AnalysisLoader from './components/AnalysisLoader';
import ResultsTimeline from './components/ResultsTimeline';
import Footer from './components/Footer';

type AppState = 'hero' | 'quiz' | 'analyzing' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('hero');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);

  const handleStartQuiz = useCallback(() => {
    setAppState('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleQuizComplete = useCallback((answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setAppState('analyzing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnalysisComplete = useCallback(() => {
    setAppState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen text-white bg-black selection:bg-red-500 selection:text-white">
      <AnimatePresence mode="wait">
        {appState === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSection onStart={handleStartQuiz} />
          </motion.div>
        )}

        {appState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuizEngine onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {appState === 'analyzing' && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnalysisLoader onComplete={handleAnalysisComplete} />
          </motion.div>
        )}

        {appState === 'results' && quizAnswers && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResultsTimeline answers={quizAnswers} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
