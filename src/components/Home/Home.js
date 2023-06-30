import "./Home.css";
import Product from "../Product/Product";
import ProductSection from "../ProductSection/ProductSection";
import {
  productSectionData,
  rowOneData,
  rowThreeData,
  rowTwoData,
} from "../../storeData";
import Ad from "../Ad/Ad";
import SignInPopup from "../SignInPopup/SignInPopup";
import { useSelector } from "react-redux";

const Home = () => {
  // const [rowOneData, setRowOneData] = useState([]);
  // const [rowTwoData, setRowTwoData] = useState([]);
  // const [rowThreeData, setRowThreeData] = useState([]);
  const { user } = useSelector((store) => store.user);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`${requests.fetchJewelery}?limit=2`);
  //     setRowOneData(response.data);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `${requests.fetchWomenClothing}?limit=3`
  //     );
  //     setRowTwoData(response.data);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`${requests.fetchProducts}/14`);
  //     setRowThreeData([response.data]);
  //   };
  //   fetchData();
  // }, []);

  const heroImage = ["beauty.jpg", "books.jpg", "gaming.jpg", "kitchen.jpg"];

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={`/images/gaming.jpg`}
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
          {rowOneData.map(({ id, desc, image, price, rating }) => (
            <Product
              key={id}
              id={id}
              desc={desc}
              image={image}
              price={price}
              rating={rating}
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
          {rowTwoData.map(({ id, desc, image, price, rating }) => (
            <Product
              key={id}
              id={id}
              desc={desc}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
        </div>

        <div className="home__row home__rowThree">
          {rowThreeData.map(({ id, desc, image, price, rating }) => (
            <Product
              key={id}
              id={id}
              desc={desc}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
        </div>

        {!user && (
          <section>
            <SignInPopup message="See personalized recommendations" />
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
