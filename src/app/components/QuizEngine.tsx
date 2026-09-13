'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export type QuizAnswers = {
  goal?: string;
  level?: string;
  time?: string;
};

interface QuizEngineProps {
  onComplete: (answers: QuizAnswers) => void;
}

const questions = [
  {
    key: 'goal',
    title: 'What is your primary goal?',
    options: [
      { id: 'certification', label: 'Pass a Certification', desc: 'CEH, Security+, OSCP' },
      { id: 'bugbounty', label: 'Bug Bounty Hunting', desc: 'Find vulnerabilities and earn bounties' },
      { id: 'career', label: 'Career Transition', desc: 'Become a SOC Analyst or Pentester' },
      { id: 'knowledge', label: 'Defense & Mastery', desc: 'Secure my own systems and networks' },
    ]
  },
  {
    key: 'level',
    title: 'What is your current level?',
    options: [
      { id: 'beginner', label: 'Absolute Beginner', desc: 'Starting from zero in IT' },
      { id: 'basic', label: 'IT Foundations', desc: 'I know basic networking and OS commands' },
      { id: 'intermediate', label: 'Practicing Enthusiast', desc: 'Already used Kali Linux or did CTFs' },
      { id: 'advanced', label: 'IT Professional', desc: 'Currently working in IT/Sysadmin' },
    ]
  },
  {
    key: 'time',
    title: 'How much time can you commit weekly?',
    options: [
      { id: 'light', label: '2 to 4 hours / week', desc: 'Relaxed, self-paced schedule' },
      { id: 'moderate', label: '5 to 8 hours / week', desc: 'The ideal learning pace' },
      { id: 'intensive', label: '10+ hours / week', desc: 'Full immersion mode' },
    ]
  }
];

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentQ = questions[step];

  const handleSelect = (id: string) => {
    const updated = { ...answers, [currentQ.key]: id };
    setAnswers(updated);
    
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete(updated);
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col pt-12 px-6 pb-24 fade-in max-w-3xl mx-auto w-full">
      
      <div className="flex items-center mb-16 h-8">
        {step > 0 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="flex items-center text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back
          </button>
        )}
        
        <div className="flex-1 flex justify-center gap-2">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all ${i <= step ? 'w-12 bg-red-600' : 'w-12 bg-gray-800'}`} 
            />
          ))}
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        {currentQ.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQ.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.id)}
            className="p-8 border-2 border-gray-800 rounded-2xl text-left hover:border-red-600 hover:bg-red-600/5 transition-colors focus:border-red-600 focus:outline-none"
          >
            <div className="text-xl font-semibold text-white mb-2">{opt.label}</div>
            <div className="text-gray-400">{opt.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
