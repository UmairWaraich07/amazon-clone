import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logIn } from "../../features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          logIn({
            id: userAuth?.user?.uid,
            email: userAuth?.user?.email,
            name: userAuth?.user?.displayName,
          })
        );
        navigate(-1, { replace: true });
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
          <h1>Sign in</h1>

          <form className="login__form">
            <h4>Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button className="btn" type="submit" onClick={signIn}>
              Continue
            </button>
          </form>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>

        <div className="login__registerAccount">
          <p>New to Amazon?</p>
          <button onClick={() => navigate("/signup")}>
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
