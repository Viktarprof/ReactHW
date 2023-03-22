import { useState } from "react"
import s from './ProductItem.module.css'


function ProductItem(props){

    const { name, price, count, id, onDoubleClick, sumProd} = props
    let [num, setNum] = useState(count)

    let colorNum =  {
       color: num <= 0  ? 'red' : 'lightgreen'
    }

    const Heandel_dec = () => {
        if( num <= 0 ){
            num = 1
        }
        setNum(--num)
    }

    return(
        <div>
            <div onDoubleClick={() => onDoubleClick(id)} className= { s.card }>
            <span className={s.span}>
                <p>{name}</p>
                <p>Price: {price*num}</p>
                <div className={s.triggers}>
                    <button onClick={Heandel_dec}>-</button>
                        <p style = {colorNum}>{num}</p>
                    <button onClick={() => setNum(++num)}>+</button>
                </div>
            </span>
            </div>
            <button onClick={() => sumProd(num)} className ={s.addBtn}> Заказать </button>
        </div>
    )
}
export default ProductItem


// let div = document.querySelector('.card');
// div.addEventListener('mousemove', e => {
//     let rect = e.target.getBoundinqClientRect();
//     let x = e.clientX - rect.left;
//     let y = e.clientY - rect.top;

//     div.style.setProperty('--x', x + 'px');
//     div.style.setProperty('--y', y + 'px');
// });