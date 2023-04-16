import s from './Button.module.css'
function Button({title}){
    return(
        <button className={s.btn}>{title}</button>
    )
}
export default Button















// import s from './Button.module.css'
// function Button({addCard}){
//     return(
//         <button onClick={addCard} className={s.btn}>Добавить</button>
//     )
// }
// export default Button