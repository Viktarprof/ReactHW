import s from './TaskItem.module.css'

function TaskItem(props){
    const {title, importance, id, day, deleteTask} = props

    const styles = {color: (importance == 0) ? 'red' : "green"}
    return(
        <div className={'task_elem'}>
            <h4 style={styles}>{title}</h4>
            <button className={'xmark2'} onClick={() => deleteTask(day, id)}>X</button>
        </div>
    )
}

export default TaskItem