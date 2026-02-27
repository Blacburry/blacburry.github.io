import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <>
        <h1>About Me</h1>
        <p
          style={{
            marginTop: "2rem",
            lineHeight: "1.8",
            opacity: 0.85,
            maxWidth: "800px",
          }}
        >
          I focus on designing and deploying intelligent systems that
          solve real-world problems. My work combines AI, product thinking,
          and scalable architecture to build impactful digital platforms.
        </p>
      </>
    </SectionWrapper>
  );
}