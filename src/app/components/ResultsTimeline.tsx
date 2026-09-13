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
  ExternalLink,
  ChevronRight,
  Flame,
} from 'lucide-react';

const BASE_URL = 'https://ethicalhackerprep.com';

type RoadmapStep = {
  phase: number;
  title: string;
  description: string;
  duration: string;
  ctaLabel: string;
  ctaUrl: string;
  icon: React.ReactNode;
};

type ProfileSummary = {
  title: string;
  subtitle: string;
  estimatedTime: string;
};

function getProfileSummary(answers: QuizAnswers): ProfileSummary {
  const goalLabels: Record<string, string> = {
    certification: 'Certification-Focused',
    bugbounty: 'Bug Bounty Hunter',
    career: 'Career Launcher',
    knowledge: 'Self-Learner',
  };

  const levelLabels: Record<string, string> = {
    beginner: 'Starting from Scratch',
    basic: 'Building on Basics',
    intermediate: 'Leveling Up',
    advanced: 'Mastering the Craft',
  };

  const timeEstimates: Record<string, Record<string, string>> = {
    beginner: { light: '12-18 months', moderate: '6-10 months', intensive: '3-5 months' },
    basic: { light: '8-12 months', moderate: '4-7 months', intensive: '2-4 months' },
    intermediate: { light: '6-9 months', moderate: '3-5 months', intensive: '6-10 weeks' },
    advanced: { light: '3-6 months', moderate: '6-10 weeks', intensive: '4-8 weeks' },
  };

  return {
    title: `${goalLabels[answers.goal]} — ${levelLabels[answers.level]}`,
    subtitle: `Your personalized ethical hacking roadmap`,
    estimatedTime: timeEstimates[answers.level]?.[answers.time] ?? '3-6 months',
  };
}

