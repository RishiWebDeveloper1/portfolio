"use client";

import Image from "next/image";
import { Mail, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-[#0A0F1C] border-b border-[#2B3950]/60 overflow-hidden"
    >
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-950/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-950/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Headline, Bio, Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Editorial Metadata Bar */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#94A3B8]">/
              <span className="text-[#60A5FA] font-semibold tracking-wider uppercase">
                FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Bold Name & Editorial Quote */}
            <div className="space-y-3.5">
              <h1 className="text-3xl min-[400px]:text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F1F5F9] leading-[1.05]">
                Rishi Vishwakarma
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl font-medium text-[#CBD5E1] tracking-tight leading-snug">
                &ldquo;Building robust web systems, scaling digital products, crafting seamless experiences.&rdquo;
              </p>
              <p className="text-xs sm:text-base text-[#94A3B8] leading-relaxed max-w-xl font-normal pt-1">
                Full-stack developer with 1.5+ years of hands-on production experience engineering enterprise ERP platforms, modern Next.js web applications, and resilient Node.js backends.
              </p>
            </div>

            {/* Action Buttons: Download Resume & Contact */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Dedicated Resume Download Action (Primary CTA) */}
              <a
                href="/rishi-vishwakarma-resume.pdf"
                download="Rishi_Vishwakarma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg text-sm font-semibold bg-[#60A5FA] hover:bg-[#93C5FD] text-[#0A0F1C] transition-all cursor-pointer group shadow-sm w-full min-[460px]:w-auto"
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* Direct Contact Action */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-[#182338] hover:bg-[#202E45] border border-[#2B3950] text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#60A5FA]/40 transition-all cursor-pointer w-full min-[460px]:w-auto"
              >
                <Mail size={15} className="text-[#60A5FA]" />
                <span>Contact</span>
              </a>
            </div>

            {/* Clean Verification Keypoints Ribbon */}
            <div className="pt-6 border-t border-[#2B3950]/60 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-[#F1F5F9]">1.5+ Yrs</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">Enterprise ERP</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-[#60A5FA]">6 Proj</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">Live Production</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold font-mono text-[#34D399]">9.2</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mt-0.5">CGPA Distinction</p>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Cutout PNG with Edgeless Circular Designer Background (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] flex items-end justify-center">
              {/* 1. Atmospheric Radial Glows (Pure edgeless light halos) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full bg-gradient-to-tr from-[#60A5FA]/25 via-sky-500/15 to-transparent blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-indigo-600/20 blur-2xl pointer-events-none" />

              {/* 2. Outer Orbital Ring (Edgeless circular path) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[410px] lg:h-[410px] rounded-full border border-[#2B3950]/60 pointer-events-none" />

              {/* 3. Subtle Dashed Rotating Orbital Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[370px] lg:h-[370px] rounded-full border border-dashed border-[#60A5FA]/30 pointer-events-none animate-[spin_60s_linear_infinite]" />

              {/* 4. Primary Designer Circular Disk (Edgeless smooth circular background) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] lg:w-[330px] lg:h-[330px] rounded-full bg-gradient-to-b from-[#182338]/95 via-[#111B2D]/90 to-[#0A0F1C]/60 border border-[#2B3950] shadow-2xl overflow-hidden pointer-events-none">
                {/* Subtle Dot Matrix & Grid Pattern inside the circle */}
                <div className="absolute inset-0 bg-dot-matrix opacity-35" />
                <div className="absolute inset-0 bg-grid-subtle opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-[#60A5FA]/20" />
              </div>

              {/* 5. Minimal Designer Accent Elements (No text cards) */}
              <div className="absolute top-16 right-4 sm:right-6 w-2.5 h-2.5 rounded-full bg-[#60A5FA] shadow-[0_0_12px_#60A5FA] animate-pulse pointer-events-none" />
              <div className="absolute bottom-28 left-2 sm:left-4 w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_10px_#34D399] pointer-events-none" />
              <div className="absolute top-28 left-6 text-[10px] font-mono text-[#94A3B8]/40 select-none pointer-events-none">
                +
              </div>
              <div className="absolute bottom-36 right-8 text-[10px] font-mono text-[#94A3B8]/40 select-none pointer-events-none">
                +
              </div>

              {/* 6. The Clean Cutout Transparent PNG (Stands in front of the edgeless circle) */}
              <div className="relative z-20 w-full h-[98%] flex items-end justify-center">
                <Image
                  src="/developer-cutout.png"
                  alt="Rishi Vishwakarma — Full-Stack Developer"
                  width={460}
                  height={600}
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] select-none pointer-events-none hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Smooth bottom fade gradient anchoring the portrait to canvas */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/80 to-transparent pointer-events-none z-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
