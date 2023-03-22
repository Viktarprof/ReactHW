import s from './Button.module.css'
function Button(props){

const { btnName } = props

    return(
        <button className={s.btn}> { btnName } </button>
    )
}
export default Button