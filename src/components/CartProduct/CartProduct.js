import React, { forwardRef } from "react";
import "./CartProduct.css";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeFromBasket,
} from "../../features/basketSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartProduct = forwardRef(({ id, title, price, quantity, image }, ref) => {
  const dispatch = useDispatch();

  return (
    <article className="cartProduct" ref={ref}>
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
      <img src={image} alt="" className="cartProduct__img" />

      <div className="cartProduct__info">
        <h4 className="cartProduct__title">{title}</h4>
        <h4 className="cartProduct__price"> ${price} </h4>
        <p className="cartProduct__stock">In Stock</p>

        <div className="cartProduct__quantity">
          <span>
            <RemoveIcon
              className="cartProduct__icon"
              onClick={() => dispatch(decrement(id))}
            />
          </span>
          <div className="cartProduct__quantityItem">
            <span> Qty:</span>&nbsp;&nbsp;
            <span> {quantity} </span>
          </div>
          <span>
            <AddIcon
              className="cartProduct__icon"
              onClick={() => dispatch(increment(id))}
            />
          </span>
        </div>

        <button
          className="btn"
          onClick={() => {
            dispatch(removeFromBasket({ id }));
            toast("Item removed from cart 🧺", {
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
          Remove from basket
        </button>
      </div>
    </article>
  );
});

export default CartProduct;
