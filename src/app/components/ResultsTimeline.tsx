'use client';

const BASE_URL = 'https://ethicalhackerprep.com';

const getMilestones = (goal: string) => {
  if (goal === 'bugbounty') {
    return [
      { step: '01', title: 'Fondations Web & Réseaux', desc: 'Comprendre l\'architecture web et l\'interception de requêtes.' },
      { step: '02', title: 'Maîtrise des Outils', desc: 'Prise en main de Burp Suite, Ffuf, et Nmap.' },
      { step: '03', title: 'Laboratoire de Vulnérabilités', desc: 'Pratique sur des failles réelles (OWASP Top 10).' },
      { step: '04', title: 'Rapports & Bug Bounty', desc: 'Rédiger des rapports professionnels pour HackerOne.' },
    ];
  }
  return [
    { step: '01', title: 'Bases de la Cybersécurité', desc: 'Réseaux, systèmes Linux, et fondamentaux offensifs.' },
    { step: '02', title: 'Entraînement Examen', desc: 'Simulateur de questions pour la certification.' },
    { step: '03', title: 'Laboratoires Pratiques', desc: 'Machines virtuelles et environnements de pentest.' },
    { step: '04', title: 'Certification', desc: 'Passage de l\'examen officiel et validation des acquis.' },
  ];
};

export default function ResultsTimeline({ answers }: { answers: any }) {
  const milestones = getMilestones(answers.goal || 'certification');

  return (
    <div className="min-h-screen py-16 px-6 fade-in flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Votre Roadmap Personnalisée</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">Voici le parcours le plus direct pour atteindre votre objectif.</p>
        
        <div className="space-y-6 mb-16">
          {milestones.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 border border-gray-800 rounded-2xl bg-white/[0.02]">
              <div className="text-4xl font-bold text-gray-800">{item.step}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={BASE_URL}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-red-600/20"
          >
            Commencer mon entraînement
          </a>
        </div>
      </div>
    </div>
  );
}
