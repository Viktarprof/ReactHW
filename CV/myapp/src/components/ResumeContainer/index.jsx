import React from "react";
import s from "./index.module.css";
import ResumePages from "../pages/ResumePages";

function ResumeContainer({ educations, works, skills }) {
  return (
  <div className={s.resumeContainer}>

    <div className={s.works_container}>
      <h2>Work Experience</h2>
      <div className={s.job}>
        {works.map((el) => (
          <ResumePages key={el.id} {...el} />
        ))}
      </div>

    </div>


    <div className={s.works_container}>
      <h2>Education</h2>
      <div className={s.job}>
        {educations.map((elem) => (
          <ResumePages key={elem.id} {...elem}/>
        ))}
   
      </div>
      
    </div>


    <div className={s.skills_container}>
      <h2>Skills & Expertise</h2>
      <ul className={s.skills}>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    
    </div>
  

    <div className={s.skills_container}>
      <h2>Language Skills</h2>
      <ul>
        <li>English (A2)</li>
        <li>Russian (native speaker)</li>
        <li>Polish (B1)</li>
      </ul>
    </div>




  </div>
  );
}

export default ResumeContainer;
