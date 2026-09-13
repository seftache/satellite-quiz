'use client';

import { motion } from 'framer-motion';
import { QuizAnswers } from './QuizEngine';
import {
  BookOpen,
  Shield,
  Terminal,
  Award,
  Bug,
  Target,
  Briefcase,
  FileText,
  Brain,
  Lock,
  Rocket,
  ArrowUpRight,
  ChevronRight,
  Flame,
  CheckCircle2,
  Cpu,
  Clock
} from 'lucide-react';

const BASE_URL = 'https://ethicalhackerprep.com';

type RoadmapStep = {
  phaseNumber: string;
  tag: string;
  title: string;
  description: string;
  duration: string;
  ctaLabel: string;
  ctaUrl: string;
  icon: React.ReactNode;
  badge: string;
};

type ProfileSummary = {
  title: string;
  subtitle: string;
  estimatedTime: string;
  recommendedCert: string;
  difficulty: string;
};

function getProfileSummary(answers: QuizAnswers): ProfileSummary {
  const goalLabels: Record<string, string> = {
    certification: 'Offensive Security Specialist',
    bugbounty: 'Web Application Pentester',
    career: 'Junior Security Analyst / Pentester',
    knowledge: 'Cyber Defense Practitioner',
  };

  const timeEstimates: Record<string, Record<string, string>> = {
    beginner: { light: '9-12 Months', moderate: '4-6 Months', intensive: '10-14 Weeks' },
    basic: { light: '6-9 Months', moderate: '3-5 Months', intensive: '8-12 Weeks' },
    intermediate: { light: '4-6 Months', moderate: '2-4 Months', intensive: '6-8 Weeks' },
    advanced: { light: '2-4 Months', moderate: '6-10 Weeks', intensive: '4-6 Weeks' },
  };

  const certLabels: Record<string, string> = {
    certification: 'CEH v13 / CompTIA Security+',
    bugbounty: 'eWPT / Burp Suite Certified',
    career: 'CompTIA PenTest+ / Security+',
    knowledge: 'Ethical Hacking Fundamentals',
  };

  return {
    title: goalLabels[answers.goal] || 'Ethical Hacking Specialist',
    subtitle: `Personalized curriculum calibrated for your current background`,
    estimatedTime: timeEstimates[answers.level]?.[answers.time] ?? '3-5 Months',
    recommendedCert: certLabels[answers.goal] || 'CEH v13',
    difficulty: answers.level === 'beginner' ? 'Level 01 (Foundation)' : 'Level 02 (Accelerated)',
  };
}

