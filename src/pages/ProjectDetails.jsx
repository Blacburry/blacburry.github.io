import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="container">Project not found.</div>;

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {project.title}
      </motion.h1>

      <p style={{ marginTop: "1.5rem", opacity: 0.8 }}>
        {project.description}
      </p>

      <h3 style={{ marginTop: "2rem" }}>Tech Stack</h3>
      <ul>
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <a href={project.live} target="_blank">
          <button>Live Demo</button>
        </a>
        <a
          href={project.github}
          target="_blank"
          style={{ marginLeft: "1rem" }}
        >
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
}