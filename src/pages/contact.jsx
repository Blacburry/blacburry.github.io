import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <>
        <h1 style={{ marginBottom: "1rem" }}>Let’s Connect</h1>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Interested in collaboration, internships, or building something
          ambitious together?
        </p>

        <div className="contact-links">
          <a href="mailto:chydibya2006@gmail.com">
            chydibya2006@gmail.com
          </a>

          <a
            href="https://github.com/Blacburry"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </>
    </SectionWrapper>
  );
}