function getRoadmap(answers: QuizAnswers): RoadmapStep[] {
  const { goal, level } = answers;

  if (goal === 'certification') {
    if (level === 'beginner' || level === 'basic') {
      return [
        {
          phaseNumber: '01',
          tag: 'PHASE 01 // FOUNDATION',
          title: 'Networking Architecture & Linux Foundations',
          description: 'Master TCP/IP handshakes, subnetting, bash scripting, and core security terminology before touching offensive tools.',
          duration: 'Weeks 1-4',
          ctaLabel: 'Access Security Fundamentals',
          ctaUrl: `${BASE_URL}/courses`,
          icon: <BookOpen className="w-5 h-5 text-brand-red-light" />,
          badge: 'Prerequisites',
        },
        {
          phaseNumber: '02',
          tag: 'PHASE 02 // LAB DRILLS',
          title: 'Official Exam Question Simulations (CEH & Security+)',
          description: 'Train on real exam conditions with our adaptive AI simulator. Drill vulnerability identification and compliance frameworks.',
          duration: 'Weeks 5-9',
          ctaLabel: 'Launch Exam Simulator',
          ctaUrl: `${BASE_URL}/simulation-examen`,
          icon: <Shield className="w-5 h-5 text-emerald-400" />,
          badge: '98.4% Pass Rate',
        },
        {
          phaseNumber: '03',
          tag: 'PHASE 03 // OFFENSIVE LABS',
          title: 'Hands-On Penetration Testing Sandbox',
          description: 'Perform real network exploitation, privilege escalation, Wireshark packet analysis, and Metasploit payload delivery.',
          duration: 'Weeks 10-14',
          ctaLabel: 'Enter Pentest Labs',
          ctaUrl: `${BASE_URL}/pentest-lab`,
          icon: <Terminal className="w-5 h-5 text-yellow-400" />,
          badge: 'Live Virtual Machines',
        },
        {
          phaseNumber: '04',
          tag: 'PHASE 04 // CERTIFICATION',
          title: 'Final Exam Readiness & Certification Voucher',
          description: 'Complete final mock exams, review weak domains, and schedule your proctored certification with full confidence.',
          duration: 'Week 15+',
          ctaLabel: 'View Certification Blueprints',
          ctaUrl: `${BASE_URL}/certifications`,
          icon: <Award className="w-5 h-5 text-purple-400" />,
          badge: 'Accredited',
        },
      ];
    }

    return [
      {
        phaseNumber: '01',
        tag: 'PHASE 01 // TARGETING',
        title: 'Certification Deep Dive (CEH v13 / OSCP)',
        description: 'Skip elementary IT concepts. Target specialized domains: Active Directory attacks, web application flaws, and pivoting.',
        duration: 'Weeks 1-3',
        ctaLabel: 'Explore Certification Blueprints',
        ctaUrl: `${BASE_URL}/certifications`,
        icon: <Award className="w-5 h-5 text-brand-red-light" />,
        badge: 'Accelerated Track',
      },
      {
        phaseNumber: '02',
        tag: 'PHASE 02 // SIMULATIONS',
        title: 'Timed Exam Simulators & Scenario Drills',
        description: 'Challenge yourself against high-pressure exam scenarios. Pinpoint knowledge gaps with algorithmic feedback.',
        duration: 'Weeks 4-7',
        ctaLabel: 'Start Timed Exam Drills',
        ctaUrl: `${BASE_URL}/simulation-examen`,
        icon: <Shield className="w-5 h-5 text-emerald-400" />,
        badge: 'Adaptive Engine',
      },
      {
        phaseNumber: '03',
        tag: 'PHASE 03 // ADVANCED LABS',
        title: 'Complex Attack Chains & PrivEsc Sandbox',
        description: 'Tackle real-world scenarios: Kerberoasting, buffer overflows, and defensive evasion techniques.',
        duration: 'Weeks 8-11',
        ctaLabel: 'Access Advanced Pentest Lab',
        ctaUrl: `${BASE_URL}/pentest-lab`,
        icon: <Terminal className="w-5 h-5 text-yellow-400" />,
        badge: 'Hardening & Exploitation',
      },
      {
        phaseNumber: '04',
        tag: 'PHASE 04 // FINAL PREP',
        title: 'Complete Exam Guide & Mentor Review',
        description: 'Use our comprehensive reference book and direct student forum to prepare your final certification attempt.',
        duration: 'Week 12+',
        ctaLabel: 'Get the Exam Preparation Book',
        ctaUrl: `${BASE_URL}/cybersecurity-preparation-book`,
        icon: <BookOpen className="w-5 h-5 text-purple-400" />,
        badge: 'Study Guide Included',
      },
    ];
  }

  // Bug Bounty
  if (goal === 'bugbounty') {
    return [
      {
        phaseNumber: '01',
        tag: 'PHASE 01 // RECONNAISSANCE',
        title: 'OWASP Top 10 & Web Application Architecture',
        description: 'Learn how HTTP headers, cookies, authentication sessions, and modern APIs work under the hood.',
        duration: 'Weeks 1-4',
        ctaLabel: 'Start Web Security Course',
        ctaUrl: `${BASE_URL}/courses`,
        icon: <BookOpen className="w-5 h-5 text-brand-red-light" />,
        badge: 'OWASP Aligned',
      },
      {
        phaseNumber: '02',
        tag: 'PHASE 02 // ARSENAL',
        title: 'Mastering the Bug Hunter Arsenal (Burp Suite & Nmap)',
        description: 'Intercept HTTP traffic, automate fuzzing, build custom wordlists, and discover hidden endpoints.',
        duration: 'Weeks 5-8',
        ctaLabel: 'Explore Pentest Tools Kit',
        ctaUrl: `${BASE_URL}/pentest-tools`,
        icon: <Terminal className="w-5 h-5 text-emerald-400" />,
        badge: 'Tool Mastery',
      },
      {
        phaseNumber: '03',
        tag: 'PHASE 03 // CHALLENGES',
        title: 'Real-World Vulnerability CTFs & Lab Scenarios',
        description: 'Practice SQLi, XSS, SSRF, IDOR, and business logic bypasses on intentionally vulnerable live targets.',
        duration: 'Weeks 9-13',
        ctaLabel: 'Start Security Challenges',
        ctaUrl: `${BASE_URL}/security-challenges`,
        icon: <Target className="w-5 h-5 text-yellow-400" />,
        badge: 'Live CTFs',
      },
      {
        phaseNumber: '04',
        tag: 'PHASE 04 // BOUNTY HUNTING',
        title: 'Launch on HackerOne & Bugcrowd Programs',
        description: 'Learn how to write high-impact triage reports, respect scopes of engagement, and earn your first payouts.',
        duration: 'Week 14+',
        ctaLabel: 'Get Complete Hacking Tools Kit',
        ctaUrl: `${BASE_URL}/hacking-tools-kit`,
        icon: <Bug className="w-5 h-5 text-purple-400" />,
        badge: 'Triage Ready',
      },
    ];
  }

  // Career / Job Launcher
  if (goal === 'career') {
    return [
      {
        phaseNumber: '01',
        tag: 'PHASE 01 // FOUNDATION',
        title: 'Systems & Network Defense Fundamentals',
        description: 'Acquire the core competencies every employer tests in technical interviews for Junior SecOps roles.',
        duration: 'Weeks 1-5',
        ctaLabel: 'Start Career Core Courses',
        ctaUrl: `${BASE_URL}/courses`,
        icon: <BookOpen className="w-5 h-5 text-brand-red-light" />,
        badge: 'Enterprise Standard',
      },
      {
        phaseNumber: '02',
        tag: 'PHASE 02 // BENCHMARK',
        title: 'CompTIA Security+ Exam Certification Practice',
        description: 'Prepare for the #1 entry ticket required by cybersecurity HR departments and government agencies.',
        duration: 'Weeks 6-12',
        ctaLabel: 'Security+ Exam Simulator',
        ctaUrl: `${BASE_URL}/simulation-comptia-security`,
        icon: <Award className="w-5 h-5 text-emerald-400" />,
        badge: 'DoD 8570 Approved',
      },
      {
        phaseNumber: '03',
        tag: 'PHASE 03 // PORTFOLIO',
        title: 'Documented Case Studies & Pentest Reports',
        description: 'Transform your lab simulations into concrete, professional pentest reports to show hiring managers during interviews.',
        duration: 'Weeks 13-18',
        ctaLabel: 'Explore Practical Case Studies',
        ctaUrl: `${BASE_URL}/practical-cases`,
        icon: <FileText className="w-5 h-5 text-yellow-400" />,
        badge: 'Portfolio Ready',
      },
      {
        phaseNumber: '04',
        tag: 'PHASE 04 // PLACEMENT',
        title: 'Career Coaching & Premium Community Network',
        description: 'Join verified alumni and certified mentors on our private community to prepare your technical interviews.',
        duration: 'Week 19+',
        ctaLabel: 'Unlock Full Platform Access',
        ctaUrl: `${BASE_URL}/ethical-hacker-prep-subscription`,
        icon: <Briefcase className="w-5 h-5 text-purple-400" />,
        badge: 'Mentorship',
      },
    ];
  }

  // Default: Knowledge / Self-Defense
  return [
    {
      phaseNumber: '01',
      tag: 'PHASE 01 // ETHICS & MINDSET',
      title: 'The Hacker Mindset & Legal Framework',
      description: 'Understand how adversaries target systems and the ethical boundaries that govern authorized security research.',
      duration: 'Weeks 1-3',
      ctaLabel: 'Read Complete Ethical Hacking Guide',
      ctaUrl: `${BASE_URL}/legally-hacking--the-complete-ethical-hacking-guide`,
      icon: <Brain className="w-5 h-5 text-brand-red-light" />,
      badge: 'Legally Hacking',
    },
    {
      phaseNumber: '02',
      tag: 'PHASE 02 // KNOWLEDGE',
      title: 'Core Cyber Defense & Attack Vectors',
      description: 'Explore malware analysis, cryptography, network sniffing, and authentication defense at your own pace.',
      duration: 'Weeks 4-8',
      ctaLabel: 'Browse All Courses',
      ctaUrl: `${BASE_URL}/courses`,
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />,
      badge: 'Self-Paced',
    },
    {
      phaseNumber: '03',
      tag: 'PHASE 03 // SANDBOX',
      title: 'Practice Safe Exploitation in Isolated Labs',
      description: 'Hands-on practice in browser-based virtual machines without risking your own hardware or network.',
      duration: 'Weeks 9-13',
      ctaLabel: 'Enter Practice Labs',
      ctaUrl: `${BASE_URL}/pentest-lab`,
      icon: <Terminal className="w-5 h-5 text-yellow-400" />,
      badge: '100% Safe Labs',
    },
    {
      phaseNumber: '04',
      tag: 'PHASE 04 // HARDENING',
      title: 'Personal & Enterprise Security Hardening',
      description: 'Deploy advanced tools, secure your systems, and join the global cybersecurity research community.',
      duration: 'Week 14+',
      ctaLabel: 'Download Security Toolkits',
      ctaUrl: `${BASE_URL}/downloadable-resources`,
      icon: <Lock className="w-5 h-5 text-purple-400" />,
      badge: 'Resource Kit',
    },
  ];
}

