import DayItem from "../DayItem/DayItem"



function DaysList(props){

    const {tasks, deleteDay, deleteTask} = props
    const daysList = ['ПНД','ВТ','СР','ЧТ','ПТ','СБ','ВСК']

    return(
        <div>
            {tasks.map((elem,i) => 
                <div key={i} style={{padding: '15px', border: '1px solid black'}}>
                    <h2>{daysList[elem.day]}</h2>
                    <DayItem 
                        day={elem.day} 
                        tasksByDay={elem.tasksByDay} 
                        deleteDay ={deleteDay}
                        deleteTask={deleteTask}
                        />
                </div>
                )}
        </div>
    )
}


export default DaysList