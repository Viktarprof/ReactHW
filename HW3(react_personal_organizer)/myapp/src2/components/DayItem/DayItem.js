import TaskItem from "../TaskItem/TaskItem"

function DayItem(props){

    const {tasksByDay, day, deleteDay, deleteTask} = props

    return(
        <div>
            {tasksByDay.map((elem,i) => 
                <div key={i}>
                    <TaskItem 
                        title={elem.title}
                        importance={elem.importance}
                        id = {elem.id}
                        day = {elem.day}
                        deleteTask ={deleteTask}
                        />
                </div>    
            )}
            <button onClick={() => deleteDay(day)}>Удалить день</button>
        </div>
    )
}

export default DayItem