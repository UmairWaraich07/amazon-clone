import React, { useEffect, useState } from "react";
import "./CategoryPage.css";
import axios from "../../axios";
import Product from "../Product/Product";

const CategoryPage = ({ fetchUrl, img }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(fetchUrl)
        .catch((error) => alert(error.message));
      setProducts(response.data);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="categoryPage">
      <div className="categoryPage__imageDiv">
        <img src={img} alt="" className="categoryPage__image" />
      </div>
      {/* <div className="fade"></div> */}

      <div className="categoryPage__productList">
        {products.map(({ id, title, image, price, rating: { rate } }) => (
          <Product
            key={id}
            id={id}
            desc={title}
            image={image}
            price={price}
            rating={Math.ceil(rate)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
