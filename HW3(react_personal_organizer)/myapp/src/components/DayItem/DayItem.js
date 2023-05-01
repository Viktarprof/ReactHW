import TaskItem from "../TaskItem/TaskItem"
import s from './DayItem.module.css'

function DayItem(props){

    const {tasksByDay, day, deleteDay, deleteTask} = props

    return(
        <div className={'tasks_wrapper'}>
            {tasksByDay.map((elem,i) => 
                    <TaskItem 
                        key={i}
                        title={elem.title}
                        importance={elem.importance}
                        id = {elem.id}
                        day = {elem.day}
                        deleteTask ={deleteTask}
                        />  
            )}
            <button className={'xmark1'} onClick={() => deleteDay(day)}>X</button>
        </div>
    )
}

export default DayItem