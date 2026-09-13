'use client';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* SEO Content Section — How It Works (like DocuExpress "Comment ça marche") */}
        <section className="mb-16" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-2xl font-bold text-white mb-8 text-center">
            How to Learn Ethical Hacking — Step by Step
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-3">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Define Your Goal</h3>
              <p className="text-gray-400 text-sm">Choose between ethical hacking certification (CEH, Security+, OSCP), bug bounty hunting, career transition, or personal defense mastery.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-3">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Get Your Custom Roadmap</h3>
              <p className="text-gray-400 text-sm">Our algorithm builds a personalized ethical hacking course plan based on your experience level and weekly time commitment.</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-3">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Hands-On Training</h3>
              <p className="text-gray-400 text-sm">Follow your roadmap on Ethical Hacker Prep with real penetration testing labs, exam simulators, and guided hacking tutorials.</p>
            </div>
          </div>
        </section>

        {/* SEO Content — FAQ visible on page (matches FAQ schema in layout.tsx) */}
        <section className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions About Ethical Hacking
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <details className="border border-gray-800 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer">How long does it take to learn ethical hacking?</summary>
              <p className="text-gray-400 text-sm mt-3">With a structured roadmap, most beginners can achieve their first certification (CompTIA Security+) in 3-6 months studying 5-8 hours per week. Bug bounty hunting skills can be developed in 2-4 months of intensive practice on real vulnerable applications.</p>
            </details>
            <details className="border border-gray-800 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer">What certification should I get first for ethical hacking?</summary>
              <p className="text-gray-400 text-sm mt-3">For absolute beginners, CompTIA Security+ is the recommended starting point. If you already have IT experience, the Certified Ethical Hacker (CEH v13) is ideal. For advanced practitioners targeting offensive security roles, OSCP is the gold standard recognized by employers worldwide.</p>
            </details>
            <details className="border border-gray-800 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer">Can I learn ethical hacking without any IT experience?</summary>
              <p className="text-gray-400 text-sm mt-3">Yes! Our personalized roadmap generator adapts to complete beginners. The ethical hacking tutorial starts with networking fundamentals, Linux basics, and gradually introduces offensive security concepts with hands-on penetration testing labs designed for people with zero prior experience.</p>
            </details>
            <details className="border border-gray-800 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer">Is this ethical hacking roadmap really free?</summary>
              <p className="text-gray-400 text-sm mt-3">Yes, the roadmap generator is 100% free with no registration required. Answer 3 quick questions and receive your personalized step-by-step ethical hacking course plan in 60 seconds. The training platform offers both free and premium content.</p>
            </details>
            <details className="border border-gray-800 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer">What is the best way to learn hacking step by step?</summary>
              <p className="text-gray-400 text-sm mt-3">The best approach is a structured roadmap: 1) Learn networking and Linux fundamentals, 2) Study for a certification like CEH or Security+, 3) Practice on hands-on penetration testing labs with real vulnerable machines, 4) Build real-world experience through bug bounty programs on platforms like HackerOne and Bugcrowd.</p>
            </details>
          </div>
        </section>

        {/* SEO Content — Keyword-rich trust section */}
        <section className="mb-16 text-center" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-2xl font-bold text-white mb-4">
            The #1 Ethical Hacking Course Roadmap Generator
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Whether you want to learn ethical hacking from scratch, prepare for the CEH certification exam, start a career in cybersecurity, or master penetration testing techniques — our free roadmap generator creates a personalized ethical hacking tutorial tailored to your exact level. Built by <a href="https://ethicalhackerprep.com" className="text-red-500 hover:text-red-400 underline">Ethical Hacker Prep</a>, the leading hands-on cybersecurity training platform with real offensive security labs, exam simulators, and guided hacking courses for beginners and professionals.
          </p>
        </section>

        {/* Bottom links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Ethical Hacker Prep. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="https://ethicalhackerprep.com" className="hover:text-white transition-colors">Main Platform</a>
            <a href="https://ethicalhackerprep.com/courses" className="hover:text-white transition-colors">Courses</a>
            <a href="https://ethicalhackerprep.com/pentest-lab" className="hover:text-white transition-colors">Labs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
