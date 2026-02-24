import { motion } from "motion/react";
import {
  Trophy,
  Award,
  Star,
  FileText,
  ExternalLink,
  CheckCircle2,
  Zap,
  Globe,
  Code,
  Palette,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const awards = [
  {
    id: 1,
    title: "Top 3 Academic Student",
    org: "University of Information Technology",
    year: "2024",
    type: "Academic",
    icon: <Trophy size={22} />,
    color: "#f59e0b",
    desc: "Ranked in the top 3 students of the Software Engineering faculty for outstanding academic performance with GPA 3.65/4.0.",
    badge: "🥉 3rd Place",
  },
  {
    id: 2,
    title: "Best UI/UX Design Award",
    org: "UIT Hackathon 2024",
    year: "2024",
    type: "Design",
    icon: <Palette size={22} />,
    color: "#ec4899",
    desc: "Won Best UI/UX Design at UIT Hackathon for designing an accessibility-first education platform that served 500+ users.",
    badge: "🏆 Winner",
  },
  {
    id: 3,
    title: "Excellence in Leadership",
    org: "UIT Student Affairs Office",
    year: "2024",
    type: "Leadership",
    icon: <Star size={22} />,
    color: "#8b5cf6",
    desc: "Recognized for exceptional leadership as Club President, growing membership by 150% and organizing 12+ tech events.",
    badge: "⭐ Excellence",
  },
  {
    id: 4,
    title: "Hackathon Runner-Up",
    org: "Vietnam Student Developer Cup",
    year: "2023",
    type: "Competition",
    icon: <Code size={22} />,
    color: "#6366f1",
    desc: "2nd place in national student developer competition, building a real-time collaborative code editor in 24 hours.",
    badge: "🥈 2nd Place",
  },
];

const certificates = [
  {
    id: 1,
    name: "VSTEP English B2",
    issuer: "Vietnam National University",
    date: "December 2023",
    icon: <Globe size={18} />,
    color: "#10b981",
    credentialId: "VNU-VSTEP-2023-7821",
    skills: ["English Reading", "Listening", "Writing", "Speaking"],
  },
  {
    id: 2,
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft (AZ-900)",
    date: "March 2024",
    icon: <Zap size={18} />,
    color: "#0078d4",
    credentialId: "AZ-900-2024-NVD",
    skills: ["Cloud Computing", "Azure Services", "Security", "Compliance"],
  },
  {
    id: 3,
    name: "UI/UX Design Professional",
    issuer: "Google UX Design Certificate",
    date: "June 2024",
    icon: <Palette size={18} />,
    color: "#FF6B6B",
    credentialId: "COURSERA-GUX-2024",
    skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    id: 4,
    name: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "September 2023",
    icon: <Code size={18} />,
    color: "#0ea5e9",
    credentialId: "FCC-FSWD-2023-NVD",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 5,
    name: "Figma Advanced Design",
    issuer: "Figma Education Program",
    date: "January 2024",
    icon: <FileText size={18} />,
    color: "#F24E1E",
    credentialId: "FIGMA-ADV-2024",
    skills: ["Auto Layout", "Components", "Variables", "Prototyping"],
  },
  {
    id: 6,
    name: "Agile & Scrum Fundamentals",
    issuer: "Scrum Alliance",
    date: "April 2024",
    icon: <Award size={18} />,
    color: "#a855f7",
    credentialId: "SA-AGILE-2024-NVD",
    skills: ["Sprint Planning", "Retrospectives", "Team Collaboration", "Kanban"],
  },
];

const timeline = [
  { year: "2023", month: "Sep", event: "Started Software Engineering at UIT", type: "education" },
  { year: "2023", month: "Dec", event: "Earned VSTEP B2 English Certification", type: "cert" },
  { year: "2024", month: "Feb", event: "Founded UIT Tech Community Club", type: "leadership" },
  { year: "2024", month: "Mar", event: "Achieved Microsoft Azure Fundamentals (AZ-900)", type: "cert" },
  { year: "2024", month: "May", event: "Won Best UI/UX at UIT Hackathon 2024", type: "award" },
  { year: "2024", month: "Jun", event: "Completed Google UX Design Certificate", type: "cert" },
  { year: "2024", month: "Aug", event: "Elected Club President — UIT Tech Community", type: "leadership" },
  { year: "2024", month: "Oct", event: "Ranked Top 3 Student of Faculty 2024", type: "award" },
  { year: "2025", month: "Jan", event: "Seeking Internship Opportunities", type: "current" },
];

const typeConfig: Record<string, { color: string; label: string }> = {
  education: { color: "#6366f1", label: "Education" },
  cert: { color: "#10b981", label: "Certificate" },
  leadership: { color: "#8b5cf6", label: "Leadership" },
  award: { color: "#f59e0b", label: "Award" },
  current: { color: "#ec4899", label: "Current" },
};

export function Achievements() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      <section
        style={{
          padding: "60px clamp(16px, 5vw, 80px) 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.08) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionTitle
              badge="Recognition"
              title="Achievements &"
              highlight="Certifications"
              subtitle="A record of academic excellence, professional certifications, and competition victories throughout my journey."
            />
          </motion.div>

          {/* Awards */}
          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#f1f5f9",
              margin: "0 0 28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              }}
            >
              <Trophy size={17} color="#fff" />
            </span>
            Awards & Honors
          </motion.h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(260px, 35vw, 420px), 1fr))",
              gap: "20px",
              marginBottom: "64px",
            }}
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  background: "rgba(15,15,26,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${award.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${award.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${award.color}, ${award.color}00)`,
                  }}
                />
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${award.color}18, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: `${award.color}18`,
                      border: `1px solid ${award.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: award.color,
                    }}
                  >
                    {award.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 700,
                        background: `${award.color}18`,
                        color: award.color,
                        border: `1px solid ${award.color}30`,
                      }}
                    >
                      {award.badge}
                    </span>
                    <span style={{ color: "#64748b", fontSize: "12px" }}>{award.year}</span>
                  </div>
                </div>

                <p style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "16px", margin: "0 0 4px", letterSpacing: "-0.01em" }}>
                  {award.title}
                </p>
                <p style={{ color: award.color, fontSize: "12px", fontWeight: 600, margin: "0 0 12px" }}>
                  {award.org}
                </p>
                <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                  {award.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#f1f5f9",
              margin: "0 0 28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #10b981, #059669)",
              }}
            >
              <FileText size={17} color="#fff" />
            </span>
            Professional Certifications
          </motion.h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(260px, 30vw, 380px), 1fr))",
              gap: "16px",
              marginBottom: "64px",
            }}
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: "20px 24px",
                  borderRadius: "18px",
                  background: "rgba(15,15,26,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.3s",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: cert.color,
                      flexShrink: 0,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = cert.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                    }}
                  >
                    <ExternalLink size={12} /> Verify
                  </a>
                </div>

                <div>
                  <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "15px", margin: "0 0 2px" }}>
                    {cert.name}
                  </p>
                  <p style={{ color: cert.color, fontSize: "12px", fontWeight: 500, margin: 0 }}>
                    {cert.issuer}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontSize: "11px",
                        fontWeight: 500,
                        background: "rgba(255,255,255,0.05)",
                        color: "#94a3b8",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#64748b", fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={12} style={{ color: "#10b981" }} />
                    {cert.date}
                  </span>
                  <span style={{ color: "#475569", fontSize: "11px", fontFamily: "monospace" }}>
                    {cert.credentialId}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.h3
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#f1f5f9",
              margin: "0 0 36px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
              }}
            >
              <Star size={17} color="#fff" />
            </span>
            Journey Timeline
          </motion.h3>

          <div
            style={{
              position: "relative",
              paddingLeft: "clamp(32px, 5vw, 64px)",
            }}
          >
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "clamp(8px, 2vw, 20px)",
                top: 0,
                bottom: 0,
                width: "2px",
                background:
                  "linear-gradient(to bottom, #6366f1, #8b5cf6, #a855f7, rgba(168,85,247,0.1))",
              }}
            />

            {timeline.map((item, i) => {
              const config = typeConfig[item.type];
              const isLast = i === timeline.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  style={{
                    position: "relative",
                    marginBottom: isLast ? 0 : "24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: `calc(clamp(8px, 2vw, 20px) - clamp(32px, 5vw, 64px) + 1px)`,
                      top: "12px",
                      width: isLast ? "16px" : "12px",
                      height: isLast ? "16px" : "12px",
                      borderRadius: "50%",
                      background: isLast
                        ? `linear-gradient(135deg, ${config.color}, ${config.color}cc)`
                        : config.color,
                      border: `2px solid ${config.color}40`,
                      boxShadow: isLast ? `0 0 12px ${config.color}60` : "none",
                      zIndex: 1,
                      flexShrink: 0,
                      transform: isLast ? "translate(-2px, -2px)" : "none",
                    }}
                  />

                  <div
                    style={{
                      padding: "16px 20px",
                      borderRadius: "14px",
                      background: "rgba(15,15,26,0.6)",
                      border: `1px solid ${isLast ? config.color + "40" : "rgba(255,255,255,0.06)"}`,
                      flex: 1,
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          color: config.color,
                          fontWeight: 700,
                          fontSize: "14px",
                          margin: 0,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.year}
                      </p>
                      <p style={{ color: "#64748b", fontSize: "11px", margin: 0 }}>
                        {item.month}
                      </p>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "32px",
                        background: "rgba(255,255,255,0.08)",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        color: isLast ? "#f1f5f9" : "#cbd5e1",
                        fontSize: "14px",
                        fontWeight: isLast ? 600 : 400,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {item.event}
                    </p>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: 600,
                        background: `${config.color}15`,
                        border: `1px solid ${config.color}30`,
                        color: config.color,
                        flexShrink: 0,
                      }}
                    >
                      {config.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
