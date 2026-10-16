"use client";

import Image from "next/image";
import { Terminal } from "lucide-react";

export default function SkillsSection() {
  // Row 1: Exclusively Core Programming & Web Languages (Scrolls RIGHT)
  const row1 = [
    { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
    { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
    { name: "Python", icon: "/tech-icons/python.svg" },
    { name: "Java", icon: "/tech-icons/java.svg" },
    { name: "C++", icon: "/tech-icons/cplusplus.svg" },
    { name: "PHP", icon: "/tech-icons/php.svg" },
    { name: "HTML5", icon: "/tech-icons/html5.svg" },
    { name: "CSS3", icon: "/tech-icons/css3.svg" },
  ];

  // Row 2: Exclusively Frameworks, Libraries & Runtime (Scrolls LEFT)
  const row2 = [
    { name: "React", icon: "/tech-icons/react.svg" },
    { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/tailwindcss.svg" },
    { name: "Redux Toolkit", icon: "/tech-icons/redux.svg" },
    { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
    { name: "Express.js", icon: "/tech-icons/express.svg" },
    { name: "Bootstrap", icon: "/tech-icons/bootstrap.svg" },
    { name: "Sass", icon: "/tech-icons/sass.svg" },
  ];

  // Row 3: Exclusively Databases, DevOps & Developer Tools (Scrolls RIGHT)
  const row3 = [
    { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
    { name: "MySQL", icon: "/tech-icons/mysql.svg" },
    { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
    { name: "Docker", icon: "/tech-icons/docker.svg" },
    { name: "Git", icon: "/tech-icons/git.svg" },
    { name: "Postman", icon: "/tech-icons/postman.svg" },
    { name: "Vercel", icon: "/tech-icons/vercel.svg" },
    { name: "VS Code", icon: "/tech-icons/vscode.svg" },
  ];

  const rows = [
    { id: "r1", direction: "right", items: row1 },
    { id: "r2", direction: "left", items: row2 },
    { id: "r3", direction: "right", items: row3 },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0A0F1C] border-b border-[#2B3950]/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-10 border-b border-[#2B3950]/60">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
              01 / Technical Stack
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F5F9]">
              Technologies & programming languages.
            </h2>
          </div>
        </div>
      </div>

      {/* 3 FULL-WIDTH CONTINUOUS AUTO-SCROLLING ROWS (Pure icons only: No text, No background cards) */}
      <div className="mt-14 space-y-6 sm:space-y-8">
        {rows.map((row) => {
          const isScrollLeft = row.direction === "left";

          return (
            <div
              key={row.id}
              className="relative w-full overflow-hidden py-3 marquee-container"
            >
              {/* Left Edge Smooth Gradient Fade */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-[#0A0F1C] to-transparent z-10" />

              {/* Right Edge Smooth Gradient Fade */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-[#0A0F1C] to-transparent z-10" />

              {/* Continuous Infinite Ticker Track */}
              <div className={isScrollLeft ? "animate-marquee-left flex items-center" : "animate-marquee-right flex items-center"}>
                {[...row.items, ...row.items, ...row.items, ...row.items].map((tech, index) => (
                  <div
                    key={`${row.id}-${tech.name}-${index}`}
                    className="mx-6 sm:mx-9 shrink-0 flex items-center justify-center group cursor-pointer"
                    title={tech.name}
                    aria-label={tech.name}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] group-hover:scale-125 group-hover:drop-shadow-[0_8px_22px_rgba(96,165,250,0.35)] transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info Notice */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-6 border-t border-[#2B3950]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#60A5FA]" />
          <span>Hover any row to pause • Real production tech stack verified through Git</span>
        </div>

        <a
          href="https://github.com/RishiWebDeveloper1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#60A5FA] hover:text-[#93C5FD] transition-colors inline-flex items-center gap-1.5 font-medium"
        >
          <span>View GitHub Repositories</span>
        </a>
      </div>
    </section>
  );
}
