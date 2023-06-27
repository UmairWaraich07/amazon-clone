import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ad.css";

const Ad = ({ img, category }) => {
  const navigate = useNavigate();

  return (
    <div className="ad">
      <img
        src={img}
        alt=""
        data-link={category}
        className="ad__img"
        onClick={(e) =>
          navigate(`/${e.target.getAttribute("data-link")}`, { replace: true })
        }
      />
    </div>
  );
};

export default Ad;
