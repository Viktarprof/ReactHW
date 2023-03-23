import { useState } from "react";
import s from "./ProductItem.module.css";

function ProductItem(props) {
    const { name, price, count, id, onDoubleClick, sumProd } = props;
    const [num, setNum] = useState(count);

    const colorNum = {
        color: num <= 0 ? "red" : "lightgreen"
    };

    const handleDec = (e) => {
        e.stopPropagation();
            if (num <= 0) {
                setNum(1);
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
            <div onDoubleClick={() => onDoubleClick(id)} className={s.card}>
                <span className={s.span}>
                    <p>{name}</p>
                    <p>Price: {price * num}</p>
                        <span className={s.triggers}>
                            <button 
                                onClick={handleDec} 
                                onDoubleClick={(e) => e.stopPropagation()} 
                                className={s.triggersBtn}> 
                            - 
                            </button>
                                <p style={colorNum}>{num}</p>
                            <button 
                                onClick={handleInc} 
                                onDoubleClick={(e) => e.stopPropagation()} 
                                className={s.triggersBtn}> 
                            +
                            </button>
                        </span>
                </span>
            </div>
        <button 
            onClick={() => sumProd(num)} 
            className={s.BtnShopCart}>
            Заказать
        </button>
        </div>
    );
    }

export default ProductItem;






