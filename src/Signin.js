import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { userArr, loggedIn, setLoggedIn } = useContext(CartContext);

  const signin = () => {
    if (email == "" || password == "") {
      setError("Fields can't be Empty!");
    } else {
      const result = userArr.find((item) => {
       return item.email == email && item.password == password;
      });
      if (result) {
        setLoggedIn(true);
        setError("");
        navigate("/");
      } else {
        setError("Username is Invalid!");
      }
    }
  };
  console.log(loggedIn);

  return (
    <div className="signInCenter">
      <div className="signin">
        <h1>Sign In</h1>
        <p id="error">{error}</p>
        <div className="entry">
          <p>Your Email: </p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="entry">
          <p>Your Password:</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className="newUser">
          New User <Link to="/signup">Sign Up</Link>
        </p>

        <button onClick={signin}>Sign In</button>
      </div>
    </div>
  );
};

export default Signin;
