import React from 'react'
import moment from 'moment'
import s from './BlogList.module.css'

function BlogList({id, title, tags, date, text}) {

    const alltags = tags.join(', ');
    const newDate = moment(date).format('DD MMM YYYY');
  return (
    <>
        <div className={s.blog_item}>
            <h2>{title}</h2>
                <div className={s.date_tagss}>
                    <p>{newDate}</p>
                    <div className={s.line}></div>
                    <p>{alltags}</p>
                </div>
            <p className={s.descriptions}>{text}</p>
            <div className='line'></div>
        </div>
    </>
  )
}

export default BlogList