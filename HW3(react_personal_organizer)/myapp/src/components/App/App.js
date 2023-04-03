import { useState } from 'react';
import s from './App.module.css';
import Formsubject from '../Formsubject/Formsubject';
import SubjectContainer from '../SubjectContainer/SubjectContainer';


function App(){

  let [days, setDays] = useState([]);
  let [subjects, setCardsSubjects] = useState([]);


  const submit_form = event => {
    event.preventDefault();
    let { day, importance, description } = event.target;

    const newSubject = {
      id: Date.now(),
      day: day.value,
      importance: importance.value,
      description: description.value
    }
    //добавляем новое задание в массив subjects
    setCardsSubjects([...subjects, newSubject])


    if(!days.includes(day.value)){
      setDays([...days, day.value])
    }
  
    day.value = '',
    importance.value = '',
    description.value = ''      
  }



  //удаление дня
    const deleteDay = (numDay) => {
      setDays(days.filter((el) => el !== numDay))
      // console.log(numDay)
      // console.log(days);
    }
  //удаление задачи
    const deleteSubject = (numId) => {
      setCardsSubjects(subjects.filter((el) => el.id !== numId))
      // console.log(numId)
      // console.log(subjects);
    }

  //замена важности
  const chengeImportance = (numId) => {
    setCardsSubjects(subjects.map((el) => {
        if(el.id == numId){
          el.importance = el.importance === '0' ? el.importance = '1' : el.importance = '0'
        }
        return el
      }))
  }


    return(
      <section className = {s.container}>
        <Formsubject 
          submit_form={submit_form}/>
        <SubjectContainer 
          days={days}
          subjects={subjects}
          deleteDay={deleteDay}
          deleteSubject={deleteSubject}
          chengeImportance={chengeImportance}/>
      </section>
       
    )
}
export default App