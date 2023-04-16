import React from 'react'
import s from './Forms.module.css'

function Forms({submit_form}) {   // передаю функцию пропсом
  
  
    return (
    <div>
        <form onSubmit = {submit_form} 
            className={s.form_container}>
            <div className= {s.select}>
                <select name = 'day'>
                    <option value=''>Выберите день</option>
                    <option value='0'>Понедельник</option>
                    <option value='1'>Вторник</option>
                    <option value='2'>Среда</option>
                    <option value='3'>Четверг</option>
                    <option value='4'>Пятница</option>
                    <option value='5'>Суббота</option>
                    <option value='6'>Воскресенье</option>
                </select>
                <select name = 'important'>
                    <option value=''>Выберите важность</option>
                    <option value='1'>Важно</option>
                    <option value='2'>Не важно</option>
                </select>
            </div>
            <div className={s.container_input}>
                <input type='text' name='desriptions' placeholder='Write text'/>
                <button type='submit'>Add tasks</button>
            </div>
        </form>
    </div>
  )
}

export default Forms