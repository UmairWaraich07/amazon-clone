import React from "react";
import "./ShoppingCart.css";
import CartProduct from "../../components/CartProduct/CartProduct";
import Ad from "../../components/Ad/Ad";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { basketData } = useSelector((store) => store.basket);

  const calculateTotalBill = () => {
    return basketData
      .map((item) => item.price * item.quantity)
      .reduce((x, y) => x + y, 0)
      .toFixed(2);
  };

  const calculateTotalItems = () => {
    return basketData.map((item) => item.quantity).reduce((x, y) => x + y, 0);
  };
  return (
    <section className="shoppingCart">
      <div>
        <Ad
          img="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/BROWSE/RETURNS_BANNER/DT_Browse_FreeReturns._CB1687289065_.jpg"
          category="womensclothing"
        />
      </div>
      <div className="shoppingCart__container">
        <div className="shoppingCart__items">
          <h1 className="shoppingCart__title">
            {" "}
            {basketData.length > 0
              ? "Shopping Basket"
              : "Your Amazon Basket is empty."}{" "}
          </h1>
          <FlipMove>
            {basketData.length === 0 ? (
              <div className="shoppingCart__empty">
                <button
                  className="btn shoppingCart__emptyBtn"
                  onClick={() => navigate("/", { replace: true })}
                >
                  Explore Deals
                </button>
              </div>
            ) : (
              basketData.map(({ desc, image, price, quantity, id }) => (
                <CartProduct
                  key={id}
                  id={id}
                  title={desc}
                  image={image}
                  price={price}
                  quantity={quantity}
                />
              ))
            )}
          </FlipMove>
          <div className="shoppingCart__billContainer">
            <p className="shoppingCart__total">
              Subtotal ({" "}
              <span className="shoppingCart__totalItem">
                {" "}
                {calculateTotalItems()}{" "}
              </span>{" "}
              items ):{" "}
              <span className="shoppingCart__totalBill">
                ${calculateTotalBill()}
              </span>
            </p>
          </div>
        </div>

        <div className="shoppingCart__totalDiv">
          <p className="shoppingCart__total">
            Subtotal ({" "}
            <span className="shoppingCart__totalItem">
              {" "}
              {calculateTotalItems()}{" "}
            </span>{" "}
            items ):{" "}
            <span className="shoppingCart__totalBill">
              $ {calculateTotalBill()}{" "}
            </span>
          </p>
          <button className="btn">Proceed to checkout</button>
        </div>
      </div>

      <div className="shoppingCart__ad">
        <Ad
          img="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/BROWSE/L0/DESKTOP/image_11._CB1686251228_.jpg"
          category="mensclothing"
        />
      </div>
    </section>
  );
};

export default ShoppingCart;
