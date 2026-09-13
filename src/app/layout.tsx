import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = 'https://howtolearnhacking-ethicalhackingcourse-ethicalhackingtutorial.site';
const MAIN_URL = 'https://ethicalhackerprep.com';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Free Ethical Hacking Roadmap Generator | Learn Hacking Step by Step (2026)",
    template: "%s | Ethical Hacking Roadmap",
  },

  description: "Generate your personalized ethical hacking roadmap in 60 seconds. Answer 3 questions and receive a step-by-step learning plan for CEH, Security+, OSCP certifications, penetration testing, and bug bounty hunting. 100% free, no registration required. The #1 ethical hacking course roadmap generator for beginners.",

  keywords: [
    // Primary EMD targets (matching the domain name)
    'how to learn hacking',
    'ethical hacking course',
    'ethical hacking tutorial',
    'learn ethical hacking',

    // High-volume head terms
    'ethical hacking roadmap',
    'how to learn hacking step by step',
    'free ethical hacking course',
    'cybersecurity learning path',
    'ethical hacking for beginners',
    'how to become an ethical hacker',

    // Long-tail certification queries
    'ethical hacking certification path',
    'CEH certification roadmap',
    'OSCP preparation path',
    'CompTIA Security+ study plan',
    'cybersecurity certification guide',
    'penetration testing roadmap',

    // Career & skills queries
    'cybersecurity career roadmap',
    'learn hacking from scratch',
    'hacking tutorial for beginners',
    'cybersecurity beginner guide',
    'learn Kali Linux',
    'learn penetration testing',
    'bug bounty roadmap',
    'cybersecurity skills assessment',

    // French long-tail (bilingual SEO)
    'apprendre le hacking éthique',
    'formation hacking éthique gratuite',
    'cours cybersécurité débutant',
    'roadmap cybersécurité',
    'comment devenir hacker éthique',
  ],

  authors: [{ name: 'Ethical Hacker Prep', url: MAIN_URL }],
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
    description: "Answer 3 quick questions and get a custom step-by-step plan to start your cybersecurity career. No experience needed. 100% free, no registration.",
    url: SITE_URL,
    siteName: 'Ethical Hacking Roadmap Generator',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ethical Hacking Roadmap Generator - Free Personalized Learning Path',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@EthicalHackerPrep',
    creator: '@AlphaOGadjico',
    title: 'Free Ethical Hacking Roadmap — Personalized in 60 Seconds',
    description: 'Get your custom cybersecurity learning path. No experience required. 100% free.',
    images: [`${SITE_URL}/og-image.png`],
  },

  category: 'Technology & Computing > Cybersecurity',

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  other: {
    'google-site-verification': 'googleb40446a29b413213',
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
        {/* Google Analytics — Comme DocuExpress (remplace par ton propre ID GA) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Preconnect pour vitesse (technique DocuExpress) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://ethicalhackerprep.com" />

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
                "url": MAIN_URL
              }
            }),
          }}
        />

        {/* HowTo structured data — Google Rich Snippet */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Start Learning Ethical Hacking",
              "description": "A step-by-step guide to begin your ethical hacking journey, personalized based on your goals and experience.",
              "image": `${SITE_URL}/og-image.png`,
              "totalTime": "PT1M",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Define Your Goal",
                  "text": "Choose whether you want to get certified (CEH, Security+), start bug bounty hunting, land a cybersecurity job, or learn for personal knowledge.",
                  "url": SITE_URL
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Assess Your Level",
                  "text": "Evaluate your current technical knowledge from complete beginner to advanced IT professional.",
                  "url": SITE_URL
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Set Your Weekly Pace",
                  "text": "Determine how many hours per week you can dedicate to learning ethical hacking.",
                  "url": SITE_URL
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Follow Your Personalized Roadmap",
                  "text": "Receive a custom learning plan with specific courses, labs, exam simulators and resources tailored to your profile.",
                  "url": SITE_URL
                }
              ]
            }),
          }}
        />

        {/* Organization schema — Comme DocuExpress */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ethical Hacker Prep",
              "url": MAIN_URL,
              "logo": `${MAIN_URL}/icon.png`,
              "description": "The #1 Platform for Ethical Hacking simulations, cybersecurity certification preparation, and hands-on penetration testing labs.",
              "sameAs": [
                SITE_URL
              ]
            }),
          }}
        />

        {/* FAQ Schema — Technique avancée pour apparaître dans les "People Also Ask" de Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to learn ethical hacking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With a structured roadmap, most beginners can achieve their first certification (CompTIA Security+) in 3-6 months studying 5-8 hours per week. Bug bounty hunting skills can be developed in 2-4 months of intensive practice."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What certification should I get first for ethical hacking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For absolute beginners, CompTIA Security+ is the recommended starting point. If you already have IT experience, the Certified Ethical Hacker (CEH) is ideal. For advanced practitioners, OSCP is the gold standard."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I learn ethical hacking without any IT experience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our personalized roadmap generator adapts to complete beginners. It starts with networking fundamentals, Linux basics, and gradually introduces offensive security concepts with hands-on labs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this ethical hacking roadmap really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the roadmap generator is 100% free with no registration required. Answer 3 quick questions and receive your personalized step-by-step learning plan in 60 seconds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best way to learn hacking step by step?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best approach is a structured roadmap: 1) Learn networking and Linux fundamentals, 2) Study for a certification like CEH or Security+, 3) Practice on hands-on penetration testing labs, 4) Build real-world experience through bug bounty programs."
                  }
                }
              ]
            }),
          }}
        />

        {/* WebSite schema for Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ethical Hacking Roadmap Generator",
              "url": SITE_URL,
              "description": "Generate your personalized ethical hacking learning path in 60 seconds. Free, no registration required.",
              "publisher": {
                "@type": "Organization",
                "name": "Ethical Hacker Prep",
                "url": MAIN_URL
              }
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
