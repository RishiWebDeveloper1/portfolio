"use client";

import { MapPin, Calendar, Award } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Frontend / Full-Stack Developer",
      company: "LNV Softwares",
      location: "Ambernath, MH, India",
      period: "Aug 2025 – Sep 2026",
      type: "Enterprise ERP",
      summary:
        "Architected core modules for enterprise ERP & HRMS platforms using Next.js, React 19, and Node.js. Optimized client-server caching with Redux Toolkit, reducing initial page load times by over 40%.",
      highlights: [
        "Delivered resilient workflows and data-dense dashboards for high-throughput enterprise users.",
        "Engineered reusable UI component systems and integrated secure RESTful endpoints.",
      ],
      stack: ["Next.js", "React.js", "Node.js", "Express.js", "Redux Toolkit", "Tailwind CSS"],
    },
    {
      role: "Freelance Full-Stack Developer & Consultant",
      company: "Independent Client Practice",
      location: "Remote / Hybrid",
      period: "Jan 2025 – Jul 2025",
      type: "Client Solutions",
      summary:
        "Delivered high-performance production web platforms for commercial enterprises including Gauri Enterprises (B2B electrical e-commerce) and Pruxr Design Studio (100/100 Lighthouse performance).",
      highlights: [
        "Built custom Node.js/MongoDB inventory engines and real-time SKU management pipelines.",
        "Implemented structured JSON-LD schemas and responsive architectures for local discovery.",
      ],
      stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    },
  ];

  const education = {
    degree: "B.Sc. in Information Technology",
    institution: "L.D. Sonawane College",
    period: "Graduated May 2025",
    grade: "9.2 CGPA (Distinction)",
    summary:
      "Core computing foundations in algorithms, database normalization, networks, and full-stack software architecture.",
  };

  return (
    <section id="experience" className="py-14 md:py-20 bg-[#0A0F1C] border-b border-[#2B3950]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="pb-6 border-b border-[#2B3950]/60">
          <p className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
            03 / Career Record
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F5F9]">
            Professional experience & academics.
          </h2>
        </div>

        {/* Compact Structured Career History */}
        <div className="divide-y divide-[#2B3950]/60">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start group"
            >
              {/* Left Column: Period & Location (4 cols) */}
              <div className="lg:col-span-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#60A5FA] font-bold">
                    EXP 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111B2D] border border-[#2B3950] text-[#94A3B8]">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm font-mono text-[#F1F5F9] font-medium">
                  {exp.period}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                  <MapPin size={12} className="text-[#60A5FA]" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Role, Company & Highlights (8 cols) */}
              <div className="lg:col-span-8 space-y-2.5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] tracking-tight group-hover:text-[#60A5FA] transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-[#60A5FA]">
                    @ {exp.company}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Compact Highlights */}
                <ul className="space-y-1 text-xs text-[#94A3B8] font-sans">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111B2D] border border-[#2B3950]/80 text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Academic Foundation Row (Compact) */}
          <div className="py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
            <div className="lg:col-span-4 space-y-1.5">
              <span className="text-[11px] font-mono text-[#34D399] font-bold">
                ACADEMICS
              </span>
              <p className="text-sm font-mono text-[#F1F5F9] font-medium">
                {education.period}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#34D399]">
                <Award size={12} />
                <span>{education.grade}</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-1.5">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] tracking-tight">
                  {education.degree}
                </h3>
                <span className="text-xs font-mono text-[#94A3B8]">
                  — {education.institution}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {education.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
