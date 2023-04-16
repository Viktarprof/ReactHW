import React from 'react'
import s from './WeeksDay.module.css'
import Subjects from '../Subjects/Subjects';
import Button from '../Button/Button';

function WeeksDay({days, day, subjects, deleteDay, deleteSubject, chengeImportance}){
console.log(day);
    const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'] // принять в индекс полученное число от days  => строка 15

    subjects.sort((a,b) => +a.importance - +b.importance) //+ string -> num

  
    return(
        <div className={s.weeks_container}>
            <div className={s.weekDay}>
                <p>{week[day]}</p> 
            </div>
        
            <div className={s.subjects}>
                {subjects.map((el, index)=>{
                    if(el.day === day){
                        return <Subjects
                        key = {index} 
                        days={el.day}
                        id = {el.id} 
                        importance = {el.importance}
                        description = {el.description} 
                        deleteSubject={deleteSubject}
                        chengeImportance={chengeImportance}/>
                    }
                })}
            </div>
            <div onClick={() => deleteDay(day)} 
            className={s.close_btn}
            style={{color: 'black'}}>
                 <Button title = {'x'}/>
            </div>
        </div>
    )
}
export default WeeksDay