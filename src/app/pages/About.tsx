import { motion } from "motion/react";
import { Download, GraduationCap, Users, Award, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../components/SectionTitle";

const profileImg =
  "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600";

const education = [
  {
    period: "2023 – 2027",
    degree: "Bachelor of Software Engineering",
    school: "University of Information Technology (UIT)",
    location: "Ho Chi Minh City, Vietnam",
    status: "current",
    gpa: "3.65 / 4.0",
    highlights: ["Top 3 Student Award 2024", "Academic Scholarship 2023-2024", "Dean's List"],
  },
  {
    period: "2020 – 2023",
    degree: "High School Diploma (IT Specialization)",
    school: "Le Quy Don High School for the Gifted",
    location: "Ho Chi Minh City, Vietnam",
    status: "completed",
    gpa: "9.2 / 10",
    highlights: ["Graduated with Distinction", "IT Club Founder", "Math Olympiad Bronze Medal"],
  },
];

const leadership = [
  {
    role: "Club President",
    org: "UIT Tech Community",
    period: "2024 – Present",
    desc: "Lead a 200+ member tech club, organizing workshops, hackathons, and industry networking events.",
    icon: <Users size={18} />,
    color: "#6366f1",
  },
  {
    role: "Technical Lead",
    org: "CodeForward Initiative",
    period: "2023 – 2024",
    desc: "Mentored 30+ junior developers, overseeing 5 open-source projects and conducting weekly code reviews.",
    icon: <Award size={18} />,
    color: "#8b5cf6",
  },
  {
    role: "Workshop Facilitator",
    org: "Google Developer Student Club",
    period: "2023 – Present",
    desc: "Design and deliver technical workshops on web development, UI/UX, and software architecture.",
    icon: <GraduationCap size={18} />,
    color: "#a855f7",
  },
];

const skills = [
  { name: "PHP / Laravel", level: 85, color: "#7B7FB5" },
  { name: "MySQL / Database Design", level: 88, color: "#4479A1" },
  { name: "C# / .NET", level: 80, color: "#9B4F96" },
  { name: "UI/UX Design", level: 82, color: "#FF6B6B" },
  { name: "Figma / Prototyping", level: 90, color: "#F24E1E" },
  { name: "JavaScript / React", level: 75, color: "#61DAFB" },
  { name: "Git / Version Control", level: 88, color: "#F05032" },
  { name: "English (VSTEP B2)", level: 78, color: "#10b981" },
];

const strengths = [
  { icon: "🎯", title: "Problem Solver", desc: "Breaking complex problems into manageable components with systematic thinking." },
  { icon: "🤝", title: "Team Collaborator", desc: "Excellent communicator who thrives in agile team environments." },
  { icon: "📚", title: "Continuous Learner", desc: "Dedicated to staying current with emerging technologies and best practices." },
  { icon: "🎨", title: "Creative Thinker", desc: "Bridging technical implementation with user-centered design thinking." },
];

function SkillBar({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{ marginBottom: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ color: "#cbd5e1", fontSize: "14px", fontWeight: 500 }}>
          {skill.name}
        </span>
        <span
          style={{
            color: skill.color,
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          borderRadius: "100px",
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.2, duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "100px",
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
            boxShadow: `0 0 8px ${skill.color}60`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* Header */}
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
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.13) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionTitle
              badge="About Me"
              title="My"
              highlight="Story"
              subtitle="Software engineer in the making — passionate about crafting scalable systems and delightful user experiences."
            />
          </motion.div>

          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              gap: "clamp(24px, 4vw, 56px)",
              alignItems: "flex-start",
              flexWrap: "wrap",
              padding: "clamp(24px, 4vw, 48px)",
              borderRadius: "24px",
              background: "rgba(15,15,26,0.7)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(10px)",
              marginBottom: "64px",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                flexShrink: 0,
                position: "relative",
                width: "clamp(100px, 15vw, 160px)",
                height: "clamp(100px, 15vw, 160px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
                  zIndex: 0,
                }}
              />
              <img
                src={profileImg}
                alt="Nguyễn Văn Đức"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "4px solid #070711",
                }}
              />
            </div>

            {/* Bio */}
            <div style={{ flex: "1 1 280px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                }}
              >
                Nguyễn Văn Đức
              </h2>
              <p
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                  fontSize: "15px",
                  margin: "0 0 16px",
                }}
              >
                Software Engineering Student · UIT · Graduating 2027
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "16px" }}>
                {[
                  { icon: <MapPin size={13} />, text: "Ho Chi Minh City, Vietnam" },
                  { icon: <Calendar size={13} />, text: "Class of 2027" },
                ].map((item, i) => (
                  <span
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#64748b",
                      fontSize: "13px",
                    }}
                  >
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.75, margin: "0 0 20px" }}>
                I'm a passionate Software Engineering student with a knack for building elegant digital solutions.
                My expertise spans full-stack web development using PHP, C#, and .NET on the backend,
                while also having a deep love for UI/UX design and creating intuitive user interfaces in Figma.
              </p>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.75, margin: "0 0 24px" }}>
                Beyond coding, I lead the UIT Tech Community, organizing events that connect developers and foster
                a culture of continuous learning. I believe great software is built at the intersection of
                technical excellence and human-centered design.
              </p>
              <a href="/cv.pdf" download style={{ textDecoration: "none" }}>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 24px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                  }}
                >
                  <Download size={15} /> Download CV
                </button>
              </a>
            </div>
          </motion.div>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 40vw, 520px), 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            {/* Education timeline */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
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
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  }}
                >
                  <GraduationCap size={17} color="#fff" />
                </span>
                Education Timeline
              </h3>

              <div style={{ position: "relative" }}>
                {/* Timeline line */}
                <div
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    background:
                      "linear-gradient(to bottom, #6366f1, #8b5cf6, rgba(139,92,246,0.1))",
                  }}
                />

                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    style={{
                      position: "relative",
                      paddingLeft: "52px",
                      marginBottom: "32px",
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "11px",
                        top: "6px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background:
                          edu.status === "current"
                            ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                            : "rgba(99,102,241,0.3)",
                        border:
                          edu.status === "current"
                            ? "3px solid rgba(99,102,241,0.3)"
                            : "2px solid rgba(99,102,241,0.4)",
                        zIndex: 1,
                        boxShadow:
                          edu.status === "current"
                            ? "0 0 12px rgba(99,102,241,0.5)"
                            : "none",
                      }}
                    />

                    <div
                      style={{
                        padding: "20px 24px",
                        borderRadius: "16px",
                        background: "rgba(15,15,26,0.6)",
                        border: `1px solid ${edu.status === "current" ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: "100px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background:
                              edu.status === "current"
                                ? "rgba(99,102,241,0.15)"
                                : "rgba(255,255,255,0.06)",
                            color:
                              edu.status === "current" ? "#818cf8" : "#64748b",
                          }}
                        >
                          {edu.period}
                        </span>
                        {edu.status === "current" && (
                          <span
                            style={{
                              padding: "3px 10px",
                              borderRadius: "100px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "rgba(16,185,129,0.1)",
                              border: "1px solid rgba(16,185,129,0.3)",
                              color: "#10b981",
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          color: "#f1f5f9",
                          fontWeight: 600,
                          fontSize: "15px",
                          margin: "0 0 4px",
                        }}
                      >
                        {edu.degree}
                      </p>
                      <p style={{ color: "#a78bfa", fontSize: "13px", margin: "0 0 4px" }}>
                        {edu.school}
                      </p>
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "12px",
                          margin: "0 0 12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <MapPin size={11} /> {edu.location} · GPA: {edu.gpa}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {edu.highlights.map((h) => (
                          <div
                            key={h}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "12px",
                              color: "#94a3b8",
                            }}
                          >
                            <CheckCircle2 size={12} style={{ color: "#6366f1", flexShrink: 0 }} />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
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
                    background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                  }}
                >
                  <Award size={17} color="#fff" />
                </span>
                Skills & Proficiency
              </h3>

              <div
                style={{
                  padding: "28px",
                  borderRadius: "20px",
                  background: "rgba(15,15,26,0.6)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "64px" }}
          >
            <h3
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
                  background: "linear-gradient(135deg, #a855f7, #6366f1)",
                }}
              >
                <Users size={17} color="#fff" />
              </span>
              Leadership Roles
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(clamp(260px, 30vw, 380px), 1fr))",
                gap: "20px",
              }}
            >
              {leadership.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  style={{
                    padding: "24px",
                    borderRadius: "18px",
                    background: "rgba(15,15,26,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(8px)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${role.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${role.color}, ${role.color}00)`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: `${role.color}18`,
                        border: `1px solid ${role.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: role.color,
                        flexShrink: 0,
                      }}
                    >
                      {role.icon}
                    </div>
                    <div>
                      <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "15px", margin: 0 }}>
                        {role.role}
                      </p>
                      <p style={{ color: role.color, fontSize: "12px", margin: 0 }}>
                        {role.org}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontSize: "11px",
                      fontWeight: 600,
                      background: "rgba(255,255,255,0.05)",
                      color: "#64748b",
                      marginBottom: "10px",
                    }}
                  >
                    📅 {role.period}
                  </span>
                  <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                    {role.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#f1f5f9",
                margin: "0 0 28px",
                textAlign: "center",
              }}
            >
              Personal{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Strengths
              </span>
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(clamp(200px, 22vw, 280px), 1fr))",
                gap: "16px",
              }}
            >
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  style={{
                    padding: "24px",
                    borderRadius: "18px",
                    background: "rgba(15,15,26,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "12px",
                      display: "block",
                    }}
                  >
                    {s.icon}
                  </div>
                  <p
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      fontSize: "15px",
                      margin: "0 0 8px",
                    }}
                  >
                    {s.title}
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
