interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div
      className="flex flex-col gap-4"
      style={{ textAlign: centered ? "center" : "left", marginBottom: "48px" }}
    >
      {badge && (
        <span
          style={{
            display: "inline-flex",
            alignSelf: centered ? "center" : "flex-start",
            padding: "4px 14px",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: "rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.25)",
            color: "#a78bfa",
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          color: "#f1f5f9",
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {title}{" "}
        {highlight && (
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#94a3b8",
            fontSize: "clamp(14px, 2vw, 17px)",
            maxWidth: "560px",
            margin: centered ? "0 auto" : "0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
