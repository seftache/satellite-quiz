import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://howtolearnhacking-ethicalhackingcourse-ethicalhakingtutorial.site'),

  title: {
    default: "Free Ethical Hacking Roadmap Generator | Learn Hacking Step by Step",
    template: "%s | Ethical Hacking Roadmap",
  },

  description: "Get your personalized ethical hacking roadmap in 60 seconds. Answer 3 questions and receive a step-by-step learning plan for cybersecurity certifications, penetration testing, and bug bounty hunting. Perfect beginner hacking tutorial.",

  keywords: [
    // Primary targets
    'learn ethical hacking course',
    'beginner hacking tutorial',
    'ethical hacking roadmap',
    'how to learn hacking step by step',
    'free ethical hacking course',
    'cybersecurity learning path',

    // Long-tail variations
    'ethical hacking for beginners',
    'how to become an ethical hacker',
    'ethical hacking certification path',
    'penetration testing roadmap',
    'cybersecurity career roadmap',
    'learn hacking from scratch',
    'hacking tutorial for beginners',
    'cybersecurity beginner guide',
    'ethical hacking training plan',

    // Certification-related
    'CEH certification roadmap',
    'OSCP preparation path',
    'CompTIA Security+ study plan',
    'cybersecurity certification guide',

    // Tool/skill queries
    'learn Kali Linux',
    'learn penetration testing',
    'bug bounty roadmap',
    'cybersecurity skills assessment',
    'hacking skills quiz',
  ],

  authors: [{ name: 'Ethical Hacker Prep' }],
  creator: 'Ethical Hacker Prep',
  publisher: 'Ethical Hacker Prep',

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': 320,
    },
  },

  openGraph: {
    title: "Free Ethical Hacking Roadmap Generator — Personalized in 60 Seconds",
    description: "Answer 3 quick questions and get a custom step-by-step plan to start your cybersecurity career. No experience needed.",
    url: 'https://howtolearnhacking-ethicalhackingcourse-ethicalhakingtutorial.site',
    siteName: 'Ethical Hacking Roadmap Generator',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    site: '@EthicalHackerPrep',
    creator: '@AlphaOGadjico',
    title: 'Free Ethical Hacking Roadmap — Personalized in 60 Seconds',
    description: 'Get your custom cybersecurity learning path. No experience required.',
  },

  category: 'Technology & Computing > Cybersecurity',

  alternates: {
    canonical: 'https://howtolearnhacking-ethicalhackingcourse-ethicalhakingtutorial.site',
  },

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Quiz structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Quiz",
              "name": "Ethical Hacking Roadmap Generator",
              "description": "A personalized quiz that generates your custom ethical hacking learning roadmap based on your goals, experience level, and available time.",
              "educationalLevel": "beginner",
              "about": {
                "@type": "Thing",
                "name": "Ethical Hacking",
                "description": "Learning path for cybersecurity and ethical hacking"
              },
              "provider": {
                "@type": "Organization",
                "name": "Ethical Hacker Prep",
                "url": "https://ethicalhackerprep.com"
              }
            }),
          }}
        />

        {/* HowTo structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Start Learning Ethical Hacking",
              "description": "A step-by-step guide to begin your ethical hacking journey, personalized based on your goals and experience.",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Define Your Goal",
                  "text": "Choose whether you want to get certified, start bug bounty hunting, land a cybersecurity job, or learn for personal knowledge."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Assess Your Level",
                  "text": "Evaluate your current technical knowledge from complete beginner to advanced practitioner."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Set Your Pace",
                  "text": "Determine how many hours per week you can dedicate to learning ethical hacking."
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Follow Your Personalized Roadmap",
                  "text": "Receive a custom learning plan with specific courses, labs, and resources tailored to your profile."
                }
              ],
              "totalTime": "PT1M"
            }),
          }}
        />

        {/* Organization schema linking back to main site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ethical Hacker Prep",
              "url": "https://ethicalhackerprep.com",
              "logo": "https://ethicalhackerprep.com/icon.png",
              "description": "The #1 Platform for Ethical Hacking simulations and cybersecurity certification preparation.",
              "sameAs": [
                "https://howtolearnhacking-ethicalhackingcourse-ethicalhakingtutorial.site"
              ]
            }),
          }}
        />
      </head>

      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
