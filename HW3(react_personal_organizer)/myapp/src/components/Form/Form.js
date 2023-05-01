import Select from "../UI/Select/Select"
import s from './Form.module.css'


function Form(props){

    const {addNewTask} = props

    const optionsDays = ['ПНД','ВТ','СР','ЧТ','ПТ','СБ','ВСК']
    const optionsImportance = ['Важный','Не важный']

    const submitHandle = (e) => {
        e.preventDefault()
        const [day,importance,title ] = e.target
        const newTask = {
            id: Date.now(),
            day: +day.value,
            importance: +importance.value,
            title: title.value
        }
        addNewTask(newTask)
    }

    return(
        <div>
            <div className="container">
                <div className={s.form_div}>
                    <form className={s.form_elem} onSubmit={submitHandle}>
                        <Select name={'day'} options={optionsDays}/>
                        <Select name={'importance'} options={optionsImportance}/>
                        <input className={s.form_elem_3} name="title" type="text"/>
                        <input className={s.form_elem_4} type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form