'use client';

import { motion } from 'framer-motion';
import { QuizAnswers } from './QuizEngine';
import { ArrowUpRight, Shield, Award, Terminal, CheckCircle2, ChevronRight, Lock } from 'lucide-react';

const BASE_URL = 'https://ethicalhackerprep.com';

type Milestone = {
  phase: string;
  tag: string;
  title: string;
  desc: string;
  timing: string;
  ctaText: string;
  ctaLink: string;
};

function buildPath(answers: QuizAnswers): { title: string; targetCert: string; milestones: Milestone[] } {
  const { goal } = answers;

  if (goal === 'bugbounty') {
    return {
      title: 'Bug Bounty Hunter & Web Pentester',
      targetCert: 'eWPT / Burp Suite Certified',
      milestones: [
        {
          phase: '01',
          tag: 'FOUNDATION',
          title: 'Web Application Reconnaissance & HTTP Architecture',
          desc: 'Analyze headers, sessions, and request flows using raw intercepting proxies before firing automated tools.',
          timing: 'Weeks 1 - 3',
          ctaText: 'Start Web Security',
          ctaLink: `${BASE_URL}/courses`,
        },
        {
          phase: '02',
          tag: 'ARSENAL',
          title: 'Offensive Tools Mastery (Burp Suite, Ffuf & Nmap)',
          desc: 'Automate endpoint discovery, parameter fuzzing, and custom vulnerability hunting scripts.',
          timing: 'Weeks 4 - 7',
          ctaText: 'Explore Tools Kit',
          ctaLink: `${BASE_URL}/pentest-tools`,
        },
        {
          phase: '03',
          tag: 'EXPLOITATION',
          title: 'Hands-On Vulnerability Lab Scenarios (OWASP Top 10)',
          desc: 'Practice SQLi, XSS, SSRF, and business logic flaws in real intentionally broken sandboxes.',
          timing: 'Weeks 8 - 12',
          ctaText: 'Access Security Challenges',
          ctaLink: `${BASE_URL}/security-challenges`,
        },
        {
          phase: '04',
          tag: 'TRIAGE & BOUNTIES',
          title: 'Live Target Reporting & Platform Submission',
          desc: 'Write professional vulnerability reports that pass triage on HackerOne and Bugcrowd programs.',
          timing: 'Week 13+',
          ctaText: 'Get Hacking Toolkit',
          ctaLink: `${BASE_URL}/hacking-tools-kit`,
        },
      ],
    };
  }

  if (goal === 'career') {
    return {
      title: 'Cyber Defense & SOC Analyst Track',
      targetCert: 'CompTIA Security+ / PenTest+',
      milestones: [
        {
          phase: '01',
          tag: 'CORE PRINCIPLES',
          title: 'Enterprise Network Architecture & Linux Hardening',
          desc: 'Master the networking and operating system fundamentals required by technical interviewers.',
          timing: 'Weeks 1 - 4',
          ctaText: 'Access Core Curriculum',
          ctaLink: `${BASE_URL}/courses`,
        },
        {
          phase: '02',
          tag: 'EXAM READINESS',
          title: 'CompTIA Security+ Question Simulator & PBQs',
          desc: 'Train with realistic simulated exam sessions to guarantee your passing score on the first attempt.',
          timing: 'Weeks 5 - 10',
          ctaText: 'Launch Security+ Sim',
          ctaLink: `${BASE_URL}/simulation-comptia-security`,
        },
        {
          phase: '03',
          tag: 'CASE STUDIES',
          title: 'Real-World Incident Response & Pentest Case Studies',
          desc: 'Build documented reports from real enterprise breach scenarios to showcase on your CV.',
          timing: 'Weeks 11 - 15',
          ctaText: 'View Practical Cases',
          ctaLink: `${BASE_URL}/practical-cases`,
        },
        {
          phase: '04',
          tag: 'COMMUNITY & ACCESS',
          title: 'Complete Career Platform & Mentorship Hub',
          desc: 'Join our private student community, prepare technical interviews, and access our full lab library.',
          timing: 'Week 16+',
          ctaText: 'Unlock Full Access',
          ctaLink: `${BASE_URL}/ethical-hacker-prep-subscription`,
        },
      ],
    };
  }

  // Default: Certification
  return {
    title: 'Certified Ethical Hacker (CEH) Accelerated Blueprint',
    targetCert: 'CEH v13 / CompTIA Security+',
    milestones: [
      {
        phase: '01',
        tag: 'PREREQUISITES',
        title: 'Offensive Foundations & Network Reconnaissance',
        desc: 'Understand scanning protocols, packet crafting, and port analysis before attacking live virtual machines.',
        timing: 'Weeks 1 - 4',
        ctaText: 'Start Foundations',
        ctaLink: `${BASE_URL}/courses`,
      },
      {
        phase: '02',
        tag: 'DRILLS',
        title: 'Adaptive Exam Simulator Drills (CEH & Security+)',
        desc: 'Practice on thousands of realistic certification questions with instant explanations on weak domains.',
        timing: 'Weeks 5 - 8',
        ctaText: 'Open Exam Simulator',
        ctaLink: `${BASE_URL}/simulation-examen`,
      },
      {
        phase: '03',
        tag: 'SANDBOX',
        title: 'Full Penetration Testing Virtual Labs',
        desc: 'Exploit real machines, escalate privileges, and extract root flags in private, safe virtual sandboxes.',
        timing: 'Weeks 9 - 13',
        ctaText: 'Enter Pentest Labs',
        ctaLink: `${BASE_URL}/pentest-lab`,
      },
      {
        phase: '04',
        tag: 'CERTIFICATION',
        title: 'Official Certification Blueprint & Prep Guide',
        desc: 'Review high-yield exam cheat sheets and final test strategies before booking your proctored exam.',
        timing: 'Week 14+',
        ctaText: 'Get Certification Guide',
        ctaLink: `${BASE_URL}/cybersecurity-preparation-book`,
      },
    ],
  };
}

