import "./Header.css";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { AmazonMenu } from "../../storeData";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { closeSidebar, openSidebar } from "../../features/sidebarSlice";
import Modal from "../../Pages/Modal/Modal";
import { openModal } from "../../features/modalSlice";

const Header = () => {
  const navigate = useNavigate();
  const { basketData } = useSelector((store) => store.basket);
  const { isOpen } = useSelector((store) => store.headerSidebar);
  const { user } = useSelector((store) => store.user);
  const { isModalOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  return (
    <header className="header" id="nav">
      {isModalOpen && <Modal />}

      <aside
        className="header__sidebar"
        style={{
          transform: `${isOpen ? "translateX(0)" : "translateX(-100%)"}`,
        }}
      >
        <div className="header__sidebarClose">
          <CloseIcon onClick={() => dispatch(closeSidebar())} />
        </div>
        <Link
          to={`${user ? "" : "/signin"}`}
          className="header__signIn"
          onClick={() => `${!user && dispatch(closeSidebar())}`}
        >
          Hello, {user ? `${user?.name}` : "Sign In"}
        </Link>
        <div className="header__sidebarMenu">
          {AmazonMenu.map(({ title, link }) => (
            <div className="header__sidebarItem" key={link}>
              <Link
                className="header__sidebarLink"
                to={`/${link}`}
                onClick={() => dispatch(closeSidebar())}
              >
                {" "}
                {title}{" "}
              </Link>
            </div>
          ))}
          <p
            className="header__sidebarSignOut"
            onClick={() => dispatch(openModal())}
          >
            Sign Out
          </p>
        </div>
      </aside>
      <div className="header__wrapper">
        <div className="header__logo">
          <div className="header__menu" onClick={() => dispatch(openSidebar())}>
            <MenuIcon />
          </div>
          <img
            src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            onClick={() => navigate("/")}
          />
          <div className="header__location" onClick={() => navigate("/orders")}>
            <FmdGoodOutlinedIcon />
            <div>
              <p className="header__topLine">Deliver to</p>
              <h4 className="header__downLine">Pakistan</h4>
            </div>
          </div>
        </div>

        <div className="header__search">
          <HeaderSearch />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <Link
              to={`${user ? "" : "/signin"}`}
              onClick={() => `${user && dispatch(openModal())}`}
              className="header__linkToSign"
            >
              <p className="header__topLine">
                Hello,{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {user ? `${user.name}` : "Guest"}
                </span>
              </p>
              <h4 className="header__downLine">
                {" "}
                {user ? "Sign Out" : "Sign In"}{" "}
              </h4>
            </Link>
          </div>
          <div className="header__option" onClick={() => navigate("/orders")}>
            <p className="header__topLine">Returns</p>
            <h4 className="header__downLine">& Orders</h4>
          </div>
        </div>

        <div className="header__cart" onClick={() => navigate("/shoppingcart")}>
          <ShoppingBasketIcon />
          <span
            className="header__cartItems"
            style={{ color: "rgb(227, 168, 58)", fontWeight: "500" }}
          >
            {basketData.length}
          </span>
        </div>
      </div>

      <div className="header__navbar">
        <div className="header__navbarLeft">
          <div
            className="header__navbarIcon"
            onClick={() => dispatch(openSidebar())}
          >
            <MenuIcon /> <span>All</span>
          </div>
          {AmazonMenu.map(({ title, link }) => (
            <div className="header__navbarItem" key={link}>
              <h4 onClick={() => navigate(`/${link}`)}> {title} </h4>
            </div>
          ))}
        </div>
        <div className="header__navbarRight">
          <h4 onClick={() => navigate("/electronics")}>
            Shop deals in Electronics
          </h4>
        </div>
      </div>

      <div className="header__mobile">
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;
