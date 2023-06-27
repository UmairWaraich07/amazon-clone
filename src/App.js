import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import requests from "./requests";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      //user is logged In
      dispatch(
        logIn({
          email: userAuth.email,
          id: userAuth.uid,
          name: userAuth.displayName,
        })
      );
      if (userAuth) {
      } else {
        //user is logged out
        dispatch(logOut());
        auth.signOut();
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/electronics"
            element={
              <>
                <Header />
                <CategoryPage
                  fetchUrl={requests.fetchElectronics}
                  img="https://images-na.ssl-images-amazon.com/images/G/01/consumerelectronics/CAC/1435129_us_home_entertainment_7_1500x440.jpg"
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/mensclothing"
            element={
              <>
                <Header />
                <CategoryPage
                  fetchUrl={requests.fetchMenClothing}
                  img="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/3/AmazonStores/ATVPDKIKX0DER/18550bbab17109e8cf39a2eb27edadb7.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/womensclothing"
            element={
              <>
                <Header />
                <CategoryPage
                  fetchUrl={requests.fetchWomenClothing}
                  img="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/SUM23/BROWSE/L0/DESKTOP/DT_Programs_Ingress._CB1686253586_.gif"
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/jewellery"
            element={
              <>
                <Header />
                <CategoryPage
                  fetchUrl={requests.fetchJewelery}
                  img="https://images-na.ssl-images-amazon.com/images/G/01/SBP/2020/Lemonade_Refresh/Categories/SB_LS20Refresh_category_HERO_Jewelry_EN_DESKTOP.jpg"
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/shoppingcart"
            element={
              <>
                <Header />
                <ShoppingCart />
                <Footer />
              </>
            }
          />

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
