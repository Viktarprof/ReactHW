import React from 'react'
import s from './index.module.css'
import ScrollButton from '../ScrollButton'
import ProjectsPages from '../pages/ProjectsPages'

function ProjectsContainer ({projects}) {
  return (
    <div className={s.projectsContainer}> 
      {projects.map((el)=> 
      <ProjectsPages
        key={el.id}
        {...el}/>)}

      <ScrollButton/>
    </div>
  )
}

export default ProjectsContainer 