import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Achievements", to: "/achievements" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(7, 7, 17, 0.92)"
            : "rgba(7, 7, 17, 0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(139, 92, 246, 0.15)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: "1440px",
            padding: "0 clamp(16px, 4vw, 48px)",
            height: "64px",
          }}
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group"
            style={{ textDecoration: "none" }}
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 0 16px rgba(139, 92, 246, 0.4)",
              }}
            >
              <Code2 size={18} color="#fff" />
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "18px",
                background: "linear-gradient(135deg, #a78bfa, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              NVD.dev
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  [
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span style={{ position: "relative" }}>
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/#contact"
              className="hidden md:flex items-center"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 0 16px rgba(99, 102, 241, 0.3)",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "translateY(-1px)";
                  (e.target as HTMLButtonElement).style.boxShadow =
                    "0 0 24px rgba(99, 102, 241, 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.transform =
                    "translateY(0)";
                  (e.target as HTMLButtonElement).style.boxShadow =
                    "0 0 16px rgba(99, 102, 241, 0.3)";
                }}
              >
                Contact Me
              </button>
            </NavLink>
            <button
              className="md:hidden flex items-center justify-center rounded-lg"
              style={{
                width: "40px",
                height: "40px",
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                color: "#a78bfa",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              backgroundColor: "rgba(7, 7, 17, 0.98)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(139, 92, 246, 0.15)",
              padding: "16px",
            }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    [
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 block",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white",
                    ].join(" ")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: isActive
                          ? "rgba(139, 92, 246, 0.1)"
                          : "transparent",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        borderLeft: isActive
                          ? "3px solid #8b5cf6"
                          : "3px solid transparent",
                      }}
                    >
                      {link.label}
                    </span>
                  )}
                </NavLink>
              ))}
              <div style={{ marginTop: "8px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px 20px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
