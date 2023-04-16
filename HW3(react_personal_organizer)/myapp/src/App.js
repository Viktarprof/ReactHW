import React, { useState } from 'react'
import Forms from './components/Forms/Forms'
import TasksList from './components/TasksList/TasksList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [days, setDays] = useState([])

  const submit_form = (event) => {
    event.preventDefault();
    let { day, important, desriptions} = event.target;

    const newTask = {
      id: Date.now(),
      day: +day.value,
      important: +important.value,
      desriptions: desriptions.value
    }
    setTasks([...tasks, newTask])

    

    if(!days.includes(day.value)){

      setDays([...days, day.value])
    }


    day.value = ''
    important.value = ''
    desriptions.value = ''
  }

  days.sort((a,b) => +a - +b)
  return (
    <div>
       <Forms submit_form = {submit_form}/>
       <TasksList
                tasks = {tasks}
                days = {days}/>
    </div>
  )
}

export default App