import SectionWrapper from "../components/SectionWrapper";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <>
        <h1 style={{ marginBottom: "3rem" }}>Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
}