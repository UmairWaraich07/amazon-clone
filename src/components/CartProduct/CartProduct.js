import React, { forwardRef } from "react";
import "./CartProduct.css";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basketSlice";

const CartProduct = forwardRef(({ id, title, price, quantity, image }, ref) => {
  const dispatch = useDispatch();

  return (
    <article className="cartProduct" ref={ref}>
      <img src={image} alt="" className="cartProduct__img" />

      <div className="cartProduct__info">
        <h4 className="cartProduct__title">{title}</h4>
        <h4 className="cartProduct__price"> ${price} </h4>
        <p className="cartProduct__stock">In Stock</p>

        <div className="cartProduct__quantity">
          <span>Qty:</span>&nbsp;&nbsp;
          <span className="cartProduct__quantityItem"> {quantity} </span>
        </div>

        <button
          className="btn"
          onClick={() => dispatch(removeFromBasket({ id }))}
        >
          Remove from basket
        </button>
      </div>
    </article>
  );
});

export default CartProduct;
