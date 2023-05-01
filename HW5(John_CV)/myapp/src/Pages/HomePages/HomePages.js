import React from 'react'
import s from './HomePages.module.css'
import Header from '../../components/Header/Header'
import BlogContainer from '../../components/BlogContainer/BlogContainer'
import WorkDetailContainer from '../../components/WorkDetailContainer/WorkDetailContainer'

function HomePages({blogs, works }) {
  return (
    <div>
      <div>
        <Header/>
        <BlogContainer blogs={blogs}/>
        <WorkDetailContainer works={works}/>
      </div>
    </div>
  )
}

export default HomePages