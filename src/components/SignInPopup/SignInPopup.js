import React from "react";
import "./SignInPopup.css";
import { useNavigate } from "react-router-dom";

const SignInPopup = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="signInPopup">
      <p className="signInPopup__title"> {message} </p>
      <button className="btn" onClick={() => navigate("/signin")}>
        Sign In
      </button>
      <p className="signInPopup__new">
        New customer?{" "}
        <span onClick={() => navigate("/signup")}>Start here.</span>
      </p>
    </div>
  );
};

export default SignInPopup;