function getRoadmap(answers: QuizAnswers): RoadmapStep[] {
  const { goal, level } = answers;

  // Certification path
  if (goal === 'certification') {
    if (level === 'beginner' || level === 'basic') {
      return [
        {
          phase: 1,
          title: 'Master the Fundamentals',
          description: 'Start with networking, Linux, and cybersecurity basics. Build a solid foundation before diving into hacking techniques.',
          duration: 'Weeks 1-4',
          ctaLabel: 'Start Fundamentals Course',
          ctaUrl: `${BASE_URL}/courses`,
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          phase: 2,
          title: 'Practice with Exam Simulations',
          description: 'Test your knowledge with realistic CEH and Security+ exam simulations. Identify weak areas and track your progress.',
          duration: 'Weeks 5-10',
          ctaLabel: 'Try Exam Simulations',
          ctaUrl: `${BASE_URL}/simulation-examen`,
          icon: <Shield className="w-6 h-6" />,
        },
        {
          phase: 3,
          title: 'Hands-On Penetration Testing Labs',
          description: 'Apply your knowledge in real-world scenarios. Practice exploitation, privilege escalation, and reporting.',
          duration: 'Weeks 11-16',
          ctaLabel: 'Access Pentest Labs',
          ctaUrl: `${BASE_URL}/pentest-lab`,
          icon: <Terminal className="w-6 h-6" />,
        },
        {
          phase: 4,
          title: 'Book Your Certification Exam',
          description: 'You\'re ready. Review your target certification requirements and schedule your exam with confidence.',
          duration: 'Week 17+',
          ctaLabel: 'Explore Certifications',
          ctaUrl: `${BASE_URL}/certifications`,
          icon: <Award className="w-6 h-6" />,
        },
      ];
    }
    // Intermediate / Advanced certification
    return [
      {
        phase: 1,
        title: 'Target Your Certification',
        description: 'Choose your certification track — CEH, OSCP, CISSP, or CompTIA — and deep dive into the specific exam domains.',
        duration: 'Week 1-2',
        ctaLabel: 'Browse Certifications',
        ctaUrl: `${BASE_URL}/certifications`,
        icon: <Award className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: 'Intensive Exam Simulations',
        description: 'Practice with timed exam conditions. Our AI-driven simulator adapts to your weaknesses and maximizes your readiness.',
        duration: 'Weeks 3-8',
        ctaLabel: 'Launch Exam Simulator',
        ctaUrl: `${BASE_URL}/simulation-examen`,
        icon: <Shield className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: 'Advanced Pentest Challenges',
        description: 'Tackle real-world-grade challenges: web app exploitation, network pivoting, Active Directory attacks.',
        duration: 'Weeks 9-12',
        ctaLabel: 'Enter Advanced Labs',
        ctaUrl: `${BASE_URL}/pentest-lab`,
        icon: <Terminal className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: 'Final Review & Exam Prep',
        description: 'Use our comprehensive study guide and practice exams for a final review before your certification date.',
        duration: 'Week 13+',
        ctaLabel: 'Get the Study Guide',
        ctaUrl: `${BASE_URL}/cybersecurity-preparation-book`,
        icon: <BookOpen className="w-6 h-6" />,
      },
    ];
  }

  // Bug Bounty path
  if (goal === 'bugbounty') {
    if (level === 'beginner' || level === 'basic') {
      return [
        {
          phase: 1,
          title: 'Security Foundations',
          description: 'Learn web technologies, HTTP protocol, OWASP Top 10, and basic vulnerability concepts before hunting.',
          duration: 'Weeks 1-4',
          ctaLabel: 'Start Security Basics',
          ctaUrl: `${BASE_URL}/courses`,
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          phase: 2,
          title: 'Master the Tools',
          description: 'Get hands-on with Burp Suite, Nmap, Wireshark, and other essential penetration testing tools.',
          duration: 'Weeks 5-8',
          ctaLabel: 'Explore Hacking Tools',
          ctaUrl: `${BASE_URL}/pentest-tools`,
          icon: <Terminal className="w-6 h-6" />,
        },
        {
          phase: 3,
          title: 'Practice on Challenges',
          description: 'Sharpen your skills with CTF challenges and vulnerable web applications in a safe environment.',
          duration: 'Weeks 9-14',
          ctaLabel: 'Start Security Challenges',
          ctaUrl: `${BASE_URL}/security-challenges`,
          icon: <Target className="w-6 h-6" />,
        },
        {
          phase: 4,
          title: 'Start Bug Bounty Hunting',
          description: 'Set up your hunting toolkit, choose programs, and submit your first vulnerability reports.',
          duration: 'Week 15+',
          ctaLabel: 'Get the Bug Bounty Kit',
          ctaUrl: `${BASE_URL}/hacking-tools-kit`,
          icon: <Bug className="w-6 h-6" />,
        },
      ];
    }
    // Intermediate / Advanced bug bounty
    return [
      {
        phase: 1,
        title: 'Advanced Vulnerability Research',
        description: 'Go beyond OWASP Top 10. Study business logic flaws, race conditions, SSRF chains, and deserialization attacks.',
        duration: 'Weeks 1-3',
        ctaLabel: 'Advanced Courses',
        ctaUrl: `${BASE_URL}/courses`,
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: 'Real-World Practice Cases',
        description: 'Work through guided practical cases that mirror real bug bounty targets and complex attack surfaces.',
        duration: 'Weeks 4-8',
        ctaLabel: 'Try Practical Cases',
        ctaUrl: `${BASE_URL}/practical-cases`,
        icon: <Target className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: 'Upgrade Your Arsenal',
        description: 'Master advanced tools, write custom scripts, and build automated recon pipelines.',
        duration: 'Weeks 9-12',
        ctaLabel: 'Get Advanced Tools',
        ctaUrl: `${BASE_URL}/hacking-tools-kit`,
        icon: <Terminal className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: 'Scale Your Hunting',
        description: 'Learn how to manage multiple programs, write high-impact reports, and increase your earnings.',
        duration: 'Week 13+',
        ctaLabel: 'Join Premium Access',
        ctaUrl: `${BASE_URL}/ethical-hacker-prep-subscription`,
        icon: <Rocket className="w-6 h-6" />,
      },
    ];
  }

  // Career path
  if (goal === 'career') {
    if (level === 'beginner' || level === 'basic') {
      return [
        {
          phase: 1,
          title: 'Build Your Foundation',
          description: 'Learn the fundamentals of networking, operating systems, and cybersecurity concepts that every employer expects.',
          duration: 'Weeks 1-6',
          ctaLabel: 'Start Learning',
          ctaUrl: `${BASE_URL}/courses`,
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          phase: 2,
          title: 'Get Your First Certification',
          description: 'CompTIA Security+ is the industry standard entry-level certification. Prepare with realistic simulations.',
          duration: 'Weeks 7-14',
          ctaLabel: 'Security+ Simulator',
          ctaUrl: `${BASE_URL}/simulation-comptia-security`,
          icon: <Award className="w-6 h-6" />,
        },
        {
          phase: 3,
          title: 'Gain Practical Experience',
          description: 'Build a portfolio with pentest labs and practical case studies to stand out from other candidates.',
          duration: 'Weeks 15-20',
          ctaLabel: 'Build Your Portfolio',
          ctaUrl: `${BASE_URL}/practical-cases`,
          icon: <FileText className="w-6 h-6" />,
        },
        {
          phase: 4,
          title: 'Land Your Dream Job',
          description: 'Review our career resources, network in the community, and apply to positions with confidence.',
          duration: 'Week 21+',
          ctaLabel: 'Career Resources',
          ctaUrl: `${BASE_URL}/courses`,
          icon: <Briefcase className="w-6 h-6" />,
        },
      ];
    }
    // Intermediate / Advanced career
    return [
      {
        phase: 1,
        title: 'Level Up Your Certifications',
        description: 'Target advanced certifications like OSCP, CEH, or CISSP to unlock senior and specialist positions.',
        duration: 'Weeks 1-4',
        ctaLabel: 'Explore Certifications',
        ctaUrl: `${BASE_URL}/certifications`,
        icon: <Award className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: 'Master Real-World Pentesting',
        description: 'Complete advanced pentest labs and simulations that demonstrate your skills to future employers.',
        duration: 'Weeks 5-10',
        ctaLabel: 'Advanced Pentest Labs',
        ctaUrl: `${BASE_URL}/pentest-lab`,
        icon: <Terminal className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: 'Build Your Professional Portfolio',
        description: 'Document your practical cases, write reports, and showcase your expertise to hiring managers.',
        duration: 'Weeks 11-14',
        ctaLabel: 'Practical Case Studies',
        ctaUrl: `${BASE_URL}/practical-cases`,
        icon: <FileText className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: 'Get Premium Career Support',
        description: 'Access exclusive mentoring, community networking, and job placement resources with Premium membership.',
        duration: 'Week 15+',
        ctaLabel: 'Join Premium',
        ctaUrl: `${BASE_URL}/ethical-hacker-prep-subscription`,
        icon: <Rocket className="w-6 h-6" />,
      },
    ];
  }

  // Knowledge / Personal path (default)
  if (level === 'beginner' || level === 'basic') {
    return [
      {
        phase: 1,
        title: 'Understand the Hacker Mindset',
        description: 'Learn how hackers think, what motivates them, and the ethical framework that guides responsible security research.',
        duration: 'Weeks 1-3',
        ctaLabel: 'Read the Complete Guide',
        ctaUrl: `${BASE_URL}/legally-hacking--the-complete-ethical-hacking-guide`,
        icon: <Brain className="w-6 h-6" />,
      },
      {
        phase: 2,
        title: 'Learn Core Security Concepts',
        description: 'Dive into networking, cryptography, web security, and common attack vectors at your own pace.',
        duration: 'Weeks 4-8',
        ctaLabel: 'Browse Courses',
        ctaUrl: `${BASE_URL}/courses`,
        icon: <BookOpen className="w-6 h-6" />,
      },
      {
        phase: 3,
        title: 'Try Hands-On Challenges',
        description: 'Put theory into practice with beginner-friendly security challenges and CTF exercises.',
        duration: 'Weeks 9-14',
        ctaLabel: 'Start Challenges',
        ctaUrl: `${BASE_URL}/security-challenges`,
        icon: <Target className="w-6 h-6" />,
      },
      {
        phase: 4,
        title: 'Protect Your Digital Life',
        description: 'Apply what you\'ve learned to secure your own devices, accounts, and online presence.',
        duration: 'Week 15+',
        ctaLabel: 'Download Security Kit',
        ctaUrl: `${BASE_URL}/downloadable-resources`,
        icon: <Lock className="w-6 h-6" />,
      },
    ];
  }

  // Knowledge + Intermediate/Advanced
  return [
    {
      phase: 1,
      title: 'Explore Advanced Topics',
      description: 'Dive into specialized areas: reverse engineering, malware analysis, cloud security, or IoT hacking.',
        duration: 'Weeks 1-4',
      ctaLabel: 'Advanced Courses',
      ctaUrl: `${BASE_URL}/courses`,
      icon: <Brain className="w-6 h-6" />,
    },
    {
      phase: 2,
      title: 'Build with Pentest Labs',
      description: 'Experiment freely in isolated lab environments. Break things, learn from mistakes, level up.',
      duration: 'Weeks 5-10',
      ctaLabel: 'Access Labs',
      ctaUrl: `${BASE_URL}/pentest-lab`,
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      phase: 3,
      title: 'Learn from Real Scenarios',
      description: 'Study real-world breach case studies and see how attacks unfold from reconnaissance to post-exploitation.',
      duration: 'Weeks 11-14',
      ctaLabel: 'Practical Cases',
      ctaUrl: `${BASE_URL}/practical-cases`,
      icon: <Target className="w-6 h-6" />,
    },
    {
      phase: 4,
      title: 'Stay Current & Go Deeper',
      description: 'Join the community, follow cybersecurity news, and keep expanding your knowledge base.',
      duration: 'Week 15+',
      ctaLabel: 'Join the Community',
      ctaUrl: `${BASE_URL}/ethical-hacker-prep-subscription`,
      icon: <Rocket className="w-6 h-6" />,
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
    <section className="min-h-screen px-4 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Profile header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-red-600/10 border border-red-500/20 text-sm text-brand-red-light">
            <Flame className="w-4 h-4" />
            Roadmap generated
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {profile.title}
          </h2>
          <p className="text-brand-muted text-lg">
            {profile.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-brand-surface border border-brand-border rounded-brand text-sm">
            <span className="text-brand-subtle">Estimated timeline:</span>
            <span className="text-white font-semibold">{profile.estimatedTime}</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-600/50 to-brand-border hidden sm:block" />

          <div className="space-y-6">
            {roadmap.map((step, index) => (
              <motion.div
                key={step.phase}
                className="relative flex gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              >
                {/* Phase indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-surface border-2 border-red-600 flex items-center justify-center text-brand-red-light font-bold text-sm">
                    {step.phase}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 p-5 sm:p-6 bg-brand-surface border border-brand-border rounded-brand-lg hover:border-red-500/30 transition-colors group">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-surface-alt border border-brand-border rounded-brand flex items-center justify-center text-brand-red-light group-hover:bg-red-600/10 transition-colors">
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-xs text-brand-subtle font-mono">{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-brand-muted text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Hard link CTA — ALWAYS <a> pointing to ethicalhackerprep.com */}
                  <a
                    href={step.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand-surface-alt border border-brand-border text-sm font-medium text-white rounded-brand hover:border-red-500/50 hover:bg-red-600/10 hover:text-red-400 transition-all group/cta"
                  >
                    {step.ctaLabel}
                    <ExternalLink className="w-3.5 h-3.5 text-brand-subtle group-hover/cta:text-red-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <motion.div
          className="mt-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href={`${BASE_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Rocket className="w-5 h-5" />
            Start Your Journey Now
            <ChevronRight className="w-5 h-5" />
          </a>

          <div>
            <a
              href={`${BASE_URL}/ethical-hacker-prep-subscription`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-red-500 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              Unlock Premium Access
            </a>
          </div>

          {/* Powered by */}
          <p className="text-xs text-brand-subtle mt-8">
            Powered by{' '}
            <a
              href={BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red-light hover:underline"
            >
              Ethical Hacker Prep
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
