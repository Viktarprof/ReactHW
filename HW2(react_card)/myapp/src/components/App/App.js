import { useState } from "react"
import ProductItem from "../ProductItem/ProductItem";
import { data } from '../Data/data'
import s from './App.module.css'
import Button from "../Button/Button"
import {FiShoppingCart} from 'react-icons/fi'
import {MdOutlineMapsHomeWork} from 'react-icons/md'

function App(){

    let [cards, setCards] = useState(data)
    let [cartCount, setCartCount] = useState(0) // отдельный хук для подсчета count

    const onDoubleClick = (id) => {
        let newCards = cards.filter(el => el.id !== id)
        setCards(newCards) 
    }

    const addCToCart = (num) => {
        setCartCount(cartCount + num)
    }

    const removeCountCart = () =>{    
            setCartCount(--cartCount)
     
        
    }
    const addCountCart = () =>{
        setCartCount(++cartCount)
    }

    const addNewCard=()=>{
        const newCard = prompt('введите через пробез название, стоимость и кол-во товара');
        const [new_name, new_price, new_count] = newCard.split(' ')
        const newGood = {
            id: Date.now(),
            name: new_name,
            price: +new_price,
            count: +new_count
        }
        setCards([...cards, newGood])
    }

    return(
        <div className = {s.container}>
            <div className = {s.cards}>
                {cards.map((el) =><ProductItem 
                            id = {el.id}
                            key = {el.id} 
                            name = {el.name} 
                            price = {el.price}
                            count = {el.count}
                            onDoubleClick = {onDoubleClick}
                            addCToCart = {addCToCart}
                            />)}
            </div >

            <div onClick={addNewCard}>
                <Button btnName = 'Добавить новый товар'/>
            </div>

            <div className={s.shopContainer}>
                <div className={s.cartNum}>
                    <p >В корзине находится {cartCount} товаров</p>
                    <FiShoppingCart className={s.shop}/>
                   <div className={s.triggers}>
                        <button onClick={removeCountCart}>-</button>
                        <button onClick={addCountCart}>+</button>
                   </div>
                </div>
                
                <MdOutlineMapsHomeWork className={s.home}/>
            </div>
        </div>
    )
}

export default App

  




// import { useState } from "react"
// import ProductItem from "../ProductItem/ProductItem";
// import { data } from '../Data/data'
// import s from './App.module.css'
// import Button from "../Button/Button"
// import {FiShoppingCart} from 'react-icons/fi'
// import {MdOutlineMapsHomeWork} from 'react-icons/md'

// function App(){

//   let [cards, setCards] = useState(data)
//   let [totalItems, setTotalItems] = useState(0)

//   const onDoubleClick = (id) => {
//     let newCards = cards.filter(el => el.id != id)
//     setCards(newCards) 
//   }

//   const sumProd = (id) => {
//     const total = cards.filter(el => el.id == id)
//     // cards.reduce((acc, cur) => acc + cur.count, 0)
//     setTotalItems(total)
//   }

//   const addCard = () => {
//     // через одно модальное окно
//     const newCard = prompt('введите через пробез название, стоимость и кол-во товара');
//     const [new_name, new_price, new_count] = newCard.split(' ')
//     const newGood = {
//       id: Date.now(),
//       name: new_name,
//       price: +new_price,
//       count: +new_count
//     }
//     setCards([...cards, newGood])
//   }

//   return (
//     <div className={s.container}>
//       <div className={s.cards}>
//         {cards.map((el) => 
//           <ProductItem 
//             id={el.id}
//             key={el.id} 
//             name={el.name} 
//             price={el.price}
//             count={el.count}
//             onDoubleClick={onDoubleClick}
//             sumProd={sumProd}
//           />
//         )}
//       </div>

//       <div onClick={addCard}>
//         <Button btnName='Добавить новый товар'/>
//      </div>

//              <div className={s.shopContainer}>
//              <p>В корзине: {totalItems} товаров</p>
//                  <MdOutlineMapsHomeWork className={s.home}/>
//                  <FiShoppingCart className={s.shop}/>
//              </div>
//          </div>
//      )
//  }
//  export default App








// import { useState } from "react"
// import ProductItem from "../ProductItem/ProductItem";
// import { data } from '../Data/data'
// import s from './App.module.css'
// import Button from "../Button/Button"
// import {FiShoppingCart} from 'react-icons/fi'
// import {MdOutlineMapsHomeWork} from 'react-icons/md'

// function App(){

//     let [cards, setCards] = useState(data)

//     const onDoubleClick = (id) => {
//         let newCards = cards.filter(el => el.id != id)
//         setCards(newCards) 
//         console.log(newCards);
//     }

//     const sumProd = (count) => {
//         let news = cards.filter(el => el.id === count)
//         console.log(news);
//     }

//     const addCard=()=>{
// // через одно модальное окно
//         const newCard = prompt('введите через пробез название, стоимость и кол-во товара');
//         const [new_name, new_price, new_count] = newCard.split(' ')
//         const newGood = {
//             id: Date.now(),
//             name: new_name,
//             price: +new_price,
//             count: +new_count
//         }
//         setCards([...cards, newGood])

// // через три модальных окна
//         // const newCard = {
//         //                 id: Date.now(),
//         //                 name: prompt("Введите название товара"),
//         //                 price: +prompt("Введите цену товара"),
//         //                 count: +prompt("Введите колличество товара")
//         // }
//         // setCards([...cards, newCard])
//     }

//     // кнопка заказать (добавить в корзину)

    
//     return(
//         <div className = {s.container}>
//             <div className = {s.cards}>
//                 {cards.map((el) =><ProductItem 
//                             id = {el.id}
//                             key = {el.id} 
//                             name = {el.name} 
//                             price = {el.price}
//                             count = {el.count}
//                             onDoubleClick = {onDoubleClick}
//                             sumProd = {sumProd}
//                             />)}
//             </div >

//             <div onClick={addCard}>
//                 <Button btnName = 'Добавить новый товар'/>
//             </div>

//             <div className={s.shopContainer}>
//             <p></p>
//                 <FiShoppingCart className={s.shop}/>
//                 <MdOutlineMapsHomeWork className={s.home}/>
//             </div>
//         </div>
//     )
// }
// export default App



