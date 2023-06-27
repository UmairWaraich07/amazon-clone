import "./Home.css";
import Product from "../Product/Product";
import ProductSection from "../ProductSection/ProductSection";
import { productSectionData } from "../../storeData";
import axios from "../../axios";
import requests from "../../requests";
import Ad from "../Ad/Ad";
import { useEffect, useState } from "react";

const Home = () => {
  const [rowOneData, setRowOneData] = useState([]);
  const [rowTwoData, setRowTwoData] = useState([]);
  const [rowThreeData, setRowThreeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${requests.fetchJewelery}?limit=2`);
      setRowOneData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${requests.fetchWomenClothing}?limit=3`
      );
      setRowTwoData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${requests.fetchProducts}/14`);
      setRowThreeData([response.data]);
    };
    fetchData();
  }, []);

  const heroImage = ["beauty.jpg", "books.jpg", "gaming.jpg", "kitchen.jpg"];

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={`/images/${
            heroImage[Math.floor(Math.random() * heroImage.length)]
          }`}
          alt="Shop Trending Books"
          className="home__image"
        />

        <div className="home__productSection">
          {productSectionData.map(({ id, title, image, action, category }) => (
            <ProductSection
              key={category}
              id={id}
              title={title}
              img={image}
              action={action}
              category={category}
            />
          ))}
        </div>

        <div className="home__row home__rowOne">
          {rowOneData.map(({ id, title, image, price, rating: { rate } }) => (
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

        <div>
          <Ad
            img="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/BROWSE/RETURNS_BANNER/DT_Browse_FreeReturns._CB1687289065_.jpg"
            category="womensclothing"
          />
        </div>

        <div className="home__row home__rowTwo">
          {rowTwoData.map(({ id, title, image, price, rating: { rate } }) => (
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

        <div className="home__row home__rowThree">
          {rowThreeData.map(({ id, title, image, price, rating: { rate } }) => (
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
    </div>
  );
};

export default Home;
