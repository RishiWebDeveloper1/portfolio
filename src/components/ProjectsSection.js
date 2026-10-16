"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  X,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Scalable project catalog with dedicated brand icon for each website
  const projects = useMemo(
    () => [
      {
        id: "01",
        title: "Pruxr Design Studio",
        icon: "/projects/icons/pruxr-design-icon.png",
        domain: "pruxrdesign.com",
        category: "client",
        categoryLabel: "Agency Architecture",
        tagline: "High-Performance Agency Portfolio",
        description:
          "Editorial agency web experience featuring fluid page transitions, responsive spatial layouts, and 100/100 Lighthouse performance metrics.",
        image: "/projects/images/pruxr-design.jpg",
        stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://pruxrdesign.com/",
      },
      {
        id: "02",
        title: "Gauri Enterprises",
        icon: "/projects/icons/gauri-enterprises-icon.png",
        domain: "gaurienterprises.vercel.app",
        category: "mern",
        categoryLabel: "B2B Commercial",
        tagline: "Industrial Electrical Supply E-Commerce",
        description:
          "Commercial hardware & electrical catalog engineered with dynamic SKU filtering, real-time inventory tracking, and high-concurrency Node.js/MongoDB APIs.",
        image: "/projects/images/gauri-enterprises.jpg",
        stack: ["Node.js", "Express.js", "MongoDB", "React", "REST APIs"],
        liveUrl: "https://gaurienterprises.vercel.app/",
      },
      {
        id: "03",
        title: "Vishwakarma Interiors",
        icon: "/projects/icons/vishwakarma-interiors-icon.png",
        domain: "vishwakarmainterior.co",
        category: "client",
        categoryLabel: "Spatial Showcase",
        tagline: "Interior Architecture & Carpentry Portal",
        description:
          "Mobile-first spatial showcase with responsive project galleries, bespoke carpentry specifications, and direct customer inquiry conversion funnel.",
        image: "/projects/images/vishwakarma-interiors.jpg",
        stack: ["Next.js", "React", "Tailwind CSS", "Responsive UX"],
        liveUrl: "https://vishwakarmainterior.co/",
      },
      {
        id: "04",
        title: "Nitya Interior",
        icon: "/projects/icons/nitya-interior-icon.png",
        domain: "nityainterior.vercel.app",
        category: "client",
        categoryLabel: "Modular Showcase",
        tagline: "Modular Kitchen & Living Architecture",
        description:
          "Search-optimized residential architecture portfolio featuring modular kitchen showcases, structured JSON-LD schemas, and fast lazy-loaded media pipelines.",
        image: "/projects/images/nitya-interior.jpg",
        stack: ["Next.js", "React", "Tailwind CSS", "SEO Suite"],
        liveUrl: "https://nityainterior.vercel.app/",
      },
      {
        id: "05",
        title: "Todo Masters",
        icon: "/projects/icons/todo-masters-icon.png",
        domain: "todo-masters.vercel.app",
        category: "mern",
        categoryLabel: "MERN Stack",
        tagline: "Full-Stack Task Orchestration & Kanban Engine",
        description:
          "Interactive productivity platform with drag-and-drop Kanban workflows, persistent MongoDB state with atomic updates, and secure JWT authentication.",
        image: "/projects/images/todo-masters.jpg",
        stack: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://todo-masters.vercel.app/",
      },
      {
        id: "06",
        title: "Class Management System",
        icon: "/projects/icons/class-management-icon.png",
        domain: "rct-private-tuition.vercel.app",
        category: "nextjs",
        categoryLabel: "Next.js Portal",
        tagline: "Dynamic Course & Timetable Platform",
        description:
          "Educational system for students and instructors featuring dynamic scheduling, course analytics, and grade performance tracking built on Next.js.",
        image: "/projects/images/class-management.jpg",
        stack: ["Next.js", "React 19", "Tailwind CSS", "State Architecture"],
        liveUrl: "https://rct-private-tuition.vercel.app/",
      },
    ],
    []
  );

  // Dynamic filter tabs: automatically extracts any existing and future categories
  const filterTabs = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((p) => p.category))
    );

    return [
      { id: "all", label: `All (${projects.length})` },
      ...uniqueCategories.map((cat) => {
        const matching = projects.filter((p) => p.category === cat);
        const labelName = matching[0]?.categoryLabel || cat.toUpperCase();
        return {
          id: cat,
          label: `${labelName} (${matching.length})`,
        };
      }),
    ];
  }, [projects]);

  // Combined Category Filter and Real-Time Search Filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "all" || project.category === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q)) ||
        project.categoryLabel.toLowerCase().includes(q) ||
        project.domain.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section
      id="projects"
      className="py-16 md:py-22 bg-[#0A0F1C] border-b border-[#2B3950]/60 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-6 border-b border-[#2B3950]/60 space-y-4">
          {/* Top Row: Title & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] mb-2">
                02 / Selected Case Studies
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F1F5F9]">
                Featured production systems.
              </h2>
            </div>

            {/* Quick Live Search for Tech / Keyword */}
            <div className="relative w-full sm:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search tech or project..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full pl-8 pr-7 py-2 rounded-xl bg-[#111B2D] border border-[#2B3950] text-xs font-mono text-[#F1F5F9] placeholder-[#94A3B8]/60 focus:border-[#60A5FA] focus:outline-none transition-colors"
              />
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#F1F5F9]"
                  aria-label="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Dedicated New Row: Category Filter Tabs (Fully responsive on all devices) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setVisibleCount(6);
                }}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#182338] text-[#60A5FA] border border-[#60A5FA]/60 font-semibold shadow-sm"
                    : "bg-[#111B2D] text-[#CBD5E1] hover:text-[#F1F5F9] hover:bg-[#182338] border border-[#2B3950]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search Result State */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <p className="text-sm font-mono text-[#CBD5E1]">
              No projects found matching &quot;{searchQuery}&quot;
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="text-xs font-mono text-[#60A5FA] hover:underline"
            >
              Reset filters & view all projects
            </button>
          </div>
        ) : (
          /* Scalable Project Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
            {displayedProjects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <div
                  key={project.id}
                  className="rounded-xl border border-[#2B3950] bg-[#182338] hover:border-[#60A5FA]/60 hover:shadow-[0_8px_25px_rgba(96,165,250,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Clean, Full Uncropped Image Preview */}
                  <div className="relative aspect-[1534/726] w-full overflow-hidden bg-[#0A0F1C] border-b border-[#2B3950]">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Logo Box straddling the line between image and text section at left side */}
                  <div className="relative px-4 flex items-center -mt-5 z-20">
                    {/* Stylized website logo box (middle on dividing line) */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#111B2D] border border-[#2B3950] overflow-hidden flex items-center justify-center shadow-xl group-hover:border-[#60A5FA]/60 group-hover:scale-105 transition-all shrink-0 relative">
                      {project.icon ? (
                        <Image
                          src={project.icon}
                          alt={`${project.title} logo`}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="font-mono font-bold text-xs text-[#60A5FA]">
                          {project.title.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="px-4 pt-2.5 pb-4 flex flex-col flex-grow space-y-2.5">
                    <div>
                      <h3 className="text-base font-bold text-[#F1F5F9] group-hover:text-[#60A5FA] transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#CBD5E1] line-clamp-2 mt-1 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Compact Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {project.stack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111B2D] border border-[#2B3950]/80 text-[#94A3B8]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#111B2D] text-[#60A5FA] border border-[#60A5FA]/30">
                          +{project.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Bar: Dedicated Live Demo (No Code/GitHub redirect) */}
                    <div className="pt-2 mt-auto border-t border-[#2B3950]/60">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#60A5FA] hover:bg-[#93C5FD] text-[#0A0F1C] transition-colors cursor-pointer shadow-sm group/btn"
                      >
                        <span>Live Demo</span>
                        <ExternalLink
                          size={12}
                          className="group-hover/btn:translate-x-0.5 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Future Scalability: Pagination / Load More Controls */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B3950]/60 text-xs font-mono text-[#94A3B8]">
            <span>
              Showing {displayedProjects.length} of {filteredProjects.length} projects
            </span>

            <div className="flex items-center gap-2">
              {hasMore ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#182338] hover:bg-[#202E45] border border-[#2B3950] hover:border-[#60A5FA]/60 text-xs font-mono text-[#F1F5F9] transition-all cursor-pointer shadow-sm"
                >
                  <span>
                    Load More Projects (+{Math.min(6, filteredProjects.length - visibleCount)})
                  </span>
                  <ChevronDown size={14} className="text-[#60A5FA]" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setVisibleCount(6)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#111B2D] hover:bg-[#182338] border border-[#2B3950] text-xs font-mono text-[#94A3B8] hover:text-[#F1F5F9] transition-all cursor-pointer"
                >
                  <span>Collapse View</span>
                  <ChevronUp size={13} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
