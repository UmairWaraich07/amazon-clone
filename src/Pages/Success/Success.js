import React from "react";
import "./Success.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success">
      <div className="success__title">
        <span>
          <CheckCircleOutlineOutlinedIcon />
        </span>{" "}
        <h2> Thank you, your order has been confirmed! </h2>
      </div>
      <p className="success__subtitle">
        Thank you for shopping with us. W'll send a confirmation once your item
        has been shipped. If you would like to check the status of your order(s)
        please press the link below.
      </p>
      <button className="btn" onClick={() => navigate("/orders")}>
        Go to my orders
      </button>
    </div>
  );
};

export default Success;
