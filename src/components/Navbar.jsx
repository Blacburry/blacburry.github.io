import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem 8%",
        background: "#111",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <h3>Blacburry</h3>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;