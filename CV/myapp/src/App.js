import { Routes, Route } from "react-router-dom";
import './App.css';
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import ResumeContainer from "./components/ResumeContainer";
import { workExperience, education, skill, portfolio } from './components/data/data'
import { useState } from "react";
import ProjectsContainer from "./components/ProjectsContainer";
import ContactsPages from "./components/pages/ContactsPages";
import MainPages from "./components/pages/MainPages";



function App() {

  const [works, setWorks] = useState(workExperience);
  const [educations, setEducations] = useState(education)
  const [skills, setSkills] = useState(skill)
  const [projects, setProjects] = useState(portfolio)
  return (
   <>
    <div className="wrapper">
      <NavMenu/>
      <Routes>
        <Route path="/" element={<MainPages/>}/>
        <Route path="/resume" element={<ResumeContainer
          works={works}
          educations={educations}
          skills={skills}
          />}/>
        <Route path="/projects" element={<ProjectsContainer
          projects={projects}
          />}/>
        <Route path="/contacts" element={<ContactsPages/>}/>
      </Routes>
      <Footer/>


    </div>
   </>
  );
}

export default App;
