'use client';

export default function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen flex flex-col fade-in">
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-white/5">
        <div className="font-semibold text-lg tracking-tight">Ethical Hacker Prep</div>
        <a 
          href="https://ethicalhackerprep.com" 
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Main Platform →
        </a>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
          The modern way to master <br/>
          <span className="text-red-600">Ethical Hacking.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
          A structured, interactive roadmap tailored to your exact level and goals. Real labs, zero fluff.
        </p>

        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-red-600/20"
        >
          Generate My Roadmap
        </button>

        <p className="text-sm text-gray-500 mt-4">60 seconds · No registration required · 100% free</p>
      </main>
    </div>
  );
}
