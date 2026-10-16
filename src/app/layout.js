import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rishi-vishwakarma.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rishi Vishwakarma | Full-Stack Developer & Software Engineer",
    template: "%s | Rishi Vishwakarma",
  },
  description:
    "Official portfolio of Rishi Vishwakarma, Full-Stack Developer & Software Engineer specializing in high-performance React, Next.js, Node.js, Express, MongoDB, and enterprise ERP architectures. Explore live production web applications, technical skillsets, and software engineering experience.",
  applicationName: "Rishi Vishwakarma Portfolio",
  authors: [
    {
      name: "Rishi Vishwakarma",
      url: "https://github.com/RishiWebDeveloper1",
    },
  ],
  generator: "Next.js",
  keywords: [
    "Rishi Vishwakarma",
    "Rishi R. Vishwakarma",
    "Rishi Vishwakarma Developer",
    "Rishi Vishwakarma Portfolio",
    "Rishi Vishwakarma Full Stack",
    "Rishi Web Developer",
    "rishi.dev",
    "Full-Stack Developer",
    "Software Engineer Mumbai India",
    "Next.js Developer",
    "React Developer",
    "Node.js Engineer",
    "Express.js Backend",
    "MongoDB Database",
    "MERN Stack Specialist",
    "Enterprise ERP Architect",
    "Pruxr Design Studio",
    "Gauri Enterprises",
    "Todo Masters",
    "RCT Private Tuition",
    "Vishwakarma Interiors",
    "Nitya Interior",
    "Web Performance Optimization",
    "Tailwind CSS Expert",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Rishi Vishwakarma",
  publisher: "Rishi Vishwakarma",
  category: "technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Rishi",
    lastName: "Vishwakarma",
    username: "RishiWebDeveloper1",
    gender: "male",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rishi Vishwakarma — Portfolio",
    title: "Rishi Vishwakarma | Full-Stack Developer & Software Engineer",
    description:
      "Official portfolio of Rishi Vishwakarma. Full-Stack Developer engineering enterprise ERP platforms, modern Next.js web applications, and resilient Node.js systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rishi Vishwakarma — Full-Stack Developer & Software Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Vishwakarma | Full-Stack Developer & Software Engineer",
    description:
      "Official portfolio of Rishi Vishwakarma. Explore production-grade Next.js, React, Node.js, and Enterprise Web Applications.",
    images: ["/og-image.png"],
    creator: "@RishiDev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport = {
  themeColor: "#0A0F1C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Comprehensive Schema.org JSON-LD graph optimized for Google Rich Snippets & AI Search (ChatGPT, Perplexity, Claude, Gemini)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Rishi Vishwakarma",
      alternateName: [
        "Rishi R. Vishwakarma",
        "RishiDev",
        "rishi.dev",
        "RishiWebDeveloper1",
      ],
      jobTitle: "Full-Stack Developer & Software Engineer",
      description:
        "Full-Stack Developer specializing in modern web engineering, React, Next.js, Node.js, Express, MongoDB, and enterprise ERP architectures.",
      url: siteUrl,
      image: `${siteUrl}/developer-cutout.png`,
      email: "mailto:rishivishwa4877@gmail.com",
      sameAs: [
        "https://github.com/RishiWebDeveloper1",
        "https://linkedin.com/in/rishi-vishwakarma-dev",
        "https://pruxrdesign.com/",
        "https://gaurienterprises.vercel.app/",
        "https://vishwakarmainterior.co/",
        "https://nityainterior.vercel.app/",
        "https://todo-masters.vercel.app/",
        "https://rct-private-tuition.vercel.app/",
      ],
      knowsAbout: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "Enterprise ERP Systems",
        "Full-Stack Web Development",
        "RESTful APIs",
        "Tailwind CSS",
        "Performance Optimization",
        "Database Architecture",
        "UI/UX Engineering",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "V.K. Krishna Menon College",
        alternateName: "Mumbai University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Rishi Vishwakarma Portfolio",
      alternateName: "Rishi Vishwakarma Official Website",
      author: { "@id": `${siteUrl}/#person` },
      description:
        "Official engineering portfolio of Rishi Vishwakarma featuring production full-stack systems, ERP architectures, and verified client web applications.",
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Rishi Vishwakarma | Full-Stack Developer & Software Engineer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Production Web Applications Engineered by Rishi Vishwakarma",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Pruxr Design Studio",
            url: "https://pruxrdesign.com/",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web",
            description:
              "High-performance digital design agency web experience featuring fluid spatial layouts and 100/100 Lighthouse performance metrics.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Gauri Enterprises",
            url: "https://gaurienterprises.vercel.app/",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Commercial hardware & electrical catalog engineered with dynamic SKU filtering, real-time inventory tracking, and high-concurrency Node.js/MongoDB APIs.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Vishwakarma Interiors",
            url: "https://vishwakarmainterior.co/",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Mobile-first spatial showcase with responsive project galleries, bespoke carpentry specifications, and direct customer inquiry conversion funnel.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "SoftwareApplication",
            name: "Nitya Interior",
            url: "https://nityainterior.vercel.app/",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Search-optimized residential architecture portfolio featuring modular kitchen showcases, structured JSON-LD schemas, and fast lazy-loaded media pipelines.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "SoftwareApplication",
            name: "Todo Masters",
            url: "https://todo-masters.vercel.app/",
            applicationCategory: "ProductivityApplication",
            operatingSystem: "Web",
            description:
              "Interactive productivity platform with drag-and-drop Kanban workflows, persistent MongoDB state with atomic updates, and secure JWT authentication.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "SoftwareApplication",
            name: "Class Management System",
            url: "https://rct-private-tuition.vercel.app/",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            description:
              "Educational system for students and instructors featuring dynamic scheduling, course analytics, and grade performance tracking built on Next.js.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0F1C] text-[#CBD5E1] antialiased selection:bg-blue-500/25 selection:text-[#F1F5F9]">
        {children}
      </body>
    </html>
  );
}
