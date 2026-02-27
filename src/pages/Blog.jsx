import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Blog() {
  const [active, setActive] = useState(null);

  const posts = [
    {
      title: "CampusBlooms – Full Architecture Breakdown",
      content: `
CampusBlooms is a full-stack e-commerce platform connecting local flower vendors with college students.

Key Features:
• Razorpay payment integration
• WhatsApp order notifications via Twilio
• Admin dashboard for order tracking
• Secure backend with Node.js & MongoDB
• Production deployment using Vercel (frontend) & Render (backend)

What I Learned:
Building payment workflows, handling real-time notifications,
and deploying production-ready applications.
      `,
    },
    {
      title: "AI-Powered Anime Assistant – System Design",
      content: `
A real-time AI assistant with voice interaction and webcam integration.

Core Capabilities:
• Speech-to-text input
• AI response generation
• Webcam-based object recognition
• Modular architecture for future desktop expansion

Tech Stack:
JavaScript, Web Speech API, AI APIs

This project focuses on combining interaction design with AI system pipelines.
      `,
    },
    {
      title: "VC Startup Sourcing Platform – Research Tool",
      content: `
A platform built to streamline startup discovery and filtering.

Key Features:
• Dynamic filtering system
• Structured startup data management
• Category-based UI organization
• Responsive UI for smooth workflow

Purpose:
To simulate venture capital deal screening tools with
clean UX and scalable architecture principles.
      `,
    },
  ];

  return (
    <SectionWrapper id="blog">
      <>
        <h1 style={{ marginBottom: "3rem" }}>Project Deep Dives</h1>

        <div className="projects-grid">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(post)}
              style={{ cursor: "pointer" }}
            >
              <h2>{post.title}</h2>
              <p style={{ opacity: 0.6, marginTop: "1rem" }}>
                Click to read full breakdown →
              </p>
            </motion.div>
          ))}
        </div>

        {active && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{active.title}</h2>
              <p style={{ whiteSpace: "pre-line", marginTop: "1.5rem" }}>
                {active.content}
              </p>
            </motion.div>
          </motion.div>
        )}
      </>
    </SectionWrapper>
  );
}