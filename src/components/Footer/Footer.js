import React from "react";
import "./Footer.css";
import { helpYou, knowUs, makeMoney, paymentProducts } from "../../footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__toTop">
        <a href="#">Back to Top</a>
      </div>
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__links">
            <h4>Get to Know Us</h4>
            {knowUs.map((data, index) => (
              <p key={index}> {data} </p>
            ))}
          </div>
          <div className="footer__links">
            <h4>Make Money with Us</h4>
            {makeMoney.map((data, index) => (
              <p key={index}> {data} </p>
            ))}
          </div>
          <div className="footer__links">
            <h4>Amazon Payment Products</h4>
            {paymentProducts.map((data, index) => (
              <p key={index}> {data} </p>
            ))}
          </div>
          <div className="footer__links">
            <h4>Let Us Help You</h4>
            {helpYou.map((data, index) => (
              <p key={index}> {data} </p>
            ))}
          </div>
        </div>

        <div className="footer__info">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            className="footer__logo"
          />
          <p>
            &copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
            affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
