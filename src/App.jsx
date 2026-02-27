import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProjectDetails from "./pages/ProjectDetails";
import BlogPost from "./pages/BlogPost";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <About />
              <Blog />
              <Contact />
            </>
          }
        />

        {/* Separate Detail Pages */}
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;