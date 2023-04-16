import { useState } from "react";

import Form from "../Form/Form";
import DaysList from "../DaysList/DaysList";

function App() {

  let [tasks, setTasks] = useState([])


  const addNewTask = (newTask) => {
    let copyTasks = [...tasks]
    let findDay = copyTasks.findIndex(elem => elem.day === newTask.day)

    if (findDay >= 0){
      copyTasks[findDay].tasksByDay.push({...newTask})
    } else {
      copyTasks.push({day: newTask.day, tasksByDay: [{...newTask}]})
    }

    // Сортировка по дням недели
    copyTasks.sort((a,b) => a.day - b.day)

    // Сортировку по важности
    copyTasks.forEach(elem => {
      elem.tasksByDay.sort((a,b) => a.importance - b.importance)
    })

    console.log(tasks)
    setTasks(copyTasks)
  }

  const deleteDay = (day) => {
    setTasks(tasks.filter(elem => elem.day != day))
  }

  const deleteTask = (day, id) => {
    let copyTasks = tasks.map(elem => {
      if (elem.day == day){
        elem.tasksByDay = elem.tasksByDay.filter(elem => elem.id != id)
      }
      return elem
    })

    // Фильттрация стейта в случае, если задач не будет (автоматическое удаление пустого дня)
    copyTasks = copyTasks.filter(elem => elem.tasksByDay.length != 0)

    setTasks(copyTasks)
    
  }
  return (
    <div>
      <Form addNewTask={addNewTask}/>
      <DaysList  
        deleteDay={deleteDay} 
        deleteTask = {deleteTask}
        tasks={tasks}/>
    </div>
  );
}

export default App;