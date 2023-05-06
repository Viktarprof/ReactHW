import React from 'react'
import s from './index.module.css'

function ResumePages({studyingTime, school, specialization, about, title, profetions, description, date, skill}) {

console.log(skill);
  return (
   <>
   <div className={s.work}>
        <p>{date}</p>
          <div className={s.infoWork}>
              <h3>{title}</h3>
              <h4>{profetions}</h4>
              <p>{description}</p>
          </div>
      </div>


      <div className={s.education}>
        <p >{studyingTime}</p>
          <div className={s.infoEducation}>
            <h3>{school}</h3>
            <h4>{specialization}</h4>
            <p>{about}</p>
          </div>
      </div>

  
   </>

      
    

  )
}

export default ResumePages