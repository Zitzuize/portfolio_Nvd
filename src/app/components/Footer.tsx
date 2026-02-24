import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(139, 92, 246, 0.12)",
        backgroundColor: "rgba(7, 7, 17, 0.95)",
        padding: "40px clamp(16px, 4vw, 48px) 24px",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              <Code2 size={16} color="#fff" />
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "16px",
                background: "linear-gradient(135deg, #a78bfa, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Nguyễn Văn Đức
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: <Github size={18} />,
                href: "https://github.com",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={18} />,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: <Mail size={18} />,
                href: "mailto:duc.nguyen@example.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  color: "#a78bfa",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(139, 92, 246, 0.2)";
                  el.style.borderColor = "rgba(139, 92, 246, 0.5)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(139, 92, 246, 0.1)";
                  el.style.borderColor = "rgba(139, 92, 246, 0.2)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              color: "#64748b",
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            © 2025 Made with{" "}
            <Heart
              size={12}
              style={{ color: "#8b5cf6", fill: "#8b5cf6" }}
            />{" "}
            by NVD
          </p>
        </div>
      </div>
    </footer>
  );
}
