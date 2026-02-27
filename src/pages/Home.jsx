import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 10%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "900px" }}
      >
        <h2
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            opacity: 0.6,
            marginBottom: "1rem",
          }}
        >
          Hi, I’m
        </h2>

        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Dibya Chowdhury
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            opacity: 0.85,
            maxWidth: "650px",
            marginBottom: "2.5rem",
          }}
        >
          A CSE (AI/ML) student building production-ready AI systems,
          startup-focused platforms, and scalable web applications.
          I enjoy blending artificial intelligence, product thinking,
          and real-world deployment.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth",
            })
          }
          style={{
            padding: "0.9rem 2rem",
            borderRadius: "30px",
            border: "none",
            background: "linear-gradient(90deg, #8b5cf6, #6366f1)",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}