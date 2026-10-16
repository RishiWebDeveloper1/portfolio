"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: Escape closes mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0A0F1C]/92 backdrop-blur-md border-b border-[#2B3950]/80 transition-colors">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Signature RV Brand Mark */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] rounded-lg py-1"
          aria-label="Rishi Vishwakarma — Home"
        >
          {/* Signature RV Monogram Emblem */}
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#2B3950] shadow-sm group-hover:border-[#60A5FA]/70 group-hover:shadow-[0_0_16px_rgba(96,165,250,0.25)] group-hover:scale-105 transition-all duration-300 shrink-0">
            <Image
              src="/rv-logo.png"
              alt="RV Logo"
              width={32}
              height={32}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          {/* Brand Name & Blinking Cursor */}
          <div className="flex items-center font-mono">
            <span className="text-sm font-bold tracking-tight text-[#F1F5F9] group-hover:text-[#60A5FA] transition-colors">
              rishi
            </span>
            <span className="text-sm font-bold text-[#60A5FA] transition-colors">
              .dev
            </span>
            <span className="inline-block w-1.5 h-3.5 bg-[#60A5FA] ml-1 rounded-[1px] animate-cursor-blink shadow-[0_0_6px_rgba(96,165,250,0.4)]" />
          </div>
        </a>

        {/* Center: Standard Developer Horizontal Tabs (No rounded pill cards) */}
        <nav
          className="hidden md:flex items-center gap-1 text-xs font-mono text-[#CBD5E1]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${isActive
                    ? "text-[#60A5FA] bg-[#182338] border border-[#2B3950] font-semibold"
                    : "hover:text-[#F1F5F9] hover:bg-[#182338]/60"
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Social Profiles, Let's Talk CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub link */}
          <a
            href="https://github.com/RishiWebDeveloper1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-md bg-[#182338] hover:bg-[#202E45] border border-[#2B3950] text-[#CBD5E1] hover:text-[#F1F5F9] hover:border-[#60A5FA]/50 transition-all hidden sm:inline-flex"
          >
            <GithubIcon size={15} />
          </a>

          {/* LinkedIn link */}
          <a
            href="https://linkedin.com/in/rishi-vishwakarma-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-md bg-[#182338] hover:bg-[#202E45] border border-[#2B3950] text-[#CBD5E1] hover:text-[#60A5FA] hover:border-[#60A5FA]/50 transition-all hidden sm:inline-flex"
          >
            <LinkedinIcon size={15} />
          </a>

          <span className="h-4 w-px bg-[#2B3950] hidden sm:block mx-1" />

          {/* Clean Standard Developer CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#60A5FA] hover:bg-[#93C5FD] text-[#0A0F1C] transition-colors shadow-sm cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md bg-[#182338] border border-[#2B3950] text-[#CBD5E1] hover:text-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Standard Full-Width Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#0A0F1C]/98 backdrop-blur-xl border-b border-[#2B3950] px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#2B3950]/50 text-xs font-mono text-[#94A3B8]">
            <span>Navigation Menu</span>
            <span className="text-[#94A3B8]">
              Portfolio v2.0
            </span>
          </div>

          <nav className="flex flex-col space-y-1 font-mono text-sm" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md transition-colors flex items-center justify-between ${isActive
                      ? "bg-[#182338] text-[#60A5FA] border border-[#2B3950] font-semibold"
                      : "text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-[#182338]/40"
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#2B3950]/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/RishiWebDeveloper1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#182338] border border-[#2B3950] text-[#CBD5E1] hover:text-[#F1F5F9]"
              >
                <GithubIcon size={14} />
              </a>
              <a
                href="https://linkedin.com/in/rishi-vishwakarma-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#182338] border border-[#2B3950] text-[#CBD5E1] hover:text-[#60A5FA]"
              >
                <LinkedinIcon size={14} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium bg-[#60A5FA] text-[#0A0F1C]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
