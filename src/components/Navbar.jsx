import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "1.2rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled
          ? "rgba(15,15,25,0.8)"
          : "rgba(15,15,25,0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "700",
          fontSize: "1.2rem",
          letterSpacing: "1px",
        }}
      >
        Blacburry
      </div>

      {/* Nav Links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          fontSize: "0.95rem",
          fontWeight: "500",
        }}
      >
        {["Home", "Projects", "Blog", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              position: "relative",
              textDecoration: "none",
              color: "white",
              transition: "0.3s",
            }}
          >
            {item}
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: "-4px",
                width: "0%",
                height: "2px",
                background: "#8b5cf6",
                transition: "0.3s",
              }}
              className="nav-underline"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}