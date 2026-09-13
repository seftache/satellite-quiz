'use client';

const BASE_URL = 'https://ethicalhackerprep.com';

const getMilestones = (goal: string) => {
  if (goal === 'bugbounty') {
    return [
      { step: '01', title: 'Web & Network Foundations', desc: 'Understand web architecture, HTTP, and request interception.' },
      { step: '02', title: 'Offensive Tools Mastery', desc: 'Master Burp Suite, Ffuf, Nmap, and custom scripting.' },
      { step: '03', title: 'Vulnerability Lab Practice', desc: 'Exploit real flaws (OWASP Top 10) in safe sandboxes.' },
      { step: '04', title: 'Bug Bounty Reporting', desc: 'Write professional reports for HackerOne and Bugcrowd.' },
    ];
  }
  if (goal === 'career') {
    return [
      { step: '01', title: 'Enterprise Network & Linux', desc: 'Master networking and OS fundamentals for interviews.' },
      { step: '02', title: 'Certification Exam Prep', desc: 'Train with realistic CompTIA Security+ simulators.' },
      { step: '03', title: 'Incident Response Cases', desc: 'Build documented reports from real breach scenarios.' },
      { step: '04', title: 'Career Platform Access', desc: 'Join our community, prepare interviews, access full labs.' },
    ];
  }
  if (goal === 'knowledge') {
    return [
      { step: '01', title: 'Security Fundamentals', desc: 'Understand attack vectors, threat models, and defense.' },
      { step: '02', title: 'Hands-On Defense Labs', desc: 'Configure firewalls, IDS, and security monitoring.' },
      { step: '03', title: 'Offensive Mindset Training', desc: 'Think like an attacker to build better defenses.' },
      { step: '04', title: 'Advanced Security Mastery', desc: 'Zero-day analysis, reverse engineering, and hardening.' },
    ];
  }
  // Default: certification
  return [
    { step: '01', title: 'Offensive Foundations', desc: 'Learn scanning, packet crafting, and port analysis.' },
    { step: '02', title: 'Exam Simulator Drills', desc: 'Practice thousands of CEH & Security+ questions.' },
    { step: '03', title: 'Penetration Testing Labs', desc: 'Exploit machines, escalate privileges, capture flags.' },
    { step: '04', title: 'Certification Blueprint', desc: 'Final exam strategies and high-yield cheat sheets.' },
  ];
};

export default function ResultsTimeline({ answers }: { answers: any }) {
  const milestones = getMilestones(answers.goal || 'certification');

  return (
    <div className="min-h-screen py-16 px-6 fade-in flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Your Personalized Roadmap</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">Here is the most direct path to achieve your goal.</p>
        
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
            Start Training on Ethical Hacker Prep
          </a>
        </div>
      </div>
    </div>
  );
}
