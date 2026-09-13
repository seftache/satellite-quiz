import { Shield, ArrowUpRight } from 'lucide-react';

const BASE_URL = 'https://ethicalhackerprep.com';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border/80 bg-black/90 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle top red laser accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand with Filmbot-style badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center">
            <Shield className="w-5 h-5 text-brand-red" />
          </div>
          <div>
            <a
              href={BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <span>Ethical Hacker Prep</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-subtle" />
            </a>
            <div className="tech-superscript text-brand-subtle">
              [ OFFICIAL SATELLITE ROADMAP FUNNEL ]
            </div>
          </div>
        </div>

        {/* Links to main platform */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-brand-muted">
          <a
            href={`${BASE_URL}/courses`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red-light transition-colors"
          >
            All Courses
          </a>
          <span className="text-brand-border">/</span>
          <a
            href={`${BASE_URL}/certifications`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red-light transition-colors"
          >
            Certifications
          </a>
          <span className="text-brand-border">/</span>
          <a
            href={`${BASE_URL}/pentest-lab`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red-light transition-colors"
          >
            Pentest Labs
          </a>
          <span className="text-brand-border">/</span>
          <a
            href={`${BASE_URL}/privacy-policy`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red-light transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-brand-border">/</span>
          <a
            href={`${BASE_URL}/terms-of-use`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-red-light transition-colors"
          >
            Terms of Use
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-brand-subtle text-center md:text-right">
          © {new Date().getFullYear()} Ethical Hacker Prep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
