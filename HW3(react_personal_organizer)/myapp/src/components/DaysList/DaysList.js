import DayItem from "../DayItem/DayItem"
import s from './DayList.module.css'


function DaysList(props){

    const {tasks, deleteDay, deleteTask} = props
    const daysList = ['ПНД','ВТ','СР','ЧТ','ПТ','СБ','ВСК']

    return(
        <div className="container"> 
            {tasks.map((elem,i) => 
                <div key={i} className={s.day_item_elem}>
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