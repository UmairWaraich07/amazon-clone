import React from "react";
import "./ProductSection.css";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ title, img, action, category }) => {
  const navigate = useNavigate();
  return (
    <div className="productSection">
      <h2 className="productSection__title">{title}</h2>
      <img
        src={img}
        alt=""
        className="productSection__img"
        data-tag={category}
        onClick={(e) => navigate(`${e.target.getAttribute("data-tag")}`)}
      />
      <p
        className="productSection__action"
        data-tag={category}
        onClick={(e) => navigate(`${e.target.getAttribute("data-tag")}`)}
      >
        {action}
      </p>
    </div>
  );
};

export default ProductSection;
