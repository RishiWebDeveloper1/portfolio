import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1C] text-[#F1F5F9] flex flex-col font-sans selection:bg-[#60A5FA]/20 selection:text-[#93C5FD]">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Technical Skills Auto-Scroll */}
        <SkillsSection />

        {/* 4. Verified Production Projects */}
        <ProjectsSection />

        {/* 5. Enterprise Experience & Academic Background */}
        <ExperienceSection />

        {/* 6. Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Accessible Engineering Footer */}
      <Footer />
    </div>
  );
}
