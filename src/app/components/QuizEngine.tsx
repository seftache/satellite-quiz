'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Bug, 
  Briefcase, 
  ShieldCheck, 
  ArrowLeft, 
  Check, 
  Clock, 
  Sparkles, 
  Layers, 
  Flame 
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
  detail: string;
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
    title: 'What is your primary destination?',
    subtitle: 'Every path has distinct lab requirements and exam blueprints.',
    options: [
      {
        id: 'certification',
        tag: 'CREDENTIAL',
        icon: <Award className="w-6 h-6 text-red-500" />,
        label: 'Industry Certification (CEH, Security+, OSCP)',
        detail: 'Pass your exams on the first attempt with realistic simulations.',
      },
      {
        id: 'bugbounty',
        tag: 'OFFENSIVE',
        icon: <Bug className="w-6 h-6 text-red-500" />,
        label: 'Bug Bounty Hunting & Penetration Testing',
        detail: 'Discover real vulnerabilities in live web apps and networks.',
      },
      {
        id: 'career',
        tag: 'CAREER',
        icon: <Briefcase className="w-6 h-6 text-red-500" />,
        label: 'Career Transition into Cybersecurity (SOC / Pentester)',
        detail: 'Build an interview-ready portfolio with documented proof of work.',
      },
      {
        id: 'knowledge',
        tag: 'MASTERY',
        icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
        label: 'Comprehensive Hacker Mindset & Defense',
        detail: 'Understand modern attack vectors to protect your own systems.',
      },
    ],
  },
  {
    key: 'level',
    number: '02',
    title: 'Where are you starting from today?',
    subtitle: 'We calibrate the prerequisite modules so you never waste time.',
    options: [
      {
        id: 'beginner',
        tag: 'GROUND ZERO',
        icon: <Sparkles className="w-6 h-6 text-red-500" />,
        label: 'Absolute Beginner',
        detail: 'No IT or hacking background. Ready to learn from scratch.',
      },
      {
        id: 'basic',
        tag: 'IT FOUNDATIONS',
        icon: <Layers className="w-6 h-6 text-red-500" />,
        label: 'IT Support / Developer / Student',
        detail: 'Comfortable with basic networking, OS commands, and troubleshooting.',
      },
      {
        id: 'intermediate',
        tag: 'HANDS-ON',
        icon: <Flame className="w-6 h-6 text-red-500" />,
        label: 'Practicing Enthusiast',
        detail: 'Already tested Kali Linux, CTF challenges, or basic scripting.',
      },
      {
        id: 'advanced',
        tag: 'PROFESSIONAL',
        icon: <Award className="w-6 h-6 text-red-500" />,
        label: 'Active IT or Sysadmin Pro',
        detail: 'Seeking advanced credentials and offensive red-teaming skills.',
      },
    ],
  },
  {
    key: 'time',
    number: '03',
    title: 'How much time can you commit each week?',
    subtitle: 'Consistency directly predicts your certification success rate.',
    options: [
      {
        id: 'light',
        tag: 'SELF-PACED',
        icon: <Clock className="w-6 h-6 text-red-500" />,
        label: '2 to 4 hours per week',
        detail: 'Relaxed schedule alongside a demanding job or studies.',
      },
      {
        id: 'moderate',
        tag: 'OPTIMAL PACE',
        icon: <Clock className="w-6 h-6 text-red-500" />,
        label: '5 to 8 hours per week',
        detail: 'The benchmark pace for rapid retention and certification readiness.',
      },
      {
        id: 'intensive',
        tag: 'FAST TRACK',
        icon: <Flame className="w-6 h-6 text-red-500" />,
        label: '10+ hours per week',
        detail: 'Full immersion mode to get certified or job-ready as fast as possible.',
      },
    ],
  },
];

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentQ = questions[step];

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const updated = { ...answers, [currentQ.key]: id };
    setAnswers(updated);

    setTimeout(() => {
      setSelectedId(null);
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete(updated as QuizAnswers);
      }
    }, 280);
  };

  return (
    <div className="min-h-screen cinema-glow flex flex-col justify-between py-12 px-6">
      
      {/* Top Progress & Back Nav */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between text-xs font-mono">
        {step > 0 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>PREVIOUS</span>
          </button>
        ) : (
          <span className="text-gray-400 u-font-superscript">CALIBRATION PROTOCOL</span>
        )}

        <div className="flex items-center gap-3">
          <span className="text-white font-bold u-font-superscript">
            [ STEP {currentQ.number} / 03 ]
          </span>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-8 bg-red-600'
                    : i < step
                    ? 'w-3 bg-red-800'
                    : 'w-3 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Question Presentation */}
      <div className="w-full max-w-3xl mx-auto my-auto py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-10 text-center sm:text-left">
              <span className="u-font-superscript text-red-500 block mb-3 font-mono">
                [ QUESTION {currentQ.number} ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {currentQ.title}
              </h2>
              <p className="text-gray-400 text-base sm:text-lg font-light">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Tactile High-End Cards */}
            <div className="grid gap-4">
              {currentQ.options.map((option) => {
                const isSelected = selectedId === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`cinema-card p-6 text-left flex items-center justify-between group transition-all duration-200 ${
                      isSelected
                        ? 'border-red-500 bg-red-950/20'
                        : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="frame-corner frame-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="frame-corner frame-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/40 transition-colors">
                        {option.icon}
                      </div>
                      <div>
                        <span className="u-font-superscript text-red-400 block mb-1">
                          {option.tag}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {option.label}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 font-light mt-0.5">
                          {option.detail}
                        </p>
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 ml-4 group-hover:border-red-500">
                      {isSelected && <Check className="w-3.5 h-3.5 text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Clean Bottom Note */}
      <div className="text-center text-xs font-mono text-gray-400">
        ETHICAL HACKER PREP • ADAPTIVE CURRICULUM
      </div>

    </div>
  );
}
