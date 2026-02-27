import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        minHeight: "100vh",
        padding: "8rem 10%",
        background: "transparent",
      }}
    >
      {children}
    </motion.section>
  );
}