import React from 'react'
import DaysList from '../DaysList/DaysList'

function TasksList({days, tasks}) {
   
  return (
    <div>
        {days.map((el, index) => 
                        <DaysList
                           key = {index}
                           day = {el}
                           tasks = {tasks} /> )}
    </div>
  )
}

export default TasksList