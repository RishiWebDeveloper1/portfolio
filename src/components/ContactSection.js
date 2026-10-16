"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isDispatched, setIsDispatched] = useState(false);

  const emailAddress = "rishivishwa4877@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // safe fallback
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      setErrorMsg("Please enter a message of at least 8 characters.");
      return;
    }

    setIsDispatched(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Rishi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via your portfolio website.`
    );

    // Launch email client
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0F1C] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2B3950]/60">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
              04 / Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F5F9]">
              Let&apos;s build something exceptional.
            </h2>
          </div>
          <p className="text-xs font-mono text-[#94A3B8] max-w-xs leading-relaxed">
            Open for high-impact software engineering, scalable architectures, and technical collaborations.
          </p>
        </div>

        {/* 2-Column Clean Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Direct Inquiries & Verified Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#F1F5F9] tracking-tight">
                Start a conversation.
              </h3>
            </div>

            {/* Direct Email with Quick Copy */}
            <div className="p-4 rounded-xl bg-[#182338] border border-[#2B3950] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                Direct Email Address
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm sm:text-base font-mono font-medium text-[#F1F5F9] hover:text-[#60A5FA] transition-colors truncate"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-[#111B2D] border border-[#2B3950] text-[#CBD5E1] hover:text-[#60A5FA] hover:border-[#60A5FA]/50 transition-colors inline-flex items-center gap-1.5 text-xs font-mono shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-[#34D399]" />
                      <span className="text-[#34D399]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Verified Social & Location Links */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                Verified Profiles
              </p>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://linkedin.com/in/rishi-vishwakarma-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-lg bg-[#111B2D] border border-[#2B3950] hover:border-[#60A5FA]/50 text-sm text-[#CBD5E1] hover:text-[#F1F5F9] transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon size={16} className="text-[#60A5FA]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight size={14} className="text-[#94A3B8] group-hover:text-[#60A5FA] transition-colors" />
                </a>

                <a
                  href="https://github.com/RishiWebDeveloper1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-lg bg-[#111B2D] border border-[#2B3950] hover:border-[#60A5FA]/50 text-sm text-[#CBD5E1] hover:text-[#F1F5F9] transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon size={16} className="text-[#60A5FA]" />
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowUpRight size={14} className="text-[#94A3B8] group-hover:text-[#60A5FA] transition-colors" />
                </a>

                <div className="py-2.5 px-3.5 rounded-lg bg-[#111B2D] border border-[#2B3950] text-xs font-mono text-[#94A3B8] flex items-center gap-2.5">
                  <MapPin size={15} className="text-[#60A5FA]" />
                  <span>Kalyan, Maharashtra, India (IST UTC+5:30)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Streamlined Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#2B3950] bg-[#182338] p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[#CBD5E1]">
                      Your Name <span className="text-[#60A5FA]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111B2D] border border-[#2B3950] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/60 focus:border-[#60A5FA] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[#CBD5E1]">
                      Your Email <span className="text-[#60A5FA]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#111B2D] border border-[#2B3950] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/60 focus:border-[#60A5FA] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#CBD5E1]">
                    Message Details <span className="text-[#60A5FA]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Briefly describe your project, organization, or engineering inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111B2D] border border-[#2B3950] text-sm text-[#F1F5F9] placeholder-[#94A3B8]/60 focus:border-[#60A5FA] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-800/60 p-2.5 rounded-lg">
                    {errorMsg}
                  </p>
                )}

                {isDispatched && (
                  <p className="text-xs font-mono text-[#34D399] bg-[#34D399]/10 border border-[#34D399]/30 p-2.5 rounded-lg">
                    Opening your default email client with your pre-drafted message to dispatch directly to Rishi.
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#60A5FA] hover:bg-[#93C5FD] text-[#0A0F1C] transition-colors cursor-pointer shadow-sm"
                >
                  <span>Send Message via Email</span>
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
