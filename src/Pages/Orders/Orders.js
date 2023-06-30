import React, { useEffect, useState } from "react";
import "./Orders.css";
import OrdersSection from "../../components/OrdersSection/OrdersSection";
import db from "../../firebase";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector((store) => store.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.id)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  // console.log(orders);

  return (
    <div className="orders__wrapper">
      <div className="orders">
        <h1 className="orders__title">My Orders</h1>
        {!user ? (
          <div>Please sign in to see your orders ⬆️.</div>
        ) : (
          <div className="orders__number"> {orders.length} orders</div>
        )}
        <div className="orders__container">
          {orders?.map((order) => (
            <OrdersSection key={order.id} order={order.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
