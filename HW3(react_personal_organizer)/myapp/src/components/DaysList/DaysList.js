import React from 'react'
import Tasks from '../Tasks/Tasks';

function DaysList({day, tasks}) {
    const dayWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    
    console.log(day);
    console.log(tasks);
  return (
    <div>
        <div>
            <p>{dayWeek[day]}</p>
        </div>
        <div>
            {tasks.map((el, index) => {
               if(+el.day === +day){
                return <Tasks
                    key = {index}
                    id = {el.id}
                    important = {el.important}
                    desriptions = {el.desriptions}
                    />
                }
            })}
        </div>
    </div>
  )
}

export default DaysList