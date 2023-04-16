import Select from "../UI/Select/Select"



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
            <form onSubmit={submitHandle}>
                <Select name={'day'} options={optionsDays}/>
                <Select name={'importance'} options={optionsImportance}/>
                <input name="title" type="text"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form


