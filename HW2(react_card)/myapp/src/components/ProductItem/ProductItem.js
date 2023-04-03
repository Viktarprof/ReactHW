import { useState } from "react";
import s from "./ProductItem.module.css";

function ProductItem( props ) {
    const { name, price, count, id, onDoubleClick, addCToCart } = props;

    const [num, setNum] = useState(count);// считаем каунт
    console.log(id);

  
    
    const colorNum = {
        color: num <= 0 ? "red" : "lightgreen"
    };

    const handleDec = (e) => {
        e.stopPropagation();
            if (num <= 0) {
                setNum(0);
            } else {
                setNum(num - 1);
            }
    };

    const handleInc = (e) => {
        e.stopPropagation();
        setNum(num + 1);
    };

    return (
        <div>
            <div onDoubleClick = {() => onDoubleClick(id)} className={s.card} >
                <span className = {s.span}>
                    <p>{name}</p>
                    <p>Price: {price * num}</p>
                        <div className = {s.triggers}>
                            <button 
                                onClick = {handleDec} 
                                onDoubleClick={(e) => e.stopPropagation()} 
                                className = {s.triggersBtn}> 
                            - 
                            </button>
                                <p style = {colorNum}>{num}</p>
                            <button 
                                onClick = {handleInc} 
                                onDoubleClick = {(e) => e.stopPropagation()} 
                                className={s.triggersBtn}> 
                            +
                            </button>
                        </div>
                </span>
                
            </div>
            <button 
                    onClick = {() => addCToCart(num)} 
                    className = {s.BtnShopCart}>
                    Добавить в корзину
                </button>
        </div>
    );
    }

export default ProductItem;






