import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";

import { Footer } from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";

import { motion } from "motion/react";
import ProjectList from "./components/projects/ProjectList";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutMe />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectList />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Certifications />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
