import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/NavMenu";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <main id="home">
        <Navbar />
        <section className="about" id="about">
          <AboutSection />
        </section>
        <section className="experience" id="experience">
          <ExperienceSection />
        </section>
        <section className="projects" id="projects">
          <ProjectsSection />
        </section>
        <section className="contact" id="contact">
          <ContactSection />
        </section>
        <section className="footer">
          <Footer />
        </section>
      </main>
    </Router>
  );
}
export default App;
