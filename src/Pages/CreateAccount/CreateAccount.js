import React, { useState } from "react";
import "../Login/Login.css";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/userSlice";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() =>
            dispatch(
              logIn({
                email: userAuth?.user.email,
                id: userAuth?.user.uid,
                name: userAuth?.user.displayName,
              })
            )
          );
        navigate("/", { replace: true });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />

        <div className="login__content">
          <h1>Create account</h1>

          <form className="login__form" onSubmit={signUp}>
            <h4>Your name</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              required
            />
            <h4>Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button className="btn" type="submit">
              Continue
            </button>
          </form>

          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>

          <p className="createAccount__signin">
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>Sign in</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
