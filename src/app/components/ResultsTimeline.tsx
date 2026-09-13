'use client';

import type { QuizAnswers } from './QuizEngine';

const BASE = 'https://ethicalhackerprep.com';

/* ─── Roadmap data: unique per goal × level combination ─── */
type Milestone = {
  step: string;
  title: string;
  desc: string;
  duration: string;
  link: string;
  linkLabel: string;
};

function getRoadmap(answers: QuizAnswers): { title: string; subtitle: string; milestones: Milestone[] } {
  const goal = answers.goal || 'certification';
  const level = answers.level || 'beginner';
  const time = answers.time || 'moderate';

  const pace = time === 'light' ? '6-8 months' : time === 'intensive' ? '2-3 months' : '4-5 months';

  // ─── CERTIFICATION PATH ───
  if (goal === 'certification') {
    if (level === 'beginner' || level === 'basic') {
      return {
        title: 'Your Certification Roadmap',
        subtitle: `Estimated timeline: ${pace} · Starting from ${level === 'beginner' ? 'zero' : 'IT foundations'}`,
        milestones: [
          { step: '01', title: 'Networking & OS Fundamentals', desc: 'Understand TCP/IP, DNS, subnetting, and Linux/Windows command-line operations. These are the building blocks of every hacking technique.', duration: '3 weeks', link: `${BASE}/learning-modules`, linkLabel: 'Start Learning Modules' },
          { step: '02', title: 'Security Concepts & Threat Landscape', desc: 'Learn the CIA triad, common attack vectors, malware types, social engineering tactics, and defense-in-depth strategies.', duration: '3 weeks', link: `${BASE}/courses`, linkLabel: 'Browse Security Courses' },
          { step: '03', title: 'CompTIA Security+ Exam Simulator', desc: 'Drill 1,500+ realistic exam questions covering domains like Risk Management, Cryptography, Identity Management, and Security Operations.', duration: '4 weeks', link: `${BASE}/simulation-comptia-security`, linkLabel: 'Launch Security+ Simulator' },
          { step: '04', title: 'Hands-On Penetration Testing Labs', desc: 'Apply your knowledge in real vulnerable environments. Practice scanning, exploitation, and privilege escalation on live machines.', duration: '3 weeks', link: `${BASE}/pentest-lab`, linkLabel: 'Enter Pentest Labs' },
          { step: '05', title: 'CEH Exam Preparation', desc: 'Master the 20 domains of the Certified Ethical Hacker exam with focused drills, cheat sheets, and timed mock exams.', duration: '4 weeks', link: `${BASE}/simulation-examen`, linkLabel: 'Start CEH Exam Prep' },
          { step: '06', title: 'Final Review & Exam Day Strategy', desc: 'Review weak areas, take a full-length timed practice exam, and learn proven test-day strategies for passing on your first attempt.', duration: '1 week', link: `${BASE}/certifications`, linkLabel: 'View Certification Paths' },
        ]
      };
    }
    // Intermediate / Advanced — certification
    return {
      title: 'Your Advanced Certification Roadmap',
      subtitle: `Estimated timeline: ${pace} · Building on your existing experience`,
      milestones: [
        { step: '01', title: 'Advanced Scanning & Enumeration', desc: 'Master Nmap scripting engine, service fingerprinting, and automated reconnaissance workflows for professional assessments.', duration: '2 weeks', link: `${BASE}/pentest-tools`, linkLabel: 'Explore Pentest Tools' },
        { step: '02', title: 'OSCP Lab Environment', desc: 'Attack realistic networks with multiple machines. Chain vulnerabilities, pivot through subnets, and document your findings like a pro.', duration: '6 weeks', link: `${BASE}/simulation-oscp`, linkLabel: 'Launch OSCP Simulator' },
        { step: '03', title: 'Web Application Hacking', desc: 'Deep dive into SQLi, XSS, SSRF, IDOR, and authentication bypass techniques on realistic web applications.', duration: '3 weeks', link: `${BASE}/security-challenges`, linkLabel: 'Start Security Challenges' },
        { step: '04', title: 'Advanced Exploitation & Post-Exploitation', desc: 'Buffer overflows, Active Directory attacks, Kerberoasting, pass-the-hash, and lateral movement techniques.', duration: '3 weeks', link: `${BASE}/practical-cases`, linkLabel: 'Practice Real Cases' },
        { step: '05', title: 'Professional Report Writing', desc: 'Create executive summaries and technical reports that meet industry standards. Essential for OSCP exam and real-world engagements.', duration: '1 week', link: `${BASE}/courses`, linkLabel: 'Report Writing Course' },
        { step: '06', title: 'Mock Exam & Final Prep', desc: 'Take a full 24-hour OSCP-style exam simulation. Receive feedback and refine your methodology before the real exam.', duration: '1 week', link: `${BASE}/simulation-oscp`, linkLabel: 'Take Mock Exam' },
      ]
    };
  }

  // ─── BUG BOUNTY PATH ───
  if (goal === 'bugbounty') {
    return {
      title: 'Your Bug Bounty Hunter Roadmap',
      subtitle: `Estimated timeline: ${pace} · ${level === 'beginner' || level === 'basic' ? 'From zero to first bounty' : 'From CTFs to real bounties'}`,
      milestones: [
        { step: '01', title: 'Web Fundamentals & HTTP Deep Dive', desc: 'Understand how web applications work: HTTP methods, headers, cookies, sessions, CORS, CSP, and browser security models.', duration: '2 weeks', link: `${BASE}/learning-modules`, linkLabel: 'Start Web Fundamentals' },
        { step: '02', title: 'Reconnaissance & Target Mapping', desc: 'Master subdomain enumeration, JavaScript analysis, parameter discovery, and building comprehensive attack surface maps of targets.', duration: '2 weeks', link: `${BASE}/pentest-tools`, linkLabel: 'Learn Recon Tools' },
        { step: '03', title: 'OWASP Top 10 Exploitation', desc: 'Hands-on exploitation of Injection, Broken Auth, XSS, IDOR, SSRF, and more on deliberately vulnerable applications.', duration: '4 weeks', link: `${BASE}/security-challenges`, linkLabel: 'OWASP Challenge Labs' },
        { step: '04', title: 'Advanced Bug Classes', desc: 'Race conditions, business logic flaws, OAuth misconfigurations, API security testing, and chained vulnerability exploitation.', duration: '3 weeks', link: `${BASE}/practical-cases`, linkLabel: 'Advanced Practice Cases' },
        { step: '05', title: 'Burp Suite Professional Mastery', desc: 'Complete workflow with Burp Suite: intercepting, scanning, intruder attacks, custom extensions, and collaborative testing.', duration: '2 weeks', link: `${BASE}/hacking-tools-kit`, linkLabel: 'Tools Training Kit' },
        { step: '06', title: 'Report Writing & Platform Onboarding', desc: 'Write impactful vulnerability reports that maximize bounty payouts. Set up your HackerOne and Bugcrowd profiles like a pro.', duration: '1 week', link: `${BASE}/courses`, linkLabel: 'Reporting Masterclass' },
      ]
    };
  }

  // ─── CAREER PATH ───
  if (goal === 'career') {
    return {
      title: 'Your Cybersecurity Career Roadmap',
      subtitle: `Estimated timeline: ${pace} · ${level === 'beginner' || level === 'basic' ? 'Breaking into cybersecurity' : 'Leveling up your career'}`,
      milestones: [
        { step: '01', title: 'Enterprise Networking & Linux', desc: 'Build the foundational skills every employer requires: TCP/IP mastery, Linux system administration, and Active Directory basics.', duration: '3 weeks', link: `${BASE}/learning-modules`, linkLabel: 'Start Foundations' },
        { step: '02', title: 'CompTIA Security+ Certification', desc: 'The #1 entry-level certification for cybersecurity jobs. Master all exam domains with our AI-powered simulator.', duration: '4 weeks', link: `${BASE}/simulation-comptia-security`, linkLabel: 'Security+ Simulator' },
        { step: '03', title: 'SOC Analyst Training (Tier 1)', desc: 'Learn SIEM tools, log analysis, alert triage, incident classification, and real-world Security Operations Center workflows.', duration: '3 weeks', link: `${BASE}/practical-cases`, linkLabel: 'SOC Practice Cases' },
        { step: '04', title: 'Incident Response & Forensics', desc: 'Build documented investigation reports from real breach scenarios. Evidence collection, timeline reconstruction, and root cause analysis.', duration: '3 weeks', link: `${BASE}/simulation-gsoc`, linkLabel: 'GSOC Simulator' },
        { step: '05', title: 'Penetration Testing Foundations', desc: 'Gain offensive skills that make you invaluable to any security team. Scanning, exploitation, and professional reporting.', duration: '3 weeks', link: `${BASE}/pentest-lab`, linkLabel: 'Enter Pentest Labs' },
        { step: '06', title: 'Interview Prep & Portfolio', desc: 'Build your cybersecurity portfolio, prepare for behavioral and technical interviews, and access our job board connections.', duration: '2 weeks', link: `${BASE}/communaute`, linkLabel: 'Join Community' },
      ]
    };
  }

  // ─── KNOWLEDGE / DEFENSE PATH ───
  return {
    title: 'Your Defense Mastery Roadmap',
    subtitle: `Estimated timeline: ${pace} · Building your security fortress`,
    milestones: [
      { step: '01', title: 'Attack Vectors & Threat Intelligence', desc: 'Understand how attackers think: reconnaissance techniques, common exploit chains, social engineering, and the cyber kill chain model.', duration: '2 weeks', link: `${BASE}/learning-modules`, linkLabel: 'Threat Intelligence Course' },
      { step: '02', title: 'Network Security & Hardening', desc: 'Configure firewalls, IDS/IPS, VPNs, network segmentation, and implement defense-in-depth strategies for home and enterprise networks.', duration: '3 weeks', link: `${BASE}/courses`, linkLabel: 'Network Security Course' },
      { step: '03', title: 'Offensive Security Mindset', desc: 'Learn to hack your own systems ethically. Penetration testing techniques that reveal weaknesses before attackers do.', duration: '3 weeks', link: `${BASE}/pentest-lab`, linkLabel: 'Practice in Labs' },
      { step: '04', title: 'Cryptography & Secure Communications', desc: 'Encryption algorithms, PKI, TLS/SSL, VPN protocols, password hashing, and implementing end-to-end secure architectures.', duration: '2 weeks', link: `${BASE}/security-challenges`, linkLabel: 'Crypto Challenges' },
      { step: '05', title: 'Cloud Security & Zero Trust', desc: 'Secure AWS/Azure environments, container security, IAM best practices, and implementing Zero Trust Architecture principles.', duration: '3 weeks', link: `${BASE}/practical-cases`, linkLabel: 'Cloud Security Cases' },
      { step: '06', title: 'CISSP/CISM Preparation', desc: 'For the ultimate defense credential: strategic-level security management, governance, risk assessment, and compliance frameworks.', duration: '4 weeks', link: `${BASE}/simulation-cissp`, linkLabel: 'CISSP Simulator' },
    ]
  };
}

