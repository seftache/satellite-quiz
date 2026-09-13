'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export type QuizAnswers = {
  goal?: string;
  level?: string;
  time?: string;
};

interface QuizEngineProps {
  onComplete: (answers: any) => void;
}

const questions = [
  {
    key: 'goal',
    title: 'Quel est votre objectif principal ?',
    options: [
      { id: 'certification', label: 'Passer une Certification', desc: 'CEH, Security+, OSCP' },
      { id: 'bugbounty', label: 'Bug Bounty', desc: 'Trouver des failles et gagner des primes' },
      { id: 'career', label: 'Reconversion', desc: 'Devenir Analyste SOC ou Pentester' },
      { id: 'knowledge', label: 'Maîtrise & Défense', desc: 'Sécuriser mes propres systèmes' },
    ]
  },
  {
    key: 'level',
    title: 'Quel est votre niveau actuel ?',
    options: [
      { id: 'beginner', label: 'Débutant absolu', desc: 'Je pars de zéro en informatique' },
      { id: 'basic', label: 'Bases informatiques', desc: 'Je connais un peu les réseaux et l\'OS' },
      { id: 'intermediate', label: 'Pratiquant', desc: 'J\'ai déjà touché à Kali et fait des CTF' },
      { id: 'advanced', label: 'Professionnel', desc: 'Je travaille déjà dans l\'IT' },
    ]
  },
  {
    key: 'time',
    title: 'Combien de temps pouvez-vous consacrer ?',
    options: [
      { id: 'light', label: '2 à 4 heures / semaine', desc: 'Rythme tranquille' },
      { id: 'moderate', label: '5 à 8 heures / semaine', desc: 'Le rythme idéal' },
      { id: 'intensive', label: '10+ heures / semaine', desc: 'Immersion totale' },
    ]
  }
];

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});

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
    }, 150); // Fast, snappy transition like Brilliant
  };

  return (
    <div className="min-h-screen flex flex-col pt-12 px-6 pb-24 fade-in max-w-3xl mx-auto w-full">
      
      {/* Simple Top Bar */}
      <div className="flex items-center mb-16 h-8">
        {step > 0 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="flex items-center text-gray-400 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Retour
          </button>
        )}
        
        {/* Simple Progress Bar */}
        <div className="flex-1 flex justify-center gap-2">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all ${i <= step ? 'w-12 bg-red-600' : 'w-12 bg-gray-800'}`} 
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
        {currentQ.title}
      </h2>

      {/* Options Grid */}
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
