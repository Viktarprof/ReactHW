import React from 'react'
import s from './Subjects.module.css'
import Button from '../Button/Button'

function Subjects ({id, importance, description, deleteSubject, chengeImportance}){

    const style = {
        backgroundColor: importance === "0" ? '#e74c3c' : '#1abc9c'}

    return(
        <div className={s.card_item}
            style={style}
            onDoubleClick={()=> chengeImportance(id)}>

            {description}

            <div onClick={() => deleteSubject(id)} 
                className={s.close_btn}
                >
                 <Button title = {'x'}/>
            </div>
        </div>
    )
}
export default Subjects