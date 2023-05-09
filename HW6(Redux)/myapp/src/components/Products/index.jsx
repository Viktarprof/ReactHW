import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAction,
  decrByPayloadAction,
  dellProductAction,
  incrByPayloadAction,
  resetCartAction,
} from "../../store/countReduser";
import { AiOutlineArrowsAlt } from "react-icons/ai";

function Products() {
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);

  const activeWindow = () => {
    setActive(!active);
  };
  const activeHide = () => {
    setActive2(!active2);
  };
  const activeZoom = () => {
    setActive3(!active3);
  };


  let products = useSelector((store) => store.count);
  console.log(products);
  let dispatch = useDispatch();



  return (
    <div
      className={`${s.cart} 
        ${active ? "" : s.active} ${s.cart} 
        ${active2 ? "" : s.activeHide}
        ${active3 ? "" : s.activeZoom}`}>
      <div className={s.btns}>
        <button className={s.close_button} onClick={activeWindow}></button>
        <button className={s.hide} onClick={activeHide}></button>
        <button className={s.zoom} onClick={activeZoom}><AiOutlineArrowsAlt className={s.btn_arowe}/></button>
      </div>

      <div className={`${s.productsList} ${active3 ? "" : s.activeZoom}`}>
        <div className={s.add_Reset_Container}>
          <button
            className={s.addProduct}
            onClick={() =>dispatch(addProductAction(prompt("Write name product.")))}>Add new product
          </button>
          <button
            className={s.resetProducts}
            onClick={() =>dispatch(resetCartAction())}>Reset count products
          </button>
        </div>

        {products.map((el, index) => (
          <div key={index} className={s.products}>
            <p>{el.title}</p>
            <div className={s.container_Btn}>
              <div className={s.triggersBtn}>
                <button
                  className={s.plus}
                  onClick={() => dispatch(incrByPayloadAction(el.id))}>+
                </button>
                <p>{el.count}</p>
                <button
                  className={s.minus}
                  onClick={() => dispatch(decrByPayloadAction(el.id))}>-
                </button>
              </div>
              <button
                className={s.delete}
                onClick={() => dispatch(dellProductAction(el.id))}> x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