interface ResultsTimelineProps {
  answers: QuizAnswers;
}

export default function ResultsTimeline({ answers }: ResultsTimelineProps) {
  const profile = getProfileSummary(answers);
  const roadmap = getRoadmap(answers);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 cyber-grid-bg">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Filmbot-style Profile Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass-panel rounded-3xl p-8 sm:p-10 mb-14 shadow-2xl border border-brand-border/80"
        >
          {/* Filmbot Frame Corners */}
          <div className="frame-corner frame-corner-tl" />
          <div className="frame-corner frame-corner-tr" />
          <div className="frame-corner frame-corner-bl" />
          <div className="frame-corner frame-corner-br" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-border/60 pb-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-xs font-mono text-brand-red-light mb-3">
                <Flame className="w-3.5 h-3.5" />
                <span>OFFICIAL CURRICULUM BLUEPRINT</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {profile.title}
              </h1>
              <p className="text-brand-muted text-sm sm:text-base mt-1">
                {profile.subtitle}
              </p>
            </div>

            {/* Target Certification Badge */}
            <div className="flex-shrink-0 p-4 rounded-2xl bg-brand-surface border border-brand-border text-center min-w-[200px]">
              <span className="tech-superscript text-brand-subtle block mb-1">
                TARGET CERTIFICATION
              </span>
              <span className="text-lg font-bold text-white font-mono block">
                {profile.recommendedCert}
              </span>
              <span className="text-xs text-brand-red-light font-medium mt-0.5 inline-block">
                Industry Accredited
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border/50">
              <span className="tech-superscript text-brand-subtle block mb-1">
                ESTIMATED TIMELINE
              </span>
              <span className="text-base font-bold text-white font-mono">
                {profile.estimatedTime}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border/50">
              <span className="tech-superscript text-brand-subtle block mb-1">
                CURRICULUM LEVEL
              </span>
              <span className="text-base font-bold text-white font-mono">
                {profile.difficulty}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border/50 col-span-2 sm:col-span-1">
              <span className="tech-superscript text-brand-subtle block mb-1">
                DELIVERY METHOD
              </span>
              <span className="text-base font-bold text-emerald-400 font-mono">
                100% Practical Labs
              </span>
            </div>
          </div>
        </motion.div>

        {/* The Curriculum Timeline (Filmbot Awwwards Structural Layout) */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-brand-border/60 pb-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-mono">
              <Terminal className="w-5 h-5 text-brand-red" />
              <span>CHRONOLOGICAL LEARNING PATH</span>
            </h2>
            <span className="tech-superscript text-brand-subtle">
              [ 4 SEQUENTIAL PHASES ]
            </span>
          </div>

          <div className="space-y-6">
            {roadmap.map((step, index) => (
              <motion.div
                key={step.phaseNumber}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 + 0.2, duration: 0.45 }}
                className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-brand-border hover:border-red-500/40 transition-all duration-300 group"
              >
                {/* Filmbot Corner Micro-decorations on Hover */}
                <div className="frame-corner frame-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="frame-corner frame-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="frame-corner frame-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="frame-corner frame-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Phase Details */}
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    {/* Big Phase Number Indicator like Filmbot (01, 02...) */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-surface border border-brand-border group-hover:border-red-500/50 flex flex-col items-center justify-center transition-colors">
                      <span className="text-lg font-bold font-mono text-white">
                        {step.phaseNumber}
                      </span>
                      <span className="text-[10px] font-mono text-brand-subtle uppercase">
                        PHASE
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="tech-superscript text-brand-red-light font-bold">
                          {step.tag}
                        </span>
                        <span className="text-brand-subtle text-xs">•</span>
                        <span className="text-xs font-mono text-brand-muted flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-subtle" />
                          {step.duration}
                        </span>
                        <span className="ml-auto px-2 py-0.5 rounded-full text-[11px] font-mono bg-brand-surface-alt border border-brand-border text-brand-muted">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-brand-muted text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Hard Link CTA Button — strictly <a> pointing to ethicalhackerprep.com */}
                  <div className="flex-shrink-0 self-start lg:self-center">
                    <a
                      href={step.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-brand-surface-alt hover:bg-brand-red text-white font-semibold text-sm border border-brand-border hover:border-red-600 transition-all duration-200 shadow-md group/btn"
                    >
                      <span>{step.ctaLabel}</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-subtle group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Master Conversion Box at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-brand-surface via-black to-black border border-brand-border/80 text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-red-600/10 blur-3xl pointer-events-none" />

          {/* Filmbot Frame Corners */}
          <div className="frame-corner frame-corner-tl" />
          <div className="frame-corner frame-corner-tr" />
          <div className="frame-corner frame-corner-bl" />
          <div className="frame-corner frame-corner-br" />

          <div className="max-w-2xl mx-auto space-y-6">
            <span className="tech-superscript text-brand-red-light font-bold">
              [ DIRECT REGISTRATION ]
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to begin your ethical hacking career?
            </h2>

            <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
              Access the complete simulator pack, interactive labs, and certified mentorship on our main platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Rocket className="w-5 h-5" />
                <span>Start on Ethical Hacker Prep</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href={`${BASE_URL}/ethical-hacker-prep-subscription`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-red-500/80 hover:bg-red-600/10 text-brand-red-light font-semibold text-sm transition-all"
              >
                <Shield className="w-4 h-4" />
                <span>Unlock All Access VIP</span>
              </a>
            </div>

            <div className="pt-6 text-xs font-mono text-brand-subtle">
              Accredited preparation platform • Trusted by 5,000+ students worldwide
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
