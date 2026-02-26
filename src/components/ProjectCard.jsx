import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="project-card"
    >
      <Link to={`/projects/${project.id}`}>
  <h2 style={{ cursor: "pointer" }}>{project.title}</h2>
</Link>
      <p className="description">{project.description}</p>

      <p>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>

      <div className="buttons">
        <a href={project.live} target="_blank">
          <button>Live</button>
        </a>

        <a href={project.github} target="_blank">
          <button>GitHub</button>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;