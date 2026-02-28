import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <h1>Let’s Connect</h1>
        <p>
          Interested in collaboration, internships, or building something
          ambitious together?
        </p>

        <div className="contact-links">
          <a href="mailto:chydibya2006@gmail.com">
            <MdEmail size={22} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Blacburry"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dibya-chowdhury-355967322"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}