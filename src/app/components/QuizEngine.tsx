'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Bug, Briefcase, Brain, Sprout, BookOpen, Monitor, Zap, Clock, CalendarDays, Flame, ArrowLeft } from 'lucide-react';

export type QuizAnswers = {
  goal: string;
  level: string;
  time: string;
};

interface QuizEngineProps {
  onComplete: (answers: QuizAnswers) => void;
}

type QuestionOption = {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
};

type QuestionStep = {
  key: keyof QuizAnswers;
  title: string;
  subtitle: string;
  options: QuestionOption[];
};

const questions: QuestionStep[] = [
  {
    key: 'goal',
    title: "What's your main goal?",
    subtitle: 'Pick the path that excites you the most',
    options: [
      {
        id: 'certification',
        icon: <Shield className="w-7 h-7" />,
        label: 'Get Certified',
        description: 'CEH, OSCP, Security+, CISSP',
      },
      {
        id: 'bugbounty',
        icon: <Bug className="w-7 h-7" />,
        label: 'Start Bug Bounty Hunting',
        description: 'Find vulnerabilities, earn rewards',
      },
      {
        id: 'career',
        icon: <Briefcase className="w-7 h-7" />,
        label: 'Land a Cybersecurity Job',
        description: 'Analyst, Pentester, SOC Engineer',
      },
      {
        id: 'knowledge',
        icon: <Brain className="w-7 h-7" />,
        label: 'Learn for Personal Knowledge',
        description: 'Understand hacking & stay safe',
      },
    ],
  },
  {
    key: 'level',
    title: 'Your current technical level?',
    subtitle: 'Be honest — we\'ll tailor everything to you',
    options: [
      {
        id: 'beginner',
        icon: <Sprout className="w-7 h-7" />,
        label: 'Complete Beginner',
        description: 'I barely know what hacking is',
      },
      {
        id: 'basic',
        icon: <BookOpen className="w-7 h-7" />,
        label: 'Some IT Knowledge',
        description: 'I understand networking basics',
      },
      {
        id: 'intermediate',
        icon: <Monitor className="w-7 h-7" />,
        label: 'Intermediate',
        description: "I've used Kali Linux or done CTFs",
      },
      {
        id: 'advanced',
        icon: <Zap className="w-7 h-7" />,
        label: 'Advanced',
        description: "I'm already working in IT security",
      },
    ],
  },
  {
    key: 'time',
    title: 'Weekly time commitment?',
    subtitle: 'How much time can you dedicate each week?',
    options: [
      {
        id: 'light',
        icon: <Clock className="w-7 h-7" />,
        label: '2–3 hours/week',
        description: 'Learning at my own pace',
      },
      {
        id: 'moderate',
        icon: <CalendarDays className="w-7 h-7" />,
        label: '5–8 hours/week',
        description: 'Serious but balanced',
      },
      {
        id: 'intensive',
        icon: <Flame className="w-7 h-7" />,
        label: '10+ hours/week',
        description: 'Full commitment mode',
      },
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [currentQuestion.key]: optionId };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      onComplete(newAnswers as QuizAnswers);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-brand-muted">
              Step {step + 1} of {questions.length}
            </span>
            {step > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-sm text-brand-subtle hover:text-brand-red-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
          <div className="h-1.5 bg-brand-surface-alt rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {currentQuestion.title}
              </h2>
              <p className="text-brand-muted">{currentQuestion.subtitle}</p>
            </div>

            {/* Option cards */}
            <div className="grid gap-3 sm:gap-4">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 bg-brand-surface border border-brand-border rounded-brand-lg text-left hover:border-red-500/50 hover:bg-brand-surface-alt transition-all duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-surface-alt border border-brand-border rounded-brand flex items-center justify-center text-brand-red-light group-hover:bg-red-600/10 group-hover:border-red-500/30 transition-colors">
                    {option.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {option.label}
                    </div>
                    <div className="text-sm text-brand-muted mt-0.5">
                      {option.description}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-brand-subtle group-hover:text-brand-red-light transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
