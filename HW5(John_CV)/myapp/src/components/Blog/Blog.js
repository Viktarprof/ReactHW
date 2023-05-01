import React from 'react'
import moment from 'moment'
import s from './Blog.module.css'

function Blog({id, title, tags, date, text}) {

    const alltags = tags.join(', ');
    const newFormatDate = moment(date).format('DD MMM YYYY');
    
    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //     const day = date.getDate();
    //     const monthIndex = date.getMonth();
    //     const year = date.getFullYear();
    //     return `${day} ${monthNames[monthIndex]} ${year}`;
    //   }
    // const newFormatDate = formatDate(date);



  return (
   <div>
     <div className={s.blog_item}>
        <h2>{title}</h2>
        <div className={s.date_tagss}>
            <p>{newFormatDate}</p>
            <div className={s.line}></div>
            <p>{alltags}</p>
        </div>
        <p className={s.descriptions}>{text}</p>
    </div>
   </div>
  )
}

export default Blog