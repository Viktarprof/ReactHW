import React from 'react'
import s from './SubjectContainer.module.css'
import WeeksDay from "../WeeksDay/WeeksDay"



function SubjectContainer({subjects, days, deleteDay, deleteSubject, chengeImportance }){
    days.sort((a, b) => +a - +b) // + string -> num
    return(
        <div className={s.cards_container}>
            {days.map((el,index)=> 
                <WeeksDay
                    key={index} 
                    day={el}
                    subjects={subjects}
                    deleteDay={deleteDay} 
                    deleteSubject={deleteSubject}
                    chengeImportance={chengeImportance}/>)}
            </div>
    )
}
export default SubjectContainer


