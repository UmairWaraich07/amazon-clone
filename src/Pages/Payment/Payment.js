import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useNavigate } from "react-router-dom";
import {
  calculateTotalBill,
  calculateTotalItems,
} from "../ShoppingCart/ShoppingCart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../stripeAxios";
import { emptyBasket } from "../../features/basketSlice";
import SignInPopup from "../../components/SignInPopup/SignInPopup";
import db from "../../firebase";

const Payment = () => {
  const { basketData } = useSelector((store) => store.basket);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge the customer
    if (basketData.length > 0) {
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          // Stripe expects the total in currencies subunit
          url: `/payments/create?total=${calculateTotalBill(basketData) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }
  }, [basketData]);

  console.log("The secret is ===> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        if (paymentIntent) {
          console.log(paymentIntent);

          db.collection("users")
            .doc(user?.id)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              id: paymentIntent.id,
              basket: basketData,
              amount: paymentIntent.amount / 100,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);
          dispatch(emptyBasket());
          navigate("/success", { replace: true });
        } else {
          setSucceeded(false);
          setProcessing(false);
          setError("Something went wrong. Payment failed!");
        }
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      {!user ? (
        <SignInPopup message="You need to sign In before placing the order!" />
      ) : (
        <>
          <header className="payment__header">
            <h2>
              Checkout ({" "}
              <span
                style={{ color: "#0066c0", cursor: "pointer" }}
                onClick={() => navigate("/shoppingcart")}
              >
                {calculateTotalItems(basketData)}&nbsp; items
              </span>
              )
            </h2>
          </header>
          <div className="payment__body">
            <div className="payment__div">
              <h3 className="payment__divTitle">Delivery Address</h3>
              <div className="payment__divContent payment__deliveryAddress">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Bahawalpur, Pakistan</p>
              </div>
            </div>
            <div className="payment__items">
              <h3 className="payment__itemsTitle">Review items & Delivery</h3>
              <div className=" payment__itemsDetails">
                {basketData.map(({ desc, image, price, quantity, id }) => (
                  <CartProduct
                    key={id}
                    id={id}
                    title={desc}
                    image={image}
                    price={price}
                    quantity={quantity}
                  />
                ))}
              </div>
            </div>
            <div className="payment__div">
              <h3 className="payment__divTitle">Payment Method</h3>
              <div className="payment__divContent payment__cardDetails">
                <h4>Card Details</h4>
                <form action="" onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="payment__priceContainer">
                    <p className="shoppingCart__total">
                      Subtotal ({" "}
                      <span className="shoppingCart__totalItem">
                        {" "}
                        {calculateTotalItems(basketData)}{" "}
                      </span>{" "}
                      items ):{" "}
                      <span className="shoppingCart__totalBill">
                        $ {calculateTotalBill(basketData)}{" "}
                      </span>
                    </p>
                    <button
                      disabled={processing || disabled || succeeded}
                      className="btn"
                    >
                      <span>
                        {processing ? (
                          <p>Processing... </p>
                        ) : (
                          "Place your order"
                        )}
                      </span>
                    </button>
                  </div>
                  {/* Errors */}
                  {error && <div className="payment__error">{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
