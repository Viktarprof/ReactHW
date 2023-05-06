import React from 'react'
import s from './index.module.css'

function ProjectsPages({title, description, image,link}) {
  return (
    <div className={s.cartProject}>
      <div className={s.cartInfo}>
        <a href={link}><h2>{title}</h2></a>
        <p>{description}</p>
    </div>
    <img width={200} src={image} alt={title} />
    </div>
  )
}

export default ProjectsPages