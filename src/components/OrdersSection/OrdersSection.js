import React from "react";
import "./OrdersSection.css";
import moment from "moment/moment";
import { calculateTotalItems } from "../../Pages/ShoppingCart/ShoppingCart";

const OrdersSection = ({ order: { amount, id, basket, created } }) => {
  return (
    <div className="orders__section">
      <div className="orders__sectionHeader">
        <div className="orders__sectionHeaderLeft">
          <div>
            <h4>Order Placed</h4>
            <p> {moment.unix(created).format("Do MMMM YYYY")} </p>
          </div>
          <div>
            <h4>Total</h4>
            <p>${amount} - Next Day Delivery</p>
          </div>
        </div>
        <div className="orders__sectionHeaderRight">
          <p>{id}</p>
          <h4> {calculateTotalItems(basket)} items</h4>
        </div>
      </div>

      <div className="orders__sectionImages">
        {basket?.map((item) => (
          <img key={item?.id} src={item?.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default OrdersSection;
