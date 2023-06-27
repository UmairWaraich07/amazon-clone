import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../features/basketSlice";

const Product = ({ id, desc, image, price, rating }) => {
  const dispatch = useDispatch();

  const { basketData } = useSelector((store) => store.basket);

  return (
    <article className="product">
      <div className="product__info">
        <div className="product__title">{desc}</div>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__img" />

      <button
        className="btn"
        onClick={() =>
          dispatch(
            addToBasket({
              id,
              desc,
              image,
              price,
              rating,
              quantity: 1,
            })
          )
        }
      >
        Add to basket
      </button>
    </article>
  );
};

export default Product;
