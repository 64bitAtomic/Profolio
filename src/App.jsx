import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import Projects from "./components/ProjectsImage/Projects";
import { Navbar } from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;