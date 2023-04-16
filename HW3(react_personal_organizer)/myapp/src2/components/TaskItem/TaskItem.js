
function TaskItem(props){
    const {title, importance, id, day, deleteTask} = props

    const styles = {color: (importance == 0) ? 'red' : "green"}
    return(
        <div>
            <h4 style={styles}>{title}</h4>
            <button onClick={() => deleteTask(day, id)}>X</button>
        </div>
    )
}

export default TaskItem