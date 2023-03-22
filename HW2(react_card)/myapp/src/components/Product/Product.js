import { useState } from "react"
import ProductItem from "../ProductItem/ProductItem";
import { data } from '../Data/data'
import s from './Product.module.css'
import Button from "../Button/Button"
import {FiShoppingCart} from 'react-icons/fi'
import {MdOutlineMapsHomeWork} from 'react-icons/md'

function Product(){

    let [cards, setCards] = useState(data)

    const onDoubleClick = (id) => {
        let newCards = cards.filter(el => el.id != id)
        setCards(newCards) 
        console.log(newCards);
    }
 
// добавить в корзину 
    // const sumProd = (count) => {
    //     let newCards = cards.filter(el => el.count == count)
    //     setCards(newCards) 
    // }


    const addCard=()=>{
        const newCard = {
                        id: Date.now(),
                        name: prompt("Введите название товара"),
                        price: +prompt("Введите цену товара"),
                        count: +prompt("Введите колличество товара")
        }
        setCards([...cards, newCard])
    }

    return(
        <div className = {s.container}>
            <div className = {s.cards}>
                {cards.map((el) =><ProductItem 
                            key = {el.id} 
                            name = {el.name} 
                            price = {el.price}
                            count = {el.count}
                            id = {el.id}
                            onDoubleClick = {onDoubleClick}/>)}
            </div >

            <div onClick={addCard}>
                <Button btnName = 'Добавить новый товар'/>
            </div>

            <div className={s.shopContainer}>
                <FiShoppingCart className={s.shop}/>
                <MdOutlineMapsHomeWork className={s.home}/>
            </div>
        </div>
    )
}
export default Product



