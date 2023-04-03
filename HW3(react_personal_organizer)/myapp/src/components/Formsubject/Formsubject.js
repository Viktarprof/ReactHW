import Button from '../Button/Button'
import s from './Formsubject.module.css'

function Formsubject({submit_form}){

const styles = {top: "8",
                right: "29",
                color: 'white'}
    return( 
        <div className={s.taskContainer}>
            <form onSubmit={submit_form} > 
                <div className={s.tasksSelect}>
                    <select  name="day" required>
                        <option value = "">Выберите день</option>
                        <option value = "0">Понедельник</option>
                        <option value = "1">Вторник</option>
                        <option value = "2">Среда</option>
                        <option value = "3">Четверг</option>
                        <option value = "4">Пятница</option>
                        <option value = "5">Суббота</option>
                        <option value = "6">Воскресенье</option>
                    </select>
                    <select name='importance' required>
                        <option value = ''>Bведите важность</option>
                        <option value = '0'>Важно</option>
                        <option value = '1'>Неважно</option>
                    </select>
                </div>
                <div className={s.addTask}>
                    <input type='text' name='description' placeholder='Описание' required/>
                    <button className={s.btnAdd} type='submit'>Добавить</button>
                </div>
            </form>
        </div>
    )
}
export default Formsubject

















// import Button from "../Button/Button"
// import s from './Formsubject.module.css'



// function Formsubject({ addSubject }){

//     const submit_form = event =>{
//         event.preventDefault();
//         const { days, importance, description } = event.target;
    
//         const newCard = {
//             id: Date.now(),
//             day: days.value,
//             importance: importance.value,
//             description: description.value
//         }
//         console.log(newCard);
    
//         addSubject(newCard);

//         days.value = '',
//         importance.value = '',
//         description.value = ''       
//     }


//     return( 
//         <div className={s.taskContainer}>
//             <form onSubmit = {submit_form} > 
//                 <div className={s.tasksSelect}>
//                     <select id={s.days} name="days" required='required'>
//                         <option name="days" value = "0">Выберите день</option>
//                         <option name="days" value = "1">Понедельник</option>
//                         <option name="days" value = "2">Вторник</option>
//                         <option name="days" value = "3">Среда</option>
//                         <option name="days" value = "4">Четверг</option>
//                         <option name="days" value = "5">Пятница</option>
//                         <option name="days" value = "6">Суббота</option>
//                         <option name="days" value = "7">Воскресенье</option>
//                     </select>
//                     <select id={s.importance} name='importance'>
//                         <option name = "">Bведите важность</option>
//                         <option name = "important" value = {true} >Важно</option>
//                         <option name = "unimportant" value = {false}>Неважно</option>
//                     </select>
//                 </div>
//                 <div className={s.addTask}>
//                     <input type='text' name='description' placeholder='Описание'></input>
//                     <Button addSubject={addSubject}/>
//                 </div>
//             </form>
//         </div>
            
//     )
// }
// export default Formsubject