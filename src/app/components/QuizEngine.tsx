'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Bug, 
  Briefcase, 
  Brain, 
  Sprout, 
  BookOpen, 
  Monitor, 
  Zap, 
  Clock, 
  CalendarDays, 
  Flame, 
  ArrowLeft,
  Check,
  Award
} from 'lucide-react';

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
  tag: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  metric?: string;
};

type QuestionStep = {
  key: keyof QuizAnswers;
  number: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
};

const questions: QuestionStep[] = [
  {
    key: 'goal',
    number: '01',
    title: "What is your primary cybersecurity objective?",
    subtitle: "Select the milestone you want to reach first.",
    options: [
      {
        id: 'certification',
        tag: 'ACCREDITED PATH',
        icon: <Award className="w-6 h-6 text-brand-red-light" />,
        label: 'Get Certified (CEH, CompTIA, OSCP)',
        description: 'Prepare with realistic exam simulators and verified test engines.',
        metric: '98% pass rate',
      },
      {
        id: 'bugbounty',
        tag: 'OFFENSIVE SECURITY',
        icon: <Bug className="w-6 h-6 text-orange-400" />,
        label: 'Bug Bounty Hunting & Pentesting',
        description: 'Find real vulnerabilities on live targets and earn bounties.',
        metric: 'High demand',
      },
      {
        id: 'career',
        tag: 'PROFESSIONAL TRANSITION',
        icon: <Briefcase className="w-6 h-6 text-blue-400" />,
        label: 'Land a Cybersecurity Job (SOC / Pentester)',
        description: 'Build an interview-ready portfolio of realistic attack scenarios.',
        metric: 'Average $95k+',
      },
      {
        id: 'knowledge',
        tag: 'DEFENSE & KNOWLEDGE',
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        label: 'Master Hacking Fundamentals',
        description: 'Understand how systems get breached to protect your infrastructure.',
        metric: 'Foundational',
      },
    ],
  },
  {
    key: 'level',
    number: '02',
    title: 'What is your current technical background?',
    subtitle: 'We calibrate your curriculum difficulty based on this.',
    options: [
      {
        id: 'beginner',
        tag: 'ZERO PRIOR EXPERIENCE',
        icon: <Sprout className="w-6 h-6 text-emerald-400" />,
        label: 'Complete Beginner',
        description: 'I understand general computer usage but zero hacking or networking.',
      },
      {
        id: 'basic',
        tag: 'IT / NETWORKING BASICS',
        icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
        label: 'Tech Enthusiast / IT Support',
        description: 'I know IP addresses, ports, and simple Linux or Windows commands.',
      },
      {
        id: 'intermediate',
        tag: 'PRACTICAL EXPERIENCE',
        icon: <Monitor className="w-6 h-6 text-yellow-400" />,
        label: 'Intermediate Student / Developer',
        description: "I've practiced on CTFs, Kali Linux, or written simple scripts.",
      },
      {
        id: 'advanced',
        tag: 'INDUSTRY PRACTITIONER',
        icon: <Zap className="w-6 h-6 text-brand-red-light" />,
        label: 'Advanced IT or Security Pro',
        description: "I'm already in IT or SecOps looking for elite certifications.",
      },
    ],
  },
  {
    key: 'time',
    number: '03',
    title: 'How much time can you dedicate weekly?',
    subtitle: 'Consistency is the #1 factor in passing cyber certifications.',
    options: [
      {
        id: 'light',
        tag: 'CASUAL PACE',
        icon: <Clock className="w-6 h-6 text-blue-400" />,
        label: '2 to 4 hours per week',
        description: 'Steady, self-paced progression alongside full-time work or studies.',
        metric: '6 - 9 months target',
      },
      {
        id: 'moderate',
        tag: 'RECOMMENDED',
        icon: <CalendarDays className="w-6 h-6 text-emerald-400" />,
        label: '5 to 8 hours per week',
        description: 'The sweet spot for retaining offensive labs and fast certification.',
        metric: '3 - 5 months target',
      },
      {
        id: 'intensive',
        tag: 'FAST TRACK',
        icon: <Flame className="w-6 h-6 text-brand-red-light" />,
        label: '10+ hours per week',
        description: 'Intensive immersion mode to enter the industry rapidly.',
        metric: '6 - 10 weeks target',
      },
    ],
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    setSelectedId(optionId);
    const newAnswers = { ...answers, [currentQuestion.key]: optionId };
    setAnswers(newAnswers);

    setTimeout(() => {
      setSelectedId(null);
      if (step < questions.length - 1) {
        setDirection(1);
        setStep(step + 1);
      } else {
        onComplete(newAnswers as QuizAnswers);
      }
    }, 280);
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 cyber-grid-bg">
      <div className="w-full max-w-3xl mx-auto">
        
        {/* Filmbot-style Progress Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="tech-superscript text-white">
                [ ASSESSMENT STAGE {currentQuestion.number} / 03 ]
              </span>
            </div>
            {step > 0 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>PREVIOUS QUESTION</span>
              </button>
            ) : (
              <span className="text-brand-subtle">ROADMAP CALIBRATION</span>
            )}
          </div>

          {/* Precision Progress Bar */}
          <div className="h-1.5 bg-brand-surface-alt rounded-full overflow-hidden border border-brand-border/40">
            <motion.div
              className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Question Frame */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {/* Question Title & Editorial Subtitle */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                {currentQuestion.title}
              </h2>
              <p className="text-brand-muted text-base sm:text-lg">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Brilliant.org High-Tactile Choice Cards */}
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedId === option.id;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`relative w-full p-5 sm:p-6 rounded-2xl text-left transition-all duration-200 group border ${
                      isSelected
                        ? 'bg-red-950/40 border-red-500 shadow-xl shadow-red-600/20'
                        : 'glass-panel hover:bg-brand-surface-alt/80 hover:border-red-500/40'
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Filmbot Micro Frame Corners */}
                    <div className="frame-corner frame-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start gap-4">
                      {/* Icon with technical badge */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-red-500/50 group-hover:shadow-md transition-all">
                        {option.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="tech-superscript text-brand-subtle group-hover:text-brand-red-light transition-colors">
                            {option.tag}
                          </span>
                          {option.metric && (
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-mono bg-brand-surface-alt border border-brand-border text-brand-muted">
                              {option.metric}
                            </span>
                          )}
                        </div>

                        <div className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {option.label}
                        </div>

                        <div className="text-sm text-brand-muted mt-1 leading-relaxed">
                          {option.description}
                        </div>
                      </div>

                      {/* Selection Check Circle */}
                      <div className="flex-shrink-0 self-center">
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-red-600 border-red-500 text-white'
                              : 'border-brand-border group-hover:border-red-500/60'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
