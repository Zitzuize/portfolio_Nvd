import { useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Trophy,
  Users,
  FileText,
  ChevronDown,
  Sparkles,
  Star,
} from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const profileImg =
  "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHN0dWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGRhcmt8ZW58MXx8fHwxNzcxNzI0NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const skills = [
  { name: "PHP", color: "#7B7FB5", icon: "🐘", category: "Backend" },
  { name: "MySQL", color: "#4479A1", icon: "🐬", category: "Database" },
  { name: "C#", color: "#9B4F96", icon: "#", category: "Backend" },
  { name: ".NET", color: "#512BD4", icon: "⚡", category: "Framework" },
  { name: "UI/UX", color: "#FF6B6B", icon: "🎨", category: "Design" },
  { name: "Figma", color: "#F24E1E", icon: "🖌️", category: "Design" },
  { name: "JavaScript", color: "#F7DF1E", icon: "JS", category: "Frontend" },
  { name: "React", color: "#61DAFB", icon: "⚛", category: "Frontend" },
];

const stats = [
  {
    icon: <Trophy size={22} />,
    label: "Academic Achievement",
    value: "Top 3 Student",
    sub: "Class of 2024",
    color: "#f59e0b",
  },
  {
    icon: <Users size={22} />,
    label: "Leadership",
    value: "Club President",
    sub: "Tech Community",
    color: "#6366f1",
  },
  {
    icon: <FileText size={22} />,
    label: "Language Cert",
    value: "VSTEP B2",
    sub: "English Proficiency",
    color: "#10b981",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* ─── HERO ─────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "80px clamp(16px, 5vw, 80px) 60px",
        }}
      >
        {/* Background grid / glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        {/* Floating orbs */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(32px, 5vw, 80px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left content */}
          <div style={{ flex: "1 1 340px", maxWidth: "620px" }}>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  color: "#818cf8",
                  marginBottom: "24px",
                }}
              >
                <Sparkles size={12} />
                Available for Internship 2025
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "clamp(36px, 5.5vw, 72px)",
                fontWeight: 800,
                color: "#f8fafc",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: "0 0 16px",
              }}
            >
              Nguyễn{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Văn Đức
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "clamp(16px, 2.2vw, 22px)",
                fontWeight: 500,
                color: "#a78bfa",
                marginBottom: "16px",
                letterSpacing: "-0.01em",
              }}
            >
              Software Engineering Student · Class of 2027
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "40px",
                maxWidth: "500px",
              }}
            >
              Crafting elegant digital experiences from backend logic to pixel-perfect interfaces.
              Passionate about building scalable systems and beautiful UIs that make a difference.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "48px",
              }}
            >
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    boxShadow:
                      "0 0 30px rgba(99,102,241,0.35)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 40px rgba(99,102,241,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 30px rgba(99,102,241,0.35)";
                  }}
                >
                  View Projects <ArrowRight size={16} />
                </button>
              </Link>

              <a
                href="mailto:duc.nguyen@example.com"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    borderRadius: "12px",
                    background: "transparent",
                    color: "#e2e8f0",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(139,92,246,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(139,92,246,0.08)";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(139,92,246,0.3)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <Mail size={16} /> Contact Me
                </button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              {[
                { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Mail size={18} />, href: "mailto:duc@example.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(139,92,246,0.08)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    color: "#94a3b8",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#a78bfa";
                    el.style.borderColor = "rgba(139,92,246,0.5)";
                    el.style.background = "rgba(139,92,246,0.15)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#94a3b8";
                    el.style.borderColor = "rgba(139,92,246,0.2)";
                    el.style.background = "rgba(139,92,246,0.08)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <span style={{ color: "#475569", fontSize: "13px", marginLeft: "4px" }}>
                Let's connect!
              </span>
            </motion.div>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: "1 1 280px", maxWidth: "400px", position: "relative" }}
          >
            {/* Glow behind avatar */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(139,92,246,0.25)",
                background: "rgba(15,15,26,0.6)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.15)",
                padding: "8px",
              }}
            >
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                  position: "relative",
                }}
              >
                <img
                  src={profileImg}
                  alt="Nguyễn Văn Đức"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                {/* Overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(7,7,17,0.9) 0%, transparent 50%)",
                  }}
                />
                {/* Badge inside image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    padding: "12px 16px",
                    borderRadius: "14px",
                    background: "rgba(7,7,17,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Star size={18} color="#fff" fill="#fff" />
                  </div>
                  <div>
                    <p style={{ color: "#f8fafc", fontWeight: 600, fontSize: "13px", margin: 0 }}>
                      Top 3 Student 2024
                    </p>
                    <p style={{ color: "#94a3b8", fontSize: "11px", margin: 0 }}>
                      Software Engineering Faculty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#475569",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </section>

      {/* ─── SKILLS SECTION ───────────────────────── */}
      <div ref={nextSectionRef} />
      <section
        style={{
          padding: "80px clamp(16px, 5vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <SectionTitle
            badge="Tech Stack"
            title="Skills &"
            highlight="Technologies"
            subtitle="Technologies I use to build full-stack web applications and design compelling user experiences."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(120px, 18vw, 160px), 1fr))",
              gap: "16px",
            }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.03 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "24px 16px",
                  borderRadius: "16px",
                  background: "rgba(15,15,26,0.6)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                  cursor: "default",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${skill.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      color: "#e2e8f0",
                      fontWeight: 600,
                      fontSize: "14px",
                      margin: "0 0 2px",
                    }}
                  >
                    {skill.name}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "11px", margin: 0 }}>
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ───────────────────────── */}
      <section
        style={{
          padding: "80px clamp(16px, 5vw, 80px)",
          background: "rgba(15, 15, 26, 0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <SectionTitle
            badge="Quick Stats"
            title="Achievements &"
            highlight="Highlights"
            subtitle="A snapshot of my academic performance, leadership roles, and certifications."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(clamp(240px, 30vw, 320px), 1fr))",
              gap: "24px",
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: "32px",
                  borderRadius: "20px",
                  background: "rgba(15,15,26,0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}40`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${stat.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${stat.color}, ${stat.color}00)`,
                  }}
                />
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}30`,
                    color: stat.color,
                    marginBottom: "20px",
                  }}
                >
                  {stat.icon}
                </div>
                <p style={{ color: "#64748b", fontSize: "12px", fontWeight: 500, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {stat.label}
                </p>
                <p style={{ color: "#f8fafc", fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 700, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                  {stat.value}
                </p>
                <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ────────────────────────────── */}
      <section style={{ padding: "80px clamp(16px, 5vw, 80px)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: "28px",
              padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 72px)",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 50%, rgba(168,85,247,0.1) 100%)",
              border: "1px solid rgba(139,92,246,0.25)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 44px)",
                  fontWeight: 700,
                  color: "#f8fafc",
                  letterSpacing: "-0.02em",
                  margin: "0 0 16px",
                }}
              >
                Ready to Build Something{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Amazing?
                </span>
              </h2>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "clamp(14px, 1.8vw, 17px)",
                  maxWidth: "500px",
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                I'm actively looking for internship opportunities for 2025. 
                Let's connect and create something great together!
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                <a href="mailto:duc.nguyen@example.com" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 32px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      color: "#fff",
                      border: "none",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      boxShadow: "0 0 30px rgba(99,102,241,0.4)",
                    }}
                  >
                    <Mail size={16} /> Get In Touch
                  </button>
                </a>
                <a href="/cv.pdf" download style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 32px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.06)",
                      color: "#e2e8f0",
                      border: "1px solid rgba(255,255,255,0.12)",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    <Download size={16} /> Download CV
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
