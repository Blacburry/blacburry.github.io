import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  background: "rgba(17,17,17,0.7)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.05)"
}}
    >
      <h3 style={{ cursor: "pointer" }} onClick={() => scrollToSection("home")}>
        Blacburry
      </h3>

      <div style={{ display: "flex", gap: "2rem" }}>
        <span onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
          Home
        </span>
        <span onClick={() => scrollToSection("projects")} style={{ cursor: "pointer" }}>
          Projects
        </span>
        <span onClick={() => scrollToSection("blog")} style={{ cursor: "pointer" }}>
          Blog
        </span>
        <span onClick={() => scrollToSection("about")} style={{ cursor: "pointer" }}>
          About
        </span>
      </div>
    </motion.nav>
  );
};

export default Navbar;