export default function ResultsTimeline({ answers }: { answers: QuizAnswers }) {
  const roadmap = buildPath(answers);

  return (
    <div className="min-h-screen cinema-glow py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cinema-card p-8 sm:p-12 mb-16"
        >
          <div className="frame-corner frame-corner-tl" />
          <div className="frame-corner frame-corner-tr" />
          <div className="frame-corner frame-corner-bl" />
          <div className="frame-corner frame-corner-br" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-8">
            <div>
              <span className="u-font-superscript text-red-500 block mb-2">
                [ YOUR PERSONALIZED ROADMAP ]
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {roadmap.title}
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mt-2 font-light">
                Generated based on your goals, technical background, and available weekly time.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center flex-shrink-0 min-w-[220px]">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                Target Credential
              </span>
              <span className="text-lg font-bold text-white font-mono block">
                {roadmap.targetCert}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-gray-400">
            <div>
              <span className="text-gray-400 block mb-0.5">STATUS</span>
              <span className="text-white font-semibold">Active Blueprint</span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">STRUCTURE</span>
              <span className="text-white font-semibold">4 Sequenced Phases</span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">METHODOLOGY</span>
              <span className="text-white font-semibold">Hands-On Labs</span>
            </div>
            <div>
              <span className="text-gray-400 block mb-0.5">HOSTED BY</span>
              <span className="text-red-400 font-semibold">Ethical Hacker Prep</span>
            </div>
          </div>
        </motion.div>

        {/* Filmbot-style Sequenced Milestones */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <span className="text-xs font-mono text-white tracking-widest uppercase">
              Chronological Path
            </span>
            <span className="text-xs font-mono text-gray-400">
              STEP BY STEP
            </span>
          </div>

          {roadmap.milestones.map((item, idx) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              className="cinema-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="frame-corner frame-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="frame-corner frame-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="frame-corner frame-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="frame-corner frame-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-6 flex-1">
                {/* Large Filmbot Number (01, 02) */}
                <div className="text-2xl sm:text-3xl font-mono font-bold text-red-500/80 flex-shrink-0">
                  ({item.phase})
                </div>

                <div>
                  <div className="flex items-center gap-3 text-xs font-mono mb-1.5">
                    <span className="u-font-superscript text-red-400 font-semibold">
                      [{item.tag}]
                    </span>
                    <span className="text-gray-400">{item.timing}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light mt-1.5 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Hard Link Button to Main Platform */}
              <div className="flex-shrink-0 self-start md:self-center">
                <a
                  href={item.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-red-600 text-white text-xs font-mono tracking-wider uppercase border border-white/10 hover:border-red-600 transition-all duration-200"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filmbot Bottom Conversion Stage */}
        <div className="cinema-card mt-16 p-8 sm:p-14 text-center">
          <div className="frame-corner frame-corner-tl" />
          <div className="frame-corner frame-corner-tr" />
          <div className="frame-corner frame-corner-bl" />
          <div className="frame-corner frame-corner-br" />

          <span className="u-font-superscript text-red-500 block mb-3">
            [ DIRECT ACCESS ]
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight max-w-xl mx-auto mb-4">
            Start training on the main platform.
          </h2>

          <p className="text-gray-400 text-base max-w-lg mx-auto font-light leading-relaxed mb-8">
            Access every course, simulated exam, and virtual lab on Ethical Hacker Prep with your custom roadmap.
          </p>

          <a
            href={BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-red-600/30 transition-all duration-300"
          >
            <span>Launch on Ethical Hacker Prep</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
