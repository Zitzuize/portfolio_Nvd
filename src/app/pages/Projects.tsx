import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const projectImg1 =
  "https://images.unsplash.com/photo-1702479744048-0351261e1ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const projectImg2 =
  "https://images.unsplash.com/photo-1676793894040-b6dd72276620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const projectImg3 =
  "https://images.unsplash.com/photo-1662027067763-770376e710f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const projectImg4 =
  "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";

const projects = [
  {
    id: 1,
    title: "EduManage Pro",
    description:
      "A full-stack student management system with role-based authentication, grade tracking, and real-time analytics dashboard.",
    image: projectImg1,
    category: "Web",
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    demo: "#",
    github: "#",
    featured: true,
    status: "Completed",
  },
  {
    id: 2,
    title: "MobileUI Kit",
    description:
      "A comprehensive UI/UX design system for mobile applications, featuring 120+ components, dark/light themes, and Figma auto-layout.",
    image: projectImg2,
    category: "UIUX",
    tags: ["Figma", "UI/UX", "Design System", "Prototype"],
    demo: "#",
    github: "#",
    featured: true,
    status: "Completed",
  },
  {
    id: 3,
    title: "ShopNest API",
    description:
      "RESTful e-commerce backend API built with .NET Core. Features JWT auth, product catalog, order processing, and payment integration.",
    image: projectImg3,
    category: "Backend",
    tags: ["C#", ".NET Core", "SQL Server", "REST API"],
    demo: "#",
    github: "#",
    featured: false,
    status: "Completed",
  },
  {
    id: 4,
    title: "ChatSync",
    description:
      "Real-time messaging application with WebSocket support, file sharing, group channels, and end-to-end encryption.",
    image: projectImg4,
    category: "Web",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demo: "#",
    github: "#",
    featured: false,
    status: "In Progress",
  },
  {
    id: 5,
    title: "Portfolio Design System",
    description:
      "Personal design system and component library built in Figma with comprehensive documentation and Storybook integration.",
    image: projectImg2,
    category: "UIUX",
    tags: ["Figma", "Storybook", "React", "TypeScript"],
    demo: "#",
    github: "#",
    featured: false,
    status: "Completed",
  },
  {
    id: 6,
    title: "HR Management System",
    description:
      "Enterprise HR platform with employee records, attendance tracking, payroll processing, and reporting dashboard built on .NET.",
    image: projectImg1,
    category: "Backend",
    tags: ["C#", ".NET", "Entity Framework", "MSSQL"],
    demo: "#",
    github: "#",
    featured: false,
    status: "Completed",
  },
];

const filters = ["All", "Web", "UIUX", "Backend"] as const;
type Filter = (typeof filters)[number];

const tagColors: Record<string, string> = {
  PHP: "#7B7FB5",
  MySQL: "#4479A1",
  "C#": "#9B4F96",
  ".NET": "#512BD4",
  ".NET Core": "#512BD4",
  Figma: "#F24E1E",
  "UI/UX": "#FF6B6B",
  Bootstrap: "#7952B3",
  jQuery: "#0769AD",
  React: "#61DAFB",
  "Node.js": "#339933",
  "Socket.io": "#010101",
  MongoDB: "#47A248",
  TypeScript: "#3178C6",
  Storybook: "#FF4785",
  "Design System": "#FF6B6B",
  Prototype: "#a855f7",
  "REST API": "#10b981",
  "SQL Server": "#CC2927",
  MSSQL: "#CC2927",
  "Entity Framework": "#6366f1",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Page header */}
      <section
        style={{
          padding: "60px clamp(16px, 5vw, 80px) 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              badge="Portfolio"
              title="Featured"
              highlight="Projects"
              subtitle="A curated selection of projects showcasing my skills in web development, UI/UX design, and backend engineering."
            />
          </motion.div>

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px",
                borderRadius: "14px",
                background: "rgba(15,15,26,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Filter size={14} style={{ color: "#64748b", marginLeft: "8px" }} />
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "10px",
                    border: "none",
                    background:
                      activeFilter === f
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "transparent",
                    color: activeFilter === f ? "#fff" : "#94a3b8",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                    boxShadow:
                      activeFilter === f
                        ? "0 0 16px rgba(99,102,241,0.3)"
                        : "none",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(280px, 40vw, 400px), 1fr))",
              gap: "24px",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "rgba(15,15,26,0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(139,92,246,0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLImageElement).style.transform =
                          "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLImageElement).style.transform =
                          "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(15,15,26,0.9) 100%)",
                      }}
                    />
                    {/* Status badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 600,
                        background:
                          project.status === "Completed"
                            ? "rgba(16,185,129,0.15)"
                            : "rgba(245,158,11,0.15)",
                        border:
                          project.status === "Completed"
                            ? "1px solid rgba(16,185,129,0.4)"
                            : "1px solid rgba(245,158,11,0.4)",
                        color:
                          project.status === "Completed"
                            ? "#10b981"
                            : "#f59e0b",
                      }}
                    >
                      {project.status}
                    </span>
                    {/* Category badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 600,
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.4)",
                        color: "#818cf8",
                      }}
                    >
                      {project.category === "UIUX" ? "UI/UX" : project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        color: "#f1f5f9",
                        fontWeight: 700,
                        fontSize: "18px",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "#94a3b8",
                        fontSize: "13px",
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "3px 10px",
                            borderRadius: "100px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background: `${tagColors[tag] ?? "#6366f1"}15`,
                            border: `1px solid ${tagColors[tag] ?? "#6366f1"}30`,
                            color: tagColors[tag] ?? "#818cf8",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        paddingTop: "4px",
                      }}
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ flex: 1, textDecoration: "none" }}
                      >
                        <button
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "9px 16px",
                            borderRadius: "10px",
                            background:
                              "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            color: "#fff",
                            border: "none",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "opacity 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                          }}
                        >
                          <ExternalLink size={13} /> Live Demo
                        </button>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ flex: 1, textDecoration: "none" }}
                      >
                        <button
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            padding: "9px 16px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.05)",
                            color: "#94a3b8",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.color = "#e2e8f0";
                            el.style.borderColor = "rgba(255,255,255,0.2)";
                            el.style.background = "rgba(255,255,255,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.color = "#94a3b8";
                            el.style.borderColor = "rgba(255,255,255,0.1)";
                            el.style.background = "rgba(255,255,255,0.05)";
                          }}
                        >
                          <Github size={13} /> GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#64748b" }}>
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
