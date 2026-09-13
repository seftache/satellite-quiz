import { Shield } from 'lucide-react';

const BASE_URL = 'https://ethicalhackerprep.com';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <a
            href={BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-white transition-colors"
          >
            <Shield className="w-5 h-5 text-brand-red" />
            <span className="text-sm font-medium">Ethical Hacker Prep</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-brand-subtle">
            <a
              href={`${BASE_URL}/privacy-policy`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red-light transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href={`${BASE_URL}/terms-of-use`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red-light transition-colors"
            >
              Terms of Use
            </a>
            <a
              href={`${BASE_URL}/contact`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red-light transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-brand-subtle">
          © {new Date().getFullYear()} Ethical Hacker Prep. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