export default function ResultsTimeline({ answers }: { answers: QuizAnswers }) {
  const roadmap = getRoadmap(answers);

  return (
    <div className="min-h-screen py-16 px-6 fade-in flex flex-col items-center">
      <div className="max-w-3xl w-full">

        {/* Roadmap "document" header */}
        <div className="text-center mb-12 pb-8 border-b border-gray-800">
          <div className="text-sm text-red-500 font-semibold uppercase tracking-widest mb-4">
            Personalized Learning Path
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {roadmap.title}
          </h1>
          <p className="text-lg text-gray-400">{roadmap.subtitle}</p>
        </div>

        {/* Milestones — vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-600/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {roadmap.milestones.map((item, idx) => (
              <div key={idx} className="relative sm:pl-16">
                {/* Step circle on the line */}
                <div className="absolute left-0 top-6 w-12 h-12 bg-red-600/10 border-2 border-red-600 rounded-full flex items-center justify-center text-red-500 font-bold text-sm hidden sm:flex">
                  {item.step}
                </div>

                {/* Card */}
                <div className="bg-white/[0.03] border border-gray-800 rounded-2xl p-8 hover:border-red-600/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="sm:hidden text-red-500 font-bold text-lg">{item.step}</span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                      ⏱ {item.duration}
                    </span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-red-500 hover:text-red-400 font-medium transition-colors"
                    >
                      {item.linkLabel} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary badge */}
        <div className="mt-12 p-6 border border-gray-800 rounded-2xl bg-white/[0.02] text-center">
          <div className="text-sm text-gray-500 mb-2">Your profile</div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-red-600/10 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium border border-red-600/20">
              Goal: {answers.goal}
            </span>
            <span className="bg-red-600/10 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium border border-red-600/20">
              Level: {answers.level}
            </span>
            <span className="bg-red-600/10 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium border border-red-600/20">
              Pace: {answers.time}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-red-600/20"
          >
            Start Training on Ethical Hacker Prep
          </a>
          <p className="text-sm text-gray-500 mt-3">Free tier available · No credit card required</p>
        </div>

      </div>
    </div>
  );
}
