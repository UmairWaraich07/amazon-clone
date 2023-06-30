import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../features/basketSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ id, desc, image, price, rating }) => {
  const dispatch = useDispatch();

  // const { basketData } = useSelector((store) => store.basket);

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
        onClick={() => {
          dispatch(
            addToBasket({
              id,
              desc,
              image,
              price,
              rating,
              quantity: 1,
            })
          );
          toast("🧺 Item added to cart", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
      >
        Add to basket
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </article>
  );
};

export default Product